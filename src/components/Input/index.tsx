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

    const handleFilter = (e: React.ChangeEvent<HTMLInputElement>, option: 'name' | 'gender') => {
      
            filter(e.target.value, option);
        
    }

    
    return (
        <StyledInput>
          <input type="text" name="search-name" placeholder="Buscar por nome" onChange={(e) => handleFilter(e, 'name')}/>
          <RiUserSearchFill style={iconStyle}/>
        </StyledInput>
    );
}
