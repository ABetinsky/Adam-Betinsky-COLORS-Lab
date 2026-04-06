// Code written by Adam Betinsky on April 5th, 2026

import globals from "globals"; // Import required globals library

// Object to return
export default [
  {
    // Check all js files in the repo and include globals
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,  
      },
    },

    // Add rules for the output, including when to warn and error
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
      "semi": ["error", "always"]
    },
  },
  {
    ignores: ["public/js/md5.js"], // Specifically ignore the md5.js file, as it was given and purposefully has lots of missing semicolons that can be ignored
  },
];