import { dateTime, list, addList, contact, displaySection, inputSection, contactSection } from './modules/variables.js';
import  { myCollection } from './modules/Collection.js';
import { addBook } from './modules/addBook.js';
import { displayList } from './modules/displayList.js';
import { contactUs } from './modules/contactUs.js';
import time from './modules/time.js';


dateTime.innerHTML = new Date().toLocaleString();


addBook();
displayList();
contactUs();
time();




