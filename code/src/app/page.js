// src/app/page.js
import QueryGraphDB from "./components/QueryGraphDB";

export default function Home() {
    return (
        <div>
            <main>
                <div className="intro-image">
                    <div className="image-container">
                        <img className="main-image" src="/images/main.jpg" alt="Grammys" />
                    </div>
                    <div className="image-text">
                        <p>Analysez les tendances des <b className="gold">grammys</b></p>
                        <p className="call-for-action">soyez le prochain</p>
                    </div>
                    <div className="image-overlay">
                        <a className="scroll-down" href="#query">
                            <svg version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 330 330"
                                preserveAspectRatio="none"
                            >
                                <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
                            </svg>
                        </a>
                    </div>

                </div>

                <QueryGraphDB id="query" />
            </main >
        </div >
    );
}