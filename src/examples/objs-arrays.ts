const person2: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Kamil',
  age: 26,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
}

enum Role { ADMIN = 5
  , READ_ONLY, AUTHOR };

const person = {
  name: 'Kamil',
  age: 26,
  hobbies: ['Sports', 'Cooking'],
  role: Role.AUTHOR
}

// person.role.push('admin');
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ['Sports', 'Video games'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}