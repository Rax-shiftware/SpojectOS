#!/bin/bash

# Define the repository URL and the local directory
REPO_URL="https://github.com/yourusername/yourrepository.git"
LOCAL_DIR="/path/to/your/local/directory"

# Navigate to the local directory
cd $LOCAL_DIR

# Fetch the latest changes from the repository
git fetch $REPO_URL

# Pull the latest changes
git pull $REPO_URL

# Print a success message
echo "Repository has been updated successfully."