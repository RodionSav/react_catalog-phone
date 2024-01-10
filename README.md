# React catalog products

This is my online store project that allows convenient selection of Apple products based on price or novelty. Such a project is necessary for a company involved in selling products.

There is working version of my project:
- [DEMO LINK](https://rodionsav.github.io/react_catalog-phone/)

The design for this project was inspired by [this design](https://www.figma.com/file/uEetgWenSRxk9jgiym6Yzp/Phone-catalog-redesign?node-id=1%3A2&mode=dev).
## Installing

1. **Prerequisites:**
   - Make sure you have [Node.js](https://nodejs.org/) installed (recommended version: 14.16.1).
   - Make sure you have [npm](https://www.npmjs.com/) installed (comes with Node.js).
   - - **npm:** Make sure you have npm installed. npm comes bundled with Node.js, so if you have Node.js installed, npm should be available. You can check the version by running `npm -v` in your terminal.

2. **Clone the repository:**
   ```bash
   git clone https://github.com/your-best-repository.git
   npm install
   npm install classnames
   npm install react-router-dom
   npm i --save lodash.debounce
   npm install @reduxjs/toolkit
   npm start
  
## Dependencies
* node: 14.16.1
* react: 17.0.2
* redux: 7.2.8
* redux Toolkit: 1.6.1
* lodash-debounce: 4.0.8
* classnames: 2.3.1
* node-sass: 4.14.1
* react-scripts: 4.0.1

## Usage Guide

### 1. Home Page

#### Image Slider
- Additionally, there's an image slider on the home page, offering a visually appealing display of various iPhone-related images.

#### Featured iPhones Sliders
- On the main page, you'll find two sliders showcasing featured iPhones. These sliders provide a quick glance at highlighted models, helping users discover the latest and most popular devices.

### 2. Catalog Page

#### Browse All iPhones
- Navigate to the second page to access the complete iPhone catalog. Here, you'll find all available iPhones listed with pagination for easy browsing.

#### Filtering and Pagination
- Utilize the provided filters to refine your search based on news and other criteria. The pagination feature ensures a smooth navigation experience as you explore different iPhone models.

#### Detailed Model Information
- Clicking on a specific iPhone model will lead you to a dedicated page with comprehensive details. Here, you can explore various aspects of the chosen model, including color options and storage capacities.

### 3. Favorites Page

#### Save Your Favorites
- Save your preferred iPhone models to the favorites page. This allows you to quickly access and compare your selected devices.

### 4. Shopping Cart

#### Track Your Purchases
- Add desired iPhones to your shopping cart, accessible through the header. The cart provides a summary of your selected items, including the total cost.

#### Seamless Navigation
- Easily move between pages using the navigation links in the header. Whether you're exploring the catalog, managing favorites, or reviewing your shopping cart, the header ensures convenient navigation throughout the website.

# Configuration

Configure your project with the following options:

## iPhone Search Filtering

### Alphabetically
Order results alphabetically for easy navigation.

### By Novelty
Display the latest iPhone models at the top for users to quickly discover new releases.

### By Price
Allow users to sort and filter iPhones according to their budget.

## Displaying the Number of iPhones per Page

Choose from 4 to 16
Give users the flexibility to customize the number of displayed iPhones per page according to their preferences.

