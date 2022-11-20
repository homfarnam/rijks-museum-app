# Rijks museum app

It's a project to show the art of the Rijks museum in a nice way.
See demo here [https://rijks-museum-app.vercel.app/).

## Installation

You can install the dependencies with these commands.

npm:

```bash
npm install
```

yarn:

```bash
yarn
```

## Deployment

To Start this project run

npm:

```bash
npm run start
```

yarn:

```bash
yarn start
```

## Pages

Each page wrapped in `Layout` container component.

#### 🏠 Home Page

List all painters and ability to search for a painter by name in a select option and select amount of paintings to show in each page.
The Paints component is responsible for fetching the painter data from the API with `useFetchData` hook and passing it to the `ArtPiece` component.
In the `ArtPiece` component, the data is showed and it shows title and painter and image and a link to the main painting in museum website.

## Components

#### 📋 Paints

| Title   | Type   | Default | Description                |
| ------- | ------ | ------- | -------------------------- |
| painter | string |         | Get painter name           |
| amount  | string |         | Get paints amount per page |

#### 🖌️ ArtPiece

| Title | Type                                                                               | Default | Description            |
| ----- | ---------------------------------------------------------------------------------- | ------- | ---------------------- |
| data  | data: { id: string, title: string, painter: string, links: Link, image: WebImage } |         | Get paint details data |

#### 🖼️ OptimizedImage

| Title | Type                                                                                                                   | Default | Description            |
| ----- | ---------------------------------------------------------------------------------------------------------------------- | ------- | ---------------------- |
| image | image:{guid: string, offsetPercentageX: number, offsetPercentageY: number, width: number, height: number, url: string} |         | For get image details  |
| alt   | string                                                                                                                 |         | For get alt image text |

## 🧰 Libraries and tools

- ✅ Programming Language: **JavaScript, Typescript**
- ✅ Typecheck: **Typescript**
- ✅ Dom Manipulation: **React**
- ✅ Network Layer: **[React Query](https://react-query.tanstack.com/), Axios**
- ✅ CSS Framework: **[Tailwind CSS](https://tailwindcss.com/)**
- ✅ Styling: **SCSS**
- ✅ Code Quality: **ESLint, Prettier**

### Usage of some packages

- **[React Query](https://react-query.tanstack.com/)**: For fetching data from API and caching it.
- **[Axios](https://axios-http.com/)**: For fetching data from API.
- **[Tailwind CSS](https://tailwindcss.com/)**: For styling the app.
- **[react-lazy-load-image-component](https://www.npmjs.com/package/react-lazy-load-image-component)**: For lazy loading images.
- **[react-toastify](https://www.npmjs.com/package/react-toastify)**: For showing toast messages.
- **[sass](https://www.npmjs.com/package/sass)**: For compiling scss files to css files.

## 🪝 Hooks

#### General

- UseFetchData hook for get the paints and painter data with `react-query`. Located in `src/hooks` directory

## RoadAhead

If it was a real task and project, I could create CI/CD and some more tests like cypress for that.
