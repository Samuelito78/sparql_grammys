// src/app/page.js
import QueryGraphDB from "./components/QueryGraphDB";

export default function Home() {
    return (
        <div>
            <main>
                <div className="intro-image">
                    <div className="image-container">
                        <img className="main-image" src="/images/main2.jpg" alt="Grammys" />
                    </div>
                    <div className="image-text">
                        <p>Analysez les tendances des <b className="gold">grammys</b></p>
                        <p className="call-for-action">soyez le prochain</p>
                    </div>

                </div>

                <QueryGraphDB />
            </main>
        </div>
    );
}