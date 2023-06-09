function getRateData(days, tag, gps, roadside, under25 ) {
    //OUPUT VARIABLES
    let rentalAmount = 0;
    let optionsAmount = 0;
    let surchargeAmount = 0;
    let totalDue = 0;
    //LOGIC
    rentalAmount = 29.99 * days;
    if(tag){
        optionsAmount += 3.95 * days;
    }
    if(gps){
        optionsAmount += 2.95 * days;
    }
    if(roadside){
        optionsAmount += 2.95 * days;
    }
    if(under25){
        surchargeAmount = rentalAmount * 0.30;
    }
    totalDue = rentalAmount + optionsAmount + surchargeAmount;
    // RETURN OBJECT WITH OUTPUTVARIABLE AS PROPERTIES
    return {
        rentalAmount: rentalAmount,
        optionsAmount: optionsAmount,
        surchargeAmount: surchargeAmount,
        totalDue: totalDue
    }
}
// //TEST
function getTextResults(results){
    return `
    Car Rental:         $${results.rentalAmount.toFixed(2)}
    Options:            $${results.optionsAmount.toFixed(2)}
    Under 25 Surcharge: $${results.surchargeAmount.toFixed(2)}

    Car Rental:         $${results.totalDue.toFixed(2)}
    `;
}
console.log(getTextResults(getRateData( 10, true, true, true, true)));
console.log(getTextResults(getRateData( 10, false, false, false, false)));