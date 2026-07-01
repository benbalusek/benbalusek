"use client";

import AboutMeModalContent from "@/app/_components/about/AboutMeModalContent";
import ClickableImage from "@/app/_components/ui/ClickableImage";
import ContactForm from "@/app/_components/ui/ContactForm";
import { About, selfies } from "@/app/_lib/aboutData";
import { useState } from "react";

function AboutMe() {
  const [selectedImage, setSelectedImage] = useState<About | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mx-auto py-12">
      <div className="flex flex-col gap-6">
        {/* Photography Image */}
        <ClickableImage
          key={selfies[0].id}
          src={selfies[0].smallSrc}
          alt={selfies[0].alt}
          ariaLabel={selfies[0].alt}
          width={selfies[0].smallWidth}
          height={selfies[0].smallHeight}
          onClick={() => setSelectedImage(selfies[0])}
        />

        {/* Contact Form for medium screens */}
        <div className="hidden sm:block lg:hidden">
          <h3 className="text-xl font-semibold mb-4">Get in touch</h3>
          <ContactForm />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {/* Bio */}
        <div className="text-lg leading-relaxed">
          <h2 className="text-2xl font-semibold mb-4">Hi, I’m Ben</h2>
          <p>
            A film photographer, musician, and frontend developer from Texas. I
            shoot 35mm and 120 film in wild places, write songs that come from a
            place of intuition, and develop apps that connect people and solve
            problems.
          </p>
          <br />
          <p>
            I grew up playing drums and guitar and started writing and recording
            music under the name Medvedi in 2011 with my girlfriend, who later
            became my wife. In 2015, we bought a Canon AE-1 and began
            documenting our hikes, camping trips, and travels on film. In 2022,
            I taught myself web development with JavaScript and now develop
            React Native apps. My work is inspired by nature, connection, and
            simplicity.
          </p>
        </div>

        {/* Selfie Image */}
        <ClickableImage
          key={selfies[2].id}
          src={selfies[2].smallSrc}
          alt={selfies[2].alt}
          ariaLabel={selfies[2].alt}
          width={selfies[2].smallWidth}
          height={selfies[2].smallHeight}
          onClick={() => setSelectedImage(selfies[2])}
        />

        {/* Contact Form for small screens */}
        <div className="sm:hidden">
          <h3 className="text-xl font-semibold mb-4">Get in touch</h3>
          <ContactForm />
        </div>

        {/* Music Image for medium screens */}
        <div className="lg:hidden">
          <ClickableImage
            key={selfies[1].id}
            src={selfies[1].smallSrc}
            alt={selfies[1].alt}
            ariaLabel={selfies[1].alt}
            width={selfies[1].smallWidth}
            height={selfies[1].smallHeight}
            onClick={() => setSelectedImage(selfies[1])}
          />
        </div>
      </div>

      {/* Music Image for large screens */}
      <div className="hidden lg:flex flex-col gap-6">
        <ClickableImage
          key={selfies[1].id}
          src={selfies[1].smallSrc}
          alt={selfies[1].alt}
          ariaLabel={selfies[1].alt}
          width={selfies[1].smallWidth}
          height={selfies[1].smallHeight}
          onClick={() => setSelectedImage(selfies[1])}
        />

        {/* Contact Form for large screens */}
        <div className="w-full">
          <h3 className="text-xl font-semibold mb-4">Get in touch</h3>
          <ContactForm />
        </div>
      </div>

      {/* About Me Modal Content */}
      {selectedImage && (
        <AboutMeModalContent
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}

export default AboutMe;
