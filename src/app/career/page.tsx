"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FooterBase from '@/components/sections/footer/FooterBase';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TeamCardEleven from '@/components/sections/team/TeamCardEleven';
import { Award, CheckCircle, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="mediumLargeSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="gradient-bordered"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "/",
        },
        {
          name: "Career",
          id: "/career",
        },
        {
          name: "Works",
          id: "/works",
        },
        {
          name: "Contact",
          id: "/contact",
        },
      ]}
      brandName="Photo Studio"
    />
  </div>

  <div id="career-list" data-section="career-list">
      <FeatureBorderGlow
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "International Photo Prize",
          description: "Winner, Fine Art Category (2024)",
          icon: Award,
        },
        {
          title: "National Exhibition",
          description: "Solo Presentation in Seoul (2023)",
          icon: Star,
        },
        {
          title: "Global Talent Award",
          description: "Shortlisted for Street Photography (2022)",
          icon: CheckCircle,
        },
      ]}
      title="Career & Awards"
      description="Selected exhibitions and industry recognition for professional photographic works."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="The Team"
      description="Behind the lens."
      groups={[
        {
          id: "g1",
          groupTitle: "Studio",
          members: [
            {
              id: "m1",
              title: "Lead Photographer",
              subtitle: "Founder",
              detail: "Over 10 years of professional experience.",
              imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-working-as-photographer_52683-110074.jpg",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/collage-camera-with-vehicles-eyeglasses-against-pink-backdrop_23-2148084262.jpg",
          imageAlt: "Side view woman working as a photographer",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Explore",
          items: [
            {
              label: "Career",
              href: "/career",
            },
            {
              label: "Works",
              href: "/works",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Instagram",
              href: "#",
            },
            {
              label: "Twitter",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Photo Studio"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
