import Avatar from "shared/Avatar";
import PaneTitle from "shared/PaneTitle";
import Pressable from "shared/Pressable";
import ProfilePic from "assets/image/profile.jpg"

const Contacts = () => {
  return (
      <>
        <PaneTitle>Contacts</PaneTitle>

        <Pressable to="/">
          <Avatar src={ProfilePic} isOnline={true}/>
          <span>Jane Doe</span>
        </Pressable>

        <Pressable to="/">
          <Avatar src={ProfilePic} isOnline={true} hasNewStory={true}/>
          <span>Sandra Cruz</span>
        </Pressable>

        <Pressable to="/">
          <Avatar src={ProfilePic} isOnline={true} hasNewStory={true}/>
          <span>Sandra Cruz</span>
        </Pressable>

        <Pressable to="/">
          <Avatar src={ProfilePic}/>
          <span>Angel Locsin</span>
        </Pressable>

        <Pressable to="/">
          <Avatar src={ProfilePic} hasNewStory={true}/>
          <span>Carley Smith</span>
        </Pressable>
      </>
  )
}

export default Contacts;