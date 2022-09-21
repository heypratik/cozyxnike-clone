import styled from 'styled-components'
const {motion} = require('framer-motion')

export const ProductStyle = styled(motion.div) `
    background-color: #f6f6f6;
    border-radius: 8px;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    cursor: pointer;
    img {
        width: 100%;
    }
    h2 {
        font-size: 1.2rem;
        padding: 0.5rem 0rem;
    }
`