
# ZenBlog

>A modern, responsive blog platform built with React and Vite.

## Features
- Modern UI with responsive design
- Code splitting for optimized performance
- Accessibility best practices (alt text, form labels, ARIA attributes)
- SEO meta tags and Open Graph/Twitter Card support
- 404 Not Found page for unknown routes
- Clean, maintainable codebase with ESLint

## Technologies Used
- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/) (build tool)
- [React Router v7](https://reactrouter.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [ESLint](https://eslint.org/) (with React and hooks plugins)

## Optimization & Best Practices
- **Code Splitting:** Uses `React.lazy` and `Suspense` for route-based code splitting.
- **Image Optimization:** Uses modern formats and fallback images.
- **Accessibility:** All images have descriptive alt text; forms use proper labels and ARIA attributes.
- **SEO:** Static meta tags for description, Open Graph, and Twitter Card in `index.html`.
- **404 Handling:** Custom NotFound component for unmatched routes.
- **Consistent Naming:** All components use PascalCase; typos and inconsistencies fixed.
- **Dead Code Removal:** Unused files and commented code removed.
- **Dependency Management:** Regular updates and tree-shaking for smaller bundles.

## Getting Started
1. Clone the repository
2. Run `npm install`
3. Run `npm run dev` to start the development server

## Folder Structure
```
src/
	components/
	blog_Page/
	blog_Start/
	contact_Page/
	assets/
	App.jsx
	main.jsx
	...
```

## License
MIT
