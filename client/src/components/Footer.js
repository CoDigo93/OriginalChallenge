import React from 'react';
import faceIcon from '../assets/facebook.svg'
import instaIcon from '../assets/instagram.svg'
import pinterestIcon from '../assets/pinterest.svg'
import vtexIcon from '../assets/vtex-pci-200.svg'
import ebitIcon from '../assets/selo-ebit.svg'
import footerLogo from '../assets/white_logo.svg'
import {useSideNavbar} from '../context/MobileSideNavbar'

const Footer = () => {
    const {showSideNavigation} = useSideNavbar()

    return (
        
        <footer className='footer'>
            <div className='div-masterAndlogos'>
                <div className='footer__master'>
                    <ul><p>INSTITUCIONAL <span> + </span></p>
                        <li><p>A Marca</p></li>
                        <li><p>Lojas</p></li>
                        <li><p>Contato</p></li>
                    </ul>
                    <ul><p>INFORMAÇÕES <span> + </span></p>
                        <li><p>Formas de Pagamento</p></li>
                        <li><p>Trocas e Devoluções</p></li>
                        <li><p>Cuidado com o Produto</p></li>
                    </ul>
                   
                    <ul><p>CONHEÇA <span> + </span></p>
                        <li><p>Franquias e Multimarcas</p></li>
                        <li><p>Trabalhe com a Gente</p></li>
                        <li><p>Procon-RJ</p></li>
                    </ul>   
                        
                </div>
                <div className='footer__logos'>
                    <div id='layer1'>
                        <img src={faceIcon} alt='face' />
                        <img src={instaIcon} alt='insta' />
                        <img src={pinterestIcon} alt='pinterestIcon' />
                    </div>
                    <div id='layer2'>
                        <img src={vtexIcon} alt='vtex' />
                        <img src={ebitIcon} alt='ebit' />
                    </div>
                </div>
            </div>

            <form className='footer__form' style={showSideNavigation ? {zIndex:-1}: {zIndex:0}}>
                <h3>ASSINE NOSSA NEWS</h3>
                
                <div id='footer__inputName'>
                    <input name='name' 
                           type='text'
                           placeholder=' '
                           required/> 
                    <label htmlFor='name'>Nome</label>
                </div>
                <div id='footer__inputEmail'>    
                    <input name='Email' 
                          type='email'
                          placeholder=' '
                          required/>    
                    <label htmlFor='Email'>E-mail</label>
                    
                </div>
                <button>ENVIAR</button>
                
            </form>
            <div className='footer__info'>
                <span>Via Mia | V. Milano Centro Comercio de Bolsas Eireli - EPP.
                      Av.das Américas, 500 - bloco 20, loja 126 - Barra da Tijuca - Rio de Janeiro - RJ - CEP: 22640-100
                      CNPJ: 05.292.288/0002-10 - I.E: 86.732.548 - E-mail: ecommerce@viamia.com.br
                </span>
                <img src={footerLogo} alt='footer_logo'/>
            </div>
        </footer>
    
    )
}

export default Footer;