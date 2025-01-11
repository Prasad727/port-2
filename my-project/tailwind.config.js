/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

/*/ tailwind.config.js
module.exports = {
  theme: {
    extend: {
      dropShadow: {
        'red': '0px 4px 6px rgba(255, 0, 0, 0.5)', // Add your colored shadow
        'blue': '0px 4px 6px rgba(0, 0, 255, 0.5)',
      },
    },
  },
  plugins: [],
};
*/