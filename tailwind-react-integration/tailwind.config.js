/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Scans files for Tailwind utility classes
    theme: {
      extend: {}, // Customize styles here
    },
    darkMode: "media", // Enables dark mode (options: 'media' or 'class')
    plugins: [],
  };
  /** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Replaces the old `purge`
    theme: {
      extend: {}, // Customize styles here
    },
    darkMode: "media",
    plugins: [],
  };
  