import { useState, useEffect } from "react";
import CustomContainer from "../stories/CustomContainer";
import { Header } from "../stories/Header";
import { Button } from "../stories/Button";
import { Page } from "../stories/Page";
import TextInput from "../stories/TextInput";

function LandingPage ( ) {
    const [show, setShow] = useState(false)
    const [contador, setContador] = useState(0);

    useEffect(() => {
        document.title = `Você clicou ${contador} vezes.`;
    });

    return (
        <div>
        <Header/> 
        <CustomContainer>
        <h2>Página montada para testes</h2>
        <p>Conteúdo para o teste usando o componente de container.</p>
        <Button onClick={()=>setShow(!show)} primary="true" label="Clique aqui"/>{show && <p>Botão Clicado</p>}
        </CustomContainer>

        <CustomContainer>
        <h2>Mais um container</h2>
        <p>Usando o inputfield</p>
        <TextInput placeholder="Nome"/>
        <div>
            <Button label="Enviar" onClick={() => setContador(contador + 1)} />
            {contador > 0 && <p>Você clicou {contador} vezes.</p>}
        </div>
        </CustomContainer>
        
      </div>
    )
}

export default LandingPage;