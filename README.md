# Odin Restaurant Page

A modern, responsive restaurant website built as part of [The Odin Project](https://www.theodinproject.com/) curriculum.  
This project demonstrates modular JavaScript, Webpack bundling, and clean UI design.

## Features

- Single-page application (SPA) structure
- Modular, maintainable JavaScript codebase
- Responsive design for desktop and mobile
- Easy navigation between Home, Menu, and Contact sections
- Built with Webpack for efficient asset management

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/odin-restaurant-page.git
   cd odin-restaurant-page
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npx webpack serve
   ```
   The app will be available at `http://localhost:8080` (or as indicated in your terminal).

### Building for Production

To build the project for production:
```bash
npm run build
```
The output will be in the `dist/` folder.

## Project Structure

```
odin-restaurant-page/
├── dist/
├── src/
│   ├── css/
│   │   └── main.css
│   ├── index.js
│   └── template.html
├── package.json
├── webpack.config.js
└── README.md
```

## Customization

- Update `src/css/main.css` for custom styles.
- Edit `src/template.html` for the HTML template.
- Add or modify modules in `src/` for new sections or features.

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ for The Odin
