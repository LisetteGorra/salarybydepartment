var fs = require('fs');

//Step1. Create all single-d and multi-d arrays AS empty arrays (initially)
//Push single string data/elememts into an array as a single element 
//Push array data into an array to form multi-d arrays

//singe-d arrays -- vaild
var departmentID = []; //done 
var departments = []; //done

//multi-d arrays -- currently invalid 
var employeeID = []; 
var employeeName = [];
var salaries = [];

//Process 'departments.txt' file 

fs.readFile('departments.txt', 'utf8', function(error, data){
    if(error) throw error;
  
    
    var cleanDeptData = data.replace(/INSERT INTO `departments` Values /g, "");
    var deptDataArray = cleanDeptData.split('\n');
    
    for (var i = 0; i < deptDataArray.length; i++){ // curly braces create a code block 
        // populate single-d arrays with DATA
        departmentID.push(deptDataArray[i].slice(2,6));
        departments.push(deptDataArray[i].slice(9,-3));
        
        // populate multi-d arrays with empty sub-arrays (NO DATA!!!)
        employeeID.push([]);
        employeeName.push([]);
        salaries.push([]);
        
    }
    console.log(departmentID);
    console.log(departments);
    console.log(employeeID);
    console.log(employeeName);
    console.log(salaries);
    
});

//Process 'employeedepartments.txt' file 

fs.readFile('employeedepartments.txt', 'utf8', function(error, data){
    if (error) throw error;
    
    var cleanEmployeeData = data.replace(/INSERT INTO `departments` Values /g, "");
    var employeeDataArray = cleanEmployeeData.split('\n');
    
    for (var i = 0; i < employeeDataArray.length; i++){
        if (employeeDataArray[i].slice(29,33) == '9999'){
            
            
            
            console.log(employeeDataArray[i].slice(9,13));
            console.log(employeeDataArray[i].slice(2,7));
            
        //  employeeID[departmentID.indexOf(employeeDataArray[i].slice(9,13))].push(employeeDataArray[i].slice(2,7));
         }
    }
    console.log(employeeID);
    
});


//Process 'salaries.txt' file 

fs.readFile('salaries.txt', 'utf8', function(error, data){
    if (error) throw error;
    

    var cleanSalaryData = data.replace(/INSERT INTO `departments` Values /g, "");
    var salaryDataArray = cleanSalaryData.split('\n');

    for (var i = 0; i < salaryDataArray.length; i++){ 
      //if(salaryDataArray[0].slice(1987) == '9999'){ false
        if(salaryDataArray[i].slice(27,31) == '9999'){ 
           
            // console.log("Salary empId:",salaryDataArray[i].slice(1,6));
            
            for(var j = 0; j < employeeID.length; j++ ){  // LOOPS through 20 employee id's in the employeeID sub arrays
                
                for(var k = 0; k < employeeID[j].length; k++){ // LOOPS through the sub arrays individual items
                  
                  
                    // console.log(employeeID[j][k]);
                    if(employeeID[j][k] == salaryDataArray[i].slice(1,6)) {
                        
                        salaries[j].push(salaryDataArray[i].slice(7,12));
                        
                        salaries[employeeID.indexOf(salaryDataArray[i].slice(1,6))].push(salaryDataArray[i].slice(7,12));
                        
                    }
                

                        // console.log("!!!!Match!!!");
                }
            }
        }
            //  console.log(salaryDataArray[i].slice(1,6));
             }
       
        

});


//Process 'employees.txt' file 

fs.readFile('employees.txt', 'utf8', function(error, data){
    if (error) throw error;
    
      
    var cleanNameData = data.replace(/INSERT INTO `departments` Values /g, "");
    var employeeNameDataArray = cleanNameData.split('\n');
    
    for (var i = 0; i < employeeNameDataArray.length; i++ ) {
       employeeNameDataArray[i].slice(21, -20);
  
        
        for (var j = 0; j < employeeID.length; j++) {
            
            for (var k = 0; k < employeeID[j].length; k++) {
               
                if(employeeNameDataArray[i].slice(1, 6) == employeeID[j][k]) {
                    
                    employeeName[j][k] = employeeNameDataArray[i].slice(21,-20).split(",").reverse().join(" ").replace(/'/g, "");
                    
                }
               
            }
        }
    }
    

    
//   console.log(employeeName);
    
});

