const locked_out_user_Account = require("../pages/locked_out_user_login")
const username = "locked_out_user"
const password = "secret_sauce"
 const errorMessage ="Epic sadface: Sorry, this user has been locked out."

describe("locked_out_user login test",()=>{

    it("should show error message when locked_out_user tries to log in",async()=>{
       
        // await locked_out_user_Account.enterUsername(username)
        // await locked_out_user_Account.enterPassword(password);
        await locked_out_user_Account.LogIn(username, password);

         const errorText = await locked_out_user_Account.showErrorMessage();
         expect(errorText).toEqual(errorMessage);
// console.log(errorText);
//          try{
//             expect(errorText).toEqual("Epic sadface: Sorry, this user has been locked out.")
//          }
//          catch(error){
//             console.log("something went wrong");
//          }
    })

})
