/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/


function calculateTotalSpentByCategory(transactions) {
  let Output = [];
  transactions.forEach((element) => {
    if (!Output.includes(element.category)) {
      Output.push(element.category);
    }
  });

  let finalList = Output.map((element) => {
    let count = 0;
    let obj = { category: "", totalSpent: 0 };
    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].category == element) {
        count += transactions[i].price;
      }
    }
    obj.totalSpent = count;
    obj.category = element;
    return obj;
  });

  return finalList;
}


module.exports = calculateTotalSpentByCategory;
