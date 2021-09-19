import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  height: 56px;
  width: 100%;
  padding: 0 2rem;
  background: ${props => props.theme.color.bg.primary};
  box-shadow: ${props => props.theme.shadow};
`

const Navbar = () => {
  return (
      <NavbarContainer>

      </NavbarContainer>
  )
}

export default Navbar;