# whack-a-mole

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Explanation

# Instructions:

To start the game locally, you need to run the command "npm run dev".

# index.vue:

This is the main page of the application. It contains a button to control the music and an IndexCard component. The music is controlled by the musicClick function, which toggles the music status and calls the toggleMusic function from indexPage.js.

# indexPage.js:

This file contains two exported functions. startGame starts the game, setting the user's name, points, and difficulty in the Vuex store and then redirects the user to the game page. toggleMusic controls the music playback, playing it if musicStatus is true and pausing it if it's false.

# IndexCard.vue:

This is a component that contains a form for the user to enter their name and select the game difficulty. When the form is submitted, the clickStartGame function is called, which starts the game using the startGame function from indexPage.js. If the user's name is not valid, an error message is displayed.

# game.vue:

This file is the main component of the game. It imports the Confetti component and the gamePage.js file, which contains the game logic. The component has a 'difficulty' property that is required. In the template, the user information, remaining time, and game difficulty are displayed. Also, a grid of cells is displayed, where a mole appears in a random cell. When the game ends, a "Game Over" message is displayed, along with the points obtained and a button to restart the game. A table with the scores is also displayed.

# gamePage.js:

This file contains the game logic. In 'data', the game variables are initialized. In 'created', the user data is obtained from the Vuex store and the game is started. The 'endGame', 'startGame', 'restartGame', 'vibratePhone', 'moveMole', 'handleClick', and 'getPoints' functions control the game flow, the movement of the mole, the handling of user clicks, and the obtaining of points. When the component is destroyed, the game ends.

The project also uses Vuetify for the UI components and Vuex for state management. Styles are handled in indexPage.scss and text strings are stored in locales.json for easy localization.
