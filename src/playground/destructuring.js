console.log("destructuring");
// const books = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     // name: "Penguin",
//   },
// };

// const { name: publisherName ='Self-Published' } = books.publisher;
// console.log(publisherName);

const items = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [item, small, medium, large] = items;
console.log(`A medium ${item} costs ${medium}`);
