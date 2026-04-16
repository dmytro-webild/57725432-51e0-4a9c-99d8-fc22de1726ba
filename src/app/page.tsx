"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Activity, Award, ShieldCheck, Sparkles, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="largeSmallSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="glass-depth"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Features",
          id: "features",
        },
        {
          name: "FAQ",
          id: "faq",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="FitFusion"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "gradient-bars",
      }}
      title="Transform Your Fitness at Citadel"
      description="Experience a community-driven workout space built for progress and consistency. Join us and reach your health goals today."
      tag="New Management"
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/running-tracks-empty-health-club_637285-8442.jpg",
          imageAlt: "Modern gym interior weight room",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/strong-man-training-gym_1303-23655.jpg",
          imageAlt: "Person training in a gym",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-modern-loft-gym-fitness_105762-2020.jpg",
          imageAlt: "3d rendering modern loft gym and fitness",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/gym-interior-with-equipment_93675-128388.jpg",
          imageAlt: "Gym interior with equipment",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/interior-view-gym_1048-9960.jpg",
          imageAlt: "Interior view of a Gym",
        },
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="Based on local member feedback"
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={true}
      title="Why Choose FitFusion"
      metrics={[
        {
          icon: ShieldCheck,
          label: "Professional Staff",
          value: "24/7",
        },
        {
          icon: Sparkles,
          label: "Clean Environment",
          value: "Daily",
        },
        {
          icon: Users,
          label: "Active Community",
          value: "100+",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Cardio Zone",
          description: "High-quality treadmills and bikes.",
          bentoComponent: "reveal-icon",
          icon: Activity,
          imageSrc: "http://img.b2bpic.net/free-photo/fitness-equipment_53876-30407.jpg",
          imageAlt: "Fitness equipment",
        },
        {
          title: "Strength Training",
          description: "Free weights and resistance machines.",
          bentoComponent: "reveal-icon",
          icon: Activity,
          imageSrc: "http://img.b2bpic.net/free-photo/running-tracks-empty-health-club_637285-8442.jpg",
          imageAlt: "Fitness equipment",
        },
        {
          title: "Coaching",
          description: "Personalized fitness planning.",
          bentoComponent: "reveal-icon",
          icon: Award,
          imageSrc: "http://img.b2bpic.net/free-photo/strong-man-training-gym_1303-23655.jpg",
          imageAlt: "Fitness equipment",
        },
      ]}
      title="Gym Facilities & Services"
      description="State-of-the-art equipment and a supportive environment for every fitness level."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "98%",
          title: "Hygiene Rating",
          description: "Regular sanitation protocols.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-with-medical-mask-cleaning-gym-equipment_23-2148766021.jpg",
        },
        {
          id: "m2",
          value: "4.5",
          title: "Member Satisfaction",
          description: "Based on our latest internal poll.",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-fit-people-training-together_23-2149734680.jpg",
        },
        {
          id: "m3",
          value: "15+",
          title: "Expert Trainers",
          description: "Years of combined experience.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-sports-people-training-morning-gym_1157-32132.jpg",
        },
      ]}
      title="Our Commitment"
      description="We are focused on providing a transparent, high-quality gym experience for all members."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "FitGear",
        "HealthSupp",
        "StrongHold",
        "ApexCo",
        "VitalBody",
        "IronWill",
        "NutriMax",
      ]}
      title="Proud Partners"
      description="We collaborate with leading brands to ensure our members receive top-tier support."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",
          title: "What are the operating hours?",
          content: "We open daily at 6 AM.",
        },
        {
          id: "f2",
          title: "Do you offer personal training?",
          content: "Yes, we have certified trainers on-site.",
        },
        {
          id: "f3",
          title: "Is the facility clean?",
          content: "Absolutely, we sanitize all equipment daily.",
        },
      ]}
      sideTitle="Common Questions"
      sideDescription="Everything you need to know about starting your fitness journey at FitFusion."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="I love the vibe here. Since new management took over, the energy is consistently motivating and clean."
      rating={5}
      author="Sarah Miller"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/joyful-smiling-afro-american-man-with-bushy-hairstyle-wearing-big-headphones_176420-19943.jpg",
          alt: "Sarah Miller",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-athletic-man-posing_23-2148605626.jpg",
          alt: "John Doe",
        },
        {
          src: "http://img.b2bpic.net/free-photo/endurance-women-fitness-concept-goodlooking-young-healthy-sporty-female-athlete-finish-productive-training-take-breath-after-exercise-sit-with-legs-crossed-gym-floor-smiling-satisfied_197531-30358.jpg",
          alt: "Alex Lee",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-woman-riding-exercise-bike-gym_329181-12906.jpg",
          alt: "Sam Smith",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-woman-white-top-standing-with-coach_1157-32126.jpg",
          alt: "Emma Watts",
        },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Contact Us"
      title="Visit Us Today"
      description="Have questions about membership or equipment? Stop by and see the progress for yourself."
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-woman-using-smartphone-gym_23-2147789617.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Features",
              href: "#features",
            },
          ],
        },
        {
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
      logoText="FitFusion Citadel"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
