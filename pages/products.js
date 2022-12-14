import Head from 'next/head'
import { useQuery } from 'urql'
import {PRODUCT_QUERY} from '../lib/query'
import Products from '../components/Products'
import { Gallery } from '../styles/Gallery'
import {AiFillTwitterCircle, AiFillGithub, AiFillLinkedin} from 'react-icons/ai'


export default function SS() {

  const [results] = useQuery({query: PRODUCT_QUERY})
  const {data, fetching, error} = results

  if (fetching) return <p>Loading...</p>
  if (error) return <p>There was an error. {error.message}</p>
  const products = data.products.data

  return (
    <div>
      <Head>
        <title>COZY X NIKE</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Gallery>
        {products.map(product => 
        <Products {...product} key={product.attributes.slug}/>
        )}
        </Gallery>
      </main>
      <footer>
            <div className='col-one'>
              <p>Find us</p>
              <p>Gift Cards</p>
              <p>Send Us Feedback</p>
              <p>Sign Up For Email</p>
            </div>
            <div className='col-two'>
            <p>Get Help</p>
            <p>Contact Us</p>
            <p>Chat With Us</p>
            </div>

            <div className='col-three'>
            <AiFillTwitterCircle style={{ margin: '0rem 0.5rem' }} size={25}/>
            <AiFillGithub style={{ margin: '0rem 0.5rem' }}  size={25}/>
            <AiFillLinkedin style={{ margin: '0rem 0.5rem' }}  size={25}/>
            </div>
          </footer>
    </div>
  )
}
