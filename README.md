# [Marvel App](https://marvel-app-edmundo93s-projects.vercel.app/)

### https://marvel-app-edmundo93s-projects.vercel.app/
### https://marvel-app-livid-ten.vercel.app/
### https://marvel-app-git-master-edmundo93s-projects.vercel.app/

This is a Next.js project created with `create-next-app`.

## Technologies Used
- **Next.js**: React framework for web applications.
- **TypeScript**: A programming language that extends JavaScript.
- **CSS**: For styling the application.
- **JavaScript**: Used in some parts of the project.
- **Jest**: Used for unitary tests.

<img src="https://skillicons.dev/icons?i=react,nodejs,nextjs,css,js,ts,jest" />

## Versions
- **Next.js**: 14.2.5
- **TypeScript**: ^5
- **Node.js**: 20.14.0
- **Jest**: 29.7.0

## Application Description
Marvel App is a web application that showcases Marvel characters using data from the Marvel API. Users can browse characters, view details and associated comics, and mark characters as favorites. The application is built with Next.js, TypeScript, and CSS, and includes unit and integration tests using Jest and React Testing Library.

## Architecture
The project follows a component-based architecture with the following features:
- **App Router**: The newer Next.js router that allows you to use the React´s latest features.
- **Hexagonal Architecture**: This architecture allows a clear separation between business logic and external interfaces, facilitating maintenance and scalability.
- **Vertical Slicing**: The application is divided into vertical slices, where each slice contains all the necessary layers (UI, business logic, data access) for a specific functionality. This improves modularity and makes it easier to develop and test new features.

## Folder Structure
- 📁**public**: Public files such as images and fonts.
- 📁**app**: Routes path structure and React Server Components: pages, layouts...
- 📁**features**: slices of hexagonal structure.
- 📁**presentation**: react components.

```
├───public
├───app
│   ├───character
│   │   └───[characterId]
│   └───favorites
├───features
│   └───characters
│       ├───application
│       │   └───services
│       ├───domain
│       │   ├───entities
│       │   └───repositories
│       └───infrastructure
│           ├───adapters
│           ├───configs
│           ├───hooks
│           └───services
│               └───storage
├───presentation
│   ├───components
│   │   ├───character-card
│   │   ├───character-detail
│   │   │   ├───character-comics
│   │   │   └───character-resume
│   │   ├───characters-list
│   │   ├───comic-card
│   │   ├───fav-icon
│   │   ├───fav-nav
│   │   ├───favorites-view
│   │   ├───home-view
│   │   ├───info-bar
│   │   ├───main-view
│   │   ├───nav-bar
│   │   ├───photo
│   │   ├───reloader
│   │   ├───search-section
│   │   └───ui
│   │       ├───icon-button
│   │       ├───matrix
│   │       ├───progress-bar
│   │       ├───row
│   │       └───search-input
│   ├───contexts
│         └───characters-context
│   
├───test
│   └───mocks
└───utils
```

## Installation
To install and run the project locally, follow these steps:

1. Clone the repository:
```
git clone https://github.com/edmundo93/marvel-app.git
cd marvel-app
```

2. Install the dependencies:
```
npm install
# or
yarn install
```

3. Run the development server:
```
npm run dev
# or
yarn dev
```
4. Open http://localhost:3000 in your browser to see the result.

## Building the Application

### Production Build:
The producction build provide minified and concatenated assets in the `📁.next` folder.
To create a production build of the application, follow these steps:

1. Run the following command to create the build:
```
npm run build
# or
yarn build
```

2. This command will generate a `📁.next` folder containing the optimized production files.
3. To verify that the build was created correctly, you can run:
```
npm start
# or
yarn start
```

4. Open http://localhost:3000 in your browser to see the application in production mode.

### Development Build:
The development build provide concatenated assets in the `📁.next` folder.
To create a development build of the application, follow these steps:

1. Run the following command to create the build:
```
npm run build:dev
# or
yarn build:dev
```

2. This command will generate a `📁.next` folder containing the optimized production files.
3. To verify that the build was created correctly, you can run:
```
npm start
# or
yarn start
```

4. Open http://localhost:3000 in your browser to see the application in production mode.

## API Integration
The application uses the Marvel API to fetch data about Marvel characters. To use the API you need Marvel API credentials and some query params added to the requests:
- `ts`: timestamp
- `apiKey`: the public key associated to your Marvel API account
- `hash`: a md5 hash created with the combination of the ts + apiKey + privateKey

There are a method which take the requests and add the necessary query params. It´s not necessary implements your query params.

> [!WARNING]
> The Marvel API not works fine and it takes so much time for return the info.
> Sometimes the API return an empty response but there is a fallback modal to reload and request again.

## License
This project is licensed under the MIT License. See the LICENSE file for more information.
