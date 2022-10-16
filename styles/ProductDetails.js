import styled from 'styled-components'

export const DetailsStyle = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5rem;
    img {
        width: 35%;
    }
`

export const ProductInfo = styled.div `
    width: 60%;
    button {
        font-size: 1rem;
        font-weight: medium;
        padding: 0.8rem 1rem;
        cursor: pointer;
    }
    h1 {
        margin-bottom: 1rem;
    }
`

export const Price = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
`

export const Quantity = styled.div `
    display: flex;
    align-items: center;
    margin:  1rem 0rem;

    button {
        background: transparent;
        border: none;
        display: flex;
        font-size: 1.5rem;
        padding: 0rem 0.5rem;
    }

    p {
        width: 1rem;
        text-align: center;
    }

    span {
        color: var(--secondary);
    }

    svg {
        color: #494949;
    }
`

export const Buy = styled.button `
    width: 100%;
    background: var(--primary);
    color: white;
    font-weight: 500;
    border: none;
    border-radius: 50px;
    margin: 1rem 0rem;
`

export const Details = styled.div `
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    padding: 4rem 0rem;
    text-align: center;
    margin: 5rem 0rem;
    h3 {
        font-size: 2rem;
        margin: 1rem 0rem;
    }
`

export const Line = styled.div  `
    margin: 1.5rem 0rem;
`