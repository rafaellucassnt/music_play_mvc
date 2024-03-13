# Estrutura das pastas

```
src
|-- controllers
| |-- musicController.js
|-- data
| |-- music.json
|-- models
| |-- musicModel.js
|-- public
| |-- img
| |-- img1.png
| |-- img2.png
| |-- ...
| |-- music
| |-- song1.mp3
| |-- song2.mp3
| |-- ...
|-- views
| |-- index.ejs
|-- app.js
|-- routes.js
```

# Music Player MVC

Um reprodutor de música simples implementado usando o padrão MVC (Model-View-Controller) com Node.js, Express e EJS.

## Instalação

Certifique-se de ter o Node.js instalado em seu sistema. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

1. Clone este repositório em sua máquina local:
   `git clone https://github.com/rafaellucassnt/music_play_mvc.git`
2. Navegue até o diretório do projeto:
   `cd music_player_mvc`

3. Instale as dependências usando npm:
   `npm install`

## Uso

Para iniciar o servidor, você pode usar o comando `npm start`

Ou, se você quiser usar o Nodemon para reiniciar automaticamente o servidor quando houver alterações nos arquivos, você pode usar o comando `npm run dev`

Isso iniciará o servidor na porta padrão 3000. Você pode acessar o aplicativo em seu navegador visitando [http://localhost:3000](http://localhost:3000).
