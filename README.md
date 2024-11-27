# sparql_grammys
Sparql project on grammys and wikidata


example of a query that retrieves the genre of a specified album :
```sparql
SELECT ?genreLabel ?countryLabel WHERE {
  wd:Q1049169 wdt:P136 ?genre .
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
```
