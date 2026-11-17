// Develop a backend function that fetches user details from an external API. 
// Based on the API response, you need to process and return the user information.

async function getUsers(userId){
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    
    if(!response.ok){
        throw new Error("User not found")
    }
    const user = await response.json();
    const userDetails = {
        id:user.id,
        name:user.name,
        email:user.email
    }
    return userDetails;
} catch(error){
    console.log("Error:",error.message)
   
}   
}
async function main(){
    const user = await getUsers(10);
    console.log(user);
}
main();