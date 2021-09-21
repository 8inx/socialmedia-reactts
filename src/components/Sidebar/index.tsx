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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, tenetur odio amet et illum quos doloremque vitae provident, ullam asperiores magni reiciendis voluptatem labore dolorem totam. Fugiat porro odit sapiente commodi totam quidem dicta consequuntur officia, nesciunt alias optio quam eum temporibus modi tempora tempore sunt illo corrupti, quisquam maxime. Soluta, accusamus voluptates unde id quibusdam obcaecati nostrum, ipsum modi hic, error veniam. Eius debitis, ratione cum porro, officia, ut similique dolores nisi iure sit dolor rem repellat error aut quas unde tempora. Suscipit qui consequuntur nulla nostrum porro veniam assumenda aut rem, nesciunt commodi vitae natus sunt magnam recusandae at aperiam alias dolore, ut fugit beatae eum! Nesciunt, ut sint! Iusto delectus, architecto perspiciatis numquam aperiam labore atque minus aliquid libero magni explicabo quae, veritatis quibusdam, qui dignissimos! Quasi possimus rerum temporibus, quas hic eos itaque harum voluptatum delectus molestias ex. Beatae maiores ducimus, fuga maxime voluptatem dolorem consectetur neque, blanditiis facere, nostrum ut assumenda dolores repellat consequuntur voluptate error repudiandae. Voluptatibus, optio a quaerat porro hic omnis vitae similique, expedita voluptatem amet odit dignissimos voluptas numquam autem ipsum neque, consectetur tempore cupiditate earum voluptates aperiam sed explicabo aspernatur. Esse iusto maiores, optio deserunt quaerat explicabo ex nesciunt nam itaque cumque quisquam quasi dicta adipisci fuga iure quod? Voluptate earum asperiores ipsum illum ad iure? Porro omnis error voluptatibus, facilis temporibus expedita eaque voluptas ea dolor consequuntur earum aliquid reiciendis maiores fugit a, recusandae commodi minima. Iusto animi voluptates voluptas nam neque, consequatur dolor iure dolorum at nesciunt! Quo laboriosam quasi, quis, tempore ipsum, enim deleniti accusamus ipsa velit qui rem perspiciatis ad quidem. Quos provident praesentium sapiente. Rerum voluptatibus nostrum aspernatur tempora? Quibusdam repellat explicabo illo beatae, porro impedit autem. Aut iusto dignissimos nostrum repellat odio harum quam sunt expedita cum. Porro aliquid quod, repellat ipsam iste est.
      </SidebarContainer>
  )
}

export default Sidebar;