

// kilometer to meter function

function kilometerToMeter(kilometer) {
    if(kilometer <= 0 || kilometer != isNaN){
        return "Invalid. Input a Valid Number"
    }
    else{
       var meter = kilometer * 1000;
    return meter;
} 
}
var result = kilometerToMeter(10);
console.log(result);

// Defining a function for the budget calculator 

function budgetCalculator(watch, mobilePhone, laptop) {
        var totalPrice = 50 * watch + 100 * mobilePhone + 500 * laptop;
        return totalPrice;
}

// Defining a function for the hotel cost 

function hotelCost(days) {
        var totalCost = 0;
        if (days <= 10) {
            totalCost = days * 100;
        }
        else if (days <= 20) {
            var first10Days = 10 * 100;
            var remaining = days - 10;
            var upTo20Days = remaining * 80;
            totalCost = first10Days + upTo20Days;
        }
        else {
            var first10Days = 10 * 100;
            var upTo20Days = 10 * 80;
            var remaining = days - 20;
            var over20Days = remaining * 50;
            totalCost = first10Days + upTo20Days + over20Days;
        }
        return totalCost;
}



console.log(hotelCost(120));
var dam = budgetCalculator(2, 5, 10);
console.log(dam);






function megaFriend(name){
    if (name == undefined){          //checking for Invalid Number 
        return "Invalid"
    } else {
    var length = 0 ;
    var longestArrayIndex = "";
    for(var i = 0; i < name.length; i++){
        if(name[i].length > length){
        length = name[i].length;
        longestArrayIndex = name[i];
        }
      }
       return longestArrayIndex;
    }
}
console.log(megaFriend(["i ", "am","ubaidur", "rahman"]));



