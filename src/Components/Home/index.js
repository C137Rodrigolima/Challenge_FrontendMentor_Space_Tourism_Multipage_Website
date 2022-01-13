import { useNavigate } from "react-router-dom";
import { BoxHome, BoxContent, StyledExploreButton } from "./styles";

function Home (){
    const navigate = useNavigate();
    return (
        <BoxHome>
            <BoxContent>
                <h5>SO, YOU WANT TO TRAVEL TO</h5>
                <h1>SPACE</h1>
                <h6>
                    Let's face it; if you want to go to space, you might as well 
                    genuinely go to outer space and not hover kind of on the edge of it. 
                    Well sit back, and relax because we'll give you a truly out of this 
                    world experience!
                </h6>
            </BoxContent>
        <StyledExploreButton onClick={()=> navigate("/Destination")}>EXPLORE</StyledExploreButton>
        </BoxHome>
    );
}

export default Home;