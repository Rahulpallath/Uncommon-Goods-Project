# Uncommon Goods Product Grid

A simple Angular 18+ application that displays a product grid with hover effects.

## What I Built

- Product Grid: Displays products in a 4-column grid layout
- Image Hover: Shows alternative product image on hover
- Price Display: Shows price ranges or single prices
- HTTP Data: Fetches product data from JSON file
- Simple Styling: Clean, minimal design

## How to Run

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   ng serve --open
   ```

3. **Open your browser** and navigate to the port it is running on

## Features

- Product grid with 330x330px images
- Hover to see alternative product images
- Price formatting (ranges: "$25.00 - $50.00", single: "$25.00")
- Responsive layout with 24px gaps
- HTTP data fetching from `assets/gifts_simplified.json`

## Project Structure

Basic Angular app with components for product grid and cards. Uses a service to fetch data from JSON file. Simple TypeScript interfaces for data structure.

## Technologies Used

- **Angular 18+** - Frontend framework
- **TypeScript** - Type safety
- **CSS Grid** - Layout system
- **HTTP Client** - Data fetching
