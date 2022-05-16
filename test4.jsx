let logs = ["88 99 200", "88 99 300", "99 32 100", "12 12 15"];

function fraud(array) {
  let users_transactions = {};
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    let aux_record = item.split(" ");
    let sender_id = aux_record[0];
    let destiny_id = aux_record[1];
    let amount = aux_record[2];

    if (!users_transactions[sender_id]) {
      users_transactions[sender_id] = 1;
    } else {
      users_transactions[sender_id] += 1;
    }

    if (!users_transactions[destiny_id]) {
      users_transactions[destiny_id] = 1;
    } else {
      users_transactions[destiny_id] += 1;
    }
  }
  for (let key in users_transactions) {
    arr.push({ user_id: key, transactions: users_transactions[key] });
  }
  return arr.sort((a, b) => b.transactions - a.transactions);
}

let test = fraud(logs);

console.log(test);
