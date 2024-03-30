console.log("\nName: Ankit Patil\nEnrollment No.: 202203103510124\n");
let student = {
    _name : "David Rayy",
    _sclass : "VI",
    get rollno(){
        return this._sclass === (_sclass="VI")?12:13
    },
    set sclass(value){
        this._sclass = value
    }

}

console.log("Scenario (i) : sclass = VI")
console.log(student.rollno)

student.sclass="V"

console.log("Scenario (ii) : sclass = V")
console.log(student.rollno)