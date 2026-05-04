"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCartItem from '@/components/ecommerce/cart/ProductCartItem';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';

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

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Photographer Name"
      description="Capturing moments through a lens of artistic minimalism and profound visual storytelling."
      imageSrc="http://img.b2bpic.net/free-photo/collage-camera-with-vehicles-eyeglasses-against-pink-backdrop_23-2148084262.jpg"
      imageAlt="minimalist photography studio"
      buttons={[
        {
          text: "View Portfolio",
          href: "/works",
        },
      ]}
    />
  </div>

  <div id="testimonial" data-section="testimonial">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      title="What People Say"
      description="Kind words from our collaborative partners."
      testimonials={[
        {
          id: "t1",
          name: "Elena R.",
          date: "2024",
          title: "Art Director",
          quote: "Incredible eye for detail.",
          tag: "Expertise",
          avatarSrc: "http://img.b2bpic.net/free-photo/elegant-mature-woman-sitting-stool_23-2148275043.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/collage-camera-with-vehicles-eyeglasses-against-pink-backdrop_23-2148084262.jpg",
          imageAlt: "Elegant mature woman sitting on a stool",
        },
        {
          id: "t2",
          name: "Mark S.",
          date: "2024",
          title: "Curator",
          quote: "A master of light and shadow.",
          tag: "Recognition",
          avatarSrc: "http://img.b2bpic.net/free-photo/elegant-senior-woman-sitting-chair_23-2148275119.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/focused-young-photographer-is-taking-photo-dark-grunge-background_613910-12962.jpg",
          imageAlt: "Elegant mature woman sitting on a stool",
        },
      ]}
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      title="Recognized By"
      description="Professional affiliations and partners."
      names={[
        "Fine Arts Review",
        "Modern Gallery",
        "Urban Collective",
        "Lens Magazine",
        "International Studio",
      ]}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      sideTitle="FAQs"
      sideDescription="Commonly asked questions."
      faqsAnimation="slide-up"
      faqs={[
        {
          id: "f1",
          title: "Do you accept freelance projects?",
          content: "Yes, I am currently open to new collaborations.",
        },
        {
          id: "f2",
          title: "Where can I purchase prints?",
          content: "Direct inquiries can be made via the contact form.",
        },
      ]}
    />
  </div>

  <div id="ecommerce" data-section="ecommerce">
      <ProductCartItem />
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
