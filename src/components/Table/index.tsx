import { IPacient } from "../../interfaces/IPacient";
import { formatFullName } from "../../assets/utils";
import { useContext } from "react";
import { Context } from "../../contexts/PacientsContext";
import { Button } from "../Button";
import './styles.css';

type Props = {
  handleModal: (pacient: IPacient) => void;
};

export const Table = (props: Props) => {
  const { displayingPacients } = useContext(Context);

  return (
    <div className="tableFixHead" style={{overflowX: 'hidden'}} >
      <table>
        <thead>
          <tr>
            <th>Nº</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Birth</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {displayingPacients.map((pacient: IPacient, index) => (
            <tr key={index}>
              <td className="">{index + 1}</td>
              <td className="">
                {formatFullName(pacient)}
              </td>
              <td className="">{pacient.gender}</td>
              <td className="">
                {new Date(pacient.dob.date).toLocaleDateString()}
              </td>
              <td className="">
                <Button clickFn={() => props.handleModal(pacient)}>
                  ver mais
                </Button>
              </td>
            </tr>
          ))}
        
        </tbody>
      </table>
      </div>
  );
};
