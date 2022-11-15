import React, { useState } from "react";
import "./App.css";
import { Article } from "./Components/Article";
import { Button } from "./Components/Button";
import { Container } from "./Components/Container";
import { Form, InputField } from "./Components/Form";
import { styled } from "./stitches.config";

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    window.alert(`Hello, ${name}`);
  };
  return (
    <Container>
      <h1>Stitches</h1>
      <ButtonTabs>
        <Button>Button</Button>
        <Button color="blue">Button blue</Button>
        <Button color="purple">Button purple</Button>
        <Button color="green">Button green</Button>
        <Button color="purple" size="md">
          Button Medium
        </Button>
        <Button color="blue" size="lg">
          Button Large
        </Button>
      </ButtonTabs>

      <Article>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas sunt ex
          sequi molestias dolorum harum? Excepturi amet itaque neque eveniet
          quis possimus reiciendis accusantium provident, soluta autem labore
          dolor impedit?
        </p>
      </Article>
      {/* @ts-ignore */}
      <Form onSubmit={name && handleSubmit}>
        <InputField>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id=""
            onChange={(e) => setName(e.target.value)}
          />
        </InputField>
        <InputField>
          <label htmlFor="email">E-mail</label>
          <input type="text" name="email" id="" />
        </InputField>
        <Button color="blue">Submit</Button>
      </Form>
      <Disclamer>
        this is just to test{" "}
        <a href="https://stitches.dev/" target="_blank">
          Stitches :)
        </a>
      </Disclamer>
    </Container>
  );
}

const ButtonTabs = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "1rem",

  "@sm": {
    flexDirection: "column",

    flexWrap: "nowrap",
  },
});

const Disclamer = styled("span", {
  "@md": {
    color: "White",
  },
  "> a": {
    textDecoration: "none",
    color: "#219ebc",
  },
});
export default App;
