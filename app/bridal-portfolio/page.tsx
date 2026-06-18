import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioMasonry from "@/components/portfolio/PortfolioMasonry";
import BeforeAfterReveal from "@/components/portfolio/BeforeAfterReveal";
import LuxuryTestimonialsReel from "@/components/portfolio/LuxuryTestimonialsReel";
import LuxuryBookingCTA from "@/components/portfolio/LuxuryBookingCTA";

export default function PortfolioPage() {
  return (

        <main className="overflow-hidden bg-[#050505]">

        <PortfolioHero />
        <PortfolioMasonry />
          <BeforeAfterReveal />
            <LuxuryTestimonialsReel />
            <LuxuryBookingCTA />



          </main>

    
  );
}