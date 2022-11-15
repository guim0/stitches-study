import { styled } from "../../stitches.config";
export const Container = styled("section", {
  width: "100vw",
  height: "100vh",
  padding: "2rem 2rem",
  textAlign: "center",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "> h1": {
    marginBottom: "2rem",
  },

  "@lg": {
    backgroundColor: "#ffb703",
  },

  "@md": {
    backgroundColor: "#023047",
    "> h1": {
      color: "white",
    },
  },
  "@sm": {
    height: "160vh",
    backgroundColor: "#219ebc",
    "> h1": {
      color: "black",
    },
  },
  "@xm": {
    backgroundColor: "#8ecae6",
  },
});
