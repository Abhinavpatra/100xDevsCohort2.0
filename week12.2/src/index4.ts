type Stuff = "abhinav" | "anisha" | "abhishek" | "other" | "lakshay" | "prateek";
type NewStuff = Exclude<Stuff, "abhinav" | "anisha" | "abhishek">;

// so any variable with the type newStuff. won't be able to store the 3 names above.

function takeNewStuff(vals: NewStuff){
    console.log("Executed");

    
}
takeNewStuff("other");