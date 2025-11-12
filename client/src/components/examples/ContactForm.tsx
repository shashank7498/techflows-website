import ContactForm from '../ContactForm';
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";

export default function ContactFormExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <ContactForm />
    </QueryClientProvider>
  );
}
