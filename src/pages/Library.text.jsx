// testing the library routing

import React from "react";
import { render, screen } from "@testing-library/react";
import LibraryPage from "../components/LibraryPage";

jest.mock("../components/SideBar", () => {
  return () => <div data-testid="sidebar">Sidebar Component</div>;
});

describe("LibraryPage", () => {
  test("renders LibraryPage component", () => {
    render(<LibraryPage />);

    expect(screen.getByText("Library")).toBeInTheDocument();

    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
});
