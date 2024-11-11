
# COOKT - Recipe App

COOKT is a recipe app designed to help users explore and try new meals. With a fun and easy-to-use interface, you can search for recipes, browse categories and cuisines, mark favorites, and get random meal ideas.


## Features
- **Recipe Search**: Find recipes by typing in keywords.
- **Favorites List**: Save your favorite recipes for easy access.
- **Random Recipe Suggestions**: Get a random meal idea when you need inspiration.
- **Category & Cuisine Browsing**: Explore recipes based on different cuisines and categories.
- **Responsive Design**: Optimized for desktop and mobile.

## Tech Stack
- **Frontend**: React.js, CSS, Bootstrap
- **API**: [TheMealDB API](https://www.themealdb.com/) for fetching recipe data

## Setup
To run this project locally, follow these steps.

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/cookt-recipe-app.git
   cd cookt-recipe-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root and add:
   ```bash
   REACT_APP_API_URL=https://www.themealdb.com/api/json/v1/1
   ```

4. **Run the application:**
   ```bash
   npm start
   # or
   yarn start
   ```

The app will be available at `http://localhost:3000`.

## Usage
1. **Browse Recipes**: Search by keywords, explore categories, or pick a cuisine.
2. **View Recipe Details**: Click on a recipe card for ingredients and cooking instructions.
3. **Save Favorites**: Mark recipes as favorites to find them easily.
4. **Try Random Recipes**: Click on the random recipe icon for meal ideas.


