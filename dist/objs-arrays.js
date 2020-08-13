"use strict";
var person2 = {
    name: 'Kamil',
    age: 26,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'Kamil',
    age: 26,
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR
};
var favoriteActivities;
favoriteActivities = ['Sports', 'Video games'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
