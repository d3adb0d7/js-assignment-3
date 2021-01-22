
// kilometerToMeter convertion function
function kilometerToMeter(kilometer) {
    const meter = kilometer * 1000;
    //conditon: Kilometer can not be negative value.
    if (kilometer < 0) {
        return " Negative input is not allowed!!";
    }
    else{
        return meter;
    }
    
}



// budgetCalculator Function 

function budgetCalculator(watch,phone,laptop){
    var watchprice = watch * 50 ;
    var phoneprice = phone * 100;
    var laptopprice = laptop * 500;
    var totalprice = watchprice + phoneprice +laptopprice ;
    // condition for entry . Product amount cannot be negative
    if (watch < 0 || phone < 0 || laptop < 0) {
        return "Negative entry not allowed!!";
    }
    else{
        return totalprice ;
    }
    
}



// Cost calculator for Hotel 

function  hotelCost(night){
    // for calculation innitial total cost will be 0.
    var totalcost = 0;
    //first 10 days cost
    if (night <=10) {
        // Night cant not be negative or 0 .
        if (night <= 0) {
            
            return "Night can not be Negative !!"
        }
        else{
            var totalcost = night * 100;
            return totalcost;
        }
    }
    //caltulation for second 10 days cost
    else if (night <= 20) {
        var firsttendays = 10 * 100;
        var remainingnights = night -10;
        var extracost = remainingnights * 80;
        var totalcost = firsttendays + extracost;
        return totalcost;
    }
    //calcultaion for more than 20 days cost
    else{
        var firsttendays = 10 * 100;
        var secondtendays = 10 * 80;
        var remainingnights = night - 20;
        var extracost = remainingnights * 50;
        var totalcost = firsttendays + secondtendays + extracost;
        return totalcost;
    }

}



//largest friend name search:

function megaFriend(friendname){
    //fried name should be a valid name
    if ((friendname =="") && (friendname == 0)) {
        return " Please input a valid friend name!!";
        
    }
    else{
        var megafriend= "";
        for(var i=0; i < friendname.lenght; i++)
        if ( friendname[i].length > megafriend.length) {
            //bigger string will be stroed in megafriend
            megafriend = friendname[i];
        }
    }
    return megafriend;

}
