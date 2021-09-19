import PaneTitle from "shared/PaneTitle";
import Pressable from "shared/Pressable";
import IconGift from "assets/icons/gift.png"
import styled from "styled-components";

const TextBold = styled.span`
  font-weight: ${props => props.theme.fw.bold};
`
const BirthdayReminders = () => {
  return (
      <>
        <PaneTitle>Birthdays</PaneTitle>
        <Pressable to="/" src={IconGift}>
          <p><TextBold>Dale Acebo</TextBold>'s birthday is today</p>
        </Pressable>
      </>
  )
}

export default BirthdayReminders;