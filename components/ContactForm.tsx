"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

// Success Modal Component
function SuccessModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-background/95 backdrop-blur-md rounded-2xl shadow-2xl border border-border/50 p-8 max-w-md w-full mx-4 transform animate-in fade-in-0 zoom-in-95 duration-300">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-center text-foreground mb-4">
          Message Sent Successfully!
        </h3>

        {/* Message */}
        <p className="text-muted-foreground text-center mb-8 leading-relaxed">
          Thank you for reaching out! I've received your message and will get
          back to you as soon as possible.
        </p>

        {/* Close Button */}
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px] hover:shadow-primary/40"
          >
            Great!
          </button>
        </div>
      </div>
    </div>
  );
}

export const formSchema = z.object({
  email: z
    .string()
    .min(5, "Email must be at least 5 characters")
    .max(100, "Email must be less than 100 characters")
    .refine(
      (email) => email.includes("@") && email.includes("."),
      "Email must contain @ and . symbols"
    )
    .refine((email) => {
      const parts = email.split("@");
      return (
        parts.length === 2 && parts[0].length > 0 && parts[1].includes(".")
      );
    }, "Please enter a valid email address"),
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(20, "Name must be less than 20 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject must be less than 100 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);
      setIsButtonDisabled(true);

      const emailjs = (await import("@emailjs/browser")).default;

      const response = await emailjs.send(
        "service_4vf1e19",
        "template_52rw469",
        {
          to_name: "Admin", // whoever should receive it
          from_name: values.name, // taken from form
          reply_to: values.email, // taken from form
          subject: values.subject,
          message: values.message,
        },
        "rSwpeP7c4HovMdNXb"
      );

      console.log("EmailJS response:", response);

      // Show success modal
      setShowSuccessModal(true);
      form.reset();

      // Keep button disabled for 3 seconds after success
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 3000);
    } catch (error) {
      console.error("Email sending error:", error);
      toast.error("Failed to send message. Please try again later.");
      setIsButtonDisabled(false);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
        Send me a message
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Form fields remain the same */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground/90">Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your name"
                      required
                      className="bg-card/50 border-border/50 text-foreground placeholder-muted-foreground/60 focus:border-primary focus:ring-1 focus:ring-primary/50"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-destructive" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground/90">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Your email"
                      required
                      className="bg-card/50 border-border/50 text-foreground placeholder-muted-foreground/60 focus:border-primary focus:ring-1 focus:ring-primary/50"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-destructive" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/90">Subject</FormLabel>
                <FormControl>
                  <Input
                    placeholder="What's this about?"
                    required
                    className="bg-card/50 border-border/50 text-foreground placeholder-muted-foreground/60 focus:border-primary focus:ring-1 focus:ring-primary/50"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-destructive" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/90">Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Your message"
                    required
                    className="min-h-[150px] bg-card/50 border-border/50 text-foreground placeholder-muted-foreground/60 focus:border-primary focus:ring-1 focus:ring-primary/50"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-destructive" />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <Button
              disabled={isLoading || isButtonDisabled}
              className={`w-full font-medium py-3 px-6 rounded-lg transition-all duration-300 ${
                isLoading
                  ? "bg-gradient-to-r from-primary/70 to-accent/70 cursor-not-allowed relative overflow-hidden"
                  : isButtonDisabled
                  ? "bg-gradient-to-r from-green-500 to-green-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 hover:shadow-[0_0_15px] hover:shadow-primary/40"
              } text-primary-foreground`}
              type="submit"
            >
              {/* Shimmer effect for loading state */}
              {isLoading && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
              )}

              {/* Button text */}
              <span className="relative z-10">
                {isLoading
                  ? "Sending..."
                  : isButtonDisabled
                  ? "Message Sent!"
                  : "Send Message"}
              </span>
            </Button>
          </div>
        </form>
      </Form>

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />

      {/* Add shimmer animation CSS */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </div>
  );
}
