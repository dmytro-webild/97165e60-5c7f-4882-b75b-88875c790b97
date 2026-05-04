"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';

export default function ContactPage() {
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
              { name: "Home", id: "/" },
              { name: "Career", id: "/career" },
              { name: "Works", id: "/works" },
              { name: "Contact", id: "/contact" }
            ]}
            brandName="Photo Studio"
            button={{ text: "Contact", href: "/contact" }}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplitForm
            useInvertedBackground={false}
            title="Contact"
            description="Inquiries regarding project collaborations and licensing."
            inputs={[
              { name: "name", type: "text", placeholder: "Your Name" },
              { name: "email", type: "email", placeholder: "Your Email" }
            ]}
            textarea={{ name: "message", placeholder: "Message" }}
            imageSrc="http://img.b2bpic.net/free-photo/focused-young-photographer-is-taking-photo-dark-grunge-background_613910-12962.jpg"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBase
            columns={[
              {
                title: "Explore",                items: [
                  { label: "Career", href: "/career" },
                  { label: "Works", href: "/works" }
                ]
              },
              {
                title: "Social",                items: [
                  { label: "Instagram", href: "#" },
                  { label: "Twitter", href: "#" }
                ]
              }
            ]}
            logoText="Photo Studio"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
