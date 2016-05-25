import { observable } from 'mobx';

class PhoneBook {
    @observable contacts = [
        { name: 'Shakil', number: '017420' },
        { name: 'Imran', number: '017421' },
        { name: 'Rana', number: '017422' },
        { name: 'Hodor', number: '017423' }
    ];

    addContact (name, number) {
        this.contacts.push({
            name,
            number
        });
    }
}

const phoneBook = new PhoneBook();

export default phoneBook;