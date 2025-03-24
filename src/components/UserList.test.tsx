import { render, screen, within } from "@testing-library/react";

import UserList from "./UserList";

const renderComponent = () => {
  const users = [
    { name: "jane", email: "jane@email.co" },
    { name: "sam", email: "sam@email.co" },
  ];

  render(<UserList users={users} />);

  return { users };
};

test("render one row per user", () => {
  // render
  renderComponent();
  // help with the query
  // screen.logTestingPlaygroundURL();

  //find all the rows in the table
  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  // assertion : correct number of rows in the table

  expect(rows).toHaveLength(2);
});

test("render the email and name of each user", () => {
  // render
  const { users } = renderComponent();

  for (const user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
