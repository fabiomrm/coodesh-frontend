import { IPacient } from "../../interfaces/IPacient";
import { formatFullName } from "../../assets/utils";
import { StyledTable } from "./styles";

type Props = {
  pacients: Array<IPacient>;
  handleModal: (pacient: IPacient) => void;
};

export const Table = (props: Props) => {
  return (
    <StyledTable>
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
      {props.pacients.map((pacient: IPacient, index) => (
                    
                    <tr key={index}>
                        <td className="border text-center px-8 py-1">{index+1}</td>
                        <td className="border text-center px-8 py-1">{formatFullName(pacient)}</td>
                        <td className="border text-center px-8 py-1">{pacient.gender}</td>
                        <td className="border text-center px-8 py-1">{pacient.dob.date}</td>
                        <td className="border text-center px-8 py-1">
                            <button onClick={() => props.handleModal(pacient)}>VER MAIS</button>
                        </td>
                    </tr>     
                ))}
      </tbody>
    </StyledTable>
  );
};