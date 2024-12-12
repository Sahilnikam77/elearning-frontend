import React from "react";
import styled from "styled-components";
// import { NavLink } from "react-router-dom";
// import { Button } from "../styles/Button";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
// import GlobalStyle from "../../GlobalStyle";
// import { Button1 } from "../Button1";
// import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <Wrapper>
        {/* <section className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h3>Ready to get started?</h3>
              <h3>Talk to us today</h3>
            </div>

            <div>
              
            </div>
          </div>
        </section> */}
        {/* footer section */}

        <footer className="img-foot">
          <div className=" blurcon">


          <div className="container grid grid-four-column ">
          <div className="flex">
            <div className="footer-about">
              <h3>Sahil's E-Learning PLatform (EBATU)</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="footer-subscribe">
              <h3>Subscribe to get important updates</h3>
              <form action="#">
                <input  className="textb" type="email" name="email" placeholder="YOUR E-MAIL" />

                <button className="btt2">Subscribe</button>
              </form>
            </div>
            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="footer-social--icons">
                <div>
                  <a href="https://discord.com/">

                  <FaDiscord className="icons" />

                  </a>
                </div>
                <div>
                  <a href="https://www.instagram.com/">

                  <FaInstagram className="icons" />
                  </a>
                </div>
                <div>
                  
                    <a href="https://www.youtube.com/channel/UClZ94DQqHMFkpfhZFuglAcg">

                    <FaYoutube className="icons" />
                    </a>
                  
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3>Contact Us</h3>
              <h3>8767157923</h3>
            </div>
          </div>

</div>
       <div className="footer-bottom--section">
            <hr />
          <div className="f1">

            <div className="container grid grid-two-column flex">
              <div>

              <p>
                @{new Date().getFullYear()} Sahil E-Learning platform. All Rights Reserved
              </p>
              </div>
              <div>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
            </div>
            </div>
          </div>
                  </div>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`

*{
  font-size: 1.3rem;
}
.img-foot{
   background: url(https://images4.alphacoders.com/985/98546.jpg);
   /* background-position:; */
   
   height: 50rem;


}
.blurcon{
  backdrop-filter:blur(130px);
  height: 685px;
  margin-top: -110px;
  padding-top:200px;
  z-index: 1;
  background: transparent;
    box-shadow: 0px 0px 0px 0px rgba(23, 23, 23, 0.619),inset 0px 0px 25px 1px rgba(30, 30, 30, 0.331);
    border: 1px solid rgba(15, 14, 14, 0.493);
  
}
  .iSIFGq {
    margin: 0;
  }
  .flex{
    display: flex;
    gap: 20px;
    
    margin-right: 20px;
  }
  .hireme-btn{
    position: relative;
    top:-70px
  }
  .contact-short {
    z-index: 33;
    backdrop-filter: blur(50px);
    max-width: 60vw;
    max-height: 200px;
    margin: auto;
    padding: 5rem 10rem;
    background-color: #F6F8FA;
    border-radius: 1rem;
    box-shadow:  rgba(0, 0, 0, 0.16) 0px 1px 4px};
    transform: translateY(50%);
    transition: all ease 0.7s;

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color:rgb(251, 7, 7)};
    h3 {
      color: #ffff;
      margin-bottom: 2.4rem;
    }
    p {
      color: #ffff;
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid #ffff};

        .icons {
          color: #ffff;
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
          transition: all ease 0.4s;
        }
        .icons:hover{
            transform: scale(1.3);
        }
      }
    
  

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: #ffff;
      height: 0.1px;
    }
  }

  @media (max-width: 768px) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }
   
    .btt2{
  text-decoration: none;
  max-width: auto;
  background: url(https://images4.alphacoders.com/985/98546.jpg);
  color: rgb(255 255 255);
  padding:5px;
  margin: 10px;
  border: none;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  border-radius: 5px;
  &:hover,
  &:active {
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    box-shadow:rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    transform: scale(0.96);
  }

  a {
    text-decoration: none;
    color: rgb(255 255 255);
    font-size: 1rem;
  }
    }

   .f1{
    display: flex;
   }
    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    } 
  }
  .grid{
    gap: 3.2rem;
  }
  .grid-two-column , .grid-three-column, .grid-four-column{
    grid-template-columns: 1fr;
  }
  
  .btt2{
    text-decoration: none;
    max-width: auto;
    background: url(https://images4.alphacoders.com/985/98546.jpg);
    color: rgb(255 255 255);
    padding:10px;
    width: 250px;
    margin: 10px;
    border-radius: 50%;
    border: none;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    border-radius: 5px;
    &:hover,
    &:active {
      box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
      box-shadow:rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
      transform: scale(0.96);
    }
    
    a {
      text-decoration: none;
      color: rgb(255 255 255);
      font-size: 1rem;
    }
  }
  
  .f1{
    display: flex;
  }
  /* footer {
    padding: 9rem 0 9rem 0;
    } */
    
    /* .footer-bottom--section {
      padding-top: 4.8rem;
      }  */
      .textb{
        padding: 10px;
        border: solid 1px black;
        border-radius: 10px;
        background: transparent;
        box-shadow:rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
      }
      * {
      margin: 0;
      padding: 0;
      color: black;
      font-size: large;
      box-sizing: border-box;
      font-family: "Work Sans", sans-serif;
      }
      `;

export default Footer;