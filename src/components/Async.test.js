import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders post if request is successful", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
        json: async () => [{ id: 1, title: 'First Post' }],
        
    })
    // Arrange
    render(<Async />);

    // Act

    // Assert
    const listitemElements = await screen.findAllByRole('list');
    expect(listitemElements).not.toHaveLength(0);
  });
});
