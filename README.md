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
