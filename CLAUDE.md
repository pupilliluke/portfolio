# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

This is a Create React App project. Essential commands:

- `npm start` - Start development server (localhost:3000)
- `npm test` - Run tests in interactive watch mode
- `npm run build` - Create production build in `build/` folder
- `npm install` - Install dependencies

## Architecture

### Project Structure
- **React Router SPA**: Single-page application with client-side routing
- **Layout Pattern**: All pages wrapped in `MainLayout` component (Navbar + Footer)
- **Data-Driven Content**: Project and experience data stored in `/src/Data/` directory
- **Component Organization**: Reusable UI components in `/src/Components/`, page components in `/src/Pages/`

### Key Architectural Patterns
- **Centralized Routing**: All routes defined in `App.js` with consistent MainLayout wrapping
- **Static Data Management**: Projects and experiences managed as JavaScript objects in data files rather than external APIs
- **Dynamic Project Pages**: Individual project detail pages use slug-based routing (`/projects/:slug`)
- **Styling**: Tailwind CSS with custom dark theme (slate color palette) and dotted background pattern

### Technology Stack
- **Frontend**: React 19, React Router 7, Framer Motion for animations
- **Styling**: Tailwind CSS with custom configuration
- **Notifications**: React Hot Toast for user feedback
- **Email**: EmailJS for contact form functionality
- **Icons**: React Icons library

### Data Structure
Projects are stored in `/src/Data/projects.js` with fields: title, date, description, tags, type, image, and link. The portfolio dynamically renders project cards and detail pages from this data.

### Contact Integration
Contact functionality uses EmailJS service for form submissions, with toast notifications for user feedback.