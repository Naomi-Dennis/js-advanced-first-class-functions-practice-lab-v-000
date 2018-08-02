// Code your solution in this file!
function logDriverNames(a_drivers){
    a_drivers.map( (value) => { console.log(value["name"]) } )
}

function logDriversByHometown(a_drivers, hometown){
    for(const driver of a_drivers){
       console.log((driver["hometown"] == hometown) ? driver["name"] : "" )
    }
}
function driversByRevenue(a_drivers){
  return a_drivers.sort( (a,b) => { return (a["revenue"] < b["revenue"]) ? -1 : ((a["revenue"] > b["revenue"]) ? 1 : 0 )  }  )
}
