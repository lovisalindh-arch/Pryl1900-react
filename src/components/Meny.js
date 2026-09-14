import { Link, useLocation } from 'react-router-dom';
import '../styles/style.css';

function Homepage () {
    const location = useLocation();
    const arStartsidan = location.pathname === '/';

    return (
        <div className="meny" id="start">
            {!arStartsidan && (
                <img className="logga-meny" src="/logga-meny.png" alt="Pryl1900 logga" />
            )}
            <div className="meny-platshallare"></div>
            <ul>
                <li> <a href="#" className="hamburger-knapp">
                        <div class="hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                            MENY 
                        </a>

                    <div className="sub-meny">
                        <ul>
                            <li><Link to="/">Start</Link></li>
                            <li><Link to="/omoss">Om oss</Link></li>
                            <li><Link to="/varfor">Varför handla av oss?</Link></li>
                            <li><Link to="/tomning">Tömning och flyttstäd</Link></li>
                            <li><Link to="/kontakt">Kontakt och öppettider</Link></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Homepage;