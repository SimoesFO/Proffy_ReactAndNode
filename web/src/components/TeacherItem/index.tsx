import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/6942893?s=460&u=5cd65e54c43c04677d00cadb9d8277f4b16ad7a1&v=4" alt="Felipe Simões"/>
        <div>
          <strong>Felipe Simões</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum iure accusamus doloribus inventore, quia consectetur! 
        <br /><br />
        Totam reprehenderit possimus, adipisci doloremque, magni earum necessitatibus tenetur ratione a, error sunt sapiente velit.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$100,00</strong>
        </p>
        <button type="button">
          <img src={ whatsappIcon } alt="Whatsapp" />
          Entrar em Contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;