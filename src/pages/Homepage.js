import Meny from '../components/Meny';
import '../styles/style.css';

function Homepage () {
    return (
        <>
            <Meny />
            <div className="välkommen">
                <h1>VÄLKOMMEN TILL</h1>
                <img className="logga-start" src="loggat.png" alt="Pryl 1900 logga" />
            </div>
        </>
    );
}

export default Homepage;