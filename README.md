<p  align="center"> <a  href="https://laravel.com/docs/10.x/starter-kits#breeze-and-inertia"  target="_blank"> <img  src="https://raw.githubusercontent.com/mariio46/inertia.jsx/master/react-laravel-inertia.png"  alt="Laravel Logo"> </a> </p>

### Usage

```bash
git clone https://github.com/mariio46/inertia.jsx.git project

cd project

composer install

cp .env.example .env

php artisan key:generate

npm i && npm run build

php artisan serve
```

> This project using React `v18` and Laravel `v10`

### Laravel Inertia React

This project has come with some features like:

-   Authentication
-   User Profile (Name, Username, Email)
-   User Avatar (Use Gravatar)
-   User Change Password
-   User Delete
-   User Resources
-   Simple Pagination (For View)
-   Fast Paginate (For Backend)

### Quick Login

This project has a feature to login quickly. You can use this feature by adding `/dev/login/{user_id}` to the url. For example: `http://localhost:8000/dev/login/1`. And then you can login as user with id `1`. But this feature only works in development mode with `APP_ENV=local` in `.env` file. Make sure you have a user with id `1` in your database.

### About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling.

### About Inertia.js

Inertia.js lets you quickly build modern single-page React, Vue and Svelte apps using classic server-side routing and controllers.

### Available scripts

Feel free to use someting like [pnpm](https://pnpm.io/) or [yarn](https://yarnpkg.com/). It just node package manager I have, so make yours.

```bash
# Format with prettier
npm run format

# Format with prettier
npm run check

# Start development
npm run dev

# Build the app
npm run build
```

### Components

This project has a few helpers available to you. You can use them in your components like this:

### Update profile information

Of course it is not just about authentication, but also about updating user profile information, password, and deleting account.

### Thanks to

-   [Parsinta](https://github.com/teamparsinta)
-   [Isryad A. Panjaitan](https://github.com/irsyadadl)
-   [Laravel](https://github.com/laravel/framework)
-   [Inertia](https://github.com/inertiajs/inertia) with [React](https://github.com/facebook/react)
-   [Vite](https://vitejs.dev/) with [Vite plugin](https://github.com/laravel/vite-plugin) and friends
-   [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) and friends
-   [clsx](https://github.com/lukeed/clsx)
-   [Hammerstone](https://github.com/hammerstonedev)
