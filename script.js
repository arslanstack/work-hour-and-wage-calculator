
var a = 0;

function myFunction1() {
    var startTime = document.getElementById("timestart1").value;
    var endTime = document.getElementById("timeend1").value;
    var startDate = new Date();
    startDate.setTime(Date.parse(startTime));
    var endDate = new Date();
    endDate.setTime(Date.parse(endTime));
    if(endDate < startDate){
        alert("Invalid Input");
    }
    else {
        var WH = "workedHour";
        var WM = "workedMin";
        var PH = "paidHour";
        var PM = "paidMin";
        var DW = "dailyWage";
        var WW = "weeklyWage";
        a = 1;
        var diffMin = (endDate - startDate) / 60000;
        var clockMinutes = diffMin % 60;
        var clockHours = parseInt(diffMin / 60);
        document.getElementById(WH+a).innerHTML = clockHours;
        document.getElementById(WM+a).innerHTML = clockMinutes;
        console.log("You worked: " + clockHours + "hrs and " + clockMinutes + "min");
        if (diffMin >= 1470) {
            if (diffMin > 1470) {
                var alertmsg = "Max paid work day limit is set to 24 hrs and overtime 30 min";
                alert(alertmsg);
                console.log("Max paid work day limit is set to 24 hrs and overtime 30 min");
                console.log("You worked: " + clockHours + "hrs and " + clockMinutes + "min");
                console.log("You will only be paid for: 24 hrs and 30 min");
            }
            diffMin = 1470;
        }
        diffMin = diffMin.toFixed( 5 )
        var $perHour = 10;
        var $perMin = 10 / 60;
        var $dailyWage = $perMin * diffMin;
        var $weeklyWage = $dailyWage * 5;
        var paidMinutes = diffMin % 60;
        var paidHours = parseInt(diffMin / 60);
        document.getElementById(PH+a).innerHTML = paidHours;
        document.getElementById(PM+a).innerHTML = paidMinutes;
        document.getElementById(DW+a).innerHTML = $dailyWage;
        document.getElementById(WW+a).innerHTML = $weeklyWage;
        console.log("Your Daily Wage for today @ $10 per Hour is: $" + $dailyWage);
        console.log("Your Estimated Weekly Wage @ 5 working days a week is: $" + $weeklyWage);
    }
}
function myFunction2() {
    var startTime = document.getElementById("timestart2").value;
    var endTime = document.getElementById("timeend2").value;
    var startDate = new Date();
    startDate.setTime(Date.parse(startTime));
    var endDate = new Date();
    endDate.setTime(Date.parse(endTime));
    if(endDate < startDate){
        alert("Invalid Input");
    }
    else {
        var WH = "workedHour";
        var WM = "workedMin";
        var PH = "paidHour";
        var PM = "paidMin";
        var DW = "dailyWage";
        var WW = "weeklyWage";
        a = 2;
        var diffMin = (endDate - startDate) / 60000;
        var clockMinutes = diffMin % 60;
        var clockHours = parseInt(diffMin / 60);
        document.getElementById(WH+a).innerHTML = clockHours;
        document.getElementById(WM+a).innerHTML = clockMinutes;
        console.log("You worked: " + clockHours + "hrs and " + clockMinutes + "min");
        if (diffMin >= 1470) {
            if (diffMin > 1470) {
                var alertmsg = "Max paid work day limit is set to 24 hrs and overtime 30 min";
                alert(alertmsg);
                console.log("Max paid work day limit is set to 24 hrs and overtime 30 min");
                console.log("You worked: " + clockHours + "hrs and " + clockMinutes + "min");
                console.log("You will only be paid for: 24 hrs and 30 min");
            }
            diffMin = 1470;
        }
        diffMin = diffMin.toFixed( 5 )
        var $perHour = 10;
        var $perMin = 10 / 60;
        var $dailyWage = $perMin * diffMin;
        var $weeklyWage = $dailyWage * 5;
        var paidMinutes = diffMin % 60;
        var paidHours = parseInt(diffMin / 60);
        document.getElementById(PH+a).innerHTML = paidHours;
        document.getElementById(PM+a).innerHTML = paidMinutes;
        document.getElementById(DW+a).innerHTML = $dailyWage;
        document.getElementById(WW+a).innerHTML = $weeklyWage;
        console.log("Your Daily Wage for today @ $10 per Hour is: $" + $dailyWage);
        console.log("Your Estimated Weekly Wage @ 5 working days a week is: $" + $weeklyWage);
    }
}
function myFunction3() {
    var startTime = document.getElementById("timestart3").value;
    var endTime = document.getElementById("timeend3").value;
    var startDate = new Date();
    startDate.setTime(Date.parse(startTime));
    var endDate = new Date();
    endDate.setTime(Date.parse(endTime));
    if(endDate < startDate){
        alert("Invalid Input");
    }
    else {
        var WH = "workedHour";
        var WM = "workedMin";
        var PH = "paidHour";
        var PM = "paidMin";
        var DW = "dailyWage";
        var WW = "weeklyWage";
        a = 3;
        var diffMin = (endDate - startDate) / 60000;
        var clockMinutes = diffMin % 60;
        var clockHours = parseInt(diffMin / 60);
        document.getElementById(WH+a).innerHTML = clockHours;
        document.getElementById(WM+a).innerHTML = clockMinutes;
        console.log("You worked: " + clockHours + "hrs and " + clockMinutes + "min");
        if (diffMin >= 1470) {
            if (diffMin > 1470) {
                var alertmsg = "Max paid work day limit is set to 24 hrs and overtime 30 min";
                alert(alertmsg);
                console.log("Max paid work day limit is set to 24 hrs and overtime 30 min");
                console.log("You worked: " + clockHours + "hrs and " + clockMinutes + "min");
                console.log("You will only be paid for: 24 hrs and 30 min");
            }
            diffMin = 1470;
        }
        diffMin = diffMin.toFixed( 5 )
        var $perHour = 10;
        var $perMin = 10 / 60;
        var $dailyWage = $perMin * diffMin;
        var $weeklyWage = $dailyWage * 5;
        var paidMinutes = diffMin % 60;
        var paidHours = parseInt(diffMin / 60);
        document.getElementById(PH+a).innerHTML = paidHours;
        document.getElementById(PM+a).innerHTML = paidMinutes;
        document.getElementById(DW+a).innerHTML = $dailyWage;
        document.getElementById(WW+a).innerHTML = $weeklyWage;
        console.log("Your Daily Wage for today @ $10 per Hour is: $" + $dailyWage);
        console.log("Your Estimated Weekly Wage @ 5 working days a week is: $" + $weeklyWage);
    }
}

function myFunction4() {
    var startTime = document.getElementById("timestart4").value;
    var endTime = document.getElementById("timeend4").value;
    var startDate = new Date();
    startDate.setTime(Date.parse(startTime));
    var endDate = new Date();
    endDate.setTime(Date.parse(endTime));
    if(endDate < startDate){
        alert("Invalid Input");
    }
    else {
        var WH = "workedHour";
        var WM = "workedMin";
        var PH = "paidHour";
        var PM = "paidMin";
        var DW = "dailyWage";
        var WW = "weeklyWage";
        a = 4;
        var diffMin = (endDate - startDate) / 60000;
        var clockMinutes = diffMin % 60;
        var clockHours = parseInt(diffMin / 60);
        document.getElementById(WH+a).innerHTML = clockHours;
        document.getElementById(WM+a).innerHTML = clockMinutes;
        console.log("You worked: " + clockHours + "hrs and " + clockMinutes + "min");
        if (diffMin >= 1470) {
            if (diffMin > 1470) {
                var alertmsg = "Max paid work day limit is set to 24 hrs and overtime 30 min";
                alert(alertmsg);
                console.log("Max paid work day limit is set to 24 hrs and overtime 30 min");
                console.log("You worked: " + clockHours + "hrs and " + clockMinutes + "min");
                console.log("You will only be paid for: 24 hrs and 30 min");
            }
            diffMin = 1470;
        }
        diffMin = diffMin.toFixed( 5 )
        var $perHour = 10;
        var $perMin = 10 / 60;
        var $dailyWage = $perMin * diffMin;
        var $weeklyWage = $dailyWage * 5;
        var paidMinutes = diffMin % 60;
        var paidHours = parseInt(diffMin / 60);
        document.getElementById(PH+a).innerHTML = paidHours;
        document.getElementById(PM+a).innerHTML = paidMinutes;
        document.getElementById(DW+a).innerHTML = $dailyWage;
        document.getElementById(WW+a).innerHTML = $weeklyWage;
        console.log("Your Daily Wage for today @ $10 per Hour is: $" + $dailyWage);
        console.log("Your Estimated Weekly Wage @ 5 working days a week is: $" + $weeklyWage);
    }
}
function myFunction5() {
    var startTime = document.getElementById("timestart5").value;
    var endTime = document.getElementById("timeend5").value;
    var startDate = new Date();
    startDate.setTime(Date.parse(startTime));
    var endDate = new Date();
    endDate.setTime(Date.parse(endTime));
    if(endDate < startDate){
        alert("Invalid Input");
    }
    else {
        var WH = "workedHour";
        var WM = "workedMin";
        var PH = "paidHour";
        var PM = "paidMin";
        var DW = "dailyWage";
        var WW = "weeklyWage";
        a = 5;
        var diffMin = (endDate - startDate) / 60000;
        var clockMinutes = diffMin % 60;
        var clockHours = parseInt(diffMin / 60);
        document.getElementById(WH+a).innerHTML = clockHours;
        document.getElementById(WM+a).innerHTML = clockMinutes;
        console.log("You worked: " + clockHours + "hrs and " + clockMinutes + "min");
        if (diffMin >= 1470) {
            if (diffMin > 1470) {
                var alertmsg = "Max paid work day limit is set to 24 hrs and overtime 30 min";
                alert(alertmsg);
                console.log("Max paid work day limit is set to 24 hrs and overtime 30 min");
                console.log("You worked: " + clockHours + "hrs and " + clockMinutes + "min");
                console.log("You will only be paid for: 24 hrs and 30 min");
            }
            diffMin = 1470;
        }
        diffMin = diffMin.toFixed( 5 )
        var $perHour = 10;
        var $perMin = 10 / 60;
        var $dailyWage = $perMin * diffMin;
        var $weeklyWage = $dailyWage * 5;
        var paidMinutes = diffMin % 60;
        var paidHours = parseInt(diffMin / 60);
        document.getElementById(PH+a).innerHTML = paidHours;
        document.getElementById(PM+a).innerHTML = paidMinutes;
        document.getElementById(DW+a).innerHTML = $dailyWage;
        document.getElementById(WW+a).innerHTML = $weeklyWage;
        console.log("Your Daily Wage for today @ $10 per Hour is: $" + $dailyWage);
        console.log("Your Estimated Weekly Wage @ 5 working days a week is: $" + $weeklyWage);
    }
}
function myFunction6() {
    var startTime = document.getElementById("timestart6").value;
    var endTime = document.getElementById("timeend6").value;
    var startDate = new Date();
    startDate.setTime(Date.parse(startTime));
    var endDate = new Date();
    endDate.setTime(Date.parse(endTime));
    if(endDate < startDate){
        alert("Invalid Input");
    }
    else {
        var WH = "workedHour";
        var WM = "workedMin";
        var PH = "paidHour";
        var PM = "paidMin";
        var DW = "dailyWage";
        var WW = "weeklyWage";
        a = 6;
        var diffMin = (endDate - startDate) / 60000;
        var clockMinutes = diffMin % 60;
        var clockHours = parseInt(diffMin / 60);
        document.getElementById(WH+a).innerHTML = clockHours;
        document.getElementById(WM+a).innerHTML = clockMinutes;
        console.log("You worked: " + clockHours + "hrs and " + clockMinutes + "min");
        if (diffMin >= 1470) {
            if (diffMin > 1470) {
                var alertmsg = "Max paid work day limit is set to 24 hrs and overtime 30 min";
                alert(alertmsg);
                console.log("Max paid work day limit is set to 24 hrs and overtime 30 min");
                console.log("You worked: " + clockHours + "hrs and " + clockMinutes + "min");
                console.log("You will only be paid for: 24 hrs and 30 min");
            }
            diffMin = 1470;
        }
        diffMin = diffMin.toFixed( 2 )
        var $perHour = 10;
        var $perMin = 10 / 60;
        var $dailyWage = $perMin * diffMin;
        var $weeklyWage = $dailyWage * 5;
        var paidMinutes = diffMin % 60;
        var paidHours = parseInt(diffMin / 60);
        document.getElementById(PH+a).innerHTML = paidHours;
        document.getElementById(PM+a).innerHTML = paidMinutes;
        document.getElementById(DW+a).innerHTML = $dailyWage;
        document.getElementById(WW+a).innerHTML = $weeklyWage;
        console.log("Your Daily Wage for today @ $10 per Hour is: $" + $dailyWage);
        console.log("Your Estimated Weekly Wage @ 5 working days a week is: $" + $weeklyWage);
    }
}
