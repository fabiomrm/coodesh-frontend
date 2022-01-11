import { formatFullName } from "../../assets/utils";
import { IPacient } from "../../interfaces/IPacient";
import * as Modal from "./styles";

type Props = {
  pacient: IPacient;
  clickFn: () => void;
};

export const PacientModal = (props: Props) => {
  const handleClick = () => {
    props.clickFn();
  };

  return (

    <Modal.Overlay>
        <Modal.Container>
            <div className="image-wrapper">
                <img src={props.pacient.picture.thumbnail} alt="avatar"/>
            </div>

            <div className="button-wrapper">
                <button onClick={handleClick}> X</button>
            </div>

            <Modal.Body>
                <h2><span>{props.pacient.id.value} | </span> {formatFullName(props.pacient)}</h2>
                <div className="url-wrapper">
                    <p>URL: <span>{props.pacient.id.value}</span></p>               
                </div>
                <div className="p-5">
                    <p><span className="border">Gênero:</span> {props.pacient.gender}</p>
                    <p><span className="border">Nacionalidade:</span> {props.pacient.location.country}</p>
                    <p><span className="border">Data de Nascimento:</span> {props.pacient.dob.date}</p>
                </div>
                <div className="p-5">
                    <p><span className="border">Telefone:</span> {props.pacient.email}</p>
                    <p><span className="border">Endereço:</span> {props.pacient.location.street.name}, {props.pacient.location.street.number}</p>
                </div>
            </Modal.Body>
        </Modal.Container>
    </Modal.Overlay>
 
  );
};
