"use client";
import React from "react";
import { cn } from "@/lib/utils";
import AnimatedTextMask from "@/components/AnimatedTextMask";
 


export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "A professional website",
      description:
        "Modern, fast, and conversion-focused.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Your brand showing up everywhere",
      description:
        "When people search for solutions",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "A strong Google Business Profile",
      description:
        "Boost your local visibility, attract more customers, builds trust.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    },
    {
      title: "Visitors actually contacting you ",
      description:
        "Real leads, real growth ",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];
  return (
    <div className="relative z-20 pb-10 lg:pb-20 max-w-7xl mx-auto">
      <div className="px-8">
        <AnimatedTextMask
          as="h4"
          className="text-4xl lg:text-7xl lg:leading-tight max-w-5xl mx-auto text-center uppercase tracking-tight font-extrabold text-black dark:text-white"
          lines={["Now Imagine This"]}
        />

        <AnimatedTextMask
          as="p"
          className="text-xl lg:text-2xl max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300"
          lines={[
            <>
              See how TheAccellor can transform{" "}
              <span className="text-indigo-400 font-bold">your business</span>.
            </>,
          ]}
        />
      </div>

      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={`${feature.className} mt-6 sm:mt-0 `}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <AnimatedTextMask
      as="p"
      className=" max-w-5xl mx-auto text-left  text-black dark:text-white text-xl md:text-3xl font-bold md:leading-snug"
      lines={[children]}
    />
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <AnimatedTextMask
      as="p"
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
      lines={[children]}
    />
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full  p-5  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          {/* TODO */}
          <img
            src="https://i.pinimg.com/736x/bf/a5/6e/bfa56e92b26cd44c1273dd76ce254209.jpg"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
          />
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <div      
      className="relative flex gap-10  h-full group/image"
    >
      <div className="w-full  mx-auto bg-transparent dark:bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  relative">
         
          <img
            src="https://i.pinimg.com/1200x/2c/6d/ad/2c6dad0a0607e4eed98db8d9ae6a1bd3.jpg"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none  transition-all duration-200"
          />
        </div>
      </div>
    </div>
  );
};

export const SkeletonTwo = () => {
  return (
    <div className="relative h-full w-full mb-1 overflow-hidden rounded-md">
      <div className="grid h-full w-full ">
        <img
          src="https://i.pinimg.com/736x/52/1b/0c/521b0c7005ed9d3cc48f7d1ccdc590a7.jpg"
          alt="Visitors contacting 1"
          className="h-full w-full object-cover object-center"
        />
        
      </div>
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="relative h-full w-full mb-1 overflow-hidden rounded-md">
      <div className="grid h-full w-full">
        <img
          src="https://i.pinimg.com/736x/d7/a6/1b/d7a61be0e71a018636929b33b0172687.jpg"
          alt="Your brand showing up everywhere"
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
};
