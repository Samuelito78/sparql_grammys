# sparql_grammys
Sparql project on grammys and wikidata


example of a query that retrieves the genre of a specified album on wikidata :
```sparql
SELECT ?genreLabel ?countryLabel WHERE {
  wd:Q1049169 wdt:P136 ?genre .
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
```


example of a query displaying the name and year of the nominee for Album Of The Year in the Grammys using our ontologies :
```sparql
PREFIX iut: <https://cours.iut-orsay.fr/npbd/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

SELECT ?name ?year
WHERE {
  ?nominee a iut:Nominee ;
    	   iut:category ?cat ; 
           iut:name ?name ;
           iut:year ?year .
  FILTER("Album Of The Year"@en = ?cat)
}
ORDER BY ?year
```

example of a construct that gets every album from our graph and links them to their genre on wikidata :
```sparql
PREFIX iut: <https://cours.iut-orsay.fr/npbd/>
PREFIX wd: <http://www.wikidata.org/entity/>
PREFIX wdt: <http://www.wikidata.org/prop/direct/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

CONSTRUCT {
  ?entity a iut:Nominee ;
          iut:name ?name ;
          iut:category "Album Of The Year"@en ;
          iut:year ?year ;
          iut:artist ?artist ;
          iut:imageUrl ?imageUrl ;
          iut:linkedToWikidata ?wikidataEntity ;
          iut:hasGenre ?wikidataGenreLabel .
}
WHERE {
  # our local graph
  ?entity a iut:Nominee ;
          iut:category "Album Of The Year"@en ;
          iut:name ?name ;
          iut:artist ?artist ;
          iut:year ?year ;
          iut:imageUrl ?imageUrl .
  FILTER (lang(?name) = "en")
  
  # federated part to link to wikidata
  SERVICE <https://query.wikidata.org/sparql> {
    ?wikidataEntity wdt:P31 wd:Q482994 ;
                    rdfs:label ?name ;
                    wdt:P136 ?wikidataGenre .
    ?wikidataGenre rdfs:label ?wikidataGenreLabel .
    FILTER (lang(?wikidataGenreLabel) = "en")
    FILTER (lang(?name) = "en")
  }
}
```

example of an insert to replace the actual graph with addtionnal pieces of information on genres found by linking the local graph to wikidata :
```sparql
PREFIX iut: <https://cours.iut-orsay.fr/npbd/>
PREFIX wd: <http://www.wikidata.org/entity/>
PREFIX wdt: <http://www.wikidata.org/prop/direct/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

INSERT {
    ?entity a iut:Nominee ;
            iut:name ?name ;
            iut:category "Album Of The Year"@en ;
            iut:year ?year ;
            iut:artist ?artist ;
            iut:imageUrl ?imageUrl ;
            iut:linkedToWikidata ?wikidataEntity ;
            iut:hasGenre ?wikidataGenreLabel .
}
WHERE {
  # our local graph
  ?entity a iut:Nominee ;
          iut:category "Album Of The Year"@en ;
          iut:name ?name ;
          iut:artist ?artist ;
          iut:year ?year ;
          iut:imageUrl ?imageUrl .
  FILTER (lang(?name) = "en")
  
  # federated part to link to wikidata
  SERVICE <https://query.wikidata.org/sparql> {
    ?wikidataEntity wdt:P31 wd:Q482994 ;
                    rdfs:label ?name ;
                    wdt:P136 ?wikidataGenre .
    ?wikidataGenre rdfs:label ?wikidataGenreLabel .
    FILTER (lang(?wikidataGenreLabel) = "en")
    FILTER (lang(?name) = "en")
  }
}
```
