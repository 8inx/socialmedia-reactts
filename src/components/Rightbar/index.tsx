import styled from "styled-components";
import PaneTitle from "shared/PaneTitle";
import { appScrollbar, media } from "config/constants";
import BirthdayReminders from "components/BirthdayReminders";
import Sponsored from "components/Sponsored";
import PageBreak from "shared/PageBreak";
import Contacts from "components/Contacts";

const RightbarContainer = styled.div`
  ${appScrollbar}

  flex: 1.5;
  position: sticky;
  top: 56px;
  min-width: 320px;
  height: calc(100vh - 56px);
  padding: 8px;
  padding-top: 1rem;

  ${media.medium} {
    display: none;
  }
`

const Rightbar = () => {
  return (
      <RightbarContainer>
        <Sponsored/>
        <PageBreak/>
        <BirthdayReminders/>
        <PageBreak/>
        <Contacts/>
      </RightbarContainer>
  )
}

export default Rightbar;