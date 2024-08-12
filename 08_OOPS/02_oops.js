//object literal
const user = {
    username:"abhay",
    logicCount:9,
    isLoggedIn:true,
    dateOfBirth : {
        day:7,
        month:"january",
        year:2004
    },
    getUSerDetails : function(){
       // console.log(`Username: ${this.username}`)
       console.log(this);
       
    }
    }
    console.log(user);
    console.log(user.getUSerDetails());
    
    //constructor function:
    // const promise1 = new Promise();
    // const date  = new Date();
    function User(username, logicCount, isLoggedIn) {
        this.username=username,
        this.logicCount = logicCount,
        this.isLoggedIn = isLoggedIn,
        this.greetings = function (username) {
            console.log(`hello ${this.username} !`);
            
        }
        return this;
    }
    const user_1 = new User("kumar",12,false);
    const user_2 = new User("sethi",11,true);
    console.log(user_1.constructor);
    console.log(user_2.greetings());
    //new creates an empty object called instance or object 
    // constructor function called by new keyword,
    // all the expected par5ameters are injected using this keyword
    // we get function parametres