let name = "  alex  "
let surname = "  john  "

// Убираем все пробелы и преобразуем первый символ в toUpperCase
let newName = name.trim().toLowerCase()
newName = newName.charAt(0).toUpperCase() + newName.slice(1)

let newSurname = surname.trim().toLowerCase()
newSurname = newSurname.charAt(0).toUpperCase() + newSurname.slice(1)


let email = newName + newSurname + "@gmail.com";


console.log(email);


