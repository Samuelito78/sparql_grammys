"use client";

import { useState } from "react";
import { Chart } from "chart.js";

export default function QueryGraphDB() {
    const [result, setResult] = useState(null);
    const [startDate, setStartDate] = useState(1958);
    const [endDate, setEndDate] = useState(2019);
    const [type, setType] = useState("albums");

    const [query, setQuery] = useState(`
        PREFIX iut: <https://cours.iut-orsay.fr/npbd/>
        PREFIX wd: <http://www.wikidata.org/entity/>
        PREFIX wdt: <http://www.wikidata.org/prop/direct/>
        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
        PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

        SELECT * WHERE {
        ?entity a iut:Nominee ;
                iut:category "{queryType} Of The Year"@en ; # on met un boolean de con qui change soit album soit song
                iut:name ?name ;
                iut:year ?year ;
                iut:hasGenre ?wikidataGenreLabel .

        # Convert the xsd:gYear to a string and compare
        FILTER (xsd:integer(str(?year)) >= ${startDate} && xsd:integer(str(?year)) <= ${endDate}) # ici on change les années avec des variables de con voila bisous
            }`);

    const MIN_DATE = 1958;
    const MAX_DATE = 2019;

    const calculateProgressBar = (start, end) => {
        const leftPercentage = ((start - MIN_DATE) / (MAX_DATE - MIN_DATE)) * 100;

        const widthPercentage = start === end
            ? 0.5
            : ((end - start) / (MAX_DATE - MIN_DATE)) * 100;

        return { leftPercentage, widthPercentage };
    };

    const executeQuery = async () => {
        let queryType;
        if (type === "albums") queryType = "Album";
        else queryType = "Song";
        console.log(queryType);

        const updatedQuery = query.replace("{queryType}", queryType);

        try {
            const response = await fetch("/api/graphdb", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ query: updatedQuery }),
            });

            const data = await response.json();
            setResult(data);
        } catch (error) {
            console.error("Error executing query:", error);
        }
    };

    const handleStartDateChange = (e) => {
        let value = parseInt(e.target.value, 10);
        if (value < MIN_DATE) value = MIN_DATE;
        if (value > MAX_DATE) value = MAX_DATE;
        if (value > endDate) value = endDate;
        setStartDate(value);
    };

    const handleEndDateChange = (e) => {
        let value = parseInt(e.target.value, 10);
        if (value < MIN_DATE) value = MIN_DATE;
        if (value > MAX_DATE) value = MAX_DATE;
        if (value < startDate) value = startDate;
        setEndDate(value);
    };

    const { leftPercentage, widthPercentage } = calculateProgressBar(startDate, endDate);

    return (
        <div>
            <h2>Trouvez les statistiques des Grammys de {MIN_DATE} à {MAX_DATE}</h2>
            <div className="form-group">
                <div className="types">
                    <label
                        className={`radio-button ${type === "albums" ? "selected" : ""} `}
                    >
                        <input
                            type="radio"
                            name="type"
                            value="albums"
                            checked={type === "albums"}
                            onChange={(e) => setType(e.target.value)}
                        />
                        Albums
                    </label>
                    <label
                        className={`radio-button ${type === "singles" ? "selected" : ""} `}
                    >
                        <input
                            type="radio"
                            name="type"
                            value="singles"
                            checked={type === "singles"}
                            onChange={(e) => setType(e.target.value)}
                        />
                        Singles
                    </label>
                </div>
                <div className="dates">
                    <input
                        type="number"
                        min={MIN_DATE}
                        max={MAX_DATE}
                        step="1"
                        onKeyDown={(event) => {
                            event.preventDefault();
                        }}
                        value={startDate}
                        onChange={handleStartDateChange}
                    />
                    <input
                        type="number"
                        min={MIN_DATE}
                        max={MAX_DATE}
                        step="1"
                        onKeyDown={(event) => {
                            event.preventDefault();
                        }}
                        value={endDate}
                        onChange={handleEndDateChange}
                    />
                </div>

                <div className="progress-bar">
                    <div className="progress-bar-background"></div>
                    <div
                        className="progress-bar-fill"
                        style={{
                            left: `${leftPercentage}% `,
                            width: `${widthPercentage}% `,
                        }}
                    ></div>
                </div>
                <p className="summary">
                    Vous allez effectuer des recherches entre <span>{startDate}</span> et <span>{endDate}</span> pour les <span>{type}</span>.
                </p>
                <button onClick={executeQuery}>
                    Chercher
                </button>
            </div>

            <pre>
                {JSON.stringify(result, null, 2)}
            </pre>
        </div>
    );
}
