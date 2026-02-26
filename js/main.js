
function fullName(firstName, lastName) {
    return firstName + lastName;
}

function avg(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[0]
    }
    return sum / numbers.length;
}

function space(int) {
    let s = "";
    for (let i = 0; i < int; i++) {
        s += " "
        j = Number(i) + 1;
        console.log(s + j);
    }
}

space(20);