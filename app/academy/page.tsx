import AcademyHero from "@/components/academy/AcademyHero";
import AcademyStats from "@/components/academy/AcademyStats";
import AcademyExperience from "@/components/academy/AcademyExperience";
import LuxuryCoursesShowcase from "@/components/academy/LuxuryCoursesShowcase";
import AcademyGalleryPreview from "@/components/academy/AcademyGalleryPreview";
import AcademyTestimonials from "@/components/academy/AcademyTestimonials";
import AcademyFinalCTA from "@/components/academy/AcademyFinalCTA";

export default function AcademyPage() {
  return (
    <main className="overflow-hidden bg-[#050505]">
      <AcademyHero />
      <AcademyStats />
      <AcademyExperience />
      <LuxuryCoursesShowcase />
      <AcademyGalleryPreview />
      <AcademyTestimonials />
      <AcademyFinalCTA />
    </main>
  );
}