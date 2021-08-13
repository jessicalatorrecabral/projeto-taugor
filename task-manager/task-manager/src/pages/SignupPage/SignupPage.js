import React, {useState, useEffect} from 'react'
import FormPageContainer from '../../components/FormPageContainer/FormPageContainer'
import firebase from 'firebase/app'
import { useHistory } from 'react-router-dom'
import { SubTitulo, Titulo } from '../../components/GlobalStyles/GlobalStyles'

const SignupPage = (props) => {

    const[emailValue, setEmailValue] = useState("")
    const[nomeValue, setNomeVelue] = useState("")
    const[passwordValue, setPasswordValue] = useState("")

    const history = useHistory()

    const onChangeEmail = (event) => {
        setEmailValue(event.target.value)
    }

    const onChangeNome = (event) => {
        setNomeVelue(event.target.value)
    }

    const onChangePassword = (event) => {
        setPasswordValue(event.target.value)
    }

    const criarUsuario = (event) => {
        event.preventDefault()

        firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
        .then((credencial) => {
            alert('Cadastro criado com sucesso!')
        
        return firebase.firestore().collection('usuarios').doc(credencial.user.uid).set({
            nome: nomeValue
        })
    
        })
        .catch((error) => {
        alert('Ops, algo deu errado')
        })
    }

    const entrarComGoole = () => {
        
        const provider = new firebase.auth.GoogleAuthProvider()
            firebase.auth().signInWithPopup(provider)
            .then((result) =>{
                alert('Bem-vindo(a)')
            }).catch((error)=>{
                alert('Algo deu errado')
            })
        
    }
    useEffect(()=>{
        if(props.usuarioLogado){
            history.push("/")
        }
    },[props.usuarioLogado])

    return(
        <FormPageContainer>
            <Titulo>Task Manager</Titulo>
            <SubTitulo>Olá, que bom ter você conosco! 😊</SubTitulo>
            <form onSubmit={criarUsuario}>
                <input value={nomeValue} onChange={onChangeNome} type={'text'} placeholder={'Nome'}/>
                <input value={emailValue} onChange={onChangeEmail} type={'email'} placeholder={'E-mail'}/>
                <input value={passwordValue} onChange={onChangePassword} type={'password'} placeholder={'senha'}/>
                <button>Criar conta</button>
                <button type={'button'} onClick={entrarComGoole}>Entrar com o Google</button>
            </form>
        </FormPageContainer>
    )
}
export default SignupPage