import AboutHero from "@/components/about/AboutHero";
import AwardsCertifications from "@/components/about/AwardsCertification";
import LuxuryBeautyPhilosophy from "@/components/about/BeautyPhilosophy";
// import BeforeAfterSlider from "@/components/about/BeforeAfterSlider";
import LuxuryExperienceStats from "@/components/about/ExperienceStats";
import LuxuryFounderStory from "@/components/about/FounderStory";
import LuxuryFAQ from "@/components/about/LuxuryFAQ";
import LuxuryStudioShowcase from "@/components/about/StudioShowcase";


export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#050505]">
      <AboutHero />
      <LuxuryFounderStory/>
      <LuxuryExperienceStats/>
      <LuxuryBeautyPhilosophy/>
      <LuxuryStudioShowcase/>
      <AwardsCertifications/>
      {/* <BeforeAfterSlider/> */}
      <LuxuryFAQ/>
      
    </main>
  );
}