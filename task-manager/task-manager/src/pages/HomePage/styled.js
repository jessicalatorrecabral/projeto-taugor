import styled from "styled-components";

export const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
   
`
export const FiltrosContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 2rem;
    padding: .8rem;
    justify-content: space-around;
    border-bottom: gray solid .1rem;

    button{
        width: 5rem;
        height: 4rem;
        background-color: var(--success);
        color: white;
    }
`
export const FiltroDescricao = styled.div`
   
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;
`

export const BuscaDescricao = styled.input`
    border: solid gray .1rem;
    height: 4rem;
    width: 80%;
    margin-top: 1rem;
`
export const CabecalhoContainer = styled.div`
    
    display: flex;
    width: 80%;
    margin: 0 auto;
    padding: .5rem;
    align-items: center;
    justify-content: space-evenly;
`

export const BotaoAdicionarTarefa = styled.button`
    width: 20%;
    background-color: var(--info);
    color: white;
    img{
        margin-right: .6rem;
    }
`

export const GridTarefas = styled.div`
    width: 80%;
    margin: 4rem auto;
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 1.8rem;
    grid-row-gap: 1.8rem;

    height: 90vh;
    overflow-y: scroll;
      
`
