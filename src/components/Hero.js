import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import hero from "../assets/hero.jpg";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>
          Quality products <br />
          for your office.
        </h1>
        <p>
          Welcome to Fanghua Paper Company, where quality meets your stationery
          and design needs.
        </p>
        <Link to="/products" className="btn hero-btn">
          shop now
        </Link>
      </article>
      <article className="img-container">
        <img src={hero} alt="office" className="main-img" />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
      font-family: "Lexend", sans-serif;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 600px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 20%;
      height: 80%;
      // background: var(--clr-primary-1);
      background: rgba(190, 10, 10, 255);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;

export default Hero;
