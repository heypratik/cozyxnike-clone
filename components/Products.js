import { ProductStyle } from "../styles/ProductStyle";
import Link from "next/link";

function Products(props) {
  const { title, price, image, slug } = props.attributes;
  let bannerImg = image.data.attributes.formats.medium.url;

  return (
    <ProductStyle
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
    >
      <div>
        <Link href={`/products/${slug}`}>
          <img src={bannerImg} alt={title} />
        </Link>
      </div>
      <div>
        <h2>{title}</h2>
        <h3>${price}</h3>
      </div>
    </ProductStyle>
  );
}

export default Products;
