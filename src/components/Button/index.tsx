import { StyledButton } from "./styles"

type Props = {
    clickFn: () => void;
    children: React.ReactNode
}

export const Button = ({ children, clickFn }: Props) => {

    
    return(
        <StyledButton onClick={clickFn}>
            { children }
        </StyledButton>
    )
}