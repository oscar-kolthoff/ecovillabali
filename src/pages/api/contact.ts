import type { APIRoute } from "astro";
import { z } from "zod";
import { createInquiry } from "@/lib/db";
import { notifyOwner } from "@/lib/notification";

export const prerender = false;

const inquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(1, "Message is required"),
  villa: z.enum(["sungai", "kailash"]).optional().default("sungai"),
});

export const POST: APIRoute = async ({ request }) => {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), { status: 400 });
  }

  const parsed = inquirySchema.safeParse(body);
  if (!parsed.success) {
    return new Response(JSON.stringify({ error: parsed.error.issues[0]?.message ?? "Invalid input" }), {
      status: 400,
    });
  }

  const input = parsed.data;

  try {
    await createInquiry({
      name: input.name,
      email: input.email,
      phone: input.phone || null,
      message: input.message,
    });

    const villaName = input.villa === "kailash" ? "Villa Kailash" : "Villa Sungai";
    await notifyOwner({
      title: `New ${villaName} Inquiry`,
      content: `New inquiry from ${input.name} (${input.email})\n\nMessage: ${input.message}${
        input.phone ? `\n\nPhone: ${input.phone}` : ""
      }`,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to send inquiry:", error);
    return new Response(JSON.stringify({ error: "Failed to send inquiry. Please try again later." }), {
      status: 500,
    });
  }
};
