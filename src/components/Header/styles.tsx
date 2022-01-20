import styled from 'styled-components';

export const StyledHeader = styled.header`
    box-shadow:  0 0.06rem .125rem 0 #8BE3D8;
    background: ${(props) => props.theme.colors.primary};
    padding: 1.25rem 0 ;
    height: 4.375rem;

    display: flex;
    justify-content: space-between;

    
    & div.left,
    & div.right {
        display: flex;   
        align-items: center;
        margin: 0 2rem;
    }

    
    & img {
        width: 60x;
        height: 60px;
    }

    
`;