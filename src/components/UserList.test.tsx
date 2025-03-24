import { render, screen, within } from "@testing-library/react";

import UserList from "./UserList";

test("renders learn react link", () => {
  // render
  render(
    <UserList
      users={[
        { name: "jane", email: "jane@email.co" },
        { name: "sam", email: "sam@email.co" },
      ]}
    />
  );

  // help with the query
  // screen.logTestingPlaygroundURL();

  //find all the rows in the table
  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  // assertion : correct number of rows in the table

  expect(rows).toHaveLength(2);
});
