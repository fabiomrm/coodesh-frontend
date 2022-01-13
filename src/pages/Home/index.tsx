import {  useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { PacientModal } from "../../components/Modal";
import { Table } from "../../components/Table";
import { IPacient } from "../../interfaces/IPacient";
import { ContentContainer } from "../../styles/Containers";

export const Home = () => {

    

    const [modalPacient, setModalPacient] = useState<IPacient | null>();

    
      
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
                  <button>AAAAAA</button>
                </div>
            </ContentContainer>
        </>
    );
}