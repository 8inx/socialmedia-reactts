import { FC, CSSProperties, ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Button = styled(Link)`
  cursor: pointer;
  display:flex;
  align-items: center;
  gap: 1rem;
  height: 44px;
  padding: 8px;
  border-radius: 8px;
  color: ${props => props.theme.color.text.primary};
  transition: all 300ms;

  &:hover {
    background: ${props => props.theme.color.divider};
  }
`;

const Image = styled.img`
  width: 28px;
  height:28px;
  border-radius: 8px;
  object-fit: cover;
  font-size: 10px;
`

const IconWrapper = styled.span`
  display: block;
  width: 36px;
  height:36px;
  padding: 8px;
  border-radius: 50%;
  background: ${props => props.theme.color.bg.button};
`

const IconEndWrapper = styled(IconWrapper)`
  margin-left: auto;
  padding: 4px;
  background: transparent;
`


interface ButtonProps {
  to: string,
  style?: CSSProperties,
  onClick?: () => void

  src?: string,
  icon?: ReactNode,
  iconEnd?: ReactNode,
}

const Pressable:FC<ButtonProps> = (props) => {

  const {src, icon, iconEnd, children, ...buttonProps} = props 

  return (
      <Button {...buttonProps}>
        {src && <Image src={src} alt="icon"/>}
        {icon && <IconWrapper>{icon}</IconWrapper>}
        {children}
        {iconEnd && <IconEndWrapper>{iconEnd}</IconEndWrapper>}
      </Button>
  )
}

export default Pressable;