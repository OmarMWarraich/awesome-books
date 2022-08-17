import { dateTime, list, addList, contact, displaySection, inputSection, contactSection } from './variables.js';

export const displayList = () => {
    list.addEventListener('click', (e) => {
        list.style.color = 'blue';
        addList.style.color = 'black';
        contact.style.color = 'black';
        dateTime.style.display = 'block';
        displaySection.style.display = 'block';
        inputSection.style.display = 'none';
        contactSection.style.display = 'none';
        e.preventDefault();
      });
}