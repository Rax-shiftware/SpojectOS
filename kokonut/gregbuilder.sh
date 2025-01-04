#!/bin/bash
# GregBuilder - A simple build script

echo "Building project..."

# Set variables
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BUILD_DIR="$PROJECT_DIR/build"
SRC_DIR="$PROJECT_DIR/src"

# Create build directory if it doesn't exist
if [ ! -d "$BUILD_DIR" ]; then
    mkdir "$BUILD_DIR"
fi

# Compile source files
echo "Compiling source files..."
# Add your compilation commands here, for example:
# For C files:
# gcc -o "$BUILD_DIR/output" "$SRC_DIR/*.c"
# For C++ files:
# g++ -o "$BUILD_DIR/output" "$SRC_DIR/*.cpp"

# Example for C++:
g++ -o "$BUILD_DIR/output" "$SRC_DIR/*.cpp"

if [ $? -ne 0 ]; then
    echo "Compilation failed."
    exit 1
fi

echo "Build completed successfully."

# Pause to view output
read -p "Press any key to continue..."