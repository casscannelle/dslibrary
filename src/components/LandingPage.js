import React from "react";
import CustomContainer from "../stories/CustomContainer";
import { Header } from "../stories/Header";
import { Button } from "../stories/Button";

function LandingPage ( ) {

    return (
        <div>
        <Header/> 
        <CustomContainer>
        <h2>Página montada para testes</h2>
        <p>Conteúdo para o teste usando o componente de container.</p>
        <Button primary="true" label="Clique aqui"/>
        </CustomContainer>
      </div>
    )
}

export default LandingPage;