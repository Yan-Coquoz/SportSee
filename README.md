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
- [Git](https://git-scm.com/)

### Project setup

- Clone the repo on your computer.

````bash
git clone https://github.com/Yan-Coquoz/SportSee.git
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

---
dev dependencies:

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

### Routes Frontend

- Base URL : `http://localhost:3000/`
  - slug :
    - user: `user/id` (12 or 18)

exemple :

- [http://localhost:3000/](http://localhost:3000/) : home
- [http://localhost:3000/user/12](http://localhost:3000/user/12) : user id 12
- [http://localhost:3000/user/18](http://localhost:3000/user/18) : user id 18
- [http://localhost:3000/user](http://localhost:3000/user) : Mocked datas

## Backend

- [Do the same manipulation as here](#project-setup)
- [The backend repo](https://github.com/Yan-Coquoz/P12-Sportsee-backend)
