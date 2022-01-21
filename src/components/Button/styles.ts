import styled from 'styled-components';

export const StyledButton = styled.button`
    cursor: pointer;
    max-width: 6.25rem;
    padding: 0.2rem 1rem;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    text-transform: uppercase;
    outline: 0;
    border: 1px solid ${({ theme }) => theme.colors.border};
    box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.borderButton};
    border-radius: 0.5rem;
    transtion: 300ms;

    &:hover {
        transform: scale(1.08);
        background-color: ${({ theme }) => theme.colors.backgroundLight};

    }
`;

