"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ContainerScroll } from "./ui/container-scroll-animation";



const HeroSection = () => {
  const imageRef = useRef(null);

  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
      <div className="space-y-6 text-center">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title animate-gradient">
                Discover Your Path with
                <br />
                AI-Powered Career Guidance
              </h1>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl mt-4">
                LakshAI helps students, job seekers, and professionals navigate
                their careers with smart insights, tailored advice, and
                achievable goals — all powered by AI.
              </p>
              <div className="flex justify-center mt-6">
                <Link href="/dashboard">
                  <Button size="lg" className="px-8">
                    Get Started
                  </Button>
                </Link>
              </div>
            </>
          }
        >
          <div className="hero-image-wrapper mt-5 md:mt-0">
            <div ref={imageRef} className="hero-image w-full max-w-[800px] mx-auto">
              <Image
                src="/banner.png"
                width={1280}
                height={720}
                alt="LakshAI Dashboard Preview"
                className="mx-auto rounded-2xl object-cover h-full object-left-top"
                priority
                draggable={false}
              />
            </div>
          </div>
        </ContainerScroll>
      </div>
    </section>
  );
};

export default HeroSection;
