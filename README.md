# Google Chrome Scroll Animation Clone

This project is a high-fidelity recreation of the sophisticated, scroll-driven animations featured on the Google Chrome homepage, built as an assignment for Huemn Interactive. It focuses on using a modern front-end stack to create a seamless, performant, and visually engaging user experience.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://[YOUR_LIVE_DEMO_LINK_HERE])

![Project Demo GIF](https://[YOUR_SCREENSHOT_OR_GIF_LINK_HERE])

*(Pro Tip: Use a tool like [ScreenToGif](https://www.screentogif.com/) or Kap to record a short GIF of your animation and replace the link above.)*

## Project Overview

The primary goal of this project is to replicate the dynamic section of the Google Chrome website where features are revealed and transformed as the user scrolls down the page. This was achieved by leveraging the power of React for component architecture, GSAP for professional-grade animations, and SCSS for organized, powerful styling.

The animation progresses through four distinct scenes, each highlighting a different feature of the Chrome browser, perfectly synchronized with the user's scroll position.

## Core Technologies

*   **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces, used here to structure the application into reusable components.
*   **[Vite](https://vitejs.dev/)**: A next-generation front-end tooling system that provides an extremely fast development environment.
*   **[GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/)**: A professional-grade JavaScript animation library used for creating the high-performance, complex scroll-based animations.
    *   **ScrollTrigger**: The key GSAP plugin that links the animation timeline directly to the scrollbar, allowing for the "scrubbing" effect.
*   **[SCSS (Sass)](https://sass-lang.com/)**: A CSS pre-processor that adds powerful features like variables and nesting for more organized and maintainable stylesheets.

## Key Features

*   **Scroll-Driven Animation Timeline**: A master GSAP timeline controls the entire animation sequence, scrubbed by the user's scroll position.
*   **Sticky Positioning Layout**: The core visual trick is achieved using `position: sticky` to keep the browser mockup centered on the screen while the parent container provides a large scrollable area.
*   **Four-Scene Animated Sequence**: The animation transitions smoothly between four scenes:
    1.  **Customize Chrome**: Showcases the color picker UI.
    2.  **Extensions**: Animates in a list of sample extensions.
    3.  **Tab Groups**: Displays a visual representation of tab organization.
    4.  **Safety Check**: Concludes with a call-to-action for Chrome's safety features.
*   **Performant and Fluid Animations**: Utilizes `autoAlpha` and direct DOM manipulation via `useRef` for buttery-smooth animations without re-rendering components.
*   **Responsive and Modern Design**: Styled with a dark theme and modern aesthetics to match the original inspiration.

## Local Development Setup

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```
    git clone https://github.com/[YOUR_GITHUB_USERNAME]/[YOUR_REPO_NAME].git
    ```

2.  **Navigate to the project directory:**
    ```
    cd [YOUR_REPO_NAME]
    ```

3.  **Install the dependencies:**
    ```
    npm install
    ```

4.  **Start the development server:**
    ```
    npm run dev
    ```
    Your project will be running at `http://localhost:5173`.

## Technical Highlights

This project demonstrates several advanced front-end concepts:

*   **Advanced Animation Control with GSAP**: Instead of relying on simple CSS transitions, this project uses a GSAP timeline for precise control over the sequencing, timing, and synchronization of multiple animated elements. The use of `scrub: 1` creates a natural, slightly delayed response to scrolling.
*   **Efficient DOM Manipulation in React**: By using the `useRef` hook, we gain direct access to DOM elements for GSAP to manipulate. This is far more performant than trying to control animations through React state, as it avoids unnecessary component re-renders.
*   **Modular SCSS with `@use`**: The project follows modern Sass best practices by using the `@use` rule to import style partials (like `_variables.scss`), preventing global scope pollution and improving maintainability.

## Acknowledgements

*   This project was inspired by the brilliant design of the **[Google Chrome homepage](https://www.google.com/chrome/)**.
*   Assignment provided by **Huemn Interactive**.
