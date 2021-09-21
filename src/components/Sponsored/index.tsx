import styled from "styled-components";
import ImageAd1 from "assets/image/ad1.jpg"
import ImageAd2 from "assets/image/ad2.jpg"
import { Link } from "react-router-dom";
import PaneTitle from "shared/PaneTitle";
import Pressable from "shared/Pressable";

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  padding: 8px;
  gap: 8px;
  color: ${props => props.theme.color.text.primary};
  border-radius: 8px;
  transition: all 300ms;
  &:hover {
    background: ${props => props.theme.color.divider};
  }
`

const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 4px;
  object-fit: cover;
`
const Sponsored = () => {
  return (
      <>
        <PaneTitle>Sponsored</PaneTitle>
        <StyledLink href="https://shopee.ph/" target="_blank">
          <StyledImage src={ImageAd1}/>
          <span>
            <h4>Shopee</h4>
            <small>ads.shopee.com</small>
          </span>
        </StyledLink>
        <StyledLink href="https://www.huawei.com" target="_blank">
          <StyledImage src={ImageAd2}/>
          <span>
            <h4>Huawei Mobile</h4>
            <small>ads.huawei.com</small>
          </span>
        </StyledLink>
      </>
  )
}

export default Sponsored;