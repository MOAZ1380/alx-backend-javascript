// 0-get_list_students.js


function getListStudents (){
    return [
        
            {id: 1, firstName : "Guillaume", location: "San Francisco"},
            {id: 2, firstName : "James", location : "Columbia"},
            {id: 5, firstName : "Serena", location : "San Francisco"}
    ]
} 



console.log(getListStudents());


// 1-get_list_student_ids.js

function getListStudentIds(a){
    if(!Array.isArray(a)){
        return [];
    }
    my_arr = []
    let add = a.map((element) => my_arr.push(element.id))
    return my_arr;
}




console.log(getListStudentIds("hello"));
console.log(getListStudentIds(getListStudents()));










// 2-get_students_by_loc.js

function getStudentsByLocation(obj_arr, city){
    let fil = obj_arr.filter((element) => {
        return element.location == city;
    })
    return fil
}


const students = getListStudents();

console.log(getStudentsByLocation(students, 'San Francisco'));



// 3-get_ids_sum.js



function getStudentIdsSum (students){
    let add = students.reduce((accumelate , current) => {
        return accumelate + current.id;
    },0);
    return add
} 

const students = getListStudents();
const value = getStudentIdsSum(students);

console.log(value);



// 4-update_grade_by_city.js

function updateStudentGradeByCity(students, city, newGrades) {
    return students
      .filter(({ location }) => location === city)
      .map((student) => {
        const newGrade = newGrades.find(({ studentId }) => studentId === student.id);
        return {
          ...student,
          grade: newGrade ? newGrade.grade : 'N/A',
        };
      });
  }


console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }]));


// 5-typed_arrays.js

function createInt8TypedArray(){

}



console.log(createInt8TypedArray(10, 2, 89));


// 6-set.js



function setFromArray(arr){
    return new Set(arr);
}

console.log(setFromArray([12, 32, 15, 78, 98, 15]));



// 7-has_array_values.js

function hasValuesFromArray(my_set, arr){
    return arr.every(element => {
        return my_set.has(element);
    });
}

console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10]));



// 8-clean_set.js


// (['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));  // in
// jovi-aparte-appetit  // out

function cleanSet(set, startString) {
    if (!startString || typeof startString !== 'string') {
    return '';
    }
    let x = [];
    let a = set.forEach(element => {
        if (element.startsWith(startString) ){
            x.push(element.slice(startString.length));
        }
    });
    return x.join("-");
    // let res;
    // if (!startString || typeof startString !== 'string') {
    // return '';
    // }
    // res = Array.from(set).filter((word) => typeof word === 'string' && word.startsWith(startString));
    // res = res.map((word) => word.slice(startString.length));
    // return res.join('-');
}





console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));




// 9-groceries_list.js


function groceriesList(){
    return new Map([
        ["Apples" , 10],
        ["Tomatoes" , 10],
        ["Pasta" , 1],
        ["Rice" , 1],
        ["Banana" ,  5]
    ]);
}
console.log(groceriesList());



// 10-update_uniq_items.js\


function updateUniqueItems(map){
    for(let [key, value] of map){
        if (value === 1) {
            map.set(key, 100);
        }
    }
    return map;
    
}

const map = groceriesList();
console.log(map);

updateUniqueItems(map)
console.log(map);



// 100-weak.js















