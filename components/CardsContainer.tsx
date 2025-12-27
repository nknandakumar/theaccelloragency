import React from "react";
import Image from "next/image";
import CardSwapStraight, { Card } from "./CardSwapStraight";

interface CardsContainerProps {
  width?: number;
  height?: number;
  cardDistance?: number;
  verticalDistance?: number;
}

const CardsContainer: React.FC<CardsContainerProps> = ({
  width = 400,
  height = 250,
  cardDistance,
  verticalDistance,
}) => {
  return (
    <div className="relative h-[100px] md:h-[300px] lg:h-[700px] mt-3 flex justify-center">
      <CardSwapStraight
        centered
        width={width}
        height={height}
        cardDistance={cardDistance}
        verticalDistance={verticalDistance}
        delay={3000}
        pauseOnHover={false}
      >
        <Card>
          <Image
            src="https://i.pinimg.com/1200x/5c/70/63/5c70630bae73fe1b87ede4cb4592d4fa.jpg"
            alt="hero-1"
            width={500}
            height={500}
            className="object-cover object-start p-2 h-full w-full"
          />
        </Card>
        <Card>
          <Image
            src="https://i.pinimg.com/736x/2d/cd/db/2dcddb1071a1f8d9abe7978afc5c3971.jpg"
            alt="hero-2"
            width={500}
            height={500}
            className="object-cover object-start p-2 h-full w-full"
          />
        </Card>
        <Card>
          <Image
            src="https://i.pinimg.com/1200x/65/f3/65/65f36527e06d0a57c96c75f432b26d1c.jpg"
            alt="hero-3"
            width={500}
            height={500}
            className="object-cover object-start p-2 h-full w-full"
          />
        </Card>
        <Card>
          <Image
            src="https://i.pinimg.com/1200x/65/f3/65/65f36527e06d0a57c96c75f432b26d1c.jpg"
            alt="hero-4"
            width={500}
            height={500}
            className="object-cover object-start p-2 h-full w-full"
          />
        </Card>
        <Card>
          <Image
            src="https://i.pinimg.com/1200x/65/f3/65/65f36527e06d0a57c96c75f432b26d1c.jpg"
            alt="hero-5"
            width={500}
            height={500}
            className="object-cover object-start p-2 h-full w-full"
          />
        </Card>
      </CardSwapStraight>
    </div>
  );
};

export default CardsContainer;