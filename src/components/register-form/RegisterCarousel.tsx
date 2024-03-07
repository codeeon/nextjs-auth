import React, { useState } from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import Image from 'next/image';

const RegisterCarousel = () => {
  const images = ['/image/code.jpg', '/image/coffee.jpg', '/image/desk.jpg'];

  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className='w-full max-w-sm'
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
      {/* <CarouselPrevious className='hidden' />
      <CarouselNext className='hidden' /> */}
    </Carousel>
  );
};

export default RegisterCarousel;
