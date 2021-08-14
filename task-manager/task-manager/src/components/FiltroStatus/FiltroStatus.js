import React from 'react'
import styled from "styled-components";

  const FiltroStatusContainer = styled.div`
    display: flex;
    width: 40%;
    
    align-items: center;
    justify-content: space-around;

    @media(max-width: 800px){
        
        width: 100%;
        margin: .6rem auto;
        padding: .6rem;
        
        
    }
      
` 




const FiltroStatus = (props) => {

    return(
        <FiltroStatusContainer>
            <label>Mostrar:</label>
            <select value={props.status} onChange={props.onChangeStatus} >
                <option value={'Todas'}>Todas</option>
                <option value={'Pendente'}>Pendente</option>
                <option value={'Em andamento'}>Em andamento</option>
                <option value={'Concluída'}>Concluída</option>
                <option value={'Cancelada'}>Cancelada</option>
            </select>

           
            <button onClick={props.filtrarPorStatus}> ok </button> 
        </FiltroStatusContainer>
    )
}
export default FiltroStatus