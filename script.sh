#!/bin/bash

# Create a new Next.js project
echo "Creating new Next.js project..."
npx create-next-app@latest legal-line-website
cd legal-line-website

# Create the file structure
echo "Creating file structure..."
mkdir -p src/app/components
mkdir -p src/app/styles
mkdir -p public/images
mkdir -p public/fonts

# Create component files
touch src/app/components/Header.jsx
touch src/app/components/Hero.jsx
touch src/app/components/About.jsx
touch src/app/components/Services.jsx
touch src/app/components/Contact.jsx
touch src/app/components/Footer.jsx

# Create other necessary files
touch src/app/styles/globals.css
touch src/app/page.jsx

# Install dependencies
echo "Installing dependencies..."
npm install --save-dev prettier eslint eslint-config-next
npm install react-icons

# Initialize git
echo "Initializing git repository..."
git init
git add .
git commit -m "Initial commit - project setup"

# Create a basic .gitignore file
echo "node_modules
.next
out" > .gitignore

# Create basic README
echo "# Legal Line South Sudan Website

A single-page website for Legal Line South Sudan built with Next.js.

## Getting Started

1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

2. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

To deploy to Vercel:
1. Install Vercel CLI: \`npm install -g vercel\`
2. Run: \`vercel\`" > README.md

# Create basic ESLint config
echo '{
  "extends": "next/core-web-vitals"
}' > .eslintrc.json

# Create basic Prettier config
echo '{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "endOfLine": "lf"
}' > .prettierrc

echo "Setup complete! 🎉"
echo "Run 'npm run dev' to start the development server."