start off with 4 data files 

then add a js file to run your code and console log 
- 1st thing we need to is require the file system

var fs = require('fs');

//Step1. Create all single-d and multi-d arrays AS empty arrays (initially)
//Push single string data/elememts into an array as a single element 
//Push array data into an array to form multi-d arrays

next create a template for all of the arrays 

    //singe-d arrays
    var departmentID = [];
    var departmentID = [];
    var departmentID = [];


    //multi-d arrays
    var departmentID = [];
    var departmentID = [];
    var departmentID = [];

-------------------------------------------------------------------------------
now you can populate with the correct variable names

 //singe-d arrays
    var departmentID = [];
    var departments = [];



    //multi-d arrays
    var employeeID = [];
    var employeeName = [];
    var salaries = [];
-------------------------------------------------------------------------------
- next we start with the simplest text file which is the department.txt file, it only lists the department names and codes, it governs all the other txt files 
- we need to create an fs readFile for departments.txt and then console log the data to make sure everything works 


fs.readFile('departments.txt', 'utf8', function(error, data){
    if(error) throw error
    
    console.log(data);
})
-------------------------------------------------------------------------------
- next we are going to clean the data and get rid of any strings we will not need
- then console log it to make sure it returns the cleaned data 


  var cleanDeptData = data.replace(/INSERT INTO `departments` Values /g, "");
    console.log(cleanDeptData);
})

-------------------------------------------------------------------------------
- now we can split the data and turn it into arrays 
- and console log to make sure it works


    var cleanDeptData = data.replace(/INSERT INTO `departments` Values /g, "");
    var deptDataArray = cleanDeptData.split('\n');
    console.log(deptDataArray);
- returns the data into 1 large array, with several indexes
 
------------------------------------------------------------------------------

- our next step is to populate our arrays 
- the department id will go into one array and the department names will go into another array 
- we will use a for loop to do this 
- then console log the array var departmentID to make sure it populates


  
    for (var i = 0; i < deptDataArray.length; i++){
        departmentID.push(deptDataArray[i].slice(2,6));
    }
    console.log(departmentID);

-------------------------------------------------------------------------------
- next store the names into an array but count backwards since the lengths are different, they all have -3 characters


 departments.push(deptDataArray[i].slice(9,-3))
-------------------------------------------------------------------------------
total for loop 
   for (var i = 0; i < deptDataArray.length; i++){
        departmentID.push(deptDataArray[i].slice(2,6));
        departments.push(deptDataArray[i].slice(9,-3))
    }
    console.log(departmentID);
})
-------------------------------------------------------------------------------
- now we have to create the multi dimensional arrays 
- we have to make sub arrays because the original arrays arenot valid, the are still single-d and we need multi-d

 // populate multi-d arrays with empty sub-arrays (NO DATA!!!)
        employeeID.push([]);
        employeeName.push([]);
        salaries.push([]);
- now we have created sub arrays for the arrays: 
//multi-d arrays -- currently invalid 
var employeeID = []; 
var employeeName = [];
var salaries = [];
- to make them valid
 
- this is done within the for loop, so that it can push 9 empty sub arrays into the original array variables


-------------------------------------------------------------------------------
- now we can console log everything 
- we do this sub array code so that we can populate no matter how many departments get added in the future

-------------------------------------------------------------------------------
- now we are going to process the department employee file


//Process 'employeedepartments.txt' file 

fs.readFile('employeedepartments.txt', 'utf8', function(error, data){
    if(error) throw error;

-------------------------------------------------------------------------------
- clean the data like last time 

  var cleanEmployeeData = data.replace(/INSERT INTO `departments` Values /g, "");
  var employeeDataArray = cleanEmployeeData.split('\n'); << splits data at every end on line character

- and console log the code to make sure it works 

console.log(employeeDataArray);
-------------------------------------------------------------------------------
 - now we have created arrays out of the data and cleaned, now we need to iterate through them 
 - create a for loop 
 - make sure it has an if statement that will extract the code with 9999 to get current salary lines
 

  for (var i = 0; i < employeeDataArray.length; i++){
        if (employeeDataArray[i].slice(29,33) == '9999'){
            
-------------------------------------------------------------------------------
now we want to store the info into a sub array using a complex code 

   employeeID[departmentID.indexOf(employeeDataArray[i].slice(7,11))].push(employeeDataArray[i].slice(2,6));
   
-------------------------------------------------------------------------------
for loop in full 

for (var i = 0; i < employeeDataArray.length; i++){
        if (employeeDataArray[i].slice(28,32) == '9999'){
            employeeID[departmentID.indexOf(employeeDataArray[i].slice(7,11))].push(employeeDataArray[i].slice(2,6));
        }
    }
    
-------------------------------------------------------------------------------
salaries

fs.readFile('salaries.txt', 'utf8', function(error, data){
    if (error) throw error;
    
    var cleanSalaryData = data.replace(/INSERT INTO `departments` Values /g, "");
    var salaryDataArray = cleanSalaryData.split('\n');
    
    for (var i = 0; i < salaryDataArray.length; i++){
        if(salaryDataArray[i].slice(27,31) == '9999'){
            
         salaries.push(salaryDataArray[i].slice(1,6)); //ID
         salaries.push(salaryDataArray[i].slice(7,12)); // current salaries
         
    
    
   }
    console.log();
}
    

})
-------------------------------------------------------------------------------
- now we need to create a new for loop to in order to loop within the  2 elements that are equal to '9999'

for (var i = 0; i < salaryDataArray.length; i++){
        if(salaryDataArray[i].slice(27,31) == '9999'){
            for(var j = 0; j < employeeID.length; j++ ){
- j will give you access to all elements withing the sub array
-------------------------------------------------------------------------------
- and now we need another for loop to loop through 

 for(var k = 0; k < employeeID[j].length; k++)
- this will give you access to the 1st element withing the sub array
 

-------------------------------------------------------------------------------
- an if statement will help you loop through every element in each sub array 

 if(salaryDataArray[i].slice(1,6) == employeeID[j][k]){  
 
-------------------------------------------------------------------------------

    for (var i = 0; i < salaryDataArray.length; i++){ // this give you all the array info, with all elements
        if(salaryDataArray[i].slice(27,31) == '9999'){ // this gives you the elements that are equal to 9999
            for(var j = 0; j < employeeID.length; j++ ){ // this gives you access to the sub arrays in the array salaryDataArray
                for(var k = 0; k < employeeID[j].length; k++){ // this give you access to the 1st element of the sub array within salaryDataArray 
                    if(salaryDataArray[i].slice(1,6) == employeeID[j][k]){ 
                        // index 16 line 17 
                }
-------------------------------------------------------------------------------
- console log all your work


  for (var i = 0; i < salaryDataArray.length; i++){ // this give you all the array info, with all elements
        if(salaryDataArray[i].slice(27,31) == '9999'){ // this gives you the elements that are equal to 9999
            for(var j = 0; j < employeeID.length; j++ ){ // this gives you access to the sub arrays in the array salaryDataArray
                for(var k = 0; k < employeeID[j].length; k++){ // this give you access to the 1st element of the sub array within salaryDataArray 
                   console.log("Salary empId:",salaryDataArray[i].slice(1,6));
                   console.log(employeeID[j][k]);
                   
                    if(salaryDataArray[i].slice(1,6) == employeeID[j][k]){ 
                    console.log("!!!!Match!!!");
                }
                console.log(salaryDataArray[i].slice(1,6));
            }
-------------------------------------------------------------------------------

