const accountId = 24233;
let accountEmail = "1zaid@gmail";
// we should not use var
var accountPassword = 1233445;
// and this is also the wrong way it workes but prefer not to use
accountCity = "AURANGABAD";
let accoutnState = 242 + 232;
// accountId = 1;

accountEmail = "zadi@mgaid.com";
accountPassword = "3827473";
accountCity = "chh.sambhajinagar";

/*prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountEmail, accountPassword, accountCity, accoutnState]);