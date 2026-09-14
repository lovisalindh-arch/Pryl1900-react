import Meny from '../components/Meny';
import '../styles/style.css';

function Kontakt () {
    return (
        <>
        <Meny />
        <div className="kontakt">
            <img src="kontaktbakgrund.jpg" alt="Butiken Pryl1900 inifrån" class="kontaktbild"/>

            <div className="ruta kontaktinfo">
                <h1> KONTAKT </h1>

                <div className="kontaktuppgifter">
                    <p><i className="fa fa-phone"></i> 070-448 51 43</p>
                    <a href="https://instagram.com/pryl1900" class="instaknapp">
                        <span>Följ oss på instagram </span>
                        <i className="fa fa-instagram"></i>
                    </a>
                </div>

                <form action="mailto:lovisalindh@icloud.com" method="post" enctype="text/plain">
                    <label for="namn">Namn:</label>
                    <input type="text" id="namn" name="namn" required/>
                
                    <label for="epost">E-post:</label>
                    <input type="email" id="epost" name="epost" required/>
                
                    <label for="meddelande">Meddelande:</label>
                    <textarea id="meddelande" name="meddelande" rows="5" required></textarea>
                
                    <button type="submit">Skicka</button>
                </form>
            </div>

            <div className="ruta oppettider">
                <h2>ÖPPETTIDER</h2>
                <table>
                    <tr><td><strong>Måndag</strong></td><td>Stängt</td></tr>
                    <tr><td><strong>Tisdag</strong></td><td>12-17</td></tr>
                    <tr><td><strong>Onsdag</strong></td><td>12-18</td></tr>
                    <tr><td><strong>Torsdag</strong></td><td>12-17</td></tr>
                    <tr><td><strong>Fredag</strong></td><td>12-16</td></tr>
                    <tr><td><strong>Lördag</strong></td><td>11-14</td></tr>
                    <tr><td><strong>Söndag</strong></td><td>Stängt</td></tr>
                </table>
            </div>

            <div className="ruta hittahit">
                <h2>HITTA HIT</h2>
                <p><i className="fa fa-map-marker"></i> Kungsgatan 92, Umeå</p>
                <video controls>
                    <source src="hittapryl1900.mp4" type="video/mp4"/>
                    Din webbläsare stödjer inte videouppspelning.
                </video>
            </div>

        </div>
    </>
    );
}

export default Kontakt;