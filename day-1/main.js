// 1.write code to get array of names from given array of users
// 2.Get back only active users
// 3. Sort users by age descending

const users = [
  {
    id: 1,
    name: "Sara",
    isActive: true,
    age: 28,
  },
  {
    id: 2,
    name: "John",
    isActive: false,
    age: 20,
  },
  {
    id: 3,
    name: "Jessica",
    isActive: true,
    age: 24,
  },
  {
    id: 4,
    name: "Antony",
    isActive: false,
    age: 22,
  },
];

//? 1.write code to get array of names from given array of users

// * 1.Solution:
const names = [];
// for (let i = 0; i < users.length; i++) {
//   names.push(users[i].name);
// }
// console.log(names);

//* Optimised solution

// users.forEach((e) => {
//   names.push(e.name);
// });
// console.log(names);

// users.map((ele)=>{
//     names.push(ele.name);
// })
// console.log(names);

//? 2.Get back only active users
//* 2.solution:

// const active = users.forEach((user) => {
//   if (user.isActive) {
//     console.log(user);
//   }
// });
//? forEach method will not return new array
// const active = users.forEach((user) => {
//   if (user.isActive) {
//     console.log(user);
//      return user;
//   }
// });
// console.log(active);

//* Optimised solution

// const activeUsers = users.filter((user) => {
//   return user.isActive == true;
// });

// console.log(activeUsers);

//* One line solution- (ShortHand solution)

const activeUsers = users.filter((user) => user.isActive).map((user)=> user.name);

console.log(activeUsers);
