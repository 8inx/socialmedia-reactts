import styled from "styled-components";
import PaneTitle from "shared/PaneTitle";
import { appScrollbar } from "config/constants";

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
        <PaneTitle>Rightbar</PaneTitle>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo quasi atque veritatis commodi, nisi assumenda ullam itaque iste. Laudantium soluta iusto inventore atque illum optio, ipsa aut quo doloremque, cupiditate sunt ex cumque! Aspernatur, quaerat mollitia? Possimus porro ipsum deleniti quisquam facere ducimus cumque sapiente modi molestias esse iure, laborum quam numquam consequatur vel consectetur, quos ipsam recusandae incidunt maiores assumenda laudantium. Incidunt eum voluptatum minus. Ab sed, dolor dolore necessitatibus magni quia voluptatem blanditiis laborum itaque quis ex inventore, cum optio velit provident saepe nihil omnis corporis! Incidunt vitae accusamus voluptate, unde tempora delectus repellendus porro, earum similique doloremque, modi distinctio? Amet, delectus. Laudantium soluta animi velit officiis aperiam eligendi in neque enim, laboriosam cupiditate veniam praesentium nesciunt, tempore ipsam totam quidem quae alias autem possimus deleniti nam, fugit doloribus cumque itaque! Consequatur quos pariatur odio. Incidunt dolorem numquam cupiditate, id amet beatae neque eveniet quasi voluptate tempore suscipit voluptates quam eum vel saepe maiores earum quas perferendis molestias quidem doloremque reprehenderit animi? Dolores accusantium, quas suscipit mollitia alias distinctio enim ipsam ipsum dignissimos repudiandae consectetur eos sed? Placeat porro vel nobis natus eaque, odio voluptate harum doloremque consectetur? Officia cum non nobis perspiciatis id voluptas quibusdam quam quisquam delectus modi consequatur a officiis facere numquam nulla sunt ea eum itaque odio, assumenda natus perferendis temporibus vel. Quis omnis voluptatum eum excepturi, qui corporis a? Illum nulla facilis voluptatem amet quia assumenda vitae, est accusamus veritatis, unde neque labore accusantium quam magnam, ducimus architecto hic praesentium consequatur iure? Possimus quibusdam facilis dolorum molestiae at aperiam ipsam officia iste pariatur. Ullam aspernatur magni, eveniet modi voluptatem quisquam eum. Debitis quidem molestiae nesciunt provident repellendus cum dolor doloremque maxime obcaecati nemo error vero facere, fuga vel eius earum ad voluptate tempore accusamus. Saepe laboriosam quo maiores voluptatem facilis eaque quam minima, reprehenderit rem sint corporis numquam consectetur quidem tempora error sapiente eveniet repudiandae blanditiis? Esse incidunt sequi quae eaque provident aperiam soluta maxime culpa a doloribus sint nesciunt nisi reprehenderit nihil, necessitatibus veniam explicabo totam similique blanditiis? Rem fuga accusamus sed ut modi, corrupti delectus doloremque nihil consequuntur inventore quibusdam tenetur repudiandae sunt incidunt odit et ab? Dolorum sed dolores earum eveniet repudiandae voluptates, ullam odio vero nesciunt impedit numquam ratione molestias optio soluta repellendus perferendis enim laboriosam tempore minima quae aliquam blanditiis. Quaerat ipsam dolor, qui optio esse, iste tempora nostrum officia nesciunt aut repellat accusamus nisi vero quia! Neque beatae, impedit facilis autem perferendis temporibus incidunt nesciunt reprehenderit velit error animi quisquam molestiae. Illo maxime esse similique fuga qui dolores fugiat accusantium, doloribus et reprehenderit hic, amet architecto culpa, odit repellendus ea nihil aliquam sunt tenetur quas omnis atque magnam alias. Facilis id maxime molestiae, sit hic saepe doloribus accusantium libero, in, dignissimos temporibus omnis ratione qui sunt incidunt aut officiis ipsa. Voluptates, sit accusantium voluptatem non sunt consequatur nesciunt incidunt tempora, eaque aliquam eos qui, ut quasi assumenda voluptatibus quidem. Sint id veritatis delectus. Delectus, ad dolor dolorem natus impedit hic atque beatae similique dicta quas quidem corrupti.
      </RightbarContainer>
  )
}

export default Rightbar;