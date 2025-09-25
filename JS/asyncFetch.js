const url="https://dummyjson.com/users";

const f1 = async()=>{
    try{
        const res = await fetch(url);
        const jsonData = await res.json();
        jsonData.users.forEach(element => {
            console.log("name = ", element.firstName);
            console.log("email = ", element.email);
            console.log("ip = ", element.ip);
            console.log("Mac Address = ", element.macAddress);
            console.log();
        });
    }
    catch(err){
        console.log("Error = ",err.message);
    }
}
f1();

