import Feed from "components/Feed";
import Navbar from "components/Navbar";
import Rightbar from "components/Rightbar";
import Sidebar from "components/Sidebar";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const FlexContainer = styled.div`
  display: flex;
  margin-top: 56px;
  width: 100vw;
  max-width: 1200px;
`

const Home = () => {
  return (
    <HomeContainer>
      <Navbar/>
      <FlexContainer>
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </FlexContainer>
    </HomeContainer>
  )
}

export default Home;