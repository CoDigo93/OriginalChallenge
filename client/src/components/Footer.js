import React from 'react';
import faceIcon from '../assets/facebook.svg'
import instaIcon from '../assets/instagram.svg'
import pinterestIcon from '../assets/pinterest.svg'
import vtexIcon from '../assets/vtex-pci-200.svg'
import ebitIcon from '../assets/selo-ebit.svg'
import footerLogo from '../assets/white_logo.svg'

const Footer = () => {
    return (
        
        <footer className='footer'>
            <ul>
                <li><div>INSTITUCIONAL <span> + </span></div></li>
                <li><div>INFORMAÇÕES <span> + </span></div></li>
                <li><div>CONHEÇA <span> + </span></div></li>
            </ul>
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
        
            <form className='footer__form'>
                <h3>ASSINE NOSSA NEWS</h3>
                
                <div id='footer__inputName'>
                    <input name='name' 
                           type='text'
                           placeholder=' '/> 
                    <label for='name'>Nome</label>
                </div>
                <div id='footer__inputEmail'>    
                    <input name='Email' 
                          type='email'
                          placeholder=' '/>    
                    <label for='Email'>E-mail</label>
                    
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