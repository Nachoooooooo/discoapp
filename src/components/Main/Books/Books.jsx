import React from 'react';
import gif from '../../../assets/disco.gif';



const Books = () => {
  return (
    <section>
      <div className="book-container">
        <h1>RESERVA TU MESA</h1>
        <img id="gifhome" src={gif} alt="gif" />
        <form className="book-container">
          <label htmlFor="fullName" className="user-password">Nombre y Apellidos</label>
          <input type="text" id="fullName" name="fullName" placeholder="José Martinez" />

          <label htmlFor="email" className="form-label">Email</label>
          <input type="text" id="email" name="email" placeholder="********" />

          <label htmlFor="movilPhone" className="form-label">Móvil</label>
          <input type="number" id="movil" name="movil" placeholder="+34..." />
      


          <div className="fechaPersonas">
          <div className="fechaPersonasDiv">
            <label htmlFor="password" className="fechaInputLabel">Fecha</label>
            <input className="fechaPersonasInput" type="text" id="fecha" name="fecha" placeholder="DD/MM/AA" />
          </div>
            <div className="fechaPersonasDiv">
            <label htmlFor="personas" className="fechaInputLabel">Personas</label>
            <input className="fechaPersonasInput" type="number"  id="personas" name="personas" placeholder="5" />
            </div>
          </div>


            <button className="bookButton">CONFIRMAR</button>
            </form>
      </div>
    </section>
  )
}

export default Books;