# AsBuilt Browser

A web application for browsing Ford AsBuilt files.

## Disclaimer

This is an independent project and is not affiliated with, endorsed by, or connected to Ford Motor Company in any way. The term "AsBuilt" is used only to describe the file format being parsed.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

## Building for Distribution

To create a production build:

```bash
npm run build
```

This will create a `dist` folder containing the following files:
- `index.html` - The main HTML file
- `assets/` - Contains all the JavaScript and CSS files
  - `index-[hash].js` - Main application code
  - `vendor-[hash].js` - Third-party dependencies
  - `mui-[hash].js` - Material-UI components
  - `index-[hash].css` - Styles

## Using the Built Version

1. Open the `dist/index.html` file in a web browser
2. Click "Select AsBuilt File" to choose a .ab file
3. The application will parse and display the AsBuilt data

## Features

- View VIN information
- Browse Node data with F-code descriptions
- View BCE modules grouped by prefix
- Display error messages if present
- Sort modules and nodes alphabetically

## Development Notes

This project was developed through Vibe coding, including this README file. 
