import Meny from '../components/Meny';
import '../styles/style.css';

function Omoss () {
    return (
    <>
        <Meny />
        <div className="grid-container">

            <div className="omoss-bild">
                <img src="omossbild.jpg" alt="Omossbild"/>
            </div>

            <div className="omoss-text" id="omoss">
            <h1>OM OSS</h1> 
                <p> Pryl 1900 i centrala Umeå köper och säljer utvalda föremål av god kvalitet och design samt
                    kul kuriosa. Butiken har funnits sedan 2013 och erbjuder föremål från alla tider, såväl antikt 
                    som retro men även relativt nyproducerade saker. Loppis, second hand, retrobutik
                    eller antikaffär – kalla det vad du vill – här finns i alla fall en massa kul grejer!
                </p>
                <button id="las-mer-omoss">Läs mer här</button>
            
            </div>
            <div className="ägare">
                <p> "Min stora passion är att hela tiden lära mig något nytt om äldre föremål, träffa nya 
                    intressanta människor och återvinna så mycket som det bara går. I och med att jag till 
                    största delen står själv i butiken har jag under årens lopp samlat på mig mycket kunskap 
                    och kan ge dig som kund en trygg och bra affär. 
                    Jag driver verksamheten på egen hand men får som tur var god hjälp av kamrater med att 
                    exempelvis bära in möbler, stajla om olika rum och skriva skyltar."
                    - Mikael Söderlind
                </p>

                <img src="profilbild.jpg" alt="profilbild" width="150" height="200"/>
            </div>
        
        </div>
    </>
    );
}
export default Omoss;