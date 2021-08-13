import React, {useState, useEffect} from "react";
import LoginPage from './pages/LoginPage/LoginPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignupPage from "./pages/SignupPage/SignupPage";
import HomePage from "./pages/HomePage/HomePage";
import firebase from "firebase/app"
import EditarTarefas from "./pages/EditarTarefas/EditarTarefa";

const App = () => {


    const[usuarioLogado, setUsuarioLogado] = useState()
    const[loadingAuth, setLoadingAuth] = useState(true)

    useEffect(()=>{
        
        return firebase.auth().onAuthStateChanged((user) => {

            if (user) {
                const email = user.email
                const uid = user.uid;
                console.log('logado',email, uid)
                setUsuarioLogado(user)
             
            } else {
                setUsuarioLogado(null)
                console.log('deslogado')
            }
            setLoadingAuth(false)

          })
           
    },[])


  return (
      <Router>
          {!loadingAuth &&
              <Switch>
              <Route path="/login" exact>
                  <LoginPage usuarioLogado={usuarioLogado}/>
              </Route>
              <Route path="/signup" exact>
                  <SignupPage usuarioLogado={usuarioLogado}/>
              </Route>
              <Route path="/" exact>
                  <HomePage usuarioLogado={usuarioLogado}/>
              </Route>
              <Route path="/editar/:id" exact>
                  <EditarTarefas usuarioLogado={usuarioLogado}/>
              </Route>
          </Switch>
          }
          
      </Router>
  )

}
export default App