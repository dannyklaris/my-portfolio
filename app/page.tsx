"use client";
import React from "react";
import Image from "next/image";
import { Atkinson_Hyperlegible, Inter, Space_Grotesk } from "next/font/google";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import ProfileActions from "@/components/ProfileActions";

const atkin = Atkinson_Hyperlegible({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

const Page = () => {
  const images = [
    {
      src: "/rentme3.png",
      alt: "RentMe Project Screenshot 2",
    },
    {
      src: "/rentme4.png",
      alt: "RentMe Project Screenshot 1",
    },
    {
      src: "/rentme5.png",
      alt: "RentMe Project Screenshot 2",
    },
    {
      src: "/rentme6.png",
      alt: "RentMe Project Screenshot 1",
    },
  ];

  return (
    <div
      className={`${inter.className} min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800`}>
      {/* Hero Section */}
      <div className="flex justify-center items-center min-h-[80vh] px-4 py-12 md:py-20">
        <div className="flex flex-col items-center gap-4 md:gap-6 max-w-4xl">
          <div className="text-neutral-400 text-base md:text-lg font-medium">
            Hello, I&apos;m
          </div>
          <h1
            className={`${atkin.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight text-center leading-tight`}>
            Danial Akmal bin Kamal Aris
          </h1>
          <div className="text-neutral-300 text-lg md:text-xl text-center leading-relaxed max-w-2xl px-4">
            A software engineering student passionate about building innovative
            solutions and creating impactful user experiences.
          </div>
          <ProfileActions />
        </div>
      </div>

      {/* Projects Section */}
      <div className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`${spaceGrotesk.className} text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-16`}>
            Featured Projects
          </h2>

          <div className="space-y-16 md:space-y-24">
            {/* RentMe Project */}
            <div className="space-y-8 md:space-y-12">
              <div className="w-full max-w-[1200px] mx-auto">
                <Carousel className="w-full">
                  <CarouselContent>
                    {images.map((image, index) => (
                      <CarouselItem key={index}>
                        <Card className="bg-transparent border-none shadow-none">
                          <CardContent className="flex items-center justify-center p-0 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              className="object-contain rounded-lg"
                              priority={index === 0}
                              sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 1200px"
                            />
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden sm:flex bg-white/10 hover:bg-white/20 border-none text-white" />
                  <CarouselNext className="hidden sm:flex bg-white/10 hover:bg-white/20 border-none text-white" />
                </Carousel>
              </div>

              <div className="flex flex-col items-center gap-4 md:gap-6 max-w-3xl mx-auto px-4">
                <h3
                  className={`${spaceGrotesk.className} text-2xl md:text-3xl font-bold text-white`}>
                  RentMe
                </h3>
                <p className="text-neutral-300 text-base md:text-lg text-center leading-relaxed">
                  A modern property rental platform designed to streamline the
                  process of finding and listing rental properties. Built with
                  Next.js, TypeScript, and Tailwind CSS, featuring real-time
                  search and advanced filtering capabilities.
                </p>
                <div className="flex gap-4">
                  <Button className="gap-2 hover:text-neutral-300 text-sm md:text-base">
                    <ExternalLink size={16} />
                    <a href="https://rentme-eta.vercel.app" target="_blank">
                      Live Demo
                    </a>
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {[
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "Prisma",
                    "MongoDB",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs md:text-sm text-white">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ACM-W Curation Tool Project */}
            <div className="space-y-8 md:space-y-12">
              <div className="w-full max-w-[1200px] mx-auto">
                <Card className="bg-white border-none shadow-none">
                  <CardContent className="flex items-center justify-center p-0 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative">
                    <video
                      className="w-full h-full rounded-lg object-contain"
                      controls
                      preload="metadata">
                      <source src="/acm-w-demo.mov" type="video/quicktime" />
                      Your browser does not support the video tag.
                    </video>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col items-center gap-4 md:gap-6 max-w-3xl mx-auto px-4">
                <h3
                  className={`${spaceGrotesk.className} text-2xl md:text-3xl font-bold text-white`}>
                  ACM-W Curation Tool
                </h3>
                <p className="text-neutral-300 text-base md:text-lg text-center leading-relaxed">
                  An innovative content curation platform developed for ACM-W,
                  designed to streamline the process of collecting and
                  organizing women in tech resources. This tool features
                  automated content aggregation, smart categorization, and a
                  collaborative review system to help maintain a high-quality
                  resource database for the community.
                </p>
                <div className="flex gap-4">
                  <Button
                    className="gap-2 text-sm md:text-base opacity-50 cursor-not-allowed"
                    disabled
                    title="This application is proprietary and licensed to ACM-W as an internal tool">
                    <ExternalLink size={16} />
                    <span>Live Demo (Internal Tool)</span>
                  </Button>
                </div>
                <div className="text-white">
                  This application is proprietary and licensed to ACM-W as an
                  internal tool.
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {[
                    "React",
                    "Node.js",
                    "Next.js",
                    "Tailwind CSS",
                    "Microsoft Azure OpenAI",
                    "Microsoft Azure SQL Database",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs md:text-sm text-white">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
