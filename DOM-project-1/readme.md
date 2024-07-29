# DOM Project 1

## Overview
This project demonstrates how to manipulate a div element's style properties using JavaScript and the DOM. The project involves changing the background color, margin, padding, font size, font weight, height, and width of a div element.

## Getting Started

### Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Safari)
- Basic understanding of HTML, CSS, and JavaScript

### Project Structure
The project consists of a single HTML file (`index.html`) that includes the JavaScript code to manipulate the div element.

## Instructions

### Viewing the Project
1. Clone the repository or download the zip file.
2. Open the `index.html` file in a web browser to view the project.

### Code Explanation
The following steps are performed in the JavaScript code to manipulate the div element's styles:

1. Retrieve the target div element using the `querySelector` method.
2. Store the fetched element in a variable for further manipulation.
3. Change the background color of the fetched div element to yellow using the `style.backgroundColor` property.
4. Add a margin of 20 pixels to the element using the `style.margin` property.
5. Apply a padding of 10 pixels using the `style.padding` property.
6. Change the font size to 18 pixels using the `style.fontSize` property.
7. Set the font weight to bold using the `style.fontWeight` property.
8. Change the height of the element to 200 pixels using the `style.height` property.
9. Modify the width of the element to 300 pixels using the `style.width` property.

### Hosted Version
You can view the hosted version of the project [here](https://adityajadonsingh.github.io/geekster/DOM-project-1/).

## Project Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Project 1</title>
</head>
<body>
    
    <div class="parent">
        <p>Hello, I'm a div</p>
    </div>
    <script>
        let parent = document.querySelector('.parent');
        
        parent.style.backgroundColor = "yellow";
        parent.style.margin = "20px";
        parent.style.padding = "10px";
        parent.style.fontSize = "18px";
        parent.style.fontWeight = "bold";
        parent.style.height = "200px";
        parent.style.width = "300px";
    </script>
</body>
</html>
