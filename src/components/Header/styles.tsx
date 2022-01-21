import styled from "styled-components";


export const Container = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
    box-shadow: 0px 0px 2px ${({theme}) => theme.colors.backgroundLight};
    background: ${({ theme }) => theme.colors.backgroundLight};
    

    > div.image-wrapper {
        width: 60px;
        height: 60px;
    }

    > div.logo {
        display: flex;
        gap: 10px;
        font-size: ${({ theme }) => theme.fontSizes.small};
    }
`;