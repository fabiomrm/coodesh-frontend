import styled from "styled-components";

export const PageContainer = styled.div`
     background-color: #f3f3f3;
`;


type ContentContainerProps = {
    flexDirection?: string;
}

export const ContentContainer = styled.div<ContentContainerProps>`
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${({ flexDirection }) => flexDirection ? flexDirection : 'row'};  
`;