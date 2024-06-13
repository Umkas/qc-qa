function isWerewolf(target){
    target = target.replace(/[' ',.!?]/g,"");
    const tegrat = target.split("").reverse().join("");
  //  console.log(target)
    if (target === tegrat) {
        return true 
    } else return false;
}

const target = "eva, can i see bees in a cave"
console.log("is "+target+" a werefolf  -> " +isWerewolf(target));