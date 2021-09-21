import styled from "styled-components";
import PaneTitle from "shared/PaneTitle";

const FeedContainer = styled.div`
  flex: 3.5;
  padding: 8px;
  padding-top: 1rem;
`

const Feed = () => {
  return (
      <FeedContainer>
        <PaneTitle>Feed</PaneTitle>
      </FeedContainer>
  )
}

export default Feed;