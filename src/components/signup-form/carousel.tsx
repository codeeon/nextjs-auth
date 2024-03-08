import React, { useState } from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

import Image from 'next/image';

const SignUpCarousel = () => {
  const images = ['/image/code.jpg', '/image/coffee.jpg', '/image/desk.jpg'];

  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className='w-full max-w-sm'
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className='md:basis-1/1 lg:basis-1/1'>
            <div className='p-1'>
              <Card>
                <CardContent className='flex aspect-square items-center justify-center p-6'>
                  <Image src={image} alt='' width={500} height={500} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default SignUpCarousel;
