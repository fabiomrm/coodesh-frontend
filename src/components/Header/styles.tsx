import styled from 'styled-components';

export const StyledHeader = styled.header`
    box-shadow:  0 1px 2px 0 rgb(0 0 0 / 0.05);
    background-color: #FFF;
    margin-bottom: 20px;
    height: 70px;

    
    & div.left,
    & div.right {
        display: flex;   
        align-items: center;
    }

    
    & img {
        width: 60x;
        height: 60px;
    }

    
`;