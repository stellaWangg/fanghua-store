import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/aboutImg.jpg";
import contact from "../assets/contact.jpg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="desk" />
        <article>
          <div className="title">
            <h2>Our Story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Welcome to Fanghua Paper Co.Ltd , your one-stop shop for all your
            design and office supply needs. For over two decades, our company
            has been a cornerstone in the paper and office supply industry,
            weaving a narrative of excellence and reliability.
            <br />
            Since our establishment, we've not only weathered the changing tides
            but have flourished as a trusted partner for local giants. Our
            enduring commitment to quality and service has allowed us to
            seamlessly provide a spectrum of offerings, from premium paper
            products to comprehensive printing and designing services. Whether
            you're a student, a professional, or a business owner, we have the
            supplies you need to stay organized and productive.
            <br />
            The pages of our history are filled with successful collaborations
            with local industry leaders, a testament to the enduring reputation
            we've earned. Join us on this journey as we continue to script the
            story of Fanghua Paper Company, where our legacy of reliability
            meets the demands of the modern business landscape.
          </p>
        </article>
        <article className="contact">
          <div className="contact-title title">
            <h2>Contact Us</h2>
            <div className="underline"></div>
          </div>
          <p>
            We love receiving emails and phone calls of all kinds! Are you
            looking to find out more about our products and design services?
            We’d love to hear from you... Send us a direct email or, better yet,
            simply give us call. We’ll get back to you as soon as possible.
            <ul>
              <li>Email: 799346214@qq.com </li>
              <li>Telephone: 0359-8808157</li>
              <li>
                Address: Unit 2, Paper Factory, Taifeng Road, Wenxi County,
                Yuncheng City, Shanxi Province, China.
              </li>
            </ul>
          </p>
        </article>
        <img src={contact} alt="contact" className="contact contact-img" />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 700px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 50em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
    font-size: 1.2rem;
    text-align: justify;
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  .contact {
    text-align: justify;
    margin-top: 3rem;
  }
  .contact .underline {
    margin: auto;
  }
  .contact-img {
    width: 100%;
    height: 300px;
    margin-top: 8rem;
  }
  .contact-title {
    text-align: center;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1.2fr;
  }
`;
export default AboutPage;
