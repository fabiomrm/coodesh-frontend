import React from "react";
import { RiUserSearchFill } from "react-icons/ri";
import { StyledInput } from "./styles";


export const Input = () => {

    const iconStyle: React.CSSProperties  = {
        pointerEvents: 'none',
        width: '1 rem',
        height: '1 rem',
        position: 'absolute',
        top: '50%',
        right: '3',
        transform: 'translateY(-50%)'
    };

    return (
        <StyledInput>
          <input type="text" name="search" placeholder="Searching"/>
          <RiUserSearchFill style={iconStyle}/>
        </StyledInput>
    );
}
