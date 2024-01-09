import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Stars = ({ stars, reviews }) => {
  const checkStars = Array.from({ length: 5 }, (_, index) => {
    // index 0-4
    const number = index + 0.5;
    return (
      //  stars
      <span>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
      //  end of star
    );
  });

  console.log(stars, reviews);
  return (
    <Wrapper>
      <div className="stars">{checkStars}</div>
      <div className="reviews">({reviews} customer reviews)</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;
export default Stars;
