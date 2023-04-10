import styled from 'styled-components';

export const FormLogin= styled.body`

    .divMaster {
        display: flex;
        justify-content: center;
        background: #000000;
        height: 100vh;
    }

    .logo {
      height: 100vh;
      align-items: center;
      justify-content: center;
    }

    .logo img{
      height: 42rem;  
      margin: 10rem;
    }

    .formLogin {
      display: flex;
      flex-direction: column;
      color: #7A43B2;
      align-items: center;
      justify-content: center;
      height: 100vh;
      width: 50vh;
      padding: 0;
      background: #fff;
      border-radius: 6px;
    }

    h1 {
      font-size: 50px;
      text-shadow: #7A43B2 0.2rem 0.2rem 0.2rem;
    }

    input { 
      display: block;
      background: #7A43B2 !important;
      color: #fff;
      width: 18.5rem;
      height: 42px;
      border-radius: 6px;
      border: none;
      margin: 10px 0px;
      padding-left: 10px;
    }

    a {
      color: #7A43B2;
      margin: 8px 0 0;
      text-decoration: none;
      transition: color 2s;
      :hover {
        color: #81308Fcc;
        font-size: 18px;
      }
    }
`;
