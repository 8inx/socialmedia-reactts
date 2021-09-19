import styled from "styled-components";
import PaneTitle from "shared/PaneTitle";
import { appScrollbar } from "config/constants";
import BirthdayReminders from "components/BirthdayReminders";
import Sponsored from "components/Sponsored";
import PageBreak from "shared/PageBreak";

const RightbarContainer = styled.div`
  ${appScrollbar}

  flex: 1.5;
  position: sticky;
  top: 56px;
  height: calc(100vh - 56px);
  padding: 8px;
  padding-top: 1rem;
`

const Rightbar = () => {
  return (
      <RightbarContainer>
        <BirthdayReminders/>
        <PageBreak/>
        <Sponsored/>
        <PageBreak/>
        <PaneTitle>Contacts</PaneTitle>
      </RightbarContainer>
  )
}

export default Rightbar;