
import { StyledHeader } from "./styles";

export const Header = () => {
  return (
    <StyledHeader>  
            <div className="left">
                <div className="image-wrapper">
                    <img src="/images/logo.png" alt="logo" />
                </div>
                <h1>Nome da Empresa</h1>
            </div>

            <div className="right">
                <img src="/images/logo.png" alt="user" />
            </div>
    </StyledHeader>
  );
};
