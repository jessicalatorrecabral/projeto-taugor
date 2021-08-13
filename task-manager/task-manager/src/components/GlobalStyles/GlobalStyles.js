import styled from "styled-components"

export const Titulo = styled.h2`
    font-family: 'Poppins', sans-serif;
`
export const SubTitulo = styled.h4`
    font-family: 'Poppins', sans-serif;
    

`
export const TopoPages = styled.header`
    
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    background-color: #A4E1F8;

    button{
        background-color: var(--danger);
        padding: .5rem;
        color: white;
        width: 8rem;
        
    }
`
export const TaskContainer = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: auto;
    
    padding: .8rem;

    form{
        margin-top: .8rem;
        
    }
    input{
        width: 80%;
    }

   
    
`

export const HeaderFormTarefa = styled.header`
    border-bottom: grey solid .1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .8rem;
`

export const ConteinerOpcoes = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin: 1rem auto;
    padding: .8rem;
    
   
      
`
export const ContainerDescricao = styled.div`
   
    display: flex;
    
    justify-content: space-around;
    
    textarea{
        border: gray solid .1rem;
        outline: none;
    }
    label{
        align-self: flex-start;
    }
`


export const ButtonsContainer = styled.div`
    
    width: 50%;
    margin: 2rem auto;
    display: flex;
    justify-content: space-around;

    button {
        color: white;
        background-color: var(--primary);
        padding: .8rem;
        width: 80%;
    }
`


export const FooterPage = styled.footer`
    
    background-color: var(--backgrounds);
    margin-top: 5rem;
    

    div:nth-child(1){
        padding: 2rem;
        text-align: justify;
        font-style: italic;
    }
    div:nth-child(2){
        
        
        margin: 4rem;
        display:flex;
        justify-content: center;
        img{
            max-width: 5rem;
            &:hover{
                filter: brightness(1.7);
                fill: pink;
            }
        }
    }

    div:nth-child(3){
        display: flex;
        justify-content: center;
        align-items: center;
        
        img{
            
            max-width: 2.4rem;
        }

    }

`
