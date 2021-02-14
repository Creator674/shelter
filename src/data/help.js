const FoodIcon = require('../assets/icons/icon-food.svg');
const TransportationIcon = require('../assets/icons/icon-transportation.svg');
const ToysIcon = require('../assets/icons/icon-toys.svg');
const BowlsAndCupsIcon = require('../assets/icons/icon-bowls-and-cups.svg');
const ShampoosIcon = require('../assets/icons/icon-shampoos.svg');
const VitaminsIcon = require('../assets/icons/icon-vitamins.svg');
const MedicinesIcon = require('../assets/icons/icon-medicines.svg');
const CollarsLeashesIcon = require('../assets/icons/icon-collars-leashes.svg');
const SleepingAreasIcon = require('../assets/icons/icon-sleeping-area.svg');

class HelpItem {
  constructor(text, image, alt) {
    this.text = text;
    this.image = image;
    this.alt = alt;
  }
}

const helpItems = [
  new HelpItem('Pet food', FoodIcon, 'food'),
  new HelpItem('Transportation', TransportationIcon, 'car'),
  new HelpItem('Toys', ToysIcon, 'toy'),
  new HelpItem('Bowls and cups', BowlsAndCupsIcon, 'bowl'),
  new HelpItem('Shampoos', ShampoosIcon, 'shampoo'),
  new HelpItem('Vitamins', VitaminsIcon, 'pill'),
  new HelpItem('Medicines', MedicinesIcon, 'medicine'),
  new HelpItem('Collars / leashes', CollarsLeashesIcon, 'leash'),
  new HelpItem('Sleeping areas', SleepingAreasIcon, 'house'),
];

export default helpItems;
