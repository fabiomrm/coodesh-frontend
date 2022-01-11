import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { PacientModal } from "../../components/Modal";
import { Table } from "../../components/Table";
import { IPacient } from "../../interfaces/IPacient";
import { ContentContainer } from "../../styles/Containers";

export const Home = () => {

    const [pacients, setPacients] = useState<Array<IPacient>>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [modalPacient, setModalPacient] = useState<IPacient | null>();

    useEffect(() => {
        fetchData();
      }, []) 
    
      const fetchData = async () => {
        const result = await fetch("https://randomuser.me/api/?results=10")
        const data = await result.json();
        
        setPacients([...pacients,...data.results])
      }
    
      const filteredPacients = searchTerm.trim().length > 0 ? 
        pacients.filter(
          (pacient) => pacient.name.first.toLowerCase().indexOf(searchTerm.trim().toLowerCase()) >= 0)
            : pacients;
      
      const showModal = (pacient: IPacient) => {
        console.log(pacient)
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
                
                <Input onTextChange={(text) => setSearchTerm(text)}/>
                <Table pacients={filteredPacients} handleModal={showModal}/>


                <div style={{marginTop: '100px'}}></div>
            </ContentContainer>
        </>
    );
}