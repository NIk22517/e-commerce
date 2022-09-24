import styled from "styled-components";
//import framer motion
const { motion } = require("framer-motion");

export const CartWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: flex;
  justify-content: flex-end;
  /* display: none; */
`;

export const CartStyle = styled(motion.div)`
  width: 40%;
  background: #f1f1f1;
  padding: 2rem 5rem;
  overflow-y: auto;
  position: relative;

  @media (max-width: 676px) {
    width: 80%;
    padding: 0.5rem;
  }
`;

export const Card = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  overflow: hidden;
  background: white;
  padding: 2rem;
  margin: 2rem 0;
  img {
    width: 8rem;
  }

  @media (max-width: 676px) {
    padding: 0rem;
    margin: 1rem 0rem;
    justify-content: start;
    img {
      width: 5rem;
    }
  }
`;

export const CardInfo = styled(motion.div)`
  width: 50%;
  div {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 676px) {
    width: 100%;
    margin-left: 1rem;
    div {
      justify-content: space-evenly;
    }
  }
`;

export const EmptyStyle = styled(motion.div)`
  position: absolute;
  top: 0;
  transform: translate(-50%, 0%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  /* width: 100%; */

  h1 {
    font-size: 2rem;
    padding: 2rem;
  }
  svg {
    font-size: 10rem;
    color: var(--secondary);
  }

  @media (max-width: 676px) {
    h1 {
      font-size: 1.8rem;
      text-align: center;
    }
  }
`;

export const Quantity = styled(motion.div)`
  display: flex;
  align-items: center;
  margin: 1rem 0;

  button {
    background: transparent;
    border: none;
    display: flex;
    font-size: 1.5rem;
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
`;

export const CheckOut = styled(motion.div)`
  button {
    background: var(--primary);
    padding: 1rem 2rem;
    width: 100%;
    color: white;
    margin-top: 2rem;
    cursor: pointer;
    border: none;
  }
`;

export const Cards = styled(motion.div)``;
