import { render, screen, fireEvent } from "@testing-library/react";
import Button from ".";

test("onClick function is called when button is clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>foobar</Button>);
    const button = screen.getByText("foobar").closest("button");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
});
