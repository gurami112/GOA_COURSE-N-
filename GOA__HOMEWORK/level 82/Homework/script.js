// შექმენით ფუნქცია რომელსაც გადაეცემა 2 რიცხვი, start - end, თქვენი მოვალეობაა ამ რიცხვებს შორის ყველა რიცხვის გაგება და მასივში შეტანა, საბოლოოდ დააბრუნეთ მასივი
// function range(start,end){
//     const result = []
//     for(let i = start;i<+ end; i++){
//         result.push(i)
//     }
//     return result
// }

// const start = 5;
// const end = 10;
// const result = range(start, end);
// console.log(result);

//  დაბრუნებული მასივი გადაეცით ფუნქციას რომელსაც დაარქმევთ calculateAverage ამ ფუნქციაში გამოითვლით იმ რიცხვების საშუალოს რომელიც მოთავსებულია სიაში, მიღებული საშულა დააბრუნეთ ფუნქციიდან

// function range(start, end) {
//     const result = [];
//     for (let i = start; i <= end; i++) {
//         result.push(i);
//     }
//     return result;
// }

// function calculateAverage(numbers) {
//     if (numbers.length === 0) {
//         return 0;
//     }
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return sum / numbers.length;
// }

// const start = 5;
// const end = 10;
// const result = range(start, end);
// const average = calculateAverage(result);

// console.log('Numbers:', result);
// console.log('Average:', average);






//  შექმენით form სადაც გექნებათ 3 შესატანი ველი, სახელი, ემაილი და პაროლი, თქვენი დავალეება როდესაც ფორმა დადასტურდება წამოიღთ ჯავასკრიპტში დადასტურებული მნიშნელობები ინპუთებიდან, შექმენით მასივი სახელად dataBase  ხოლო ყოველი დადასტურებული ინფორმაცია შეინახეთ ამ მასივში ობიექტის სახით, დააუმატეთ უსაფრთხოების ფუნქციონალი სადაც გამოიყენებთ for ციკლს, სანამ დაემატება მასივში ობიექტი იქამდე შეამოწმეთ არსებობს თუ არა ისეთი ობიექტი მასივში რომელიც ტოლია ახლად დადასტურებული ფორმის ემაილის, თუ ტოლია ალერტით გამოუტანეთ რომ ექაუნთი არსებობს, თუ არაა ტოლი მაშინ ალერტით გამოუტანეთ რომ ექაუნთი წარმატებით შექიმნა
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('Form Submitted');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    for (let i = 0; i < dataBase.length; i++) {
        if (dataBase[i].email === email) {
            alert('Account already exists');
            return;
        }
    }

    dataBase.push({ name, email, password });
    console.log('Current dataBase:', dataBase);
    alert('Account created successfully');
});
