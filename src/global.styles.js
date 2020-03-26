import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Montserrat', sans-serif;
  padding: 20px 60px 0 60px;

  @media screen and (max-width: 800px) {
      padding: 10px;
  }
}

a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
}

.StripeCheckout {
  overflow: visible !important;
  min-width: 165px !important;
  width: 55% !important;
  height: 50px !important;
  letter-spacing: 0.5px !important;
  line-height: 50px !important;
  padding: 0 !important;
  margin-left: 10px;
  font-size: 15px !important;
  background: none !important;
  box-shadow: none !important;
  color: white !important;
  text-transform: uppercase !important;
  font-family: inherit !important;
  font-weight: bolder !important;
  border: none !important;
  cursor: pointer !important;
  display: flex !important;
  justify-content: center !important;
  transition: all 0.7s ease-in-out !important;
}

.StripeCheckout span {
  min-width: 165px !important;
  width: auto !important;
  height: 50px !important;
  letter-spacing: 0.5px !important;
  line-height: 50px !important;
  padding: 0 35px 0 35px !important;
  font-size: 15px !important;
  background-image: none !important;
  background-color: white;
  color: black !important;
  text-transform: uppercase !important;
  font-family: inherit !important;
  font-weight: bolder !important;
  border: 1px solid black !important;
  cursor: pointer !important;
  display: flex !important;
  justify-content: center !important;
  transition: all 0.7s ease-in-out !important;
  border-radius: 0 !important;
 
  @media screen and (max-width: 800px) {
    font-size: 12px !important;
  }

  @media screen and (max-width: 350px) {
    font-size: 10px !important;
  }
}

.StripeCheckout span:hover {
  background-color: black;
    color: white !important;
    
}


`;

// transform: translateX(-50%);
