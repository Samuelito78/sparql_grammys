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


// Choisir date et album ou musique

// Faire stats sur les styles les plus écoutés


/*
PREFIX wd: <http://www.wikidata.org/entity/>
PREFIX wdt: <http://www.wikidata.org/prop/direct/>
PREFIX wikibase: <http://wikiba.se/ontology#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX bd: <http://www.bigdata.com/rdf#>

SELECT ?genreLabel WHERE {
  SERVICE <https://query.wikidata.org/sparql> {
    wd:Q1049169 wdt:P136 ?genre . # Récupère les genres associés à l'entité Q1049169
    ?genre rdfs:label ?genreLabel . # Récupère les libellés des genres
    FILTER(LANG(?genreLabel) = "en") # Filtre pour les libellés en anglais
  }
}
*/