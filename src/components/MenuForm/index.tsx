import React from "react";
import { Container, Navigation, DropBoxLog, Form } from "./styles";


const MenuForm: React.FC = () => {
   
    function handleToggle(){
        if(window.toggleActiveMenu) window.toggleActiveMenu();
    }

    return(
       <Container >
          <Navigation>
                <h1>
                    <DropBoxLog />
                    <span>Dropbox</span>
                </h1>

                <button className="action--close" onClick={handleToggle}>✕</button>
          </Navigation>

          <Form>
              <span className="title">Registre-se</span>
              <span className="subtitle">preencha o formulário abaixo</span>

              <input type="text" placeholder="Nome" />
              <input type="text" placeholder="Nome" />
              <input type="email" placeholder="E-mail" />
              <input type="password" placeholder="Senha" />

              <button>Proseguir</button>
              <span className="terms">Esta página está sujeita à Politica de privacidade e aos termos de serviço.</span>
          </Form>
       </Container>
    )
}

export default MenuForm;