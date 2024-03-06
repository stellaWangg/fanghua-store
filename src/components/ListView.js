import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const ListView = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, url, desc, price, name } = product;
        return (
          <article key={id}>
            <img src={url} alt={name}></img>
            <div>
              <h4>{name}</h4>
              <h5 className="price">¥{price}</h5>
              <p>{desc.substring(0, 120)}...</p>
              <Link to={`/products/${id}`} className="btn">
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 250px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-5);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
    letter-spacing: 1.4px;
  }
  .btn {
    font-size: 0.8rem;
    padding: 0.3rem 0.7rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

export default ListView;
