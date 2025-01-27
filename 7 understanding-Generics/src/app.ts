// const names: Array<string> = []; // string[]
// // names[0].split(" ");

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(46);
//   }, 2000);
// });

// promise.then((data) => {
//   // data.split(" ");
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Ug", hobbies: ["Sports"] }, { age: 27 });
console.log(mergedObj);

interface Lengthy {
  length: number;
}

//////////////////////////////////////
// Generic Function
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = "got " + element.length + " elements";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(["Sports", "Cooking"]));

//////////////////////////////////////
// The keyof constraint
function extractAndConvert<T extends {}, U extends keyof T>(obj: T, key: U) {
  return "Value: " + obj[key];
}

console.log(extractAndConvert({ name: "Ugnius" }, "name"));

//////////////////////////////////////
// Generic Classes

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Ugnius");
textStorage.addItem("Aga");
textStorage.removeItem("Aga");
console.log(textStorage);

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const ugniusObj = { name: "Ugnius" };
// objStorage.addItem({ name: "Dede" });
// objStorage.addItem(ugniusObj);
// // ...
// objStorage.removeItem(ugniusObj);
// console.log(objStorage.getItems());

/////////////////////////////////
// Generic Utility Types

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Max", "Sports"];
// names.push("Manu");
// names.pop();
