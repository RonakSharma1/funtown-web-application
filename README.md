# Development environment

## Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Naviagate [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Docker

- Ensure this repo i.e.[FunTown-Web-App](https://github.com/RonakSharma1/funtown-web-application) and [FunTown-Server](https://github.com/RonakSharma1/funtown-web-application-express-server) share a common root directory
- Move the `docker-compose.yml` to the top level of directory
Then run the following command;

### `docker-compose up`
This builds and automatically runs both the images in dev environment using `Dockerfile.dev`. This already defines the port mapping. Therefore, naviagate [http://localhost:3000](http://localhost:3000) to view it in the browser. 

# Production environment

## Scripts

In the project directory, you can run:

### `npm run build`

Builds the app for production to the `build` folder.

## Docker

### Running existing image
To use an existing image, run the following commands
 - `docker pull ronaksharma/multi-funtownapp`
 - `docker run -p 3000:3000 ronaksharma/multi-funtownapp`
 
### Creating new image
To create a new image, run the following commands
 - `docker login`
 - `docker build -t givenName .` : Uses `Dockerfile` to create a production build and store the static `html` files etc on `nginx` server. This is used to run the production build
 - `docker push` : Pushes image to DockerHub
 - `docker run -p 3000:3000 givenName`: Runs the image using nginx server on port 3000 (localhost:docker)
 
 Note: This will push the image to your dockerHub and will not update the existing image
 
### Testing running image
To test any running image, you can naviage to [http://localhost:3000](http://localhost:3000)