import React from "react";
import { RiUserSearchFill } from "react-icons/ri";
import { StyledInput } from "./styles";

type Props = {
  onTextChange: (text: string) => void;
}

export const Input = ({ onTextChange }: Props) => {

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
          <input type="text" name="search" placeholder="Searching" onChange={(e) => onTextChange(e.target.value)}/>
          <RiUserSearchFill style={iconStyle}/>
        </StyledInput>
    );
}

// pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 right-3