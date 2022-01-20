# Aim
 Gain knowledge of front-end applications following industry standards closely 

# Objectives
## Base Objectives
- Develop a React based application for front-end
- Develop an Express based back-end/orchestration layer for serving requests
- Follow a system design approach used in industries

## Stretch Objectives
- Host the application on Cloud using AWS
- Gain knowledge about Docker

# Requirements
- The user shall enter their name and number of friends which will be used by the app to predict the activity they could do 
- The application shall return an animated image of the user after the above request
- The application shall display a list of trending movies which is updated regularly
- The application shall also display the description, average vote, vote count, genre and popularity
- The application shall display minions
- The application shall attach the link to an interesting song on homepage

# System Architecture
FunTown is now hosted on AWS and can be accessed via this link: [https://funtown.link](https://funtown.link)
This application consists of the following components:
 - Front-end hosted on AWS S3
 - Back-end hosted on AWS Lambda
 
## System Design
![funtown_application drawio](https://user-images.githubusercontent.com/34181525/150287702-9f906eef-0c4a-48be-a6c7-6b1da16fa369.png)


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