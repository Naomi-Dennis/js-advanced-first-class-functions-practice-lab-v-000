// Code your solution in this file!
function view_all_property(obj, key){
    obj.map( (value) => { console.log(value[key]) } )
}
function logDriverNames(a_drivers){
  view_all_property(a_drivers, "name")
}

function driversByRevenue(a_drivers){
  a_drivers.map( (value) => { console.log(value["name"]) } )
}
