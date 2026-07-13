import { z } from "zod";
import { publicProcedure, router } from "../_core/trpc";
import { createInquiry } from "../db";
import { notifyOwner } from "../_core/notification";

export const contactRouter = router({
  sendInquiry: publicProcedure
    .input(
      z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Invalid email address"),
        phone: z.string().optional(),
        message: z.string().min(1, "Message is required"),
        villa: z.enum(["sungai", "kailash"]).optional().default("sungai"),
      })
    )
    .mutation(async ({ input }) => {
      try {
        // Save inquiry to database
        await createInquiry({
          name: input.name,
          email: input.email,
          phone: input.phone || null,
          message: input.message,
        });

        // Notify owner about new inquiry
        const villaName = input.villa === "kailash" ? "Villa Kailash" : "Villa Sungai";
        await notifyOwner({
          title: `New ${villaName} Inquiry`,
          content: `New inquiry from ${input.name} (${input.email})\n\nMessage: ${input.message}${input.phone ? `\n\nPhone: ${input.phone}` : ""}`,
        });

        return {
          success: true,
          message: "Inquiry sent successfully",
        };
      } catch (error) {
        console.error("Failed to send inquiry:", error);
        throw new Error("Failed to send inquiry. Please try again later.");
      }
    }),
});
