import React, { useCallback } from "react";
import { FormLogin } from "../../styles/style";
import { Button } from "../../tools/Button";
import  imageLogo from "../../assets/logo.png";
import * as Yup from 'yup';

import {  useAuth } from '../../Context/AuthContext/useAuth'

interface SignInFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  return (
    <>  
        <FormLogin>
            <div className="divMaster">
                <div className="logo">
                    <img src={imageLogo} alt="logo do site" />
                </div>
                <div className="formLogin">
                    <h1>Academia de Dados</h1>
                    <form action="">
                        <div>
                            <label htmlFor="">Usuário</label>
                            <input type="text" placeholder="Digite seu e-mail" id="user"/>
                        </div>
                        <div>
                            <label htmlFor="">Digite sua senha</label>
                            <input type="password" placeholder="Digite sua senha" id="user"/>
                        </div>
                        <div>  
                            <button onSubmit={() => console.log('ola')}>
                                <Button>Entrar</Button>
                            </button>
                        </div>
                    </form>
                    <a href="">Sou novo aqui!</a>
                    <a href="">Esqueci minha senha!</a>
                </div>
            </div>
        </FormLogin>
    </>
  );
};
export default Login;