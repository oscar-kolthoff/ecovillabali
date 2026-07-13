import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

interface ContactProps {
  villa?: 'sungai' | 'kailash';
  /** Optional image shown below the intro copy, in the left column next to the form. */
  image?: { src: string; alt: string };
  /** Render the heading as the page's <h1> (use only when this is the page's sole heading, e.g. /inquire-now). */
  asH1?: boolean;
}

export default function Contact({ villa = 'sungai', image, asH1 = false }: ContactProps) {
  const Heading = asH1 ? 'h1' : 'h2';
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          villa: villa,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || "Failed to send inquiry");
      }

      toast.success("Inquiry sent successfully! We'll be in touch soon.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast.error("Failed to send inquiry. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }}>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Text Content (+ image). Order 2 on mobile so the form shows first, then the photo below it; back to left column on desktop. */}
          <div className="space-y-8 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-secondary font-medium tracking-widest uppercase text-sm">Inquire Now</span>
              <Heading className="font-serif text-4xl md:text-5xl font-bold mt-3 mb-6">
                Request Pricing & Availability
              </Heading>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
                Interested in Villa Sungai or Villa Kailash? Leave your details and I'll personally share availability, more information, and arrange a viewing if desired.
              </p>
              {image && (
                <img
                  src={image.src}
                  alt={image.alt}
                  width={640}
                  height={480}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto rounded-2xl"
                />
              )}
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 bg-white rounded-2xl p-8 shadow-2xl text-foreground"
          >
            <h3 className="font-serif text-2xl font-bold text-primary mb-6">Request a Viewing or More Information</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="bg-muted/30 border-border" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-muted/30 border-border" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">Phone (WhatsApp)</label>
                <Input 
                  id="phone" 
                  placeholder="+62..." 
                  className="bg-muted/30 border-border" 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="I'm interested in scheduling a viewing..." 
                  className="min-h-[120px] bg-muted/30 border-border" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 text-lg font-serif bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
