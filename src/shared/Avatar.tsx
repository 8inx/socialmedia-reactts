import { color } from "config/constants";
import { CSSProperties, FunctionComponent } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  
  &.hasNewStory {
    width: 80%;
    height: 80%;
  }
`
const StoryStatus = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: ${color.navyBlue};
  z-index: -100;

  &::after {
    content: '';
    position: absolute;
    top: 5%;
    left: 5%;
    width: 90%;
    height: 90%;
    border-radius: 50%;
    background: ${props => props.theme.color.bg.primary};
  }
`
const OnlineStatus = styled.span`
  position: absolute;
  bottom: 5%;
  right: 5%;
  width: 30%;
  height: 30%;
  border-radius: 50%;
  background: ${props => props.theme.color.bg.primary};

  &::after {
    content: '';
    position: absolute;
    top: 10%;
    left: 10%;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    background: ${color.green};
  }
  
`

interface AvatarProps {
  src: string,
  isOnline?: boolean,
  hasNewStory?: boolean,
  style?: CSSProperties
}

const Avatar: FunctionComponent<AvatarProps> = (props) => {

  return (
      <Container style={props.style && props.style}>
        {props.hasNewStory && <StoryStatus/>}
        <Image src={props.src} className={props.hasNewStory && "hasNewStory"}/>
        {props.isOnline && <OnlineStatus/>}
      </Container>
  )
}

export default Avatar;