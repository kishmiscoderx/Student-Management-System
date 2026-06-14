let students = [];
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
btn1.addEventListener("click",()=>{
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let marks = document.getElementById('marks').value;
    if(name.length  === 0 || age == "" || marks.length === 0){
        alert("Please Enter Valid Student!");
        return ;
    } 

    let splitMarks = marks.split(",");
    let number = splitMarks.map(Number);
    let totalMarks = number.reduce((sum,m)=>{
        return sum + m
    },0);
    let average = totalMarks/number.length;
    let grade = "";
    if (average >= 85){
        grade = "A";
    } else if (average >= 70){
        grade = "B";
    }else if (average >= 50) {
        grade = "C";
    }else {
        grade = "D";
    }
    let student = {
        name: name,
        age: age,
        total: totalMarks,
        average: average.toFixed(2),
        grade: grade,
    }
    students.push(student);
    alert("Student " + name + " added Successfully");
    document.getElementById('name').value = "";
    document.getElementById('age').value = "";
    document.getElementById('marks').value = "";

    let noStudentMsg = document.getElementById("noStudent");
    if (noStudentMsg) {
    noStudentMsg.remove();
    }
});
btn2.addEventListener("click", () => {
    let list = document.getElementById("added_student");

    if (students.length === 0) {
        alert("No students to display!");
        return;
    }
    list.innerHTML = "";
    students.forEach((s, index) => {
        let li = document.createElement("li");
        li.textContent =
            (index + 1) +
            ". Name: " + s.name +
            ", Age: " + s.age +
            ", Total: " + s.total +
            ", Average: " + s.average +
            ", Grade: " + s.grade;
        list.appendChild(li);
    });
});

btn3.addEventListener("click",()=>{
    if(students.length === 0){
        alert("No student available!");
        return ;
    }
    let TotalSum = students.reduce((sum,s)=>{
        return sum + s.total;
    },0);
    let TotalAverage = TotalSum/students.length;
    alert("Total Average of the Students: " + TotalAverage.toFixed(2));
});
