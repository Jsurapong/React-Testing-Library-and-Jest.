import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import UserForm from "./UserForm";

test("renders learn react link", () => {
  // render
  render(<UserForm onUserAdd={jest.fn} />);

  //manipulate

  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // assertion
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

// test("it calls onUserAdd when the form is submitted", async () => {
//   const user = userEvent.setup();

//   // not the best implementation
//   const argList: { name: string; email: string }[] = [];
//   const callback = ({ name, email }: { name: string; email: string }) => {
//     argList.push({ name, email });
//   };
//   // try to render my component
//   render(<UserForm onUserAdd={callback} />);

//   // find the two inputs
//   const [nameInput, emailInput] = screen.getAllByRole("textbox");
//   // simulate typing in the name;
//   await user.click(nameInput);
//   await user.keyboard("John Doe");

//   // simulate typing in the email;
//   await user.click(emailInput);
//   await user.keyboard("john@email.co");
//   //   // find the button

//   const button = screen.getByRole("button");
//   //   //   //simulate clicking the button
//   await user.click(button);

//   //   // assertion to make sure 'onUserAdd' was called with the correct arguments
//   expect(argList).toHaveLength(1);
//   expect(argList[0]).toEqual({ name: "John Doe", email: "john@email.co" });
// });

test("it calls onUserAdd when the form is submitted", async () => {
  const user = userEvent.setup();
  const mockOnUserAdd = jest.fn();

  // try to render my component
  render(<UserForm onUserAdd={mockOnUserAdd} />);

  // find the two inputs
  //   const [nameInput, emailInput] = screen.getAllByRole("textbox");
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  // simulate typing in the name;
  await user.click(nameInput);
  await user.keyboard("John Doe");

  // simulate typing in the email;
  await user.click(emailInput);
  await user.keyboard("john@email.co");
  //   // find the button

  const button = screen.getByRole("button");
  //   //   //simulate clicking the button
  await user.click(button);

  //   // assertion to make sure 'onUserAdd' was called with the correct arguments
  expect(mockOnUserAdd).toHaveBeenCalled();
  expect(mockOnUserAdd).toHaveBeenCalledWith({
    name: "John Doe",
    email: "john@email.co",
  });
});
