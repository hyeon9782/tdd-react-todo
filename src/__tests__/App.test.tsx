import { render } from "@testing-library/react";

import App from "../App";

describe("List", () => {
  it("render App", async () => {
    const { container } = render(<App />);
    expect(container).toHaveTextContent("아무 일도 하기 싫다.");
  });
});
