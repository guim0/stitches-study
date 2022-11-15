import { styled } from "../../stitches.config";

export const Button = styled("button", {
  backgroundColor: "Gainsboro",
  border: "1px solid",
  borderRadius: "25px",
  fontSize: "13px",
  padding: "10px 15px",
  "&:hover": {
    backgroundColor: "lightgray",
  },
  variants: {
    color: {
      blue: {
        color: "White",
        backgroundColor: "#7FA9BE",
        "&:hover": {
          backgroundColor: "#6196B2",
        },
      },
      purple: {
        color: "White",
        backgroundColor: "#A06CD5",
        "&:hover": {
          backgroundColor: "#6247AA",
        },
      },

      green: {
        color: "White",
        backgroundColor: "#2a9d8f",
        "&:hover": {
          backgroundColor: "#264653",
        },
      },
    },
    size: {
      lg: {
        fontSize: "16px",
        padding: "14px 20px",
      },
      md: {
        fontSize: "14px",
        padding: "12px 16px",
      },
    },
  },
});
