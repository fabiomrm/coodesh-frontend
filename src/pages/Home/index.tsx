import { useContext, useState } from "react";
import { StyledButton } from "../../components/Button/styles";
import { Input } from "../../components/Input";
import { Loading } from "../../components/Loading";
import { PacientModal } from "../../components/Modal";
import { Table } from "../../components/Table";
import { Context } from "../../contexts/PacientsContext";
import { IPacient } from "../../interfaces/IPacient";

export const Home = () => {
  const { page, setPage, loading, setLoading } = useContext(Context);

  const [modalPacient, setModalPacient] = useState<IPacient | null>();

  const handleLoadMore = () => {
    setLoading(true);
    const newPage = page + 1;
    setPage(newPage);
  };

  const showModal = (pacient: IPacient) => {
    setModalPacient(pacient);
  };

  const hideModal = () => {
    console.log("aqui");
    setModalPacient(null);
  };

  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column', margin: '0 auto', maxWidth: '510px' }}>
      {modalPacient && (
          <PacientModal pacient={modalPacient} clickFn={hideModal} />
        )}

        <Input />
        <Table handleModal={showModal} />

        {loading ? (
          <Loading />
        ) : (
          <StyledButton style={{margin: '0 auto'}}onClick={handleLoadMore}>Carregar mais</StyledButton>
        )}
    </div>
      
    </>
  );
};
