import React from "react";
import { Link } from 'react-router-dom';
import homeIcon from '../../assets/iconos/homeIcon.png';
import eventIcon from '../../assets/iconos/eventIcon.png';
import bookIcon from '../../assets/iconos/bookIcon.png';
import perfilIcon from '../../assets/iconos/user.png';


const Footer = () => {
  return (
    <section className = "footer">
      <div className="div-home-footer">
        <Link to="/"><img src={homeIcon} alt="home" className = "img-wight"/></Link>
       <p>Home</p>
      </div>

      <div className="div-eventos-footer">
        <img src={eventIcon} alt="eventos"  className = "img-wight"/>
        <p>Eventos</p>
      </div>

      <div className="div-reservas-footer">
        <Link to="/books"><img src={bookIcon}  alt="reservas" className = "img-wight"/> </Link>
        <p>Reservas</p>
      </div>

      <div className="div-perfil-footer">
        <img src={perfilIcon} alt="perfil" className = "img-wight" />
        <p>Perfil</p>
      </div>

    </section >
  )
}

export default Footer
