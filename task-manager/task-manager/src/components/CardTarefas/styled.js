import styled from "styled-components";

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: .8rem;
    border: solid grey .1rem;
    background-color: var(--backcards);

    span{
        color: grey;
        font-style: italic;
    }

    @media(max-width: 800px){
        
        width: 100%;
    }
`

export const TopoCard = styled.header`
    padding: .6rem;
    margin-bottom: .5rem;
    border-bottom: grey solid .1rem;

`

export const ConteudoCard = styled.section`
    display: flex;
    flex-grow: 1;
    
    border-bottom: grey solid .1rem;
    padding: .6rem;
    margin-bottom: .8rem;
    justify-content: space-around;
`
export const ConteudoCardDescricao = styled.section`
border-bottom: grey solid .1rem;
    
    display: flex;
    margin-bottom: .8rem;
    padding: .6rem;
    flex-grow: 1;
    flex-direction: column;
    text-align: justify;
`
export const ArquivoContainer = styled.div`
    
    
    display: flex;
    height: 5rem;
    justify-content: center;
    align-items: center;
    width: 10rem;

    img{
      
        max-width: 2rem;
    }
    
    
`
export const BotoesContainer = styled.div`
    
    display: flex;
    height: 6rem;
    
    align-items: center;
    justify-content: space-around;

    button {
        height: 3rem;
        padding: .4rem;
        color: white;
        font-size: 1.3rem;

        @media(max-width: 1080px){
            font-size: 1.2rem;
            width: 9rem;
        }
    }

    button:nth-child(1){
        background-color: var(--danger);

        @media(max-width: 1080px){
            margin-right: 1.2rem;
        }
    }
    button:nth-child(2){
        background-color: var(--success);
    }


   
`