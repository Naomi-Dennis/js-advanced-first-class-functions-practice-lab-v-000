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
  let arr = Object.assign([], a_drivers)
  return arr.sort( (a,b) => { return (a["name"] < b["name"]) ? -1 : ((a["name"] > b["name"]) ? 1 : 0 )  }  )
}
