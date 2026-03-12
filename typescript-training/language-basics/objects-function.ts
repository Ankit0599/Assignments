
//1. object ==> represents a collection of key-value pairs.

interface personInfo {
    name : string,
    age  : number,
    EmpID: number,
    VisaStatus : boolean,
    address : {
        city : string,
        state : string,
        country : string
    }
}

let person:personInfo = {
    name : "Ankit Jeure",
    age  : 26,
    EmpID: 12345,
    VisaStatus : true,
    address : {
        city : "solapur",
        state : "maharashtra",
        country : "india"
    }
}

//2. Acces the data from the object.
console.log (person.name);
console.log (person["name"]);

console.log (person.address.country);
console.log (person.address["country"]);

// console.log (person[person.address]);

//3. Adding new property to the object.
person.role = "Quality Engineer";
console.log (person);

//4. Modyfying the exisiting property of an object.
person.role = "SDET";
console.log (person);

//5. Deleteing the exisiting property of an object.
delete person.age;
console.log (person);

//6. wheteher a paricular property id availble within an object or not.
console.log ("EmpID" in person);
console.log ("age" in person);

//7. Get all the keys from an object
console.log (Object.keys(person));

//8. get all the values from an object.
console.log (Object.values(person));

//9. get all the entries from an object
console.log (Object.entries(person));

//10. Iterate values of an object
for (let key in person) {
    console.log ([key as keyof personInfo]);
}

//11. verify the data types of particular property
console.log (typeof person.EmpID);
console.log (typeof person.address);


//12. Merge two objects
interface projectInfo {
    ProjectName : String;
    ProjectID : number;
}

let project : projectInfo = {
    ProjectName : "Project A",
    ProjectID : 5678
}

let MergedObject = {...person, ...project};
console.log (MergedObject);

console.log ("Object methods are successfully completed");