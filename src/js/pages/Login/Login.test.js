import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login, { RegisterForm, LoginForm } from "./Login";
import user from "@testing-library/user-event";

describe("Login", () => {
  test("Login is rendered correctly", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const navElement = screen.getByRole("navigation");
    expect(navElement).toBeInTheDocument();
    const linkElements = screen.getAllByRole("link");
    expect(linkElements).toHaveLength(2);
  });
});

describe("Register Form", () => {
  test("is rendered correctly", () => {
    render(<RegisterForm />);
    const formElement = screen.getByRole("form");
    expect(formElement).toBeInTheDocument();
    const nameElement = screen.getByRole("textbox", { name: "Name" });
    expect(nameElement).toBeInTheDocument();
    const emailElement = screen.getByRole("textbox", { name: "Email" });
    expect(emailElement).toBeInTheDocument();
    const passwordElement = screen.getByLabelText("Password");
    expect(passwordElement).toBeInTheDocument();
    const submitElement = screen.getByRole("button");
    expect(submitElement).toBeInTheDocument();
  });

  let submitButton;
  const setup = () => {
    render(<RegisterForm />);
    submitButton = screen.getByRole("button");
  };

  test("Name is required", async () => {
    setup();
    await user.click(submitButton);
    const nameErrorElement = screen.getByText("Name is required");
    expect(nameErrorElement).toBeInTheDocument();
  });

  test("Email is required", async () => {
    setup();
    await user.click(submitButton);
    const emailErrorElement = screen.getByText("Email is required");
    expect(emailErrorElement).toBeInTheDocument();
  });

  test("Password is required", async () => {
    setup();
    await user.click(submitButton);
    const passwordErrorElement = screen.getByText("Password is required");
    expect(passwordErrorElement).toBeInTheDocument();
  });

  test("Email validates data correctly", async () => {
    render(<RegisterForm />);
    const submitButton = screen.getByRole("button");
    const emailElement = screen.getByRole("textbox", { name: /email/i });
    await user.type(emailElement, "asd");
    await user.click(submitButton);
    const emailErrorElement = screen.getByText("Email must have appropriate format");
    expect(emailErrorElement).toBeInTheDocument();
  });

  test("Password validates data correctly", async () => {
    render(<RegisterForm />);
    const submitButton = screen.getByRole("button");
    const passwordElement = screen.getByLabelText(/password/i);
    await user.type(passwordElement, "asd");
    await user.click(submitButton);
    const passwordErrorElement = screen.getByText(
      "Password must contain a capital letter, a digit and a special character"
    );
    expect(passwordErrorElement).toBeInTheDocument();
  });
});

describe("Login Form", () => {
  test("is rendered correctly", () => {
    render(<LoginForm />);
    const formElement = screen.getByRole("form");
    expect(formElement).toBeInTheDocument();
    const emailElement = screen.getByRole("textbox", { name: "Email" });
    expect(emailElement).toBeInTheDocument();
    const passwordElement = screen.getByLabelText("Password");
    expect(passwordElement).toBeInTheDocument();
    const submitElement = screen.getByRole("button");
    expect(submitElement).toBeInTheDocument();
  });

  test("validates data correctly", async () => {
    const users = [];
    render(<LoginForm users={users} />);
    const emailElement = screen.getByLabelText(/email/i);
    const passwordElement = screen.getByLabelText(/password/i);
    await user.type(emailElement, "randomInexistentEmail@asd.com");
    await user.type(passwordElement, "asd");
    const submitButton = screen.getByRole("button");
    await user.click(submitButton);
    const formErrorElement = screen.getByText("The username or password is incorrect");
    expect(formErrorElement).toBeInTheDocument();
  });
});
