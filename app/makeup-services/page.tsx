import ServicesHero from "@/components/services/ServicesHero";
import LuxuryServicesGrid from "@/components/services/LuxuryServicesGrid";
import PremiumProcess from "@/components/services/PremiumProcess";
import SignaturePackages from "@/components/services/SignaturePackages";
import LuxuryTransformation from "@/components/services/LuxuryTransformation";
import ProductsBrands from "@/components/services/ProductsBrands";
import ServiceTestimonials from "@/components/services/ServiceTestimonials";
import FAQServices from "@/components/services/FAQServices";
import LuxuryFinalCTA from "@/components/services/LuxuryFinalCTA";


export default function MakeupServicesPage() {
  return (
    <>
      <ServicesHero />
      <LuxuryServicesGrid />
      <PremiumProcess />
      <SignaturePackages />
      <LuxuryTransformation />
      <ProductsBrands />
      <ServiceTestimonials />
      <FAQServices />
      <LuxuryFinalCTA />
      
    </>
  );
}