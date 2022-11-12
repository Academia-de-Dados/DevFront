import styled from 'styled-components';

export const FormLogin= styled.body`
    .divMaster {
      display: flex;
      flex-direction: column;
      color: #7A43B2;
      align-items: center;
      margin-top: 15%;
    }
    h1 {
        font-size: 50px;
    }
    input { 
      display: block;
      background: #fff;
      width: 300px;
      height: 42px;
      border-radius: 6px;
      border: none;
      margin: 10px 0px;
      padding-left: 10px
    }
    a {
      color: #7A43B2;
      margin: 8px 0 0;
      text-decoration: none;
      transition: color 1s;
      :hover {
        color: #81308F;
      }
    }
`;
