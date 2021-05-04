### CSS rules

Les classes et les ID CSS doivent être nommés d'après le nom du composant et écrits en slug-case ex: home-classname).
Les classes de CSS globables sont créées dans app.css et utilisées autant que possible.

### Var names

Les noms de variables doivent être compréhensibles et faciles à lire (pas de "sdsqd1234").

### GIT

Nommage des commits :

    "[FEATURE] Nom du commit"
    "[EVOL] Nom du commit"
    "[FIX] Nom du commit"

## Development

Run in development environment with live reloading:

```
WEB_CLIENT_PORT=3000 API_PORT=4000 docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build
```

## Deployment

Run in production environment:

```
GATEWAY_PORT=8000 docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build -d
```

stdin_open: true
CI=true
