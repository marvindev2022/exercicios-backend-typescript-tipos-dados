type User = {
  name: string;
  age: number;
  active: boolean;
};

const users: User[] = [
  {
    name: "Guido",
    age: 32,
    active: true,
  },
  {
    name: "Dani",
    age: 30,
    active: true,
  },
  {
    name: "João",
    age: 40,
    active: false,
  },
  {
    name: "Guilherme",
    age: 29,
    active: true,
  },
  {
    name: "Ana",
    age: 18,
    active: false,
  },
  {
    name: "José",
    age: 28,
    active: false,
  },
];

function filterUserFromName(list: User[], inputName: string) {
  const userFiltered = list.filter(({ name }) => name.toLowerCase().includes(inputName.toLowerCase()));
  if (userFiltered.length > 0) return userFiltered;
  return "No user found";
}
console.log(filterUserFromName(users,"a"))