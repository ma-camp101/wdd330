import QuakesController from "./quakesController.js";
import buildNavigation from './routing.js';

const navElement = document.getElementById('mainNav');
buildNavigation(navElement);


const quakeController = new QuakesController('#quakeList')
quakeController.init();
