const express=require(`express`);
const app=express();

const users=[{
    name:"john",
    kidneys:[{
        healthy:false    }]
}]; // an array of objects

app.use(express.json())

app.get("/",(req,res)=>{
const johnKidneys=users[0];
const NumberOfKidneys= johnKidneys.kidneys.length;
let NumberOfHealthyKidneys=0;
for(let i=0; i<NumberOfKidneys;i++)
{
    if(johnKidneys.kidneys[i].healthy)
    {
        NumberOfHealthyKidneys+=1;

    }
}
    const NumberOfUnhealthyKidneys= NumberOfKidneys-NumberOfHealthyKidneys;
    res.json({
        NumberOfHealthyKidneys,
        NumberOfKidneys,
        NumberOfUnhealthyKidneys
    })
    console.log(NumberOfHealthyKidneys);
})


//middleware


app.post(`/`, (req,res)=>{

    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy})
    res.json({
        msg:"Done!"
    })
})  

app.put("/",(req,res)=>{
    for(let i=0;i<users[0].kidneys.length;i++)
    {
        users[0].kidneys[i]=false;
        //makes all the kidenys healthy
    }
    res.json({});
// there always needs to be a response i.e. a res. in order to ensure that the postman
//underatands that the process is over

})//all kidneys are healthy when this is executed

app.delete("/", function(req, res) {
    if(isThereAtleastOneUnhealthyKidney()) {
        const newKidneys = [];
        for (let i = 0; i<users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({msg: "done"})   
    } else {
        res.status(411).json({
            msg: "You have no bad kidneys"
        });
    }
})
// all the unhealthy kidneys are just straight up removed
function isThereAtleastOneUnhealthyKidney() {
    let atleastOneUnhealthyKidney = false;
    for (let i = 0; i<users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney
}
app.listen(3002);
