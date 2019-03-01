var fs = require('fs');

//single-d array - valid
var departmentID = [];
var departments = [];

// multi-d arrays - not valid need to push sub arrays inside
var employeeID = [];
var employeeName = [];
var salaries = [];

//Proccess 'departments.txt' file

fs.readFile('departments.txt', 'utf8', function(error, data){
    if (error) throw error;
    
    var cleanDeptData = data.replace(/INSERT INTO `departments` Values /g, "");
    var deptDataArray = cleanDeptData.split('\n');
   
   for(var i = 0; i < deptDataArray.length; i++){
       //populate single-d arrays
       departmentID.push(deptDataArray[i].slice(2,6));
       departments.push(deptDataArray[i].slice(9,-3));
       //populate multi-d arrays 
       employeeID.push([]);
       employeeName.push([]);
       salaries.push([]);
       
       
   }
   console.log(salaries);
//   console.log(departments);
  
   
})