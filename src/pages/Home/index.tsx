import {  useContext, useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { PacientModal } from "../../components/Modal";
import { Table } from "../../components/Table";
import { Context } from "../../contexts/PacientsContext";
import { IPacient } from "../../interfaces/IPacient";
import { ContentContainer } from "../../styles/Containers";

export const Home = () => {

    
    const { page, setPage, fetchData } = useContext(Context);

    const [modalPacient, setModalPacient] = useState<IPacient | null>();


    const handleLoadMore = () => {
      const newPage = page + 1;
      setPage(newPage);
      fetchData()
    }
      
      const showModal = (pacient: IPacient) => {
       
        setModalPacient(pacient);
      }
    
      const hideModal = () => {
        console.log('aqui')
        setModalPacient(null);
      }

    return (
        <>
            <Header />
            <ContentContainer flexDirection="column">
                {modalPacient && <PacientModal pacient={modalPacient} clickFn={hideModal}/>}
                
                <Input />
                <Table handleModal={showModal}/>


                <div style={{marginTop: '100px'}}>
                  <button onClick={handleLoadMore}>Carregar mais</button>
                </div>
            </ContentContainer>
        </>
    );
}