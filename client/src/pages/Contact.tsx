import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
