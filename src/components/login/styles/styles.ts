import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .Logo {
    img {
      width: 70vw;
      height: 100vh;
    }
  }
  .FormContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .ant-row {
      justify-content: center;
      width: 30vw;
    }
    .ant-form-item-row {
      display: block !important;
      width: 50vw;
      color: #6a5acd;
    }

    .ant-input {
      background-color: #fff;
      color: #6a5acd !important;
    }

    .ant-form-item-required {
      color: #6a5acd !important;
    }

    button.ant-btn-primary {
      background-color: #6a5acd;
      color: #fff;
      border: none;
      transition: 0.3s ease-in-out;

      &:hover {
        opacity: 0.9;
      }
    }

    .ant-btn-link {
      border: none;
      text-decoration: none;
      padding: 0;
      margin: 0;

      &:hover {
        opacity: 0.9;
      }
    }
  }
`;
