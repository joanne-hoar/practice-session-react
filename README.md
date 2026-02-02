# React Practice Session - Module 2

This project demonstrates React fundamentals and best practices through a series of hands-on practice activities. It uses Vite as the build tool for fast development and hot module replacement (HMR).

## Overview

This practice session covers essential React concepts including:
- Vite + React project setup and configuration
- Component architecture (functional and class components)
- React Hooks (useState, useEffect)
- Service layer patterns and Promise handling
- Props and component composition
- State management patterns

## Practice Activities

### [Module 2 Practice Activity 1: React with Vite Project Setup](Module%202%20Practice%20Activity%201.md)
**Learning Objective:** Master Vite + React setup needed for Assignment 2.

Topics covered:
- Creating a Vite + React project from scratch
- Understanding the Vite project structure
- Configuring package.json scripts
- Setting up a proper folder structure for components and services

### [Module 2 Practice Activity 2: React Functional Components with Hooks](Module%202%20Practice%20Activity%202.md)
**Learning Objective:** Master React hooks and component patterns needed for Assignment 2.

Topics covered:
- Creating reusable functional components with props
- Building both class and functional components
- Using React Hooks (useState, useEffect)
- Component composition and rendering patterns
- Managing component state and lifecycle

### [Module 2 Practice Activity 3: Advanced React Patterns and Service Integration](Module%202%20Practice%20Activity%203.md)
**Learning Objective:** Master advanced React patterns for service integration.

Topics covered:
- Creating service layer abstractions (marketService pattern)
- Working with Promises and asynchronous data
- Advanced state management techniques
- Integrating external services with React components
- Error handling and loading states

## Getting Started

### Prerequisites
- Node.js installed on your system

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Visit `http://localhost:5173` to view the application.

### Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Project Structure
```
practice-session-react/
├── src/
│   ├── components/
│   │   ├── common/          # Shared components
│   │   └── market/          # Market-specific components
│   ├── services/            # Service layer (API, data handling)
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
└── package.json             # Dependencies and scripts
```

## Technologies
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **ESLint** - Code linting
