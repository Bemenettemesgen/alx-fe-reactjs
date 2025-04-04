import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import TodoList from "../components/TodoList";
test("renders the TodoList component", () => {
    render(<TodoList />);
    expect(screen.getByText("Todo List")).toBeInTheDocument();
});