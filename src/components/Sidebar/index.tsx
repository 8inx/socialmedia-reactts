import styled from "styled-components";
import PaneTitle from "shared/PaneTitle";
import { appScrollbar } from "config/constants";

const SidebarContainer = styled.div`
  ${appScrollbar}
  flex: 1.5;
  position: sticky;
  top: 56px;
  height: calc(100vh - 56px);
  padding: 8px;
  padding-top: 1rem;
`

const Sidebar = () => {
  return (
      <SidebarContainer>
        <PaneTitle>Sidebar</PaneTitle>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus minima vitae harum est, soluta provident deleniti molestiae id temporibus! Qui ducimus iste, doloremque impedit voluptatum aliquam, ipsa est, hic totam nam eveniet molestias? Dolores reprehenderit nihil quaerat laudantium? Dolore sunt beatae suscipit culpa mollitia similique repudiandae doloremque at quaerat dicta nostrum velit voluptas fugit, distinctio ipsa ipsam laborum temporibus animi deserunt officiis pariatur quod sapiente iusto! Nostrum quos facere perspiciatis exercitationem enim ipsum vero ab voluptates eum est mollitia nesciunt animi laudantium eius, minus nihil in ipsa praesentium corrupti temporibus esse aliquam reiciendis? Quod quos aliquam ad sequi autem, voluptates recusandae tempore consectetur fugiat voluptatibus iusto excepturi blanditiis possimus quaerat minima commodi error veritatis voluptas ab atque animi iste aperiam. A earum est ad quae rem provident optio, nulla odio cumque, illo sunt consequuntur exercitationem perspiciatis. Ex, nobis magnam nemo a, odit, nesciunt dolore laudantium sed accusantium sapiente maxime? Dicta repudiandae corporis, optio explicabo blanditiis quidem illo reprehenderit dolores nam! Amet nisi quis corporis nesciunt numquam reprehenderit quaerat quidem voluptas voluptatem blanditiis molestias labore assumenda temporibus ipsam facilis ut fugit, possimus libero eligendi sunt quod mollitia hic! Ullam, nam neque? Natus ducimus deserunt vero eos veritatis sapiente earum commodi temporibus voluptate laborum pariatur, esse quaerat repellat error consectetur modi illum quam sequi ipsum ut asperiores? Temporibus enim veniam possimus obcaecati doloribus fugit numquam nostrum! At, voluptate? Incidunt, officia quas est voluptates facere animi, inventore id voluptatem quos eos quibusdam possimus impedit unde aspernatur! Obcaecati voluptatibus provident vel sunt expedita! Recusandae fuga voluptatem vero consequuntur! Saepe velit adipisci recusandae nemo at enim sint. Veniam, eligendi repellat. Voluptates, laudantium delectus, ratione recusandae perferendis inventore possimus reprehenderit odit, iste quos et dolore iure praesentium magni quas. Tempore debitis explicabo veniam veritatis, deserunt nostrum cum obcaecati, unde quo optio numquam commodi. Rem itaque ducimus aliquam earum repellat tempora nisi doloribus magnam sint quibusdam, deserunt consequatur non ex qui laborum quidem. Numquam quibusdam enim architecto ab odio veniam autem provident voluptatum. Cumque adipisci praesentium possimus repellat, est magnam fuga voluptas, dicta, placeat dignissimos sit! Pariatur, error minima voluptatibus velit repellat nisi magnam! Perferendis numquam dolorum dolore veritatis hic voluptas voluptatum nam ipsa iure et modi nisi repellendus, libero eum consequatur? Similique dolore sint tempora, quo rerum vitae veritatis doloremque voluptates? Quo voluptatibus magnam debitis eaque reprehenderit quos eligendi enim mollitia necessitatibus. Velit magnam quam voluptatibus laudantium, officia unde cum laboriosam alias accusantium itaque inventore consequuntur laborum adipisci ipsum maiores perferendis dolorum corrupti. Nemo fugit consequuntur dicta praesentium voluptates eveniet reiciendis sequi placeat vel explicabo earum nihil dolores veniam cumque aliquam voluptatibus vitae, omnis, qui possimus perferendis ad facere distinctio officiis. Illum et aliquam dolorum praesentium ullam odit dolore delectus nesciunt doloremque asperiores iste esse sint, nihil qui excepturi nisi quos quidem veritatis dolorem aperiam expedita quae veniam debitis modi! Voluptatibus dolorem, repellat aliquid voluptates doloremque suscipit, aperiam error asperiores ducimus ut maxime quam excepturi. Voluptatem consectetur a quidem, cum tempora illum. Mollitia voluptate culpa quia animi eius in velit tempore consequatur, adipisci doloribus consequuntur eaque.
      </SidebarContainer>
  )
}

export default Sidebar;