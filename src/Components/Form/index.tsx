import { styled } from "../../stitches.config";

export const Form = styled("form", {
  backgroundColor: "#edede9",
  borderRadius: "10px",
  padding: "15px 20px",
  margin: "20px",
});
export const InputField = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  margin: "10px auto",

  "> label": {
    fontSize: "16px",
    fontWeight: "600",
  },
});
