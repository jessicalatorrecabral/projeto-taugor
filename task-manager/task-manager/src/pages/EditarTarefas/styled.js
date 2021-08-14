import styled from "styled-components";

export const ContainerEditarTarefa = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 3rem auto;
    border: grey solid .1rem;
    padding: .8rem;

    form{
        margin-top: .8rem;
        
    }
    input{
        width: 80%;
    }

    @media(max-width: 800px){
    
        width: 90%;
        
    }


`
export const ContainerBotoesEditar = styled.div`
   
    display: flex;
    justify-content: center;
    margin: 3rem;

    button {
        width: 30%;
        color: white;

        @media(max-width: 1080px){
            width: 50%;
            font-size: 1.2rem;
        }
    }
    button:nth-child(1){
        background-color: var(--success);
        margin-right: 2.8rem;

        @media(max-width:800px){
            margin-right: 1rem;
            
        }
    }


    button:nth-child(2){
        background-color: var(--info);
    }

    @media(max-width: 800px){
        width: 100%;
        margin: 3rem auto;
    }
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
