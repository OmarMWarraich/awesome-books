import { dateTime, list, addList, contact, displaySection, inputSection, contactSection } from './variables.js';

export const contactUs = () => {
    contact.addEventListener('click', (e) => {
        contact.style.color = 'blue';
        list.style.color = 'black';
        addList.style.color = 'black';
        displaySection.style.display = 'none';
        inputSection.style.display = 'none';
        dateTime.style.display = 'none';
        contactSection.style.display = 'flex';
        contactSection.innerHTML = `<h1>Contact</h1>
                                    <p>Do you have any questions or you just want to say "Hello"? <br> You can reach out to us!<p>
                                    <br>
                                    <ul>
                                        <li>Our email: mail@mail.com</li>
                                        <li>Our phone: +1 (123) 456-7890</li>
                                        <li>Our address: 123 Main St, Anytown, USA</li>
                                    </ul>
                                    `;
        e.preventDefault();
      });
}
