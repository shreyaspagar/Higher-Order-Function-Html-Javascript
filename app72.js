// function multipleGreet(func, count) { //higher order function
//     for(let i=1; i<=count; i++) {
//         func();
//     }
// }


// let greet = function() {
//     console.log("Hello");
// }

// multipleGreet(greet(), 50);

let odd = function(n) {
    console.log(!(n%2 == 0));
}

let even = function(n) {
    console.log((n%2 == 0));
}

function oddOrEvenFactory(request) {
    if(request == "odd") {
        let odd = function(n) {
        console.log(!(n%2 == 0));
    }

    return odd;
    
}
    else if(request == "even") {
        let even = function(n) {
            console.log((n%2 == 0));
        }

        return even;
    }

    else {
        console.log("Wrong request");
    }
        

}

let request  = "odd";