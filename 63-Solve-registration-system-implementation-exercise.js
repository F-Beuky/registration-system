var usersList=[
    {id:1, firstName:'sara', lastName: 'karami', age:20},
    {id:2, firstName:'mina', lastName: 'zibayi', age:25},
    {id:3, firstName:'laleh', lastName: 'ahmadi', age:23}
]

var b1,i=4,ans=true

do{

    do{
        var userFirstName=prompt("لطفا نام خود را وارد کنید\nتوجه کنید که نام شما باید حداقل 3 و حداکثر 10 کاراکتر باشد.")
        b1=userFirstName.length<3 || userFirstName.length>10
        if(b1===true){
            alert("نام وارد شده معتبر نیست.\nلطفا مجددا نام را وارد نمایید.")
        }
    }while(b1===true)

    do{
        var userLastName=prompt("لطفا نام خانوادگی خود را وارد کنید\nتوجه کنید که نام خانوادگی شما باید حداقل 3 و حداکثر 15 کاراکتر باشد.")
        b1=userLastName.length<3 || userLastName.length>15
        if(b1===true){
            alert("نام خانوادگی وارد شده معتبر نیست.\nلطفا مجددا نام خانوادگی را وارد نمایید.")
        }
    }while(b1===true)

    do{
        var userAge=Number(prompt("لطفا سن خود را وارد کنید\nتوجه کنید که سن شما باید حتما عدد وارد شده و حداکثر 3 رقم باشد."))
        b1=(userAge<0 || userAge>999) || isNaN(userAge)
        if(b1===true){
            alert("سن وارد شده معتبر نیست.\nلطفا مجددا سن را وارد نمایید.")
        }
    }while(b1===true)

    newUser={id:i, firstName:userFirstName, lastName:userLastName, age:userAge}

    usersList.push(newUser)

    i++

    ans=confirm("آیا می خواهید اطلاعات کاربر جدیدی را وارد کنید؟")

}while(ans===true)

alert("ثبت نام کاربران پایان یافت.")

// console.log(usersList)

// usersList.forEach(function(user){
//     console.log(user)  
// })

usersList.forEach(user => {
    console.log("User Name: ",user.firstName,"\tFamily: ",user.lastName)
});


