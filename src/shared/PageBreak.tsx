import styled from "styled-components";

const HorizontalRule = styled.div`
  margin: 4px 0;
  width: 100%;
  height:1;
  border-bottom: 1px solid ${props => props.theme.color.divider};
`
const PageBreak = () => {
  return (
      <HorizontalRule/>
  )
}

export default PageBreak;