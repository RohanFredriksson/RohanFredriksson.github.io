#!/bin/bash

# Define variables
username="rohanfredriksson"
repository="rohanfredriksson.github.io"  # Replace with your repository name
branch="gh-pages"  # The branch you want to deploy to

# Build the React application
npm run build

# Create or update the gh-pages branch with the build output
git checkout $branch
git pull origin $branch
cp -r build/* .
git add .
git commit -m "Update $branch branch with latest build"
git push origin $branch

# Switch back to the main branch (or your development branch)
git checkout master  # Replace with your main or development branch name