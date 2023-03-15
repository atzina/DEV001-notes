import App from "../App";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Wall from "./Wall";

beforeEach(() => {
  render(
    <BrowserRouter>
      <Wall />
    </BrowserRouter>
  );
});

describe("Wall", () => {
  it("testea Wall", () => {
    render(
      <BrowserRouter>
        <Wall />
      </BrowserRouter>
    );
    screen.debug();
  });
});

it("que existe placeholder en los inputs", () => {
  const inputTitle = screen.getByPlaceholderText(/título/i);
  expect(inputTitle).toBeInTheDocument();
  const inputNote = screen.getByPlaceholderText(/nota de viaje/i);
  expect(inputNote).toBeInTheDocument();
});

it("testea si existe la imagen", () => {
  const altImage = screen.getByAltText(/carro viajando/i);
  expect(altImage).toBeInTheDocument();
});

it("testea si existe el boton guardar nota", () => {
  const btnGuardar = screen.getByText(/guardar nota/i);
  expect(btnGuardar).toBeInTheDocument();
 // expect(btnGuardar).getByRole(<button/>);
});

it("testea si existe el boton regresar al inicio", () =>{
  const btnHome = screen.getByRole('button',{ name:'Regresar al Inicio'});
  expect(btnHome).toBeInTheDocument();
});
