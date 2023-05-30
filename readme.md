<br/>
<p align="center">
  <a href="https://github.com/MDBossss/HotelHub">
    <img src="/images/favicon.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">HotelHub</h3>

  <p align="center">
    A modern hotel reservation app built with React + Vite, TypeScript, SASS, Node.js, Express, and Supabase.
    <br/>
    <br/>
    <a href="https://github.com/MDBossss/HotelHub">View Demo</a>
    .
    <a href="https://github.com/MDBossss/HotelHub/issues">Report Bug</a>
    .
    <a href="https://github.com/MDBossss/HotelHub/issues">Request Feature</a>
  </p>
</p>

![Downloads](https://img.shields.io/github/downloads/MDBossss/HotelHub/total) ![Contributors](https://img.shields.io/github/contributors/MDBossss/HotelHub?color=dark-green) ![Stargazers](https://img.shields.io/github/stars/MDBossss/HotelHub?style=social) ![Issues](https://img.shields.io/github/issues/MDBossss/HotelHub) ![License](https://img.shields.io/github/license/MDBossss/HotelHub) 

## Table Of Contents

* [About the Project](#about-the-project)
* [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Authors](#authors)
* [Acknowledgements](#acknowledgements)

---

![Project Preview](/images/showcase.png)

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

