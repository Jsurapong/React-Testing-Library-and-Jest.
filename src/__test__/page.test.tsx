import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Page from "../app/page";

test("can receive a new user and show it on a list", async () => {
  const user = userEvent.setup();
  // render
  render(<Page />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  await user.click(nameInput);
  await user.keyboard("John Doe");

  await user.click(emailInput);
  await user.keyboard("john@email.co");

  const button = screen.getByRole("button");
  await user.click(button);

  const name = screen.getByRole("cell", { name: "John Doe" });
  const email = screen.getByRole("cell", { name: "john@email.co" });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
