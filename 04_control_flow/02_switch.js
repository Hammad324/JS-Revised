// switch case

const day = new Date()
//console.log(day.toString())

switch (day.getDay()) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;

    default:
        console.log("Default condition")
        break;
}

/* agar break nhi lagayenge to default ke ilawa jo case bhi match hoga us ke 
bad ka sara code execute kardega. */
// strings ki soorat mine direct case "*string*" likh sakte hain.

