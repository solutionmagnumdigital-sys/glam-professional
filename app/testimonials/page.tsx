import TestimonialsHero from "@/components/testimonials/TestimonialsHero";
import LuxuryVideoTestimonials from "@/components/testimonials/LuxuryVideoTestimonials";
import ClientTransformationStories from "@/components/testimonials/ClientTransformationStories";
import CelebrityReviews from "@/components/testimonials/CelebrityReviews";
import TestimonialsCTA from "@/components/testimonials/TestimonialsCTA";


export default function TestimonialsPage() {
  return (
    <main className="overflow-hidden bg-[#050505]">
      <TestimonialsHero />
      <LuxuryVideoTestimonials />
      <ClientTransformationStories />
      <CelebrityReviews />
      <TestimonialsCTA />
    </main>
  );
}