// Assignment # 17-20 (ARRAYS AND LOOP):-

var passwordLength = 10;

var input = "AbCDEFGHIJKLMNO123456789pqurstuv</?>@xyz"
var password = "";
for(var i = 0; i < passwordLength; i++){
    password = password + input.charAt(Math.floor(Math.random()*input.length))
}
console.log("Generated Passwords: ", password)