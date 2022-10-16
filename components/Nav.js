import Link from "next/link"
import {FiShoppingBag} from 'react-icons/fi'
import { NavStyles, NavItems } from "../styles/NavStyles"
import Cart from "./Cart"
import  ShopContext from "../lib/context"
import { useContext } from "react"
const {AnimatePresence, motion} = require('framer-motion')
import User from "./User"
import { useUser } from "@auth0/nextjs-auth0"

function Nav() {

  const {setShowCart, showCart, totalQuantity} = useContext(ShopContext)
  const {user, error, isLoading} = useUser();
  return (
    <NavStyles>
        <Link href={'/'}>COZY X NIKE</Link>
        <NavItems>
          <User />
            <div onClick={() => setShowCart(true)}>
              {totalQuantity > 0 && <motion.span animate={{scale: 1}} initial={{scale: 0}}>{totalQuantity}</motion.span>}
                <FiShoppingBag/>
                <h3>Cart</h3>
            </div>
        </NavItems>
        <AnimatePresence>
        {showCart && <Cart />}
        </AnimatePresence>
    </NavStyles>
  )
}

export default Nav