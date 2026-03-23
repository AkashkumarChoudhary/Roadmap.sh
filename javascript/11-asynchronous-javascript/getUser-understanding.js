// Scenario: Imagine we want to:
// Get a User.
// Get that User's Posts.


//  The Callback Hell approach

function getUser(id, callback) {
    setTimeout(() => {
        console.log("1. Got User");
        callback({id:id, name:"Alex"});
        
    },1000);
}

function getPosts(username, callback){
    setTimeout(()=>{
        console.log(`2. Got Posts for ${username}`);
        callback(["Post A", "Post B"]);
    },1000);
}

// Usage

getUser(1, (user)=> {
    getPosts(user.name,(posts)=> {
        console.log("3. Final Result:", posts);
        // If we had a 3rd step, w'd indent even further right here...
    });
});


// Output
// 1. Got User
// 2. Got Posts for Alex
// 3. Final Result: ["Post A", "Post B"]


// The Better way : Promises

//  A Promise is an object that represents a value that doesn't exist yet but will in the future. It has three states: 
// 1. Pending: In progress.
// 2. Resolved (Fullfilled): Success!
// 3. Rejected: Error!

