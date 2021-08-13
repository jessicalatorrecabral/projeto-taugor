import React from 'react'
import {FooterPage} from '../GlobalStyles/GlobalStyles'
import coracao from '../../images/coracao.png'
import imgReact from '../../images/react.png'
import imgFirebase from '../../images/firebase.svg'
import imgJavascript from '../../images/javascript.svg'
import github from '../../images/github.svg'
import linkedin from '../../images/linkedin.svg'



const FooterPages = () => {
    return(
        <FooterPage>
             <div>
                <h3>Olá,</h3>
                    <p>eu sou a desenvolvedora do Task Manager e me chamo Jessica, mas pode me chamar de Jess!</p>
                    <p>Espero que sua experiência até aqui tenha sido agradável, acesse minhas redes aqui embaixo.</p>
                    <p><strong>Até mais e volte sempre 😉</strong></p>
                </div>
            
               
                <div>
                    <a href={'https://github.com/jessicalatorrecabral'} target={'_blank'}>
                        <img  src={github}/>
                    </a>
                    <a href={'linkedin.com/in/jessicalatorre182/'} target={'_blank'}>
                        <img  src={linkedin}/>
                    </a>
                </div>
                <div>
                    <p>Desenvolvido com <img src={coracao}/>, Firebase <img src={imgFirebase}/>, JavaScript <img src={imgJavascript}/> e React <img src={imgReact}/> </p>
                </div>

            </FooterPage>
    )
}
export default FooterPages