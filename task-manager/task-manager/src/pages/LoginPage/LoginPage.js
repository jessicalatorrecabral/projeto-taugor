import React, { useState, useEffect } from 'react'
import FormPageContainer from '../../components/FormPageContainer/FormPageContainer'
import firebase from 'firebase/app'
import { useHistory } from 'react-router-dom'
import { Titulo, SubTitulo } from '../../components/GlobalStyles/GlobalStyles'

const LoginPage = (props) => {

    const[emailValue, setEmailValue] = useState("")
    const[passwordValue, setPasswordValue] = useState("")

    useEffect(()=>{
        if(props.usuarioLogado){
            history.push("/")
        }
    },[props.usuarioLogado])

    const onChangeEmail = (event) => {
        setEmailValue(event.target.value)
    }

    const onChangePassword = (event) => {
        setPasswordValue(event.target.value)

    }
    const history = useHistory()

    const irParaPaginaDeCadastro = () => {
        history.push("/signup")
    }

    const loginUsuario = (event) => {
        event.preventDefault()

        firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
            .then((userCredential) => {
                alert('Bem-vindo(a)')
            
        }).catch((error) => {
            alert('Algo deu errado')
            
        })
    }

    const loginComGoogle = () => {
    
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider)
        .then((result) =>{
            alert('Bem-vindo(a)')
            
        }).catch((error)=>{
            alert('Algo deu errado')

        })
    }

    return(
        <FormPageContainer>
            <Titulo>Task Manager</Titulo>
            <SubTitulo>Gerenciador de atividades</SubTitulo>
            <form onSubmit={loginUsuario}>
                <input value={emailValue} onChange={onChangeEmail} type={'email'} placeholder={'E-mail'}/>
                <input value={passwordValue} onChange={onChangePassword} type={'password'} placeholder={'senha'}/>
                <button>Login</button>
                <button type={'button'} onClick={loginComGoogle}>Login com Google</button>
                <p>Não possui conta? Crie sua conta</p>
                <button type={'button'} onClick={irParaPaginaDeCadastro}>Criar conta</button>
            </form>
        </FormPageContainer>
    )
}
export default LoginPage