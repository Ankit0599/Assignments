//jumping statements in loops
//1. break ==> used to break the loop intentionally when a specific condition is met

for (let i: number = 1; i<=10; i++) {
    if (i==5){
        break;//break statement will break the entire loop
    }
    console.log(i);
}

//2. continue ==> used to skip the current iteration and move to the next iteration when a specific condition is met

for (let i: number = 1; i<=10; i++) {
    if (i==5){
        continue;//skip the current iteration and go to the next iteration
    }
    console.log(i);
}
