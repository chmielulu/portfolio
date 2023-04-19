# Jakub Chmielewski - Portfolio
![alt text](https://github.com/chmielulu/portfolio/blob/main/github/screenshot.png?raw=true)
This repository includes websites https://jacobprogrammer.dev, https://jakubprogramista.dev and https://jakubprogramista.pl

## Technologies used
- TypeScript
- Next.js
- Styled Components
- Three.js
- React Three Fiber
- Iconify

## Getting started
### Requirements
- Node.js
- Yarn
- MongoDB Database

### Tutorial
1. Download dependencies

```
yarn install
```
2. The site requires a UUID key to be generated and a MongoDB database to be configured, and then the data must be saved in an environment file. You can generate the UUID key at https://www.uuidgenerator.net and can create a MongoDB cluster at https://www.mongodb.com/.

```
// Example .env

AUTH_TOKEN=73ba0a39-c40d-4df9-a5d7-e20c0a691119 
MONGODB_URI=mongodb+srv://user:password@portfolio.site.mongodb.net/?retryWrites=true&w=majority
```
3. Run site using terminal
```
yarn dev
```

The site requires a UUID key to be generated and a MongoDB database to be configured, and then the data must be saved in an environment file.

## License
This repository is distributed under [GPL-3.0 license](https://github.com/chmielulu/portfolio/blob/main/LICENSE)