// let user = {}

// for(let i = 1;i <=10;i++){
//     let userName = prompt('Введите имя')
//     let age = prompt('Введите возраст')
//     user.Name = userName
//     user.Age = age
    
//     console.log(`user:${i} Name:${userName} Age:${age} `);
// }


let users = {};

for (let i = 1; i <= 10; i++) {
    let userName = prompt("Введите имя");
    let age = prompt("Введите возраст");

    users[`Пользователь${i}`] = {
        name: userName,
        age: age
    };
}

console.log(users);

// Выводим данные по отдельности
for (let key in users) {
    console.log(`${key}`);
    console.log(`Имя: ${users[key].name}`);
    console.log(`Возраст: ${users[key].age}`);
}
