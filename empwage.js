// UC1:- Ability to Check Employee is present or Absent
{
    const IS_ABSENT = 0;

    let empCheck = Math.floor(Math.random() * 10) % 2;
    if (empCheck == IS_ABSENT) {
        console.log("UC1 - Employee is ABSENT");
    }
    else {
        console.log("UC1 - Employee is PRESENT");
    }
}
// UC2:- Ability to Calculate Daily Employee Wage based on part time or full time work
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

{
    let empHrs = 0;
    empCheck = Math.floor(Math.random() * 10) % 3;
    switch (empCheck) {
        case IS_PART_TIME:
            empHrs = PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            empHrs = FULL_TIME_HOURS;
            break;
        default:
            empHrs = 0;
    }
    let empWage = empHrs * WAGE_PER_HOUR;
    console.log("UC2 - Emp Wage: " + empWage);
}


// UC 3: Refactored code to write function for daily working Hours
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
{
    let empHrs = 0;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHours(empCheck);
    let empWage = empHrs * WAGE_PER_HOUR;
    console.log("UC3 - Emp Wage: " + empWage, " Total Working Hours: " + empHrs);
}


// UC 4: Calculating Wages for a Month assuming 20 Working Days in a Month
{
    const NUM_OF_WORKING_DAYS = 20;
    let empHrs = 0;
    for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
        let empCheck = Math.floor(Math.random() * 10) % 3;
        empHrs += getWorkingHours(empCheck);
    }
    let empWage = empHrs * WAGE_PER_HOUR;
    console.log("UC 4:- Total Hrs: " + empHrs + " Emp Wage: " + empWage);
}


