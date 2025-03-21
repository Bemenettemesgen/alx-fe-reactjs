import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
});

test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Test Todo" } });
    fireEvent.click(button);

    expect(screen.getByText("Test Todo")).toBeInTheDocument();
});

test("toggles a todo's completion", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");

    // Toggle completed
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");

    // Undo completion
    fireEvent.click(todo);
    expect(todo).not.toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText("Delete")[0];
    const todo = screen.getByText("Learn React");

    fireEvent.click(deleteButton);
    expect(todo).not.toBeInTheDocument();
});
