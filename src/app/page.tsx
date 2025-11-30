import HeroSection from '@/components/sections/HeroSection';
import WhatWeDoSection from '@/components/sections/WhatWeDoSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import WhyZumitoSection from '@/components/sections/WhyZumitoSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatWeDoSection />
      <HowItWorksSection />
      <WhyZumitoSection />
      {/* <SocialProofSection /> */}
      <FAQSection />
      <ContactSection />
    </>
  );
}
