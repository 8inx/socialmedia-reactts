import styled from "styled-components";
import ImageAd1 from "assets/image/ad1.jpg"
import ImageAd2 from "assets/image/ad2.jpg"
import { Link } from "react-router-dom";
import PaneTitle from "shared/PaneTitle";

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  gap: 8px;
`


const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 4px;
  object-fit: cover;
`

const StyledLink = styled(Link)`
  color: ${props => props.theme.color.text.primary};
`

const Sponsored = () => {
  return (
      <>
        <PaneTitle>Sponsored</PaneTitle>
        <FlexWrapper>
          <StyledImage src={ImageAd1}/>
          <StyledLink to="/">
            <h4>Shopee</h4>
            <small>ads.shopee.com</small>
          </StyledLink>
        </FlexWrapper>
        <FlexWrapper>
          <StyledImage src={ImageAd2}/>
          <StyledLink to="/">
            <h4>Huawei Mobile</h4>
            <small>ads.huawei.com</small>
          </StyledLink>
        </FlexWrapper>
      </>
  )
}

export default Sponsored;