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
            
            
            // console.log(employeeDataArray[i].slice(9,13));
            // console.log(employeeDataArray[i].slice(2,7));
            
         employeeID[departmentID.indexOf(employeeDataArray[i].slice(9,13))].push(employeeDataArray[i].slice(2,7));
        }
    }
    console.log(employeeID);
    
});


//Process 'employees.txt' file 

fs.readFile('employees.txt', 'utf8', function(error, data){
    if (error) throw error;
    
      
    var cleanNameData = data.replace(/INSERT INTO `departments` Values /g, "");
    var nameDataArray = cleanNameData.split('\n');
    
    for (var i = 0; i < nameDataArray.length; i++ ) {
        
       var nameSplit = nameDataArray[i].split(',');
       var nameSplitID = nameSplit[0].replace(/\(/g, "");
        
        // console.log("nameSplit");
        // console.log(nameSplit);
        
        //console.log("nameSplitID");
        //console.log(nameSplitID);
         
        //console.log("nameSplit[2]");
        //console.log(nameSplit[2]);
        
        for (var j = 0; j < employeeID.length; j++) {
            
            for (var k = 0; k < employeeID[j]; k++) {
                
                if(employeeID[j][k] == nameSplitID) {
                    
                   var joinedNames = nameSplit[2].replace(/'/g, "") + " " + nameSplit[3].replace(/'/g, " ");
                    
                    employeeName[j].push(joinedNames);
                    
                }
            }
        }
    }
   
    //console.log("employeeName");
    //console.log(employeeName);
    
    //console.log(employeeName[0][0]);
    
});