"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";


export function ContactSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isEmailJSLoaded, setIsEmailJSLoaded] = useState(false);

  // Initialize EmailJS once the component is mounted
  useEffect(() => {
    const initEmailJS = async () => {
      try {
        await emailjs.init(process.env.NEXT_PUBLIC_PUBLIC_KEY ?? "");
        setIsEmailJSLoaded(true);
      } catch (error) {
        console.error("Error initializing EmailJS:", error);
        toast.error("Failed to initialize email service");
      }
    };

    initEmailJS();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!isEmailJSLoaded) {
      toast.error("Email service not ready. Please try again.");
      return;
    }

    setIsSending(true);

    try {
      // Prepare parameters for the email template
      const templateParams = {
        from_name: email,
        to_name: "Prashant",
        from_email: email,
        message: message,
        subject: "New Portfolio Contact Message",
        reply_to: email,
        sent_at: new Date().toLocaleString(),
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "",
        templateParams
      );

      if (response.status === 200) {
        // Clear form after successful submission
        setEmail("");
        setMessage("");

        toast.success("Message sent successfully!", {
          description: "Thank you for reaching out. I'll get back to you soon!",
          duration: 5000,
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message", {
        description: "Please try again later.",
        duration: 5000,
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-background/50">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 mix-blend-normal" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,rgba(0,0,0,0),rgba(0,0,0,0.8))]" />
      </div>

      <div className="container relative mx-auto px-4" id="contact">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <motion.span
              className="text-primary text-sm font-medium mb-3 block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              A Small message from
            </motion.span>
            <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80 mb-4">
              Prashant
            </h2>
            <p className="text-lg text-gray-400">
              Thank you for taking the time to explore my portfolio! I'd be
              happy to connect if you have a hiring opportunity to discuss or an
              exciting collaboration in mind. Let's create something amazing
              together!
            </p>
            <div className="mt-4 flex justify-center">
              <div className="w-32 h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40 rounded-full" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white/5 border-white/10 focus:border-primary/50"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="min-h-[150px] bg-white/5 border-white/10 focus:border-primary/50"
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSending}>
                  <Send className="mr-2 h-4 w-4" />
                  {isSending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <div className="group bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
                <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  <a
                    target="_blank"
                    href="mailto:vishwakarma0216@gmail.com"
                    className="flex items-center gap-4 text-gray-400 hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span>vishwakarma0216@gmail.com</span>
                  </a>
                  <Link
                    href="https://www.linkedin.com/in/prashant-vishwakarma-b457a2210/"
                    target="_blank"
                    className="flex items-center gap-4 text-gray-400 hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>linkedin.com/in/prashant-vish</span>
                  </Link>
                  <Link
                    href="https://github.com/prashant-vish"
                    target="_blank"
                    className="flex items-center gap-4 text-gray-400 hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span>github.com/prashant-vish</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
