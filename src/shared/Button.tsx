import { color } from "config/constants";
import styled, { css } from "styled-components";

interface ButtonProps {
  primary?: boolean,
  block?: boolean
}

const Button = styled.button<ButtonProps>`
  cursor: pointer;
  padding: 8px;
  border: none;
  border-radius: 4px;
  font-weight: ${props => props.theme.fw.medium};
  color: ${props => props.theme.color.text.primary};
  background: ${props => props.theme.color.bg.button};

  &:hover {
    filter: ${props => props.theme.filter};
  }

  ${({primary}) => primary && css`
    color: ${color.white};
    background: ${color.navyBlue};
  `}

  ${({block}) => block && css`
    width: 100%;
  `}
`

export default Button;