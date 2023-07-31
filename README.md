# Fast-Delivery-Front

Welcome to the "Fast-Delivery-Front" project documentation.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Project Structure

```
FAST-DELIVERY_FRONT
├── .husky
├── public # Store static files like images, fonts etc.
├── src
│ ├── app
│ │ ├── components # Reusable components (header, footer, buttons etc.)
│ │ ├── pages # All the main pages go here.
│ │ └── layout.tsx # Main layout component
│ │ ├── layoutContainer.tsx # Layout wrapper for the app
│ │ └── page.tsx # Entry point of the app
│ ├── services # Services for handling business logic
│ ├── state # State management files (Redux)
│ ├── utils # Utility functions and helpers
│ └── styles # Global styles, variables, themes
├── .dockerignore
├── .eslintrc.json
├── .gitignore
├── .lintstagedrc
├── README.md
├── dockerfile
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Usage and Features

### Login

The "Login" component is responsible for handling user authentication. The user is presented with two text input fields for their email and password respectively, along with a "Login" button to submit these credentials. If the user does not have an account, they have the option to create one by clicking the "Create account" button which will navigate them to the sign-up page.

Props:
This component does not receive any props.

Actions:

Login: By clicking the "Login" button, the user can log in using their entered email and password.
Create account: By clicking the "Create account" button, the user can navigate to the sign-up page to create a new account.
Forgot password: By clicking the "Forgot my password" text, the user can navigate to the password recovery process (implementation not shown in the provided code).

### Signup

### Start-Shift

The "Start-shift" component displays information about the current delivery journey, with details about each package in the journey. It consists of two main sub-components: Pending and History. The Pending sub-component displays the details of the packages that are pending delivery, while the History sub-component shows the packages that have been delivered.

## Props

The component receives a list of packages as props, where each package is represented as an object with the following interface:

```typescript
interface Package {
    id: string
    address: string
    city: string
    status: string
}
```

## Example Prop Data (packageInfo):

```
const packages: Package[] = [
    {
        id: 'PKG12345',
        address: 'Av. Corrientes 123',
        city: 'Buenos Aires',
        status: 'in progress',
    },
    {
        id: 'PKG98765',
        address: 'Calle Florida 456',
        city: 'Buenos Aires',
        status: 'delivered',
    },
    //...
]
```

## Actions:

-   Get packages: By clicking the "Get packages" button, the user can navigate to the page which displays the details of all the packages (implementation not shown in the provided code).

### Current-delivery

The "current-delivery" page displays information about an ongoing delivery and allows the user to either finalize or cancel the delivery. It provides details about the current package, such as the address, city, package number, recipient, and includes a related map component.

## Props

This is the interface of the Package received through props:

```typescript
interface Package {
    id: string
    address: string
    city: string
    quantity: number
    receiver: string
}
```

## Example Prop Data (packageInfo):

```typescript
const packageInfo: Package = {
    id: '#0A235',
    address: 'Amenabar 2356',
    city: 'CABA',
    quantity: 2,
    receiver: 'David Rodriguez',
}
```

## Actions:

-   Finalize: By clicking the "Finalize" button, the user can complete the ongoing package delivery.
-   Cancel delivery: By clicking the "Cancel delivery" button, the user can cancel the ongoing package delivery.
