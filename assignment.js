// 

// kilometer to meter function

function kilometerToMeter(kilometer) {
    if (kilometer <= 0) {
        return "Invalid. Kilometer is not 0 or a negative number.";
    }
    else {
        var meter = kilometer * 1000;            // 1 KM = 1000 meter
        return meter;
    }
}

// Defining a function for the budget calculator 

function budgetCalculator(watch, mobilePhone, laptop) {
    var watchQty = watch <= 0;            // Qty = Quantity
    var mobileQty = mobilePhone <= 0;
    var laptopQty = laptop <= 0;
    if (watchQty || mobileQty || laptopQty) {
        return "Invalid. Input a Valid Quantity of your products.";
    }
    else {
        var totalPrice = 50 * watch + 100 * mobilePhone + 500 * laptop;      // price * Quantity
        return totalPrice;
    }
}

// Defining a function for the hotel cost 

function hotelCost(days) {
    var totalCost = 0;
    if (days <= 0) {                     //checking for Invalid input 
        return "Day is not 0 or a negative number. Try again with Valid Input";
    }
    else if (days <= 10) {
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

// Defining a function for mega Friend

function megaFriend(name){
    if (name === undefined || name.length == 0 ){          //checking for empty 
        return "Invalid. Input a valid items";
    } 
    else {
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