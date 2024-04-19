import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

//Testes Simples
test("Botão com getByRole", () => {
const { getByRole } = render(<App />);
const button = getByRole("button", { name: "Enviar" });
expect(button).toBeInTheDocument();
expect(button).toHaveTextContent("Enviar");
});

test('Encontrar texto na página', () => {
  render(<App />);
  const linkElement = screen.queryByText(/Página/i);
  expect(linkElement).toBeInTheDocument();
});

test('Busca por Placeholder', () => {
  render(<App />);
  const linkElement = screen.getByPlaceholderText(/Nome/i);
  expect(linkElement).toBeInTheDocument();
});

//Teste do caminho Feliz
test('Renderiza botão quando clicado', () => {
  const { getByText, queryByText } = render(<App />);
  const textoAntesDoClique = queryByText("Botão Clicado");
  expect(textoAntesDoClique).toBeNull();
  
  const botao = getByText("Clique aqui");
  
  fireEvent.click(botao);

  const textoAposClique = getByText("Botão Clicado");
  expect(textoAposClique).toBeInTheDocument();
});


//Teste que retorna Erro
test("renders button correctly and does not show text when clicked", () => {
  const { getByText, queryByText } = render(<App />);
  const textoAntesDoClique = queryByText("Botão Clicado");
  expect(textoAntesDoClique).toBeNull();

  const botao2 = getByText("Clique aqui");
  fireEvent.click(botao2);

  const textoAposClique = queryByText("Botão Clicado");
  expect(textoAposClique).toBeNull();
});



//Teste Snapshot

test ('Snapshot', async () => {
  const {container} = render(<App/>);

  expect(container).toMatchSnapshot()
})


//Teste de comportamento
test('Teste de comportamento botão', async () => {
  render(<App/>);

  const button2 = screen.getByRole('button', {name: "Clique aqui" })
  expect(button2).toBeInTheDocument()

  fireEvent.click(button2)

  const showingText = screen.queryByText("Botão Clicado")
  expect(showingText).toBeInTheDocument()
});

//Teste que envolve useEffect