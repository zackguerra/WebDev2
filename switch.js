// cpp: 5.25%
// ei: 1.58%

/*
payRate(hourlyRate)
1: $14.60
2: $15.60
3. $16.60
4. $17.60
5. $18.60
6. $19.60
7. $20.60
8. $21.60
9. $22.60
10. $23.60
calculate gross salary for 2 weeks(80 hours)
calculate net salary for 2 weeks
if you work ovettime you will get paid 1.5 times more.
1. their name
2. payRate
3. hoursWorked
Name:
payRate:
hourlyRate:
Gross Salary:
Net Salary:
cpp:
ei:
*/

var cpp = 0.0525;
var ei = 0.0158;
var name = prompt("What's your name");
var payRate = prompt("How much is your Pay Rate / hour? (type: $XX.XX)");
var hoursWorked = prompt("Type your Hourly worked (type: 00.00)");
var grossSalary = (payRate * hoursWorked);
var cpp = (grossSalary * cpp);
var ei = (grossSalary * ei);
var netSalary = (grossSalary - (cpp + ei));
var netSalary = (grossSalary - cpp);



if (payRate > 0) {
    (function () {
        document.write(
            "Name: " + name + "<br>" +
            "PayRate: $" + payRate + "<br>" +
            "Hourly Rate: " + hoursWorked + "h" + "<br>" +
            "Gross Salary: $" + grossSalary.toFixed(2) + "<br>" +
            "Net Salary: $" + netSalary.toFixed(2) + "<br>" +
            "CPP (Canada Pension Plan): $" + cpp.toFixed(2) + "<br>" +
            "EI (Employment Insurance): $" + ei.toFixed(2) + "<br>"
        );
    })();

} else if (hoursWorked > 80) {
    payRate = payRate + (payRate * 1.5)
}

else {
    document.write("Type a proper data");
}





// switch (payRate){
//     case "14.60":
//         if(hoursWorked  <= 80){
//            grossSalary = (hoursWorked * payRate);
//     cpp = grossSalary * cpp;
//     ei = grossSalary * ei;
//     NetSalary = grossSalary - cpp - ei; 
//         }else if(hoursWorked > 80){
//             regulartime = (80 * payRate);
//             overtime = ((payRate * 1.5) * (hoursWorked - 80));
//             grossSalary = (regulartime + overtime);
//     cpp = grossSalary * cpp;
//     ei = grossSalary * ei;
//     NetSalary = grossSalary - cpp - ei; 
//         }
//         document.getElementById("name").innerHTML = "Your Name is  " + name;
//         document.getElementById("payRate").innerHTML = "Your Pay Rate is  " + payRate;
//         document.getElementById("hoursWorked").innerHTML = "Your Hours are  " + hoursWorked;
//         document.getElementById("gs").innerHTML = "Your Gross Salary is  $ " + grossSalary.toFixed(2);
//         document.getElementById("ns").innerHTML = "Your Net Salary is $ " + NetSalary.toFixed(2);
//         document.getElementById("cpp").innerHTML = "Your CPP is $ " + cpp.toFixed(2);
//         document.getElementById("ei").innerHTML = "Your EI is $ " + ei.toFixed(2);

//     break;
// }