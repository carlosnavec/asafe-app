This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).


## Application Overview

This application provides a simple yet functional dashboard that displays a list of the company's main products along with a set of comparative charts to visualize their key features. Additionally, the application demonstrates the handling of a large dataset by rendering a list of over a thousand items to evaluate data loading performance and rendering speed.

### Key Features:

**Authentication:** Users must log in using one of the pre-configured social network options to access the application.

**Product Dashboard:** Once authenticated, the user is presented with a dashboard that lists the main products of the company and displays various charts comparing product characteristics.

**High-Volume Data Rendering:** The application also includes a dedicated page where a large dataset of over a thousand items is rendered, focusing on speed and performance optimization.

**Error Handling:** In case of any issues, the application redirects users to a generic error page to ensure smooth error management.


### Application Routes:
1. [/login](https://asafe-app.vercel.app/login): The login page where users can authenticate via one of the configured social networks.
2. [/dashboard](https://asafe-app.vercel.app/dashboard): The main dashboard showing the list of products and the comparative charts.
3. [/dashboard/photo](https://asafe-app.vercel.app/dashboard/photo): A page showcasing a large dataset, built to test performance and rendering speed with over a thousand items.
4. [/error](https://asafe-app.vercel.app/error): A fallback error page for unexpected failures.


## Authentication Functionality

For authentication, the application uses NextAuth.js, a flexible and scalable authentication framework for Next.js. The authentication logic is built with a modular folder structure, enabling seamless integration of new providers without the need to alter existing components or classes.

**Note:** I intentionally omitted the Twitter provider credentials (CLIENT_ID and SECRET_ID) to provoke an authentication failure in the application. Error handling has been implemented to inform users of this issue and guide them toward alternative login options, ensuring a smooth user experience despite the limitation

### Custom Provider Model:

To ensure consistency and reusability, I created a custom Provider Model Class. This class standardizes the structure of each provider and abstracts provider-specific logic, making it easier to add or modify providers with minimal changes to the application.

### Folder Structure:

- /api/adapters/providers/index.ts: This file contains an array of providers used by NextAuth.js. When a new provider is implemented, it is added to this array to be included in the authentication process.
- /api/adapters/: This folder holds the specific implementation files for each provider. Each new provider is defined in its own file, containing the necessary logic for integration.

### Key Features:
- **Modular Provider Integration**: To add a new provider, you create a new file in the /api/adapters/ folder with the provider-specific implementation. Then, in /api/adapters/providers/index.ts, simply add the new provider to the existing array of providers. This ensures the provider is registered without needing to modify any other parts of the application.

- **Provider Agnostic**: The system can handle various social login providers (e.g., Google, Facebook, GitHub) or custom OAuth providers, allowing for seamless expansion while keeping the core logic intact.

This architecture ensures that adding a new provider requires minimal effort, making the authentication system highly maintainable, scalable, and easy to extend.

## Component Development
For the visual components, I have utilized Storybook, which simplifies the task of creating and testing components with various themes. Storybook allows for isolated development and ensures that each component functions correctly before being integrated into the main application.

### Folder Structure:
All visual components are organized within the /storybook/ folder, with a structure that supports the potential creation of an external component library in the future.
### Reusable Components:
Components like Button and CustomChart have been developed with reusability in mind, allowing them to be used consistently throughout the application.
### Tailwind CSS JIT Integration:
To optimize the styling workflow, I integrated Tailwind CSS JIT. This allows for faster styling during development and significantly reduces the final bundle size by purging unused styles in real-time.
### Custom Hooks:
I have also developed custom hooks for managing the product list. These hooks are used both in the product list itself and in generating graphs with Chart.js, ensuring a consistent data flow and improving maintainability


## Large Data Listing
For the data listing feature, I utilized the public API from JSONPlaceholder, which provides a simple structure displaying text and links to photos. This API was ideal for the testing requirements of the application.

### Performance Optimization:
To enhance loading performance and rendering on the server side, I integrated the react-window library. This library efficiently handles large lists by rendering only the visible items in the viewport, which significantly reduces the amount of DOM elements that need to be processed.

### Preloading Functionality:
To further optimize the user experience, I implemented the preload functionality of the Next.js **Link** component along with the **router**'s prefetch capability. This approach allows the application to preload pages in the background, resulting in faster navigation and smoother interactions when users access the listing.

By utilizing a public API, optimizing rendering with **react-window**, and implementing preloading techniques, the application efficiently handles large datasets while providing a responsive user experience.

## Testing
For testing purposes, I employed JEST to create unit tests for the ProductRepositoryImpl class, which retrieves product data. Since the project does not utilize a real database, I used mock data to simulate database interactions, ensuring that the tests accurately reflect the expected functionality.

Additionally, I attempted to implement Cypress for end-to-end (e2e) testing. However, I encountered challenges with social media authentication and adherence to best practices, which made it difficult to perform comprehensive e2e tests in the current setup.

## Folder Structure
I have aimed to follow best practices regarding the folder structure of the application. The pages are organized under the **app/dashboard** directory. Within this directory, there are subdirectories such as **/photo**, which handles the long list of data, and **/products**, dedicated to the product listings.

In the storybook directory, I have included all common and reusable components to promote consistency and efficiency across the application.

Regarding data fetching and loading, I have adhered to the principles of **hexagonal architecture** or the **ports and adapters pattern**, which facilitates separation of concerns and enhances maintainability. This approach ensures that the application can easily adapt to changes in data sources or presentation layers while keeping the core logic intact.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

I added storybook to build visual components. To start it, run storybook

```bash
npm run storybook
```


This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Production url
[https://asafe-app.vercel.app/login](https://asafe-app.vercel.app/login)

