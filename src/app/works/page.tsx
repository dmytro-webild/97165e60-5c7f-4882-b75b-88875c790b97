"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import FooterBase from '@/components/sections/footer/FooterBase';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardOne from '@/components/sections/product/ProductCardOne';

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

  <div id="portfolio-grid" data-section="portfolio-grid">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "w1",
          name: "Urban Pulse",
          price: "Series I",
          imageSrc: "http://img.b2bpic.net/free-photo/pink-light-bulb-camera-with-blue-light-pink-surface_23-2148084320.jpg",
        },
        {
          id: "w2",
          name: "Night Whispers",
          price: "Series II",
          imageSrc: "http://img.b2bpic.net/free-photo/studio-with-props-photography_23-2148885651.jpg",
        },
        {
          id: "w3",
          name: "Stone Echoes",
          price: "Series III",
          imageSrc: "http://img.b2bpic.net/free-photo/studio-with-props-photography_23-2148885655.jpg",
        },
        {
          id: "w4",
          name: "Light Traces",
          price: "Series IV",
          imageSrc: "http://img.b2bpic.net/free-photo/model-getting-ready-photoshoot_23-2149305177.jpg",
        },
        {
          id: "w5",
          name: "Silent Motion",
          price: "Series V",
          imageSrc: "http://img.b2bpic.net/free-photo/concept-cinema-with-film-elements_23-2150063123.jpg",
        },
        {
          id: "w6",
          name: "Color Duality",
          price: "Series VI",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-elegant-woman-posings_23-2148275136.jpg",
        },
      ]}
      title="Work Series"
      description="Exploration of light, texture, and urban landscapes in recurring series."
    />
  </div>

  <div id="blog" data-section="blog">
      <BlogCardOne
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Behind the Work"
      description="Insights into our creative process."
      blogs={[
        {
          id: "b1",
          category: "Process",
          title: "Lighting Mastery",
          excerpt: "How we create the mood in every shot.",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-digital-camera-marble-shelf-with-plants_23-2151978690.jpg",
          authorName: "Editor",
          authorAvatar: "http://img.b2bpic.net/free-photo/elegant-mature-lady-sitting-chair_23-2148275130.jpg",
          date: "2024",
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
