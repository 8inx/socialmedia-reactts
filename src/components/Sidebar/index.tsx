import styled from "styled-components";
import { appScrollbar, media } from "config/constants";
import Bookmarks from "components/Bookmarks";
import PageBreak from "shared/PageBreak";
import Shortcuts from "components/Shortcuts";


const SidebarContainer = styled.div`
  ${appScrollbar}
  flex: 1.5;
  position: sticky;
  top: 56px;
  min-width: 320px;
  height: calc(100vh - 56px);
  padding: 8px;
  padding-top: 1rem;

  ${media.large} {
    display: none;
  }
`

const Sidebar = () => {
  return (
      <SidebarContainer>
        <Bookmarks/>
        <PageBreak/>
        <Shortcuts/>
      </SidebarContainer>
  )
}

export default Sidebar;