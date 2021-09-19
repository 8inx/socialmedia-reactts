import styled from "styled-components";

const PageBreak = styled.div`
  margin: 4px 0;
  width: 100%;
  height:1;
  border-bottom: 1px solid ${props => props.theme.color.divider};
`

export default PageBreak;