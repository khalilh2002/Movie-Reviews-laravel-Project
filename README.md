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

### Middleware

Ensure that the middleware `auth:sanctum` is applied to routes that require authentication.

### POST Routes

- **User Authentication:**
    - `POST /register`: Register a new user.
    - `POST /login`: Login a user and return a Bearer token.
    - `POST /logout`: Logout a user. Requires Bearer token.

- **Plan to Watch:**
    - `POST /delete/planToWatch/`: Delete a show from the plan to watch list. Requires Bearer token.
    - `POST /add/planToWatch/`: Add a show to the plan to watch list. Requires Bearer token.

- **Favorite Shows:**
    - `POST /delete/favorite/`: Delete a show from the favorite list. Requires Bearer token.
    - `POST /add/favorite/`: Add a show to the favorite list. Requires Bearer token.

- **Rating:**
    - `POST /rate/show/`: Update the rating of a show. Requires Bearer token.

- **User Management:**
    - `POST /edit/user/`: Edit user details. Requires Bearer token.
    - `POST /delete/user/{id}`: Delete a user. Requires Bearer token.

- **News:**
    - `POST /add/news`: Add news. Requires Bearer token.
    - `POST /edit/news`: Edit news. Requires Bearer token.
    - `POST /delete/news/{id}`: Delete news. Requires Bearer token.

- **Shows:**
    - `POST /add/show`: Add a show. Requires Bearer token.
    - `POST /delete/show/{id}`: Delete a show. Requires Bearer token.
    - `POST /edit/show/`: Edit a show. Requires Bearer token.

- **Genres:**
    - `POST /delete/genre/{id}`: Delete a genre. Requires Bearer token.
    - `POST /edit/genre/`: Edit a genre. Requires Bearer token.
    - `POST /add/genre/`: Add a genre. Requires Bearer token.

### GET Routes

- **Favorite Shows:**
    - `GET /favorite/{id}`: Get the list of favorite shows for a user.

- **Plan to Watch:**
    - `GET /planToWatch/{id}`: Get the list of shows planned to watch for a user.

- **Profile:**
    - `GET /profile/topGenre/{id}`: Get the top genre for a user. Requires Bearer token.
    - `GET /profile/activity/{id}`: Get the activity log for a user. Requires Bearer token.

- **Shows:**
    - `GET /shows/genre/{id}`: Filter shows by genre.
    - `GET /shows`: Get a list of shows.
    - `GET /show/{id}`: Get details of a specific show.

- **Genres:**
    - `GET /genres`: Get a list of genres.
    - `GET /genre/{id}`: Get details of a specific genre.

- **News:**
    - `GET /news/all`: Get all news.
    - `GET /news/{id}`: Get details of specific news.

- **User Management:**
    - `GET /admin/users`: Get a list of all users. Requires Bearer token.
    - `GET /user/{id}`: Get details of a specific user. Requires Bearer token.

- **Search:**
    - `GET /search-shows`: Search for shows.




## Contact

If you have any questions or feedback, please feel free to contact us at khalil.houssein2002@gmail.com.
