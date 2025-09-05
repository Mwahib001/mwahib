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

export const formSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email")
    .refine(
      (email) => email.endsWith("@gmail.com"),
      "Only Gmail addresses are allowed"
    ),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

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
      toast.success("Your message has been sent successfully!");
      form.reset();
    } catch (error) {
      console.error("Email sending error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Get in Touch</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px] hover:shadow-primary/40"
              type="submit"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
