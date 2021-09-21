import PaneTitle from "shared/PaneTitle";
import GroupCover from "assets/image/community.jpg"
import Pressable from "shared/Pressable";
const Shortcuts = () => {
  return (
      <>
        <PaneTitle>Shorcuts</PaneTitle>
        <Pressable to="/" src={GroupCover}>Rizal Technological University</Pressable>
        <Pressable to="/" src={GroupCover}>BS Information Technology</Pressable>
        <Pressable to="/" src={GroupCover}>Philippine Science Forum</Pressable>
        <Pressable to="/" src={GroupCover}>Elite Math Society</Pressable>
        <Pressable to="/" src={GroupCover}>Future Scientist Club</Pressable>
        <Pressable to="/" src={GroupCover}>Philippine IT Security Forum</Pressable>
        <Pressable to="/" src={GroupCover}>National Chess Team</Pressable>
        <Pressable to="/" src={GroupCover}>Upwork Philippines</Pressable>
      </>
  )
}

export default Shortcuts;