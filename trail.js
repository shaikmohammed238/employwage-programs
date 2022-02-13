   /* const IS_PARTIME=1;
    const IS_FULLTIME=2;
    const PART_TIM_HOURS=4;
    const FULLTIME_HOURS=8;
    const WAGE_PER_HOUR=20;
    let EMPHRS=0;
    let empcheck = Math.floor(Math.random ()*10)%3;
    switch (empcheck){
        case IS_PARTIME:
                EMPHRS=PART_TIM_HOURS;
            break;
        case IS_FULLTIME:
                EMPHRS=FULLTIME_HOURS;
                break;
         default:
                EMPHRS=0;
    } 
    let EMPWAGE=EMPHRS*WAGE_PER_HOUR;
    console.log(empcheck);*/
    // array practice
    let oridogs =["BULLDOG","Beagle","labrador"];
    let cats = new Array("americalcurl","bengal");
    let birds = new Array("falcons","ducks","flamegieos");
    // array copyn elements
    let sliceddogs =oridogs.slice(1,2);
    let copydogs = [...oridogs];
    let dogs = oridogs.slice(0);
    //stack functions lifo push pop
    let pushDog = dogs.push("goldenreatriver");
    let popDog = dogs.pop();
    dogs[dogs.length]="poodle";
    //add and remove from first
    let addFirst = dogs.unshift("goldenreatriver");
    let shiftDog = dogs.shift();
    //atomic add and remove elements(where how many to remove,element list)
    dogs.splice(2,1,"pug","Boxer");
    //array function - concat ,slice and sort
    let animals = dogs.concat(cats,birds);
    let newanimal = [...dogs,...cats,...birds].toString();
    let sortDog = dogs.slice(0).sort();
    function scanArray([first, second]) { console.log("scan: "+first +""+second); }
    scanArray(animals);
    let joinanimals = animals.join(" ");
    let allAnimals = " ";
    for (let animal of animals) allAnimals += animal+ " ";

    console.log("Animals :"+ allAnimals)
    
