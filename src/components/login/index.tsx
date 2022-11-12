import React from "react";
import { FormLogin } from "../../styles/style";
import { Button } from "../../tools/Button";

const Login: React.FC = () => {
  return (
    <>  
        <FormLogin>
            <div className="divMaster">
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
                        <Button>Entrar</Button>
                    </div>
                </form>
                <a href="">Sou novo aqui!</a>
                <a href="">Esqueci minha senha!</a>
            </div>
        </FormLogin>
    </>
  );
};
export default Login;
