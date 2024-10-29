import { render, screen } from "@testing-library/react";

import Header from ".";

describe("Header", () => {
  it("Should show Header", () => {
    const title = "Hello World";
    const { debug } = render(<Header title={title} />);
    expect(screen.getByText(title));
    debug();
  });
});
