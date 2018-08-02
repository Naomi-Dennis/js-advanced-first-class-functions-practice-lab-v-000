// Code your solution in this file!
function logDriverNames(a_drivers){
    a_drivers.map( (value) => { console.log(value["name"]) } )
}

function driversByRevenue(a_drivers, hometown){
    for(const driver in a_drivers){
       console.log( (driver["hometown"] == hometown) ? driver["name"] : "" )
    }
}
