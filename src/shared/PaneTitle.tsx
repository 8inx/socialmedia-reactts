import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 8px 0;
  color: ${props => props.theme.color.text.secondary};
`

const PaneTitle = ({children}) => {
  return (
    <Wrapper>
      <h3>{children}</h3>
    </Wrapper>
  )
}
export default PaneTitle;