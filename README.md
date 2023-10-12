# Create React Component Library

This project is a React Library with storybook for a List App.

## Setup
First clone the repo:
```
git clone git@github.com:aleleba/react-list-ui-library.git
```
Then run:
```
cd react-list-ui-library
```
You will need to create a new .env file at the root of the project for global config.
This is an exaple of config.
```
#Library Name (Default: ui-library)
LIBRARY_NAME=ui-library
#External CSS (Default: false)
EXTERNAL_CSS=true
#External CSS NAME (Default: index.css)
EXTERNAL_CSS_NAME=other_name.css
#PREFIX URL (Default: '')
PREFIX_URL=
```

### For Development
In the terminal run:
```
npm run start
```
You will find the components on:
```
scr/components
```
You will find stories of storybook on:
```
scr/stories
```

This will start the app-library in development mode, also it have Hot Reloading!
Enjoy coding!

### For Production
In the terminal run:
```
npm run build
```
It will create a dist folder and run:
```
npm publish
```
This will publish on npm your package.

## Cheers
Hope you enjoy this proyect! Sincerely Alejandro Lembke Barrientos.