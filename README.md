# Lenus eHealth Code Challenge
A simple dynamic chart application developed by Simon Norup as a code challenge
for the company Lenus eHealth.

Solution can be found deployed at: http://wormple12.lenus-ehealth-challenge.surge.sh/

### Npm Scripts
- **Install:** "npm i"
- **Build code:** "npm run build"
- **Test code:** "npm test", or "npm cypress:open" to test in the Cypress client.
- **Run code:** "npm start"

### Project Structure
- **/cypress** --> everything connected to making sure the cypress tests run correctly. I chose to place the actual spec files together with the modules they test, for a more feature-driven architecture.

- **/src**
    - **/components** --> all React components go here, together with any styling directly linked to those components.
        - **/screens** --> components directly linked to specific screens or features, following feature-driven structure.
        - **/shared** --> UI components not linked to any specific screen or feature.
        - **/utility** --> non-UI components not linked to any specific screen or feature.
    - **/services** --> integration with server/database services, in this case Firebase. All data is fetched and manipulated through here.
    - **/style** --> global styling.
    - **/types** --> TS types and any logic directly linked to those types.

### Tech Stack
The current tech stack includes:

- **Webpack, Babel and TypeScript.**
    - Standards within the industry providing among other things advanced module bundling, transpilation from the newest ECMAScript features, and type safety. I would use these in almost all JS-based projects.

- **ReactJS, w. react-router.**
    - The most popular and well-maintained component-based JS framework -- but most importantly the one used by Lenus eHealth (and the one I know the best).
    - React-router provides a simple layer of state management over the browser history, which I would use as a standard in most React projects.

- **SCSS as preprocessor CSS.**
    - Has many uses, but most importantly, this provides nested CSS and mixins, giving our styling the structured and reusable qualities it normally lacks.

- **Firebase as database.**
    - For a simple use case like this project, an extensive backend infrastructure would be overkill, so Google's Firestore services provides a quick (in every way) and very developer friendly noSQL database. I would have normally secured the data with user authentication, but I chose to keep it simple.

- **Cypress as testing framework.**
    - An everything-included testing framework using Chai, made for E2E testing but capable of all kinds of tests. No reason to include more than one test technology for a small project like this, but one could otherwise have considered Jest for non-E2E tests.

- **Material UI.**
    - The most UX and DX friendly component library (also the only one I could find that was 100% up to date with the newest technologies). A good way to quickly get a nicely looking UI up and running.

- **Victory.**
    - A chart library for ReactJS. Chosen because they also have an official version for React Native which Lenus eHealth uses. It did not support additional styling very well though, so I will try another library next time.