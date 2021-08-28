import car_price from '../Actual vs Predicted Prices.png';
import glass from '../glass score.png';
import chronos from '../chronos-logo.png';
import water from '../water_scores.png';
import clothing from '../clothing_scores.png'
import chd from '../chd.jpeg'
import maps from '../google maps logo.png'
const tags = {
    python: {
        name: 'Python',
        color: 'orange'
    },
    sklearn: {
        name: 'Sklearn',
        color: 'lightblue'
    },
    pandas: {
        name: 'Pandas',
        color: 'lightgreen'
    },
    numpy: {
        name: 'NumPy',
        color: '#b3e5fc'
    },
    matplotlib: {
        name: 'Matplotlib',
        color: '#ffd300'
    },
    html: {
        name: "HTML5",
        color: "#E34C26"
    },
    css: {
        name: "CSS3",
        color: "#2965f1"
    },
    js: {
        name: "JavaScript",
        color: "#F0DB4F"
    },
    firebase: {
        name: "Firebase",
        color: "#FFA611"
    },
    google: {
        name: "Google",
        color: "#34a853"
    },
    android_studio: {
        name: "Android Studio",
        color: "#666666"
    },
    java: {
        name: "Java",
        color: "#f89820"
    }
}
const projects = [
    {
        "title": "Car Price Prediction",
        "description": "A multilinear regression machine learning model able to predict the value of a car in USD.",
        "link": "https://github.com/KVN2099/Car-Price-Prediction/blob/final/Main.ipynb",
        "image": car_price,
        "tags": [tags.python, tags.sklearn, tags.pandas, tags.numpy, tags.matplotlib]
    },
    {
        "title": "Water Quality Prediction",
        "description": "A classification model written in Python able to classify if a water sample is potable or not.",
        "link": "https://github.com/KVN2099/Water-Quality/blob/main/main.ipynb",
        "image": water,
        "tags": [tags.python, tags.sklearn, tags.pandas, tags.numpy, tags.matplotlib]
    },
    {
        "title": "Clothing Classification",
        "description": "A classification model able to predict the clothing size of individuals based on their weight and age.",
        "link": "https://github.com/KVN2099/Clothing-Classification/blob/main/Main.ipynb",
        "image": clothing,
        "tags": [tags.python, tags.sklearn, tags.pandas, tags.numpy, tags.matplotlib]
    },
    {
        "title": "Glass Classification",
        "description": "A classification model able to classify the type of a glass sample based on its composition.",
        "link": "https://github.com/KVN2099/Glass-Classification/blob/main/Main.ipynb",
        "image": glass,
        "tags": [tags.python, tags.sklearn, tags.pandas, tags.numpy, tags.matplotlib]
    },
    {
        "title": "Hardware Store",
        "description": "I designed a NoSQL scheme and Backend configuration with Firebase.",
        "link": "http://chdcr.com",
        "image": chd,
        "tags": [tags.html, tags.css, tags.js, tags.firebase]
    },
    {
        "title": "Google Maps Store Locator",
        "description": "A webapp that uses the Google Maps API to load and filter stores in Los Angeles area.",
        "link": "https://kvn2099.github.io/Google-Maps-App/",
        "image": maps,
        "tags": [tags.html, tags.css, tags.js, tags.google]
    },
    {
        "title": "Chronos",
        "description": "A time management app I designed for a high school assignment using Android Studio, Java, and Firebase.",
        "link": "https://github.com/KVN2099/Chronos",
        "image": chronos,
        "tags": [tags.android_studio, tags.java, tags.firebase]
    }
    
]

export default projects;