import { INTERNALS } from 'next/dist/server/web/spec-extension/request'
import {useRouter} from 'next/router'
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
const {motion} = require('framer-motion')
const stripe = require('stripe')(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`)

export async function getServerSideProps(params) {
    const order = await stripe.checkout.sessions.retrieve(
        params.query.session_id, {expand: ['line_items']}
    )
    return {props: {order}}
}

export default function Success({order}) {


    const route = useRouter()
    return (
    <Wrapper>
        <Card animate={{opacity: 1, scale: 1}} initial={{opacity: 0, scale: 0}} transition={{duration: 0.5}}>
            <h1>Thank you for your order!</h1>
            <h2>A confirmation email has been sent to</h2>
            <h2>{order.customer_details.email}</h2>
            <InfoWrapper>
            <Address>
                <h3>Address</h3>
                {Object.entries(order.customer_details.address).map(([key, value]) => (
                    <p key = {key}>{key} : {value}</p>
                ))}
            </Address>
            <OrderInfo>
                <h3>Products</h3>
                {order.line_items.data.map( item => (
                    <div key ={item.id}>
                        <p>Product: {item.description}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: ${item.price.unit_amount / 100}</p>
                    </div>
                ))}
            </OrderInfo>
            </InfoWrapper>
            <button onClick={() => route.push('/')}>Continue Shopping</button>
        </Card>
    </Wrapper>
    )
}

const Wrapper = styled.div  `
   margin : 5rem 15rem;
   overflow: hidden;
`

const Card = styled(motion.div) `
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f1f1f1;
    border-radius: 2rem;
    padding: 3rem 3rem;

    h2 {
        margin: 0.5rem 0rem;
    }

    button {
         color: white;
         background: var(--primary);
         font-size: 1.2rem;
         font-weight: 500;
         padding: 1rem 2rem;
         cursor: pointer;
    }
`

const Address = styled.div `
    font-size: 1rem;
    width: 100%;
`

const OrderInfo = styled.div `
    font-size: 1rem;
    width: 100%;
    div {
        padding-bottom: 1rem;
    }
`

const InfoWrapper = styled.div `
    display: flex;
    margin: 2rem 0rem;
`