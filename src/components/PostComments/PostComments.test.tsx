import { fireEvent, render, screen } from "@testing-library/react";
import Post from ".";
import PostComment from ".";

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  test("Deve adicionar 2 comentarios", () => {
    const comentario1 = "Oi";
    const comentario2 = "Ola";

    render(<PostComment />);

    fireEvent.change(screen.getByTestId("textarea-campo"), {
      target: { value: comentario1 },
    });
    fireEvent.click(screen.getByTestId("btn-adicionar"));

    fireEvent.change(screen.getByTestId("textarea-campo"), {
      target: { value: comentario2 },
    });
    fireEvent.click(screen.getByTestId("btn-adicionar"));

    expect(screen.getByText("Oi")).toBeInTheDocument();
    expect(screen.getByText("Ola")).toBeInTheDocument();
    expect(screen.getAllByTestId("li-campo")).toHaveLength(2);
  });
});
