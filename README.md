# SportSee

- ![Author](<https://img.shields.io/badge/Author-Yan Coquoz-">)
- ![GitHub repo size](<https://img.shields.io/github/repo-size/Yan-Coquoz/SportSee>)  
![GitHub top language](https://img.shields.io/github/languages/top/Yan-Coquoz/SportSee)
![GitHub language count](https://img.shields.io/github/languages/count/Yan-Coquoz/SportSee)

## Frontend

### General information

This repo contains all the source code to run the application of the sports analytics dashboard SportSee.

### Prerequisites

- A text editor like `VSCode, Vim, IntelliJ...`
- [Node.js < v.16](https://nodejs.org/en/)
- [A github Account](https://github.com/)

### Project setup

- Clone the repo on your computer.

````bash
git clone Adress_Of_The_Repo
````

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

- ![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/Yan-Coquoz/SportSee/react)
- ![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/Yan-Coquoz/SportSee/prop-types)
- ![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/Yan-Coquoz/SportSee/react-router-dom)
- ![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/Yan-Coquoz/SportSee/recharts?label=Rechart)
- ![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/Yan-Coquoz/SportSee/axios)
- ![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Yan-Coquoz/SportSee/dev/jsdoc)
- ![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Yan-Coquoz/SportSee/dev/sass)
- ![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Yan-Coquoz/SportSee/dev/prettier)
- ![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Yan-Coquoz/SportSee/dev/eslint) ![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Yan-Coquoz/SportSee/dev/eslint-config-prettier) ![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/Yan-Coquoz/SportSee/dev/eslint-plugin-react)

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

- [Do the same manipulation as here](#project-setup)
- [The backend repo](https://github.com/Yan-Coquoz/P12-Sportsee-backend)

### Routes

- base URL : `http://localhost:5000/user/`
  - Slug :
    - id : `id`
    - Activity : `id/activity`
    - Average session : `id/average-sessions`
    - performance : `id/performance`
