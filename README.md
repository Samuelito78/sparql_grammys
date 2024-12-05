# sparql_grammys
## Quel genre de musique a le plus gagné de grammy award d'album/morceau de l'année entre deux périodes données ?
<a href=https://github.com/Samuelito78/sparql_grammys>repository github du projet</a>

### Source du fichier tabulaire
Notre csv source se trouve soit dans la directory actuelle **~/the_grammy_awards.csv** soit <a href="https://www.kaggle.com/datasets/unanimad/grammy-awards">ici</a> sur kaggle, une plateforme utilisée par les data scientist pour partager des données.

Il a ensuite été modifié en deux fichiers csv :
- **grammy_winners_aoty.csv** (liste des gagnants du grammy award du meilleur album de l'année)
- **grammy_winners_soty.csv** (liste des gagnants du grammy award du meilleur morceau de l'année)

<i>les morceaux et albums de 2019 n'ont pas tous gagnés mais étaient nominés car les données datent d'avant l'annonce du gagnant de 2019</i>

Ces fichiers contiennent 5 colonnes pour aoty et 4 pour soty, en plus de contenir les colonnes id_nominee, year, nominee et category, aoty comprend la colonne img qui correspond au lien d'une image de la cover de l'album, cette colonne ne sera pas utilisé durant le projet.

### RDF et turtle
Avec OntoRefine nous avons transformé les données des deux csv en deux fichiers ttl :
- **grammy-aoty-triples.ttl**
- **grammy-soty-triples.ttl**

Une fois ces fichiers crées nous avons pu les importer sur graphDB et construire le graphe RDF disponible sur graphDB.

### Requètes utilisées
Voici notre insert qui ajoute les genres de musique récupérés via wikidata correspondant aux albums/morceaux dans notre graphe local :
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
Une fois les données de wikidata ajoutées il ne manque plus que de compter le nombre de fois que chaque genres a gagné un award :
```sparql
PREFIX iut: <https://cours.iut-orsay.fr/npbd/>
PREFIX wd: <http://www.wikidata.org/entity/>
PREFIX wdt: <http://www.wikidata.org/prop/direct/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

SELECT ?wikidataGenreLabel (COUNT(?entity) AS ?genreCount)
WHERE {
  ?entity a iut:Nominee ;
          iut:category "Album Of The Year"@en ; # Change selon le type album ou song
          iut:year ?year ;
          iut:hasGenre ?wikidataGenreLabel .

  FILTER (xsd:integer(str(?year)) >= 2000 && xsd:integer(str(?year)) <= 2019) # On change la valeur des années en fonction du besoin
}
GROUP BY ?wikidataGenreLabel
ORDER BY DESC(?genreCount)
```

### Code de la webapp
le code est en Next.js, il est accessible dans la directory actuelle dans **~/code/**
Pour le lancer il est conseillé d'utiliser le fichier <a href="https://github.com/Samuelito78/sparql_grammys/blob/main/code/README.md">README.md</a> situé dans la même directory .

**Augustin LECOMTE & Samuel BOIX-SEGURA**
