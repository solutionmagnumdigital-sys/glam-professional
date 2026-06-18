import ContactHero from "@/components/contact/ContactHero";
import LuxuryContactCards from "@/components/contact/LuxuryContactCards";
import PremiumBookingForm from "@/components/contact/PremiumBookingForm";
import StudioLocation from "@/components/contact/StudioLocation";
import InstagramLuxuryFeed from "@/components/contact/InstagramLuxuryFeed";

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-[#050505]">
      <ContactHero />
      <LuxuryContactCards />
      <PremiumBookingForm />
      <StudioLocation />
      <InstagramLuxuryFeed />
    </main>
  );
}