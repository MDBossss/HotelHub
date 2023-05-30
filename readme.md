# HotelHub
HotelHub is a project **focused on frontend** development, aimed at expanding my knowledge of frontend design and technologies. While the project is currently a work in progress, the intention is to continue expanding and refining it over time. The backend serves as a basic demonstration of utilizing a REST API connected with Supabase, primarily for learning purposes. There is ample room for future upgrades and improvements.

## Technologies

### Frontend
* React + Vite
* SASS
* TypeScript

### Backend
* Node.js
* Express.js
* Supabase (PostgreSQL + authentication)


## Setting up environmental variables

To run the project, you will need to set up environmental variables. Follow the instructions below:


### server
Create a `.env` file inside the server directory and define the following variables:
```
SUPABASE_KEY = your_supabase_key
PORT = your_port_number
```

### client
Create a `.env` file inside the client directory and define the following variables:
```
VITE_GOOGLE_MAPS_API_KEY = your_google_maps_api_key
VITE_API_BASE_URL = http://localhost:3000
```

## Installation
To het started with HotelHub, follow these steps:
1. Clone the repository
2. Install the dependencies for both the server and the client by running `yarn install` in their respective directories.
3. Configure the environmental variables as described in the previous section.
4. Start the server by running `yarn start` in the server directory.
5. Start the client by running `yarn run dev` in the client directory.

