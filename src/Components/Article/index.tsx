import { styled } from "../../stitches.config";

export const Article = styled("article", {
  backgroundColor: "#edede9",
  fontSize: "24px",
  textAlign: "justify",
  borderRadius: "10px",
  padding: "15px 20px",
  margin: "20px",
  "@lg": {
    maxWidth: "940px",
    margin: "15px auto",
  },

  "@md": {
    fontSize: "18px",
    textAlign: "center",
    margin: "15px",
    padding: "10px 15px",
  },
});
