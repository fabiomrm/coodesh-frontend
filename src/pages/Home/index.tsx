import {  useContext, useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Loading } from "../../components/Loading";
import { PacientModal } from "../../components/Modal";
import { Table } from "../../components/Table";
import { Context } from "../../contexts/PacientsContext";
import { IPacient } from "../../interfaces/IPacient";
import { ContentContainer } from "../../styles/Containers";

export const Home = () => {

    
    const { page, setPage, loading, setLoading } = useContext(Context);

    const [modalPacient, setModalPacient] = useState<IPacient | null>();


    const handleLoadMore = () => {
      setLoading(true)
      const newPage = page + 1;
      setPage(newPage);

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


                <div style={{marginTop: '50px', marginBottom: '100px'}}>
                  
                  {
                    loading ? (<Loading />) : (<button onClick={handleLoadMore}>Carregar mais</button>)
                  }
                </div>
            </ContentContainer>
        </>
    );
}