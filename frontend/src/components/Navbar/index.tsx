import logo from '../../assets/img/logo2.png';
import instagram from '../../assets/img/instagram.png';
import facebook from '../../assets/img/facebook.png';
import whatsapp from '../../assets/img/whatsapp.png';
import './style.css'

function Navbar() {
    return (
      <nav>
        <div className='vitalab-logo-nav'>
          <img src={logo} alt='VitalabLogo' className="logo" />
          <div className="social-icons">
            <img className="icon" src={instagram} alt='Instagram' />
            <img className="icon" src={facebook} alt='Facebook' />
            <img className="icon" src={whatsapp} alt='WhatsApp' />
          </div>  
          <br/>
        </div>   
      </nav>
    )
    
  }

  export default Navbar