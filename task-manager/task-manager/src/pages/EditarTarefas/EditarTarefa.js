import React, {useEffect, useState}from 'react'
import { useHistory, useParams } from 'react-router-dom'
import firebase from 'firebase/app'
import {TopoPages, ContainerDescricao, ConteinerOpcoes, HeaderFormTarefa, Titulo } from '../../components/GlobalStyles/GlobalStyles'
import {ContainerEditarTarefa, ContainerBotoesEditar, ArquivoContainer} from './styled'
import FooterPages from '../../components/FooterPages/FooterPages'
import arquivoIcone from '../../images/anexo.png'



const EditarTarefas = (props) => {

    const [status, setStatus] = useState("")
    const [tarefaSelecionada, setTarefaSelecionada] = useState({})
    const [responsavel, setResponsavel] = useState("")
    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")
    const [arquivo, setArquivo] = useState()
    const [prioridade, setPrioridade] = useState("")
  
    const history = useHistory()
    const tarefa = useParams()

    useEffect(()=> {
        if(!props.usuarioLogado){
            history.push('/login')
        }
    },[props.usuarioLogado])
   
    const voltarParaHome = () =>{
        history.push("/")
    }

    const enviarAlteracoes = (event) => {
        event.preventDefault()

        const atualizarTarefa =  firebase.firestore().collection("usuarios")
        .doc(props.usuarioLogado.uid)
        .collection('TarefasUsuario').doc(tarefa.id)

            return atualizarTarefa.update({
            status: status,
            responsavel: responsavel
        })
        .then(() => {
            alert('Tarefa editada com sucesso!')
            voltarParaHome()
        })
        .catch((error) => {
            alert('Algo deu errado')
        })
          
    }
    
    useEffect(() => {
        const pegarTarefa = async  () => {
            const docRef =   firebase.firestore().collection("usuarios")
            .doc(props.usuarioLogado.uid).collection('TarefasUsuario').doc(tarefa.id)

            await docRef.get().then((doc) => {
                
                setTarefaSelecionada(doc.data())
                setStatus(tarefaSelecionada.status)
                setResponsavel(tarefaSelecionada.responsavel)
                setDescricao(tarefaSelecionada.descricao)
                setTitulo(tarefaSelecionada.titulo)
                setArquivo(tarefaSelecionada.arquivo)
                setPrioridade(tarefaSelecionada.prioridade)
                
            }).catch((error) => {
                console.log("Error getting document:", error);
            })
        }
    
        pegarTarefa()
    },[titulo])

    return (
        <div>
            <TopoPages>
                <p>Task Manager</p>
                <Titulo>Editar tarefa</Titulo>
                <button onClick={voltarParaHome}>Voltar</button>
            </TopoPages>
            <ContainerEditarTarefa> 
                <HeaderFormTarefa>
                    <h3>Editar tarefa</h3>
                </HeaderFormTarefa>

                <form onSubmit={enviarAlteracoes}>
                    <label>Título:</label>
                    <input disabled value={titulo}/>

                    <ConteinerOpcoes>
                        <label>Status:</label>
                            <select value={status} onChange={e => setStatus(e.target.value)}>
                                <option>Selecione</option>
                                <option>Pendente</option>
                                <option>Em andamento</option>
                                <option>Concluída</option>
                                <option>Cancelada</option>
                            </select>

                            <label>Prioridade:</label>
                            <select value={prioridade}>
                                <option>Selecione</option>
                                <option>Alta</option>
                                <option>Média</option>
                                <option>Baixa</option>
                                
                            </select>
                    </ConteinerOpcoes>

                    <ContainerDescricao>
                        <label>Descrição:</label>
                        <textarea disabled rows="8" cols="60" value={descricao}/>
                    </ContainerDescricao>

                    <label>Responsável:</label>
                    <input value={responsavel} onChange={e => setResponsavel(e.target.value) }/>

                   <ArquivoContainer>
                        <a href={tarefaSelecionada.arquivo} target={'_blank'}>
                            <img src={arquivoIcone}/> arquivo
                        </a>
                   </ArquivoContainer>
                
                    <ContainerBotoesEditar>
                        <button type={'submit'}>Salvar alterações</button>
                        <button onClick={voltarParaHome} type={'button'}>cancelar</button>
                    </ContainerBotoesEditar> 
                </form>
            </ContainerEditarTarefa>
            <FooterPages/>
        </div>
    )
}
export default EditarTarefas