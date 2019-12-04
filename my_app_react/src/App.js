import React from 'react';
import './App.css';
//import  imagen from './img/background.jpg'


function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      
        <form className="formulario">
        <h2>
          Área de Cadastro!  Login 
        </h2>
          <p>Name:</p>
            <input 
              type="text" 
              className="nome" 
              placeholder="Nome Completo" 
              required
            />
          <p>Email:</p>
            <input 
              type="email" 
              className="email" 
              placeholder="Email Principal" 
              required
            />
          <p>Senha:</p>
            <input 
              id="password"
              type="password" 
              className="password" 
              placeholder="senha de 8 dígitos" 
            //  value={password}
              required
            /> <br />
            <input 
              type="submit" 
              className="btn" 
              placeholder="enviar" 
            />
        </form>
        <p>
         Site &#174; <a href="admistrador.js">www.progrmadorz.com.br</a>
        </p>
        <p id="paragrafo">
          Cadastre-se e receba promoções e descontos.
        </p>
        <p id="paragrafo">
          Esse site é para todos que deseja contratar um 
          <strong> programdor! </strong>.E para quem busca conhecimento na área 
          da ciência da computação.
        </p>
       
      </header>
    </div>
  );
}

export default App;