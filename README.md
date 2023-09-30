<p  align="center">
<a  href="https://laravel.com"  target="_blank">
<img  src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg"  width="400"  alt="Laravel Logo">
</a>
</p>

<p  align="center">
<a  href="https://inertiajs.com"  target="_blank">
<img  src="https://raw.githubusercontent.com/inertiajs/.github/master/LOGO.png"  width="400"  alt="Laravel Logo">
</a>
</p>

### Usage

```bash
git clone https://github.com/irsyadadl/inertia.ts.git project

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
-   User Profile
-   User Avatar
-   User Password
-   User Delete
-   User Resources (--only=[index, show, destroy])
-   Simple Pagination
-   Fast Paginate

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

# Start development
npm run dev

# Build the app
npm run build

# Testing for SSR
npm run preview
```

### Components

This project has a few helpers available to you. You can use them in your components like this:

### Update profile information

Of course it is not just about authentication, but also about updating user profile information, password, and deleting account.

### Thanks to

-   [Laravel](https://github.com/laravel/framework)
-   [Inertia](https://github.com/inertiajs/inertia) with [React](https://github.com/facebook/react) and [Typescript](https://github.com/microsoft/TypeScript)
-   [Vite](https://vitejs.dev/) with [Vite plugin](https://github.com/laravel/vite-plugin) and friends
-   [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) and friends
-   [clsx](https://github.com/lukeed/clsx)
