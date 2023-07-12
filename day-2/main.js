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

//? 1.check if user with such name exists
//* 1. solution:
const saraName = users.filter((user) => {
  return user.name == "Sara";
});
console.log(saraName);

