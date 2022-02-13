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


/* UC 5: Calculate Wages till a condition of total working hours of 160 or
         max days of 20 is reached for a month */
{
    const MAX_HRS_IN_MONTH = 160;
    const NUM_OF_WORKING_DAYS = 20;
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
        totalWorkingDays < NUM_OF_WORKING_DAYS) {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        totalEmpHrs += getWorkingHours(empCheck);
    }
    let empWage = totalEmpHrs * WAGE_PER_HOUR;
    console.log("UC5 - Total Days: " + totalWorkingDays +
        ", Total Hrs: " + totalEmpHrs + ", Emp Wage: " + empWage);
}


/* UC 6: Store the Daily Wage along with the Total Wage
        - Save in an Array the Daily Wage */
function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
    totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}

let empWage = calcDailyWage(totalEmpHrs);
console.log("UC6 - Total Days: " + totalWorkingDays +
    " Total Hrs: " + totalEmpHrs + " Emp Wage: " + empWage);


/* UC 7: Use the Daily Wage Array perform following operations using Array Helper Functions
   UC 7A: - Calc total Wage using Array forEach or reduce method */
let totEmpWage = 0;
function sum(dailyWage) {
    totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A - Total Days: " + totalWorkingDays +
    " Total Hrs: " + totalEmpHrs + " Emp Wage: " + totEmpWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("UC7A - Emp Wage with reduce: " + empDailyWageArr.reduce(totalWages, 0));

// UC 7B:- Show the Day along with Daily Wage using Array Map helper function
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log(mapDayWithWageArr);

// UC 7C:- Show Days when Full time wage of 160 were earned
function fulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C - Daily Wage Filter When Fulltime Wage Earned");
console.log(fullDayWageArr);

// UC 7D:- Find the first occurences when Full Time Wage was earned using find function
function findFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7D - First time Fulltime wage was earned on Day: " +
    mapDayWithWageArr.find(findFulltimeWage));

// UC 7E:- Check if Every Element of Full Time Wage is truely holding Full time wage
function isAllFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC6E - Check All Element have Full Time Wage: " +
    fullDayWageArr.every(isAllFulltimeWage));

// UC 7F:- Check if there is any Part Time Wage
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("UC7F - Check if there is any Part Time Wage: " +
    mapDayWithWageArr.some(isAnyPartTimeWage));

// UC 7G:- Find the number of days the Employee Worked
function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0) return numOfDays + 1;
    return numOfDays;
}
console.log("UC 7G - Number of Days Emp Worked: " +
    empDailyWageArr.reduce(totalDaysWorked, 0));


/* UC8: Store the Day and the Daily Wage along with the Total Wage
        - Use Map to store Day wise Wage
        - Compute the total wage using  */
{
    const MAX_HRS_IN_MONTH = 160;
    const NUM_OF_WORKING_DAYS = 20;
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    let empDailyWageArr = new Array();
    let empDailyWageMap = new Map();

    function calcDailyWage(empHrs) {
        return empHrs * WAGE_PER_HOUR;
    }

    while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
        totalWorkingDays < NUM_OF_WORKING_DAYS) {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        let empHrs = getWorkingHours(empCheck);
        totalEmpHrs += empHrs;
        empDailyWageArr.push(calcDailyWage(empHrs));
        empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
    }
    console.log(empDailyWageMap);
    function totalWages(totalWage, dailyWage) {
        return totalWage + dailyWage;
    }
    console.log("UC8 - Total Emp Wage: " +
        Array.from(empDailyWageMap.values()).reduce(totalWages, 0));
}

/* Arrow Function:- 
    Arrow Function does what the normal JS Function does or JS Functional Expression does.
    Arrow Function is similar to Lambda Function in Java.
    It can be inline or separately defined as functional variable that can be passed as method parameters
    It really simplifies the code and makes it look elegant 
*/

/* UC9 : Use the Daily Wage Map and Daily Hour Map perform following operations using Arrow Functions
a. Calc total Wage and total hours worked
b. Show the full workings days, part working days and no working days
*/
{
    const MAX_HRS_IN_MONTH = 160;
    const NUM_OF_WORKING_DAYS = 20;
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    let empDailyWageArr = new Array();
    let empDailyWageMap = new Map();
    let empDailyHrsMap = new Map();

    function calcDailyWage(empHrs) {
        return empHrs * WAGE_PER_HOUR;
    }

    while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
        totalWorkingDays < NUM_OF_WORKING_DAYS) {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        let empHrs = getWorkingHours(empCheck);
        totalEmpHrs += empHrs;
        empDailyWageArr.push(calcDailyWage(empHrs));
        empDailyHrsMap.set(totalWorkingDays, empHrs);
        empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
    }

    const findTotal = (totalVal, dailyVal) => {
        return totalVal + dailyVal;
    }
    let totalHours = Array.from(empDailyHrsMap.values())
        .filter(dailyHours => dailyHours > 0)
        .reduce(findTotal, 0);
    let totalSalary = empDailyWageArr
        .filter(dailyWage => dailyWage > 0)
        .reduce(findTotal, 0);
    console.log("UC9A - Emp Wage with Arrow. " + "\n\tTotal Hours: " +
        totalHours + ", Total Wages: " + totalSalary);

    let nonWorkingDays = new Array();
    let partWorkingDays = new Array();
    let fullWorkingDays = new Array();
    empDailyHrsMap.forEach((value, key, map) => {
        if (value == 8) fullWorkingDays.push(key);
        else if (value == 4) partWorkingDays.push(key);
        else nonWorkingDays.push(key);
    });
    console.log("Full Working Days: " + fullWorkingDays);
    console.log("Part Working Days: " + partWorkingDays);
    console.log("Non Working Days: " + nonWorkingDays);
}


{
    // UC10 : Ability to store the Day, Hours Worked and Wage Earned in a single object.
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    let empDailyHrsAndWageArr = new Array();
    while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        let empHrs = getWorkingHours(empCheck);
        totalEmpHrs += empHrs;
        empDailyHrsAndWageArr.push(
            {
                dayNum: totalWorkingDays,
                dailyHours: empHrs,
                dailyWage: calcDailyWage(empHrs),
                toString() {
                    return "\nDay" + this.dayNum + " => Working Hours is " + this.dailyHours +
                        " And Wage Earned = " + this.dailyWage
                },
            });
    }
    console.log("\nUC10 Showing Daily Hours Worked and Wage Earned: " + empDailyHrsAndWageArr);


    /* UC11 : Perform following Object operations using Arrow Functions
    a. Calc total Wage and total hours worked
    b. Show the full workings days using foreach
    c. Show Part working days using Map by reducing to String Array
    d. No working days only using Map function
    */

    let totalWages = empDailyHrsAndWageArr
        .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
        .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0);
    let totalHours = empDailyHrsAndWageArr
        .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
        .reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours, 0);
    console.log("\nUC 11A - Total Hours: " + totalHours + " Total Wages: " + totalWages);

    empDailyHrsAndWageArr
        .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
        .forEach(dailyHrsAndWage => console.log(dailyHrsAndWage.toString()));

    let partWorkingDaysStrArr = empDailyHrsAndWageArr
        .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
        .map(dailyHrsAndWage => dailyHrsAndWage.toString());
    console.log("\nUC 11C - PartWorkingDayStrings: " + partWorkingDaysStrArr);

    let nonWorkingDayNums = empDailyHrsAndWageArr
        .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
        .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
    console.log("\nUC 11D - NonWorkingDayNums: " + nonWorkingDayNums);
    
}
// UC 12: Ability to create Employee Payroll Data with id, name and salary
{
    console.log("\n*** UC12 ***");
    class EmployeePayroll {
        //properties of class
        id;
        salary;
        //defining constructor of class using constructor keeyword
        constructor(id, name, salary) {
            this.id = id;
            this.name = name;
            this.salary = salary;
        }

        // getter and setter methods
        get name() { return this._name; }
        set name(name) {
            console.log("Setting: " + name);  // To see the execution process
            this._name = name;
        }

        //methid to return everything in string
        toString() {
            return "Id = " + this.id + ", Name = " + this.name + ", Salary = " + this.salary;
        }
    }

    // Object for class using parameterized conbstructor
    let empPayroll = new EmployeePayroll(1, "Mark", 30000);
    console.log(empPayroll.toString());
    // setting values to the properties of class
    empPayroll.id = 2;
    empPayroll.name = "Shubham";
    empPayroll.salary = 50000;
    console.log(empPayroll.toString());
}

// UC 13: Ability to extend Employee Payroll Data to store gender and start date

{
    console.log("\n*** UC13 ***");
    class EmployeePayroll
    {
        //properties of class
        id;
        salary;
        gender;
        startDate;
    
        //defining constructor of class using constructor keeyword
        constructor(...params)
        {
            this.id = params[0];
            this.name = params[1];
            this.salary = params[2];
            this.gender = params[3];
            this.startDate = params[4];
        }
    
        // getter and setter methods
        get id() { return this._id; }
        set id(id){ this._id = id; }
        get name() { return this._name; }
        set name(name) { this._name = name; }
        get salary() { return this._salary; }
        set salary(salary) { this._salary = salary; }
        
        //methid to return everything in string
        toString() {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const empDate = this.startDate === undefined ? "undefined" :
                            this.startDate.toLocaleDateString("en-US", options);
            return "Id = " + this.id + ", Name = " + this.name + ", Salary = " + this.salary + ", " +
            "Gender = " + this.gender + ", StartDate = " + empDate;
        }
    }
    
    // Object for class using parameterized conbstructor
    let empPayroll = new EmployeePayroll(1, "Mark", 30000);
    console.log(empPayroll.toString());
    // setting values to the properties of class
    empPayroll.id=2;
    empPayroll.name = "Shubham";
    console.log(empPayroll.toString());
    let newEmployeePayroll = new EmployeePayroll(1, "Ram", 40000, "M", new Date());
    console.log(newEmployeePayroll.toString());
}


/