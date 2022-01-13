import { useNavigate } from 'react-router-dom';
import {BoxNavigation, Nav, StyledNavButton} from "./style";

function Navigation (){
    const navigate = useNavigate();
    return (
        <BoxNavigation >
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
            <Nav>
                <StyledNavButton onClick={()=> navigate("/")}>Home</StyledNavButton>
                <StyledNavButton onClick={()=> navigate("/Destination")}>Destination</StyledNavButton>
                <StyledNavButton onClick={()=> navigate("/Crew")}>Crew</StyledNavButton>
                <StyledNavButton onClick={()=> navigate("/Tecnology")}>Tecnology</StyledNavButton>
            </Nav>
        </BoxNavigation>
    );
}

export default Navigation;