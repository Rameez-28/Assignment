document.title = ("Nested IFelse");

var  userId = prompt("Please Enter ID For LOgin");
var  password = prompt("Please Enter ID For LOgin");

if (userId !== "" && password !== "")
{
    if(userId.toLowerCase() == "admin" && password == "admin123")
    {
        document.write("Welcome to GOK")
    }
else
    {
 alert("Invalid ID Or Password")
    }
}
else
{
    document.write("Please Enter Valid ID and Password")
}