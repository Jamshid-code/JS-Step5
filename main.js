let user = {}

for(let i = 1;i <=3;i++){
    let userName = prompt('Введите имя')
    let age = prompt('Введите возраст')
    user.Name = userName
    user.Age = age
    
    console.log(`user:${i} Name:${userName} Age:${age} `);
}
