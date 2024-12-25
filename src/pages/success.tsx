import Link from "next/link";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import { GetServerSideProps } from "next";
import Image from "next/image";

interface SuccessProps {
  customerName: string;
  product: {
    name: string;
    imageUrl: string;
  }
}

export default function Success({ customerName, product }: SuccessProps) {
  return (
    <SuccessContainer>
      <h1>Purchase Completed</h1>
      <ImageContainer>
        <Image src={product.imageUrl} width={120} height={110} alt={product.name} />
      </ImageContainer>
      <p>
        Yeah <strong>{customerName}</strong>, your <strong>{product.name}</strong> is already being prepared and will be on its way to you soon!.
      </p>
      <Link href="/">
        Go Back
      </Link>
    </SuccessContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  
  const sessionId = String(query.session_id);
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  });

  const productName = session.line_items?.data[0]?.price?.product as Stripe.Product;
  const productImg = session.line_items?.data[0]?.price?.product as Stripe.Product;

  return {
    props: {
     customerName: session.customer_details.email,
     product: {
      name: productName.name,
      imageUrl: productImg.images[0]
     }
    }
   }
}