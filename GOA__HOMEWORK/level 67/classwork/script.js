// const d = new Date()

// console.log(d)
// console.log(d.getDate())
// console.log(d.getDay())
// console.log(d.getFullYear())
// // console.log(d.getHours())
// console.log(d.getMonth())
// console.log(d.getSeconds())
// console.log(d.getTime())
// console.log(d.getTimezoneOffset())
// console.log(d.getUTCDate())
// console.log(d.getUTCDay())
// console.log(d.setDate(2022,11,13))
// console.log(d.setFullYear(2022))


// let second = 5;

// let minut = 1;

// const timer = setInterval(() => {
//     second --;

//     if(second === -1){
//         minut --;
//         second = 5;
//     }

//     if(second == 0 && minut == 0){
//         clearInterval(timer)
//         console.log(`TIME OUT!!!!!!!`)
//     }
//     console.log(`${minut}:${second}`)
// }, 1000); 


// const timer = setInterval(function(){
//     const d = new Date()
//     console.log(d.toString())

// },1000)





// let seconds = 0;
// let minutes = 0;
// let hour = 0;

// const timer = setInterval(function(){
//     seconds ++
//     if(seconds === 61){
//         minutes ++
//         seconds = 0
//     }
//     if(minutes === 61){
//         hour ++
//         minutes = 0
//     }
//     console.log(`${hour}:${minutes}:${seconds}`)
// },1000)



let seconds = 5;
let minutes = 1;


const timer = setInterval(() => {
    seconds --
    if(seconds === -1){
        minutes --
        seconds = 5;
    }
    if(minutes === 0 && seconds === 0){
        clearInterval(timer)
        setTimeout(() => {
            console.log(`Time out!!!`)
        },2000)
    }
    console.log(`${minutes}:${seconds}`)
},1000)