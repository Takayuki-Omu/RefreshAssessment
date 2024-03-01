"use strict";
//"test"

function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}

// 1.関数 test(feed を作成し、グルメな犬と猫にごはんをあげましょう。 犬は牛肉（beef）味のドッグフード、猫はマグロ（tuna）味のキャットフードが好きで、それ以外は食べたがりません。 動物が犬か猫かの文字列とごはんを表すオブジェクトを受け取り、与えたごはんが気に入った場合は "I love it!"、気に入らなかった場合は "I don't like it!" と返しましょう。

// ここにコードを書きましょう
// const feed = function(animal, food) {
//   if ((animal === "dog" && food.custom === "dog food" && food.taste === "beef") ||
//      (animal === "cat" && food.custom === "cat food" && food.taste === "tuna")) {
//     return "I love it!";
//   } else {
//     return "I don't like it!";
//   }
// }

// test(feed("dog", { custom: "dog food", taste: "beef" }), "I love it!");
// test(feed("dog", { custom: "dog food", taste: "chicken" }), "I don't like it!");
// test(feed("dog", { custom: "cat food", taste: "chicken" }), "I don't like it!");

// test(feed("cat", { custom: "cat food", taste: "tuna" }), "I love it!");
// test(feed("cat", { custom: "cat food", taste: "chicken" }), "I don't like it!");
// test(feed("cat", { custom: "dog food", taste: "beef" }), "I don't like it!");


//──────────────────────────────
//2.reverse という関数を作成してください。 reverse は配列を引数に取り、その配列の要素の順番を反対にした新しい配列を返します。 ネイティブメソッドの .reverse を使用してはいけません。

// ここにコードを書きましょう

// const reverse = function(arr) {
//   const result = [];
//   for (let i = arr.length -1; i >= 0; i--) {
//     result.push(arr[i]);
//   }
//   return result;
// }

// test(reverse([1, 2, 3]), [3, 2, 1]);
// test(reverse([{ name: "mike", isCat: true }, true, "hello!"]), [ "hello!", true, { name: "mike", isCat: true }]);


//──────────────────────────────
//3.合計金額（税込）を出す関数 calculateTotalWithTax を作成してください。 価格表、購入商品は例文の通りです。税率は 10%としてください。

// ここにコードを書きましょう

// const calculateTotalWithTax = function(priceList, shoppingCart) {
//   let total = 0;
//   for (const key in priceList) {
//     total += (priceList[key] * shoppingCart[key]);
//   }
//   return total * 1.1;
// }

// const priceList = {
//   apple: 150,
//   banana: 190,
//   grape: 2000,
//   orange: 300,
// };

// const shoppingCart = {
//   apple: 3,
//   banana: 1,
//   grape: 3,
//   orange: 5,
// };

// test(calculateTotalWithTax(priceList, shoppingCart), 8954);


//──────────────────────────────OK
//4.あなたは本の在庫管理をしています。 本の売上を集計する関数 totalBookSales を作成してください。 totalBookSales は、本の情報が入った配列を受け取り、本ごとの売り上げの入った配列を返します。 関数の中では、必ずネイティブメソッドの .map を使用してください。

// ここにコードを書きましょう

// const totalBookSales = books => books.map(book => book.price * book.sales);

// test(totalBookSales([
//   {
//     id: 1,
//     name: "JavaScript の基礎を復習する本",
//     price: 2800,
//     stock: 3,
//     sales: 10,
//   },
//   { id: 2, name: "JavaScript の配列", price: 3200, stock: 2, sales: 5 },
//   { id: 3, name: "DOM を極める", price: 3800, stock: 5, sales: 15 },
//   { id: 4, name: "高階関数の基本", price: 4200, stock: 1, sales: 20 },
//   { id: 5, name: "DIG BTC の心構え", price: 2680, stock: 4, sales: 10 },
// ]),[28000, 16000, 57000, 84000, 26800]);


//──────────────────────────────OK
//5.getValuesByProperty という関数を作成してください。 この関数は、オブジェクトの入った配列から、指定されたプロパティの値だけを格納した配列を作成し、返します。 作成する際は以下の要件を満たしてください。

//ⅰ配列のネイティブメソッド .reduce を使用してください。
//ⅱアロー関数を使用してください。

// ここにコードを書きましょう

// const getValuesByProperty = (objects, property) => objects.reduce((acc, curr) => acc.concat(curr[property]), []);

// const objects = [
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 35 },
// ];

// const property = "name";

// test(getValuesByProperty(objects, property),["Alice", "Bob", "Charlie"]);


//──────────────────────────────OK
//6.mergeAndSumObjects という関数を作成してください。 この関数はオブジェクトを要素に持つ配列を引数にとり、それらのオブジェクトを格納した配列を返します。 オブジェクトの id が重複する場合は、各キーの値を合計します。

// ここにコードを書きましょう

// const mergeAndSumObjects = function(...arrays) {
//   const result = {};

//   arrays.forEach((arr) => {
//     arr.forEach((obj) => {
//       const id = obj.id;
//       if (!result[id]) {
//         result[id] = obj;
//       } else {
//         result[id].x += obj.x;
//         result[id].y += obj.y;
//       }
//     });
//   });

//   return Object.values(result);
// }

// const arr1 = [
//   { id: 1, x: 1, y: 3 },
//   { id: 2, x: 3, y: 5 },
// ];
// const arr2 = [{ id: 3, x: 2, y: 2 }];

// test(mergeAndSumObjects(arr1, arr2),[{ id: 1, x: 1, y: 3 },{ id: 2, x: 3, y: 5 },{ id: 3, x: 2, y: 2 }]);

// const arr3 = [{ id: 2, x: 3, y: 4 }];

// test(mergeAndSumObjects(arr1, arr2, arr3),[{ id: 1, x: 1, y: 3 },{ id: 2, x: 6, y: 9 },{ id: 3, x: 2, y: 2 }]);


//──────────────────────────────OK
//7.doTheThing という関数を完成させてください。 この関数の中身は 1 行で書きましょう。

// ここにコードを書きましょう

// const doTheThing = (numbers, timesFunc, evenFunc, cutFunc) => numbers.map(timesFunc).filter(evenFunc).filter(cutFunc);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// test(doTheThing(
//   numbers,
//   (n) => n * 3,
//   (n) => n % 2 === 0,
//   (n) => n > 20
// ),[24, 30]);


//──────────────────────────────OK
//8.createMessages という関数を作成してください。 この関数は文字列とオブジェクト型の値を引数にとり、文字列を引数にとる関数を返します。 返された関数が呼び出されると、結合された文字列を返します。結合する際は createMessages の引数となるオブジェクトのルールに従ってください（start:先頭の文字 end:最後の文字 space:結合する際のスペースの数）。

// ここにコードを書きましょう

// const createMessages = function(str, obj) {
//   function message(recipient) {
//     const greeting = [obj.start, str, recipient, obj.end];
//     return greeting.join(Array(obj.space + 1).join(" "));
//   }
//   return message;
// }

// const createMessages = (str, obj) => recipient => [obj.start, str, recipient, obj.end].join(Array(obj.space + 1).join(" "));

// let greeting = createMessages("Hello", { start: "😄", end: "♪", space: 1 });
// test(greeting("DIG"), "😄 Hello DIG ♪");

// greeting = createMessages("Domo!", { start: "🦈", end: "🦈", space: 2 });
// test(greeting("Same Desu!"), "🦈  Domo!  Same Desu!  🦈");


//──────────────────────────────OK
//9.DOM の問題です。提出 Form に回答欄がありますので、そちらから回答してください。Gist に書き込む必要はありません。

// 「xxx.js」という外部スクリプトを参照するための正しい構文はどれですか。

// 1. <script src="xxx.js"> // ◯
// 2. <script href="xxx.js">
// 3. <script name="xxx.js">
// 以下の HTML 要素の内容を変更するための正しい JavaScript 構文はどれですか。

// <p id="target">Hello World!</p>

// 1. document.getElementByName("p").innerHTML = "Good luck!";
// 2. document.getElementById("target").innerHTML = "Good luck!", ◯
// 3. #target.innerHTML = "Good luck!";
// 4. document.getElement("p").innerHTML = "Good luck!";
// クリックしたときに何か変更を加えたい場合、〇〇には何が入るでしょうか。

// const element = 変更したい要素
// element.addEventListener("〇〇", (event) => {});

// 1. mousedown
// 2. mouseover
// 3. keydown
// 4. click // ◯


//──────────────────────────────OK
//10.getDiffDate という関数を作成してください。 getDiffDate は 2 つの日付を引数に取り、何日間離れているか日付の差分を求めます。 例: 2023/08/21 と 2023/08/22 は 1 日離れているため、数値の「1」を返します。

// ここにコードを書きましょう

// const getDiffDate = (startDate, endDate) => (new Date(endDate) - new Date(startDate)) / 86400000;

// test(getDiffDate("2019/01/01", "2019/01/02"), 1);
// test(getDiffDate("2019/01/01", "2019/01/01"), 0);
// test(getDiffDate("2019/01/01", "2019/02/01"), 31);
// test(getDiffDate("2019/01/01", "2020/01/01"), 365);


//──────────────────────────────OK
//11.createCounter という関数を作成してください。 この関数は、2 つの数値型の引数をとり、関数を返します。第 1 引数は初期値、第 2 引数はステップ数です。 返り値の関数は引数をとらず、最初に実行すると初期値を、以降は呼び出されるごとに初期値からステップ数分増やし（減らし）、それを返します。ステップ数の引数を取らない場合は、1 増やします。

// ここにコードを書きましょう

// const createCounter = function(num, step = 1) {
//   function calculate() {
//     const currentValue = num;
//     num += step;
//     return currentValue;
//   }
//   return calculate;
// }

// const countDownFromOneHundred = createCounter(100, -5);
// const countUpFromTen = createCounter(10);

// test(countDownFromOneHundred(), 100);
// test(countUpFromTen(), 10);
// test(countUpFromTen(), 11);
// test(countDownFromOneHundred(), 95);


//──────────────────────────────OK
//12.endsWith という関数を作成してください。 この関数は JavaScript ネイティブメソッドの .endsWith と同じ処理を行います。 ただし、String.endsWith(searchString, endPosition) ではなく、endsWith(str, searchString, endPosition) で実行します。実行内容が不明な場合は、MDN を確認し、同じ処理になるように実装してください。 この問題では、ネイティブメソッドを使用してはいけません。

// ここにコードを書きましょう

// const endsWith = function(str, searchString, endPosition = str.length) {
//   let count = 0;

//   for (let i = searchString.length - 1; i >= 0; i--) {
//     if (str[endPosition -1 - count] === searchString[i]) {
//       count++;
//     } else {
//       return false;
//     }
//   }

//   return true;
// }

// const str1 = "Cats are the best!";

// test(endsWith(str1, "best!"), true);
// test(endsWith(str1, "best", 17), true);

// const str2 = "Is this a question?";

// test(endsWith(str2, "question"), false);


//──────────────────────────────OK
//13.findExtremeValue という関数を作成してください。 この関数はコレクション（配列またはオブジェクト）を引数にとり、条件（最大か最小）に応じた値を返します。 第 2 引数の条件は MAX（最大）または MIN（最小）になります。 組み込みオブジェクトの Math を使用してはいけません。

// ここにコードを書きましょう

// const findExtremeValue = function(numbers, instructions) {
//   switch (instructions) {
//     case "MAX":
//       return Object.values(numbers).reduce((max, current) => max < current ? current : max);
//     case "MIN":
//       return Object.values(numbers).reduce((min, current) => min > current ? current : min);
//   }
// }

// const arr1 = [1, 2, 3];
// const arr2 = [10, 20, 15];
// const obj1 = { a: 100, b: 70, c: 50 };
// const obj2 = { a: 50, b: 5, c: 500 };

// test(findExtremeValue(arr1, "MAX"), 3);
// test(findExtremeValue(arr2, "MIN"), 10);
// test(findExtremeValue(obj1, "MAX"), 100);
// test(findExtremeValue(obj2, "MIN"), 5);


//──────────────────────────────OK
//14.自動販売機を制御するオブジェクト vendingMachine を作成しましょう。 以下の動作を満たすメソッドを作成しましょう。 お金を投入する - insertMoney ドリンクを選ぶ - selectDrink お釣りを出す - returnChange 以下のプロパティを持ちましょう。 お金の投入額 - money いま自動販売機内にあるお金の総額 - totalMoney

// const drinkStock = [
//   { name: "cola", price: 120 },
//   { name: "water", price: 100 },
//   { name: "tea", price: 150 },
// ];

// // ここにコードを書きましょう

// const vendingMachine = {
//   money: 0, //預り金
//   totalMoney: 1000, //自販機内の残高

//   insertMoney(money = 0){
//     if (money <= 0) {
//       return "お金を投入してください";
//     }
//     this.money += money;
//     this.totalMoney += money;
//   },

//   selectDrink(drink) {
//     const drinkPrice = drinkStock.find(stock => stock.name === drink).price;
//     if (this.money >= drinkPrice) {
//       this.money -= drinkPrice;
//       return "water が出てきました！";
//     } else {
//       return "お金が足りません";
//     }
//   },

//   returnChange() {
//     const change = this.money;
//     this.money = 0;
//     this.totalMoney -=  change;
//     return change;
//   }
// }

// vendingMachine.insertMoney(500);
// test(vendingMachine.money, 500);
// test(vendingMachine.totalMoney, 1500);
// test(vendingMachine.selectDrink("water"), "water が出てきました！")
// test(vendingMachine.returnChange(), 400);
// test(vendingMachine.money, 0);
// test(vendingMachine.totalMoney, 1100);

// vendingMachine.insertMoney(100);
// test(vendingMachine.selectDrink("cola"), "お金が足りません");

//   test(vendingMachine.money, 100);
//   test(vendingMachine.totalMoney, 1200);

// test(vendingMachine.insertMoney(), "お金を投入してください");

//   test(vendingMachine.money, 100);
//   test(vendingMachine.totalMoney, 1200);

// test(vendingMachine.insertMoney(-100), "お金を投入してください");


//──────────────────────────────
//15.compare という関数を作成してください。 compare は 2 つの値を引数に取り、その値が等しいかを判定してブーリアンを返します。オブジェクトについては順番を考慮する必要はありません。ただし値がネストしている場合も、完全に一致しているかを確かめてください。 この関数ではネイティブメソッドの使用は禁止とします。

// ここにコードを書きましょう

// const compare = function(value1, value2) {
//   if (typeof value1 !== "object") {//プリミティブ型の処理
//     return value1 === value2;
//   } else if (value1[0] !== undefined) {//配列の処理
//     if (value1.length !== value2.length) {
//       return false;
//     }
//     for (const element1 of value1) {
//       let found = false
//       for (const element2 of value2) {
//         if (element1 === element2) {
//           found = true;
//           break;
//         }
//       }
//       if(!found) {
//         return false;
//       }
//     }
//     return true;
//   } else {//オブジェクトの処理
//     function objCompare(value1, value2) {
//       for (const key1 in value1) {
//         let found = false;
//         for (const key2 in value2) {
//           if (value1[key1] === value2[key2]) {
//             found = true;
//             break;
//           } else if (typeof value1[key1] === "object" && typeof value2[key2] === "object") {
//             found = objCompare(value1[key1], value2[key2]);
//           }
//         }
//         if(!found) {
//           return false;
//         }
//       }
//       return true;
//     }
//     return objCompare(value1, value2);
//   }
// }

// test(compare(1, 1), true);
// test(compare(1, 2), false);

// test(compare("a", "a"), true);
// test(compare("a", "b"), false);
// test(compare([1, 2, 3], [1, 2, 3]), true);

// test(compare([1, 2, 3], [1, 2, 4]), false);
// test(compare([1, 2, 3], [1, 2, 3, 4]), false);

// test(compare({ a: 1, b: 2 }, { a: 1, b: 2 }), true);
// test(compare({ a: 1, b: 2 }, { b: 2, a: 1 }), true);
// test(compare({ a: 1, b: 2 }, { a: 1, b: 3 }), false);

// test(compare(
//   { a: 1, b: { c: { d: 2, e: { f: 3 } } } },
//   { a: 1, b: { c: { d: 2, e: { f: 3 } } } }
// ), true);
// test(compare(
//   { a: 1, b: { c: { d: 2, e: { f: 3 } } } },
//   { a: 1, b: { c: { d: 2, e: { f: 4 } } } }
// ), false);
// test(compare(
//   { a: 1, b: { c: { d: 2, e: { f: 3 } } } },
//   { a: 1, b: { c: { d: 2, e: { f: 4, g: 5 } } } }
// ), false);


//──────────────────────────────
//16.あなたはオンラインで家具を販売する Web サイトを作成しています。必要な機能を持った関数 furnitureStore を作成してください。 必要な機能については、以下の要件を参照してください。 引数に渡す動作名・プロパティ・構造（例：CREATE_ACCOUNT, { accountId: ..., emailId: ... }）や、 戻り値のプロパティ・構造（例：.furnitureStore, { id: ..., name: ...}）は例文と同じものにしてください。 なお、この問題では JavaScript ネイティブメソッドの制限はありませんが、グローバル変数の使用は禁止です。 また、この問題ではどのようなデータモデルになっているか（どうデータを整理して格納するか）は問題から汲み取って判断してください。
// ブーリアン値のあとのカッコ書きは補足です。返り値はブーリアン値のみで結構です。

// 動作：

// アカウント作成 - CREATE_ACCOUNT
// アイテム作成 - CREATE_ITEM ＊
// アイテム検索 - GET_ITEM
// アイテムのカテゴリ別検索 - GET_ITEM_BY_CATEGORY
// アイテムの価格別検索 - GET_ITEM_BY_PRICE
// アイテムの在庫別検索 - GET_ITEM_BY_STOCK
// アイテムの名前別検索 - GET_ITEM_BY_NAME
// アイテム削除 - DELETE_ITEM ＊

// ＊CREATE_ITEM と DELETE_ITEM は、ユーザーが管理者（admin）である場合のみ実行可能です。

// ここにコードを書きましょう

// const store = furnitureStore();

// const tmcAccount = {
//   id: 1,
//   name: "TMC",
//   emailAddress: "tmc@email-service.com",
//   idAdmin: false,
// };
// const digAccount = {
//   id: 2,
//   name: "DIG",
//   emailAddress: "dig@email-service.com",
//   idAdmin: false,
// };
// const adminAccount = {
//   id: 3,
//   name: "ADMIN",
//   emailAddress: "admin@email-service.com",
//   idAdmin: true,
// };

// // --------------------------------------------------

// store("CREATE_ACCOUNT", tmcAccount), true
// store("CREATE_ACCOUNT", digAccount), true
// store("CREATE_ACCOUNT", adminAccount), true
// store("CREATE_ACCOUNT", tmcAccount), false（同じアカウントは存在できない）

// // --------------------------------------------------

// store("CREATE_ITEM", adminAccount, {
//   id: 1,
//   name: "desk chair",
//   category: "chair",
//   stock: 100,
//   price: 3000,
// }), true
// store("CREATE_ITEM", adminAccount, {
//   id: 2,
//   name: "very good desk",
//   category: "desk",
//   stock: 50,
//   price: 50000,
// }), true
// store("CREATE_ITEM", adminAccount, {
//   id: 3,
//   name: "awesome desk",
//   category: "desk",
//   stock: 0,
//   price: 100000,
// }), true
// store("CREATE_ITEM", adminAccount, {
//   id: 4,
//   name: "good bed",
//   category: "bed",
//   stock: 20,
//   price: 30000,
// }), true
// store("CREATE_ITEM", adminAccount, {
//   id: 4,
//   name: "bookcase",
//   category: "storage",
//   stock: 50,
//   price: 5000,
// }), false（既に存在するIDでの作成はできない）
// store("CREATE_ITEM", adminAccount, {
//   id: 5,
//   name: "bookcase",
//   category: "storage",
//   stock: 50,
//   price: 5000,
// }), true
// store("CREATE_ITEM", digAccount, {
//   name: "awesome chair",
//   category: "chair",
//   stock: 100,
//   price: 100000,
// }), false（管理者以外は実行できない）

// // --------------------------------------------------

// store("GET_ITEM", tmcAccount, { id: 1 });
// // {
// // id: 1,
// // name: "desk chair",
// // category: "chair",
// // stock: 100,
// // price: 3000
// // }
// store("GET_ITEM", tmcAccount, { id: 2 });
// // {
// // id: 2,
// // name: "very good desk",
// // category: "desk",
// // stock: 50,
// // price: 50000
// // },
// store("GET_ITEM", tmcAccount, { id: 1000 }), false（商品が存在しない）

// // --------------------------------------------------

// store("GET_ITEM_BY_CATEGORY", tmcAccount, { category: "desk" });
// // [
// // {
// // id: 2,
// // name: "very good desk",
// // category: "desk",
// // stock: 50,
// // price: 50000
// // },
// // {
// // id: 3,
// // name: "awesome desk",
// // category: "desk",
// // stock: 0,
// // price: 100000
// // }
// // ]
// store("GET_ITEM_BY_CATEGORY", tmcAccount, { category: "chair" });
// // [
// // {
// // id: 1,
// // name: "desk chair",
// // category: "chair",
// // stock: 100,
// // price: 3000
// // }
// // ]

// // --------------------------------------------------

// store("GET_ITEM_BY_PRICE", digAccount, {
//   price: 50000,
//   condition: "or less",
// });
// // [
// // {
// // id: 1,
// // name: "desk chair",
// // category: "chair",
// // stock: 100,
// // price: 3000
// // },
// // {
// //   id: 2,
// //   name: 'very good desk',
// //   category: 'desk',
// //   stock: 50,
// //   price: 50000,
// // },
// // {
// // id: 4,
// // name: "good bed",
// // category: "bed",
// // stock: 20,
// // price: 30000
// // },
// // {
// // id: 5,
// // name: "bookcase",
// // category: "storage",
// // stock: 50,
// // price: 5000
// // }
// // ]

// store("GET_ITEM_BY_PRICE", digAccount, {
//   price: 50000,
//   condition: "or more",
// });
// // [
// // {
// // id: 2,
// // name: "very good desk",
// // category: "desk",
// // stock: 50,
// // price: 50000
// // },
// // {
// // id: 3,
// // name: "awesome desk",
// // category: "desk",
// // stock: 0,
// // price: 100000
// // }
// // ]

// // --------------------------------------------------

// store("GET_ITEM_BY_STOCK", digAccount, { stock: 1, condition: "or more" });
// // [
// //   { id: 1, name: "desk chair", category: "chair", stock: 100, price: 3000 },
// //   { id: 2, name: "very good desk", category: "desk", stock: 50, price: 50000 },
// //   { id: 4, name: "good bed", category: "bed", stock: 20, price: 30000 },
// //   { id: 5, name: "bookcase", category: "storage", stock: 50, price: 5000 },
// // ]

// // --------------------------------------------------

// store("GET_ITEM_BY_NAME", digAccount, { name: "desk chair" });
// // [
// //   { id: 1, name: "desk chair", category: "chair", stock: 100, price: 3000 },
// // ]

// // --------------------------------------------------

// store("DELETE_ITEM", adminAccount, { id: 1 }), true
// store("DELETE_ITEM", adminAccount, { id: 6 }), false（アイテムが見当たらない場合）
// store("DELETE_ITEM", tmcAccount, { id: 2 }), false（管理者以外は実行できない）