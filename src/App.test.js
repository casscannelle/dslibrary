import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import CircularProgress from '../src/stories/CircularProgress'
import LandingPage from './components/LandingPage';

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

//Teste Snapshot

test ('Snapshot', async () => {
  const {container} = render(<App/>);

  expect(container).toMatchSnapshot()
})


test ('Snapshot2', async () => {
  const {container} = render(<CircularProgress />);

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

describe('Teste do useEffect', () => {
  it('contador atualiza com cliques', async () => {
    const { getByRole } = render(<App />);

    const inputButton = getByRole('button', {name: "Enviar" })
    fireEvent.click(inputButton);

    await waitFor(() => {
      expect(document.title).toBe('Você clicou 1 vezes.');
    });
  });
});