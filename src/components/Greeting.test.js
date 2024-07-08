import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";


describe('Greeting component', ()=>{
    test("renders Hello World as a text", () => {
        // Arrange
        render(<Greeting />);
      
        // Act
      
        // Assert
        const helloWorldElement = screen.getByText("Hello, World!", { exact: false });
        expect(helloWorldElement).toBeInTheDocument();
      });

      test('renders "good to see you" if the button was NOT clicked', ()=>{
          // Arrange
        render(<Greeting />);


         // Act


        // Assert
        const paragraphElement = screen.getByText("It's good to see you!", {exact: false});
        expect(paragraphElement).toBeInTheDocument();
      })

      test('renders "Changed!" if the button was clicked', ()=>{
         // Arrange
        render(<Greeting />);

        // Act
        const buttonElement = screen.getByRole('button');
        buttonElement.click();

        // Assert
        const paragraphElement = screen.getByText("Changed!", {exact: false});
        expect(paragraphElement).toBeInTheDocument();
      })

      test('does not render "good to see you" if the button was clicked', ()=>{
        // Arrange
        render(<Greeting />);

        // Act
        const buttonElement = screen.getByRole('button');
        buttonElement.click();

        // Assert
        const paragraphElement = screen.queryByText("It's good to see you!", {exact: false});
        expect(paragraphElement).not.toBeInTheDocument();
      })

})


