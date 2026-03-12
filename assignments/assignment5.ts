//Map EmployeeName, [BaseSalary, Experience, rating]

//Storing employee data (input)
const EmpData : Map <string, number []> = new Map ();
EmpData.set ( "Alice Johnson", [75000, 5, 4.2]);
EmpData.set ( "Bob Smith", [68000, 3, 3.8]);
EmpData.set ( "Carol Davis", [82000, 7, 4.5]);
EmpData.set ( "David Brown", [90000, 10, 2.5]);
EmpData.set ( "Eva Green", [60000, 2, 3.5]);

//Create a empty map to store the hike percentages
const HikeMap : Map <string, number> = new Map ();

//calculayte hike for a each employee and store in hike map
for (const key of EmpData.keys()) {
    const data = EmpData.get(key)! // get the array of the values
    const BaseSalary = data [0];
    const Experience = data [1];
    const Rating = data [2];

    const hikePercentage = calculateHike (BaseSalary, Experience, Rating);
    HikeMap.set(key, hikePercentage);
}

console.log ("Hike Percentage for each employee : ");
console.log (HikeMap);

//function to calculate hike
function calculateHike (
    BaseSalary : number,
    Experience : number,
    Rating : number
) : number {
    let variablePayPercentage = 0;
    let rewards = 0;
    let bonus = 0;

    if (Rating >= 4) {
        variablePayPercentage = 15;
        bonus = 1500;
    } else if (Rating >= 3) {
        variablePayPercentage = 10;
        bonus = 1200;
    } else {
        variablePayPercentage = 3;
        bonus = 300;
    }

    if (Experience >=5) {
        rewards = 5000;
    }

    const Hike = (BaseSalary * variablePayPercentage)/100 + rewards + bonus ;

    return (Hike/BaseSalary) * 100;
}

