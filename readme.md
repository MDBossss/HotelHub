<br/>
<p align="center">
  <a href="https://github.com/MDBossss/HotelHub">
    <img src="/images/favicon.png" alt="Logo" width="80" height="80">
  </a>

  <h1 align="center">HotelHub</h1>

  <p align="center">
    A modern hotel reservation app built with React + Vite, TypeScript, SASS, Node.js, Express, and Supabase.
    <br/>
    <br/>
    <a href="https://hotel-hub-client.vercel.app/">View Demo</a>
    .
    <a href="https://github.com/MDBossss/HotelHub/issues">Report Bug</a>
    .
    <a href="https://github.com/MDBossss/HotelHub/issues">Request Feature</a>
  </p>
</p>

![Downloads](https://img.shields.io/github/downloads/MDBossss/HotelHub/total) ![Contributors](https://img.shields.io/github/contributors/MDBossss/HotelHub?color=dark-green) ![Stargazers](https://img.shields.io/github/stars/MDBossss/HotelHub?style=social) ![Issues](https://img.shields.io/github/issues/MDBossss/HotelHub) ![License](https://img.shields.io/github/license/MDBossss/HotelHub) 

---

![Project Preview](/images/showcase.png)

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
4. Start the server by running `yarn run start` in the server directory.
5. Start the client by running `yarn run dev` in the client directory.

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.
* If you have suggestions for adding or removing projects, feel free to [open an issue](https://github.com/MDBossss/HotelHub/issues/new) to discuss it, or directly create a pull request after you edit the *README.md* file with necessary changes.
* Please make sure you check your spelling and grammar.
* Create individual PR for each suggestion.
* Please also read through the [Code Of Conduct](https://github.com/MDBossss/HotelHub/blob/main/CODE_OF_CONDUCT.md) before posting your first idea as well.

### Creating A Pull Request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See [LICENSE](https://github.com/MDBossss/HotelHub/blob/main/LICENSE.md) for more information.
