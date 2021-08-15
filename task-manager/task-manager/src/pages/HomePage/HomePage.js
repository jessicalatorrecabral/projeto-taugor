import React, { useEffect, useState } from 'react'
import AddTarefa from '../../components/AddTarefa/AddTarefa'
import { HomePageContainer, FiltrosContainer, 
    FiltroDescricao, BuscaDescricao, CabecalhoContainer, 
    BotaoAdicionarTarefa, GridTarefas} from './styled'

import {TopoPages } from '../../components/GlobalStyles/GlobalStyles'
import  FooterPages from '../../components/FooterPages/FooterPages'
import firebase from 'firebase/app'
import {useHistory } from 'react-router-dom'
import FiltroStatus from '../../components/FiltroStatus/FiltroStatus'
import imgAdd from '../../images/adicionar.png'
import { Titulo } from '../../components/GlobalStyles/GlobalStyles'
import CardTarefas from '../../components/CardTarefas/CardTarefas'
import { ToastContainer, toast } from 'react-toast'




const HomePage = (props) => {

    const customToast = () =>
    toast('Tarefa deletada! ', {
        backgroundColor: '#D31723',
        color: '#ffffff',
  })
    
    const[hasClicked, setHasClicked] = useState(false)
    const[tarefasDoUsuario, setTarefasDoUsuario] = useState()
    const[dadosDoUsuarioLogado, setDadosDoUsuarioLogado] = useState()
    const[tarefaExiste, setTarefaExiste]=useState(false)
    const[status, setStatus]=useState('') 
    const[descricao, setDescricao] = useState('')

    useEffect(()=> {
        if(!props.usuarioLogado){
            history.push('/login')
        }
        
    },[props.usuarioLogado])

    const history = useHistory()

    const onChangeStatus = (event) =>{
        setStatus(event.target.value)
    }

    const onChangeDescricao = (event)=> {
        setDescricao(event.target.value)
    }
    
    const abrirModal = (hasClicked) => {
        if(hasClicked){
           
            setHasClicked(true)
            
        }

    }
    

       
    

    useEffect(()=>{
        abrirModal()
    },[hasClicked,setHasClicked]) 

    const desconetarUsuario = () => {
        firebase.auth().signOut()
    }

    useEffect(()=> {
        firebase.firestore().collection('usuarios').doc(props.usuarioLogado?.uid).get()
        .then((doc)=>{
            setDadosDoUsuarioLogado(doc.data())
            
        })
       
    },[])

    const idUser = props.usuarioLogado?.uid
    
    const pegarTarefaCriada = async () => {
        
        const ref = firebase.firestore()
        .collection('usuarios')
        .doc(`${idUser}`)
        .collection('TarefasUsuario').orderBy('criadaEm', 'desc')

        const querySnapshot = await ref.get()

        const listaDeTarefas = querySnapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            } 
        })
        

    setTarefasDoUsuario(listaDeTarefas)
    setTarefaExiste(true)
    console.log(props.usuarioLogado)
        
    }

    const irParaPaginaDeEdicao = (tarefa) => {
        history.push(`/editar/${tarefa.id}`)
    } 
    
    const excluirTarefa = (tarefa) => {
        
        if(window.confirm('tem certeza que deseja deletar?')){

            firebase.firestore().collection('usuarios').doc(`${idUser}`)
            .collection('TarefasUsuario').doc(tarefa.id).delete()
            .then(() => {
                customToast()
             pegarTarefaCriada()

         }).catch((error) => {
                toast.error('Ocorreu um erro, tente novamente')
         })

        }
    }
    
    const lowerDescricao = descricao.toLocaleLowerCase()

    const filtrarPorDescricao = () => {
        const descricaoFiltrada = tarefasDoUsuario.filter((tarefa)=>{
           return tarefa.descricao.toLowerCase().includes(lowerDescricao)
       })
       setTarefasDoUsuario(descricaoFiltrada)
   }
    
    const filtrarPorStatus =  () => {
        const statusFiltrados =  tarefasDoUsuario.filter((tarefa) =>{
            
                 if(tarefa.status === status){
                     return true
                 }
        })
        setTarefasDoUsuario(statusFiltrados)
        
    } 
    

    useEffect(()=>{
    
        pegarTarefaCriada()

    },[status,descricao])

    
    return(
        <HomePageContainer>
            <TopoPages>
                <p>Task Manager</p>
               {props.usuarioLogado && <h2>Olá, {dadosDoUsuarioLogado?.nome || props.usuarioLogado.displayName} 😃</h2>} 
                <button onClick={desconetarUsuario}>Logout</button>
            </TopoPages>

            <FiltrosContainer>
                
                <FiltroStatus onChangeStatus={onChangeStatus} filtrarPorStatus={filtrarPorStatus}
                    status={status}
                   />
               
                <FiltroDescricao>
                    <BuscaDescricao placeholder={'🔎Buscar...'} type={'text'} value={descricao} onChange={onChangeDescricao}/>
                    <button onClick={filtrarPorDescricao}>ok</button>
                </FiltroDescricao>
                
            </FiltrosContainer>

             
            <CabecalhoContainer>
                <Titulo>Quadro de atividades</Titulo>

                <BotaoAdicionarTarefa  onClick={abrirModal}>
                    <img src={imgAdd}/>
                    Adicionar tarefa 
                </BotaoAdicionarTarefa>
                    {hasClicked && 
                    <AddTarefa setHasClicked={setHasClicked} 
                    dadosDoUsuarioLogado={dadosDoUsuarioLogado}
                    usuarioLogado={props.usuarioLogado} 
                    pegarTarefaCriada={pegarTarefaCriada}
                    />}
            </CabecalhoContainer> 
            
            {tarefasDoUsuario ?
            <GridTarefas>
                
                {tarefaExiste && tarefasDoUsuario.map((tarefa)=>{
                    return <CardTarefas key={tarefa.id} tarefa={tarefa} excluirTarefa={excluirTarefa} irParaPaginaDeEdicao={irParaPaginaDeEdicao}/>
                    
                })}
            </GridTarefas> : <p>não há tarefas por aqui 💤</p>}
           <FooterPages/>
           <ToastContainer/>
        </HomePageContainer>
    )
}
export default HomePage