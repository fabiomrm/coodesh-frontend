
import { Container } from "./styles";

export const Header = () => {
  return (
    <Container>  
            <div className="image-wrapper logo">
              <img src="/images/logo.png" alt="logo" />
              <h1>Nome da Empresa</h1>
            </div>

            <div className="image-wrapper user">
                <img src="/images/logo.png" alt="user" />
            </div>
    </Container>
  );
};
