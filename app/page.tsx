import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import AboutPreview from "@/components/home/AboutPreview";
import Testimonials from "@/components/home/Testimonials";
import ContactBanner from "@/components/home/ContactBanner";
import TrustStrip from "@/components/home/TrustStrip";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import AcademyHighlight from "@/components/home/AcademyHighlight";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import GoogleReviews from "@/components/home/GoogleReviews";


export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustStrip/>
      <AboutPreview/>
      <Services />
      <PortfolioPreview/>
            <AcademyHighlight/>

     
      <Testimonials />
      <GalleryGrid/>
      <WhyChooseUs/>

      <ContactBanner />
      <GoogleReviews/>
    </main>
  );
}