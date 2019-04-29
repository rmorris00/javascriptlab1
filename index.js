let name1 = prompt("enter a name");
let name2 = prompt("enter another name")
let name3 = prompt("enter another name")

if (name1.length > name2.length && name1.length > name3.length){
    console.log(name1+" has the longest name")
}
else if (name2.length > name1.length && name2.length > name3.length){
    console.log(name2+" has the longest name")
}
else if (name3.length > name1.length && name3.length > name2.length){
    console.log(name3+" has the longest name")
}
else if (name3.length === name2.length && name3.length === name1.length){
    console.log("All three names, "+name1+", "+name2+" and "+name3+" are the same length.")
}
else if (name1.length === name2.length && name1.length > name3.length){
    console.log(name1+" and "+name2+" are the same length")
}
else if (name1.length === name3.length && name1.length > name2.length){
    console.log(name1+" and "+name3+" are the same length")
}
else if (name3.length === name2.length && name3.length > name1.length){
    console.log(name2+" and "+name3+" are the same length")
}