let n = 5; //Number of rows in the diamond 

// Uppper part of the diamond 
for (let i : number = 1; i<= n; i++){
    let line : string = "";

    //print spaces 
    for (let j : number = n; j > i; j--) {
        line += " ";
    }

    //print numbers
    for (let j: number = 1; j<=i; j++) {
        line += j + " ";
    }

    console.log(line);
}

// Lower part of the diamond 
for (let i : number = n - 1; i>= 1; i--){
    let line : string = "";

    //print spaces 
    for (let j : number = n; j > i; j--) {
        line += " ";
    }

    //print numbers
    for (let j: number = 1; j<=i; j++) {
        line += j + " ";
    }

    console.log(line);
}