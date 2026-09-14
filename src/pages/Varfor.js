import Meny from '../components/Meny';
import '../styles/style.css';

function Varfor () {
    return (
        <>
        <Meny />
        <div className="grid-container varfor-grid">

            <div className="varför" id="varför"> 
                <h1>VARFÖR HANDLA AV OSS?</h1>
                <p>Har du samlat på dig en massa gamla saker eller förfogar över ett dödsbo och tycker
                    att det är för jobbigt att sälja på en loppis eller köra sakerna på tippen? 
                    Hör då av dig till mig. Jag köper konst, porslin, glas, möbler, kläder, krukor, 
                    lampor, textilier, pynt och en massa annat, främst i trakterna kring Umeå, Örnsköldsvik 
                    och Skellefteå. Prylar av god kvalitet från alla tider kan vara av intresse.
                </p>
                <button id="las-mer-varfor">Läs mer här</button>

            </div>
            <div className="skyltb">
                <img id="bildsnurra" src="skyltbild.jpg" alt="Skylt utanför butiken Pryl 1900"/>
            </div>

            <div className="lamptavelb">
                <img src="lampbild.jpg" alt="Röd vintagelampa"/>
                <img src="tavelbild.jpg" alt="Vintagetavla med människosilluet i rött och blått"/>
            </div>

            <div className="textruta">
                <div className="textbox"> 
                    <h2>Därför är det bäst att sälja till Pryl 1900</h2>
                        <ul>
                            <li>Trygg affär</li>
                            <li>Rätt betalt. Pryl 1900 betalar i regel bättre än andra antikaffärer.</li>
                            <li>Inga omkostnader eller långa väntetider</li>
                            <li>Snabb affär. Du kan lämna in saker direkt i buktiken eller få dem hämtade hemma hos dig inom några dagar</li>
                            <li>Du bidrar till att stödja den enda antikaffären i centrala Umeå.</li>
                            <li>Det du säljer erbjuds till en kundgrupp som är genuint intresserad av äldre föremål.</li>
                            <li>Du bidrar till att saker återvinns.</li>
                            <li>Ca 50 procent av vinsten går till skatter, det vill säga bland annat vård, skola, infrastrktur och omsorg.</li>
                        </ul>
                </div>
            </div>
        
        </div>
    </>
    );
}

export default Varfor;