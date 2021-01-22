


// kilometerToMeter 

function kilometerToMeter(kilometer) {

    if (kilometer <= 0) {
        return "error!you put an invalid number"
    } else {
        var meter = kilometer * 1000;
        return meter;
    }
}


// budgetCalculator

function budgetCalculator(watch, mobile, laptop) {

    if (watch <= 0 && mobile <= 0 && laptop <= 0) {
        return "error! It is an invalid input"
    } else {

        var watchPrice = watch * 50;
        var mobilePrice = mobile * 100;
        var laptopPrice = laptop * 500;

        var totalPrice = watchPrice + mobilePrice + laptopPrice;

        return totalPrice;
    }

}


// hotelCost

function hotelCost(days) {

    var cost = 0;

    if (days <= 0) {
        return "error! It is an invalid input"
    }
    if (days <= 10) {
        cost = days * 100;
    }
    else if (days <= 20) {
        var first10Days = 10 * 100;
        var remaining = days - 10;
        var second10Days = remaining * 80;
        cost = first10Days + second10Days;
    } else {
        var first10Days = 10 * 100;
        var second10Days = 10 * 80;
        var remaining = days - 20;
        var otherDays = remaining * 50;
        cost = first10Days + second10Days + otherDays;
    }

    return cost;
}


// megaFriend

const names = ["Saiful Islam", "Tamim", "Shakib", "Mahmudullah", "Sabbir", "Mustafizur Rahman"];

function megaFriend(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let currentItem = str[i];
        if (currentItem.length > result.length) {
            result = str[i];
        }

    }
    return result;
}


