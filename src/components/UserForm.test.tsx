import { render, screen } from "@testing-library/react";
// import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("renders learn react link", () => {
  // render
  render(
    <UserForm
      onUserAdd={(name: string, email: string) => {
        console.log({ name, email });
      }}
    />
  );

  //manipulate
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // assertion
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});
