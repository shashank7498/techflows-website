import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { insertContactSubmissionSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Clock, Send, Calendar } from "lucide-react";

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: any) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: any) => {
    submitMutation.mutate(data);
  };

  return (
    <section className="min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left side - Dark with info */}
        <div className="bg-black text-white p-8 lg:p-16 flex flex-col justify-center">
          <div className="max-w-lg">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-contact-heading">
              Let's Build the Future
            </h2>
            <p className="text-xl text-white/70 mb-12" data-testid="text-contact-description">
              Get your engineering team deployed in 48 hours
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Calendar className="h-6 w-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Schedule a Call</h3>
                  <p className="text-sm text-white/70 mb-3">
                    Book a 30-minute discovery call to discuss your project
                  </p>
                  <a 
                    href="https://calendly.com/shashankchauhan7498" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm underline hover:text-white/70 transition-colors" 
                    data-testid="link-calendly"
                  >
                    Open Calendly →
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p className="text-sm text-white/70 mb-2">
                    Prefer email? Drop us a line
                  </p>
                  <a href="mailto:shashank@techflows.co" className="text-sm underline hover:text-white/70 transition-colors" data-testid="link-email-direct">
                    shashank@techflows.co
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">48-Hour Guarantee</h3>
                  <p className="text-sm text-white/70">
                    Your engineering team deployed and ready to start in just 48 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - White with form */}
        <div className="bg-white p-8 lg:p-16 flex flex-col justify-center">
          <div className="max-w-lg mx-auto w-full">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} data-testid="input-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Acme Inc." {...field} data-testid="input-company" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@acme.com" {...field} data-testid="input-email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project needs - AI/ML, full-stack development, cloud infrastructure, or complete product teams..."
                          className="min-h-32"
                          {...field}
                          data-testid="input-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full px-8"
                  disabled={submitMutation.isPending}
                  data-testid="button-submit-contact"
                >
                  {submitMutation.isPending ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
