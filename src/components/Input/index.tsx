import React, { useContext } from "react";
import { RiUserSearchFill } from "react-icons/ri";
import { Context } from "../../contexts/PacientsContext";
import { StyledInput } from "./styles";


export const Input = () => {

    const { filter } = useContext(Context);

    

    const iconStyle: React.CSSProperties  = {
        pointerEvents: 'none',
        width: '1 rem',
        height: '1 rem',
        position: 'absolute',
        top: '50%',
        right: '3',
        transform: 'translateY(-50%)'
    };

    const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
      
        if(e.target.name === "search-name") {
            filter(e.target.value);
        }
    }

    
    return (
        <StyledInput>
          <input type="text" name="search-name" placeholder="Searching" onChange={(e) => handleFilter(e)}/>
          <RiUserSearchFill style={iconStyle}/>
        </StyledInput>
    );
}
