import React from 'react';
import logo from '../../../assets/logo.png';

const Home = () => {
  return (
    <section className ="home-container">
      <img src={logo} alt="logo-mondo"  className = "logo-mondo"/>

      <div className ="home-container">
        <form className = "form-container-home">
          <label htmlFor="user" className="form-label">Usuario</label>
          <input type="text" id="user" name="user" placeholder="Josito84" />

          <label htmlFor="password" className="form-label">Contraseña</label>
          <input type="text" id="password" name="password" placeholder="********" />

          <button className="loginButton">INICIAR SESIÓN</button>
        </form>
      </div> 

    </section>
  )
}

export default Home