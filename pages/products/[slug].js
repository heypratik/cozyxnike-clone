import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useRouter } from "next/router";
import {
  DetailsStyle,
  ProductInfo,
  Quantity,
  Buy,
  Price,
  Details,
  Line,
} from "../../styles/ProductDetails";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useContext } from "react";
import ShopContext from "../../lib/context";
import Rating from "@mui/material/Rating";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import toast from "react-hot-toast";
import { useEffect } from "react";

export default function ProductDetails() {
  useEffect(() => {
    setQty(1);
  }, []);

  const { qty, addQty, reduceQty, onAdd, setQty } = useContext(ShopContext);

  const { query } = useRouter();

  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });

  const { data, fetching, error } = results;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>There was an error. {error.message}</p>;

  const { title, description, image, price } = data.products.data[0].attributes;

  function notify() {
    toast.success("Added to cart");
  }

  return (
    <div>
      <DetailsStyle>
        <img src={image.data.attributes.formats.medium.url} alt={title} />
        <ProductInfo>
          <h1>{title}</h1>
          <Price>
            <h2>${price}</h2>
          </Price>
          <p>{description}</p>
          <Quantity>
            <span>Quantity</span>
            <button>
              <AiFillMinusCircle onClick={reduceQty} />
            </button>
            <p>{qty}</p>
            <button>
              <AiFillPlusCircle onClick={addQty} />
            </button>
          </Quantity>
          <Buy
            onClick={() => {
              onAdd(data.products.data[0].attributes, qty);
              notify();
            }}
          >
            Add to Cart
          </Buy>
        </ProductInfo>
      </DetailsStyle>
      <Details>
        <h3>ULTRA COMFORTABLE APPROACH</h3>
        <p>Textile upper for lightweight breathability</p>
        <p>Moulded midfoot cage offers lightweight support</p>
        <p>
          Duralon outsole with reinforced rubber at the heel for durable
          traction
        </p>
        <p>
          Vertical and horizontal flex grooves give you flexibility in all
          directions
        </p>
        <p>
          FullHlength Phylon midsole and Air-Sole heel unit provide lightweight
          cushioning
        </p>
      </Details>
      <footer>
        <div className="col-one">
          <p>Find us</p>
          <p>Gift Cards</p>
          <p>Send Us Feedback</p>
          <p>Sign Up For Email</p>
        </div>
        <div className="col-two">
          <p>Get Help</p>
          <p>Contact Us</p>
          <p>Chat With Us</p>
        </div>

        <div className="col-three">
          <AiFillTwitterCircle style={{ margin: "0rem 0.5rem" }} size={25} />
          <AiFillGithub style={{ margin: "0rem 0.5rem" }} size={25} />
          <AiFillLinkedin style={{ margin: "0rem 0.5rem" }} size={25} />
        </div>
      </footer>
    </div>
  );
}
