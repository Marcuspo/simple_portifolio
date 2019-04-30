import React, { Component } from 'react';
import Imagem from './logoPerfil.jpeg';
import { FaTwitter } from "react-icons/fa";
import { FaSteam } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import './index.css';
export default class App extends Component {
  render() {
    return (
      <div className='code'>
        <div className='back'>
          <div className='body'>
           <ul className='body'> - Um simples portifólio - </ul>
          </div>
        </div>
         <div className='imagem2'>
           <img className='imagem' src={Imagem} alt="Perfil" width="249" />
          </div>
            <ul className='texto'>Programador web e mobile. </ul>
            <ul className='textoImage'> <FaGithub /> //github.com/Marcuspo/</ul>
            <ul className='textoImage'> <FaLinkedin /> //www.linkedin.com/in/marcuspo/</ul>
            <ul className='textoImage'> <FaTwitter /> //twitter.com/Marcuspo1</ul>
            <ul className='textoImage'> <FaSteam /> //steamcommunity.com/id/marcuspo/</ul>
            
      </div>
    );
  }
}
