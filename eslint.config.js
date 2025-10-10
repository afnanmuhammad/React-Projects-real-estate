import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // 🚫 Ignore build output
  globalIgnores(['dist']),

  {
    // 🧩 Apply to all React files
    files: ['**/*.{js,jsx}'],

    // ✅ Extend recommended rule sets
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],

    // 🌍 Set language and globals
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },

    // ⚙️ Custom rule adjustments
    rules: {
      // 🧠 Fix the "motion" unused var issue
      // Allows variables like React, motion, etc. to skip "unused var" warning
      'no-unused-vars': [
        'warn',
        {
          varsIgnorePattern: '^[A-Z_]|motion', // ignore variables starting with uppercase or "motion"
        },
      ],

      // 🧩 React 17+ and 19 don’t need React import for JSX
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',

      // ⚡ Allow React Fast Refresh exports
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // 🧹 Optional quality rules
      'no-console': 'off', // you can turn this 'warn' if you want
      'no-undef': 'error',
    },
  },
])
