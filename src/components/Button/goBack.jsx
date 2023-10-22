import { useNavigate } from "react-router-dom";
import { BoxCss, ButtonSt } from "./goBackStyled";

export const GoBack = ()=>{
    const navigate = useNavigate();

    const handleOnClick = (()=> navigate(-1))

    return(
        <BoxCss>
            <ButtonSt 
            type="button" 
            onClick={handleOnClick}
            >Go back</ButtonSt>
        </BoxCss>
    )
}