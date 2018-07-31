// object destructuring

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'Penguin',
//     }
// };

// const { name: publisherName = 'Self Published' } = book.publisher;

// console.log(publisherName);

// array destructuring

const item = [
    'Coffee (hot)',
    '$2.00',
    '$2.50',
    '$2.75'
];

const [ itemName, , medium] = item;

console.log(`A medium ${itemName} costs ${medium}`);