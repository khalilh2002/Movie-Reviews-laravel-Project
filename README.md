# Movie Review Site

This is a Movie Review Site built using ReactJS for the frontend and Laravel for the backend API. The site includes features such as user registration and login, rating movies, adding movies to a favorite list, and planning to watch movies later.

## Features

- **User Authentication**: Register and login functionality using Bearer token for secure access.
- **Movie Rating**: Users can rate movies they have watched.
- **Favorite List**: Add movies to a favorite list for easy access.
- **Plan to Watch**: Users can add movies to a "plan to watch" list to keep track of movies they intend to watch.

## Technologies Used

- **Frontend**: ReactJS, Axios
- **Backend**: Laravel, MySQL, Bearer Token Authentication
- **Styling**: CSS, Bootstrap

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- PHP
- Composer
- MySQL

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/movie-review-site.git
    cd movie-review-site
    ```

2. **Backend Setup (Laravel API):**

    - Navigate to the `backend` directory:

        ```sh
        cd backend
        ```

    - Install the dependencies:

        ```sh
        composer install
        ```

    - Copy `.env.example` to `.env` and update your database credentials:

        ```sh
        cp .env.example .env
        ```

    - Generate application key:

        ```sh
        php artisan key:generate
        ```

    - Run the database migrations:

        ```sh
        php artisan migrate
        ```

    - Seed the database (optional, for testing):

        ```sh
        php artisan db:seed
        ```

    - Start the Laravel development server:

        ```sh
        php artisan serve
        ```

3. **Frontend Setup (ReactJS):**

    - Navigate to the `frontend` directory:

        ```sh
        cd ../frontend
        ```

    - Install the dependencies:

        ```sh
        npm install
        ```

    - Start the React development server:

        ```sh
        npm start
        ```

## Project Structure

- **backend/**: Contains the Laravel API.
- **frontend/**: Contains the ReactJS application.
- **frontend/src/**:
    - **components/**: React components for different parts of the application.
    - **services/**: Axios service for making API calls.
    - **views/**: Different page views.

## API Endpoints

- **Authentication:**
    - `POST /api/register`: Register a new user.
    - `POST /api/login`: Login a user and return a Bearer token.

- **Movies:**
    - `GET /api/movies`: Get a list of movies.
    - `GET /api/movies/{id}`: Get details of a specific movie.
    - `POST /api/movies/{id}/rate`: Rate a movie.

- **User Lists:**
    - `GET /api/user/favorites`: Get the list of favorite movies.
    - `POST /api/user/favorites`: Add a movie to favorites.
    - `GET /api/user/plan-to-watch`: Get the list of movies planned to watch.
    - `POST /api/user/plan-to-watch`: Add a movie to plan to watch list.




## Contact

If you have any questions or feedback, please feel free to contact us at khalil.houssein2002@gmail.com.
