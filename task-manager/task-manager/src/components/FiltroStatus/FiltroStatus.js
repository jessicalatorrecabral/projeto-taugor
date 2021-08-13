import React from 'react'
import styled from "styled-components";

export const FiltroStatusContainer = styled.div`
    display: flex;
    width: 20%;
    align-items: center;
    justify-content: space-around;  
`


const FiltroStatus = (props) => {

    return(
        <FiltroStatusContainer>
            <label>Mostrar:</label>
            <select value={props.status} onChange={props.onChangeStatus} >
                <option >Selecione</option>
                <option>Pendente</option>
                <option>Em andamento</option>
                <option>Concluída</option>
                <option>Cancelada</option>
            </select>

           
            <button onClick={props.filtrarPorStatus}> ok </button>
        </FiltroStatusContainer>
    )
}
export default FiltroStatus