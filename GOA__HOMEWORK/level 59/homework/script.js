let mail1 = "gugassmile@gmail.com";
let password1 = "123";

let mail2 = prompt("Enter your mail:"); 
let password2 = prompt("Enter your password:"); 

if (mail1 === mail2 && password1 === password2) { 
    console.log("You are eligible for a discount.");
} else {
    console.log("Sorry, you are not eligible for a discount.");
}
