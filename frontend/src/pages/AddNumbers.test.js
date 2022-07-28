import { render, fireEvent, screen } from "@testing-library/react";
import AddNumbers from "./AddNumbers"

//test block
test("increments counter", () => {
    // render the component on virtual dom
    render(<AddNumbers />);

    //select the elements you want to interact with
    const result = screen.getByTestId("result");
    const addBtn = screen.getByTestId("add");
    const firstNum = screen.getByTestId('firstNum')
    const secNum = screen.getByTestId('secNum')

    //interact with those elements
    fireEvent.click(addBtn);
    //assert the expected result
    expect(result).toHaveTextContent("0");
});