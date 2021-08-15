import React from 'react'
import { CardWrapper, TopoCard, ConteudoCard, ConteudoCardDescricao, ArquivoContainer, BotoesContainer } from './styled'
import arquivoIcone from '../../images/anexo.png'

const CardTarefas = (props) =>{

    return(
        <CardWrapper statusTarefa={props.tarefa.status}>
            
            <TopoCard statusTarefa={props.tarefa.status}>
            <p>Título: {props.tarefa.titulo}</p>
            </TopoCard>
            <ConteudoCard>
                <p>Status: {props.tarefa.status}</p>
                <p>Prioridade: {props.tarefa.prioridade}</p>
            </ConteudoCard>
            <ConteudoCardDescricao statusTarefa={props.tarefa.status}>
                Descrição:
                <p>{props.tarefa.descricao}</p>
            </ConteudoCardDescricao>

            { props.tarefa.arquivo ?
            <ArquivoContainer>
                
                <a href={props.tarefa.arquivo} target={'_blank'}>
                    <img src={arquivoIcone}/> arquivo
                </a>
                
            </ArquivoContainer> : <span>Sem arquivo</span>}
           

            <p>Responsável: {props.tarefa.responsavel}</p>

            <BotoesContainer>
                <button onClick={()=>props.excluirTarefa(props.tarefa)}>Excluir tarefa</button>
                <button onClick={()=>props.irParaPaginaDeEdicao(props.tarefa)} >Editar tarefa</button>  
            </BotoesContainer>
            
            
        </CardWrapper>
    )
}
export default CardTarefas