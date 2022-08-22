# SportSee

- ![Author](<https://img.shields.io/badge/Author-Yan Coquoz-">)
- ![GitHub repo size](<https://img.shields.io/github/repo-size/Yan-Coquoz/SportSee>)  

## Frontend

### Prerequisite

- A text editor like `VSCode, Vim, IntelliJ...`
- [Node.js < v.16](https://nodejs.org/en/)
- [A github Account](https://github.com/)

### Project setup

- Clone the repo with git `git clone Adress_Of_The_Repo`

- Package installations after cloning.

```bash
# with NPM
npm install
# with Yarn
yarn
```

- Start the application

```bash
npm run start
# or
npm start
# with Yarn
yarn start
```

### Added dependencies

- SASS.
- Prop-types.
- React Router Dom
- Prettier
- Eslint
- Axios
- JsDoc

### Basic script with CRA

CRA (Create-React-App)

- `start` : start the application
- `build` : build the application
- `eject` : makes CRA configuration folders and files visible (⚡ irreversible)

### Added scripts

In addition to native CRA scripts, there are:

- `clean`     : remove build, dist and docs folders..
- `clean:all` : delete the node modules and build folders, dist as well as the package-lock file.json.
- `jsdoc`     : generate JsDoc.

## Backend

### Routes

- base URL : `http://localhost:5000/user/`
  - Slug :
    - Activity : `id/activity`
    - Average session : `id/average-sessions`
    - performance : `id/performance`
