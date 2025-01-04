#!/bin/bash

# Update package lists
echo "Updating package lists..."
sudo apt-get update

# Upgrade all packages
echo "Upgrading packages..."
sudo apt-get upgrade -y

# Remove unnecessary packages
echo "Removing unnecessary packages..."
sudo apt-get autoremove -y

# Clean up
echo "Cleaning up..."
sudo apt-get clean

echo "System update complete."