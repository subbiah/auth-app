# Auth App (Micro-Frontend)

This app provides **authentication & user management** features for the micro-frontend system.

## Features

- `Login` component → user sign-in form (host redirects to booking on success).
- `UserProfile` component → shows logged-in user details.

## Module Federation Exposes

- `./Login`
- `./UserProfile`
- `./plugin` (manifest with routes & permissions)

## Permissions

- **Login** → `public` (visible to everyone, hidden in sidebar).
- **Profile** → `User` and `Admin`.

## Development

```bash
cd auth-app
npm install
npm start
```
