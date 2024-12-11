import { styled } from '@/styles';

import { useKeenSlider } from 'keen-slider/react';

import { HomeContainer, Product } from '@/styles/pages/home';
import Head from 'next/head';
import Image from 'next/image';

import camiseta1 from '../assets/camistas/1.png';
import camiseta2 from '../assets/camistas/2.png';
import camiseta3 from '../assets/camistas/3.png';

import 'keen-slider/keen-slider.min.css';

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
    }
  })

  return (
    <HomeContainer ref={sliderRef} className='keen-slider'>
      <Product className='keen-slider__slide'>
        <Image src={camiseta1} width={520} height={480} alt='' />

        <footer>
          <strong>Shirt X</strong>
          <span>$ 79.99</span>
        </footer>
      </Product>

      <Product className='keen-slider__slide'>
        <Image src={camiseta2} width={520} height={480} alt='' />

        <footer>
          <strong>Shirt X</strong>
          <span>$ 79.99</span>
        </footer>
      </Product>

      <Product className='keen-slider__slide'>
        <Image src={camiseta3} width={520} height={480} alt='' />

        <footer>
          <strong>Shirt X</strong>
          <span>$ 79.99</span>
        </footer>
      </Product>

      <Product className='keen-slider__slide'>
        <Image src={camiseta3} width={520} height={480} alt='' />

        <footer>
          <strong>Shirt X</strong>
          <span>$ 79.99</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
