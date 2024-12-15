// import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

export default function Product() {
  // const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>
      </ImageContainer>
      <ProductDetails>
        <h1>Shirt X</h1>
        <span>$ 79.90</span>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores aliquid rerum exercitationem facere a molestiae ut sed velit non mollitia? Officiis hic velit assumenda aspernatur nihil, sint sed laboriosam tempora?</p>
        <button>
          Buy now
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}