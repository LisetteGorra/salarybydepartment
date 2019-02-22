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
    
    for (var i = 0; i < deptDataArray.length; i++){
        // populate single-d arrays with DATA
        departmentID.push(deptDataArray[i].slice(2,6));
        departments.push(deptDataArray[i].slice(9,-3));
        
        // populate multi-d arrays with empty sub-arrays (NO DATA!!!)
        employeeID.push([]);
        employeeName.push([]);
        salaries.push([]);
        
    }
    // console.log(departmentID);
    // console.log(departments);
    // console.log(employeeID);
    // console.log(employeeName);
    // console.log(salaries);
    
});

//Process 'employeedepartments.txt' file 

fs.readFile('employeedepartments.txt', 'utf8', function(error, data){
    if (error) throw error;
    
    var cleanEmployeeData = data.replace(/INSERT INTO `departments` Values /g, "");
    var employeeDataArray = cleanEmployeeData.split('\n');
    
    for (var i = 0; i < employeeDataArray.length; i++){
        if (employeeDataArray[i].slice(29,33) == '9999'){
            
            
            // console.log(employeeDataArray[i].slice(9,13));
            // console.log(employeeDataArray[i].slice(2,7));
            
         employeeID[departmentID.indexOf(employeeDataArray[i].slice(9,13))].push(employeeDataArray[i].slice(2,7));
        }
    }
    // console.log(employeeID);
    
});


//Process 'salaries.txt' file 

fs.readFile('salaries.txt', 'utf8', function(error, data){
    if (error) throw error;
    
    var cleanSalaryData = data.replace(/INSERT INTO `departments` Values /g, "");
    var salaryArray = cleanSalaryData.split('\n');
    
    for (var i = 0; i < salaryArray.length; i++){
        if(salaries.push(salaryArray[i].slice(27,31) == '9999')){
            
   
        salaries.push(salaryArray[i].slice(27,31) == '9999');
    

//  console.log(salaryArray[i]);
   }
    console.log(salaries);
}
    

})