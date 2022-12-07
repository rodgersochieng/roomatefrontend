import styled from "styled-components";

const COLORS = {
  primary: {
    "--main": "#13105d",
    "--accent": "darkorange",
  },
  secondary: {
    "--main": "#13105d",
    "--accent": "darkorange",
  },
};

function Button({ variant = "fill", color = "primary", ...props }) {
  let Component;
  if (variant === "fill") {
    Component = FillButton;
  } else if (variant === "outline") {
    Component = OutlineButton;
  }

  return <Component style={COLORS[color]} {...props} />;
}

const ButtonBase = styled.button`
  cursor: pointer;
  font-size: 1rem;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 8px 16px;
  text-decoration: none;
`;

const FillButton = styled(ButtonBase)`
  background-color: var(--main);
  color: var(--accent);

  &:hover {
    opacity: 0.9;
  }
`;

const OutlineButton = styled(ButtonBase)`
  background-color: #13105d;
  color: var(--main);
  border: 2px solid var(--main);

  &:hover {
    background: darkorange;
  }
`;

export default Button;
