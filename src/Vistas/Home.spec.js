import App from "../App";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

beforeEach(()=> {
  render(
    <BrowserRouter>
    <App />
  </BrowserRouter>
  );
})

describe("home", () => {
  it("testea Home", () => {
    <BrowserRouter>
        <App />
      </BrowserRouter>
  });

  it("testea si existe en título", () => {
    
    screen.debug();
    const title = screen.getByText(/diario de viaje/i);
    expect(title).toBeInTheDocument();
  });
});

it("testea si existe en título y boton", () => {
 
  
  const alt = screen.getByAltText(/carroviaje/i);
  const btn = screen.getByText(/google/i);

  expect(alt).toBeInTheDocument();
  expect(btn).toBeInTheDocument();
});
