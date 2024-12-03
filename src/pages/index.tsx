import { styled } from "@/styles";
import { HomeContainer, Product } from "@/styles/pages/home";
import Head from "next/head";
import Image from "next/image";

import camista1 from '../assets/camistas/1.png';
import camista2 from '../assets/camistas/2.png';
import camista3 from '../assets/camistas/3.png';

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camista1} width={520} height={480} alt='' />

        <footer>
          <strong>Shirt X</strong>
          <span>$ 79.99</span>
        </footer>
      </Product>

      <Product>
        <Image src={camista1} width={520} height={480} alt='' />

        <footer>
          <strong>Shirt X</strong>
          <span>$ 79.99</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
