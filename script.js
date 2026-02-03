let students = [
    { id: 1, name: "Mugisha Yvan", age: 18, gender: "male", grade: 11 },
    { id: 2, name: "Shimwa Jane", age: 17, gender: "female", grade: 10 },
    { id: 3, name: "Manzi Smith", age: 19, gender: "male", grade: 11 }
];

// --- 1. CREATE: Add a Student --- [cite: 25]
function addStudent(name, age, gender, grade) {
  
    if (!name || name === "") {
        console.log("Error: Name must not be empty.");
        return;
    }
    if (typeof age !== "number" || age <= 0) {
        console.log("Error: Age must be a number greater than 0.");
        return;
    }
    if (gender !== "male" && gender !== "female") {
        console.log("Error: Gender must be 'male' or 'female'.");
        return;
    }
    if (typeof grade !== "number") {
        console.log("Error: Grade must be a number.");
        return;
    }
    // Check for duplicate names
    const exists = students.some(student => student.name === name);
    if (exists) {
        console.log("Error: Student with this name already exists.");
        return;
    }

    // Auto-generate ID (taking the highest ID + 1)
    const newId = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;

    const newStudent = { id: newId, name, age, gender, grade };
    students.push(newStudent);
    console.log(`Success: Added ${name}`);
}

// --- 2. READ: Get Students --- [cite: 35]
// a) Get all students
function getStudents() {
    return students;
}

// b) Get student by id [cite: 40]
function getStudentById(id) {
    const student = students.find(s => s.id === id);
    if (student) {
        return student;
    } else {
        console.log("Student not found"); // [cite: 45]
        return null;
    }
}

// --- 3. UPDATE: Update a Student --- [cite: 46]
function updateStudent(id, newName, newAge, newGender, newGrade) {
    const student = students.find(s => s.id === id);

    // Validations [cite: 50-54]
    if (!student) {
        console.log("Error: Student not found.");
        return;
    }
    if (typeof newAge !== "number" || newAge <= 0) {
        console.log("Error: Age must be valid.");
        return;
    }
    if (newGender !== "male" && newGender !== "female") {
        console.log("Error: Gender must be 'male' or 'female'.");
        return;
    }

    // Update properties (ID remains unchanged)
    student.name = newName;
    student.age = newAge;
    student.gender = newGender;
    student.grade = newGrade;
    console.log(`Success: Updated student ID ${id}`);
}

// --- 4. DELETE: Delete a Student --- [cite: 55]
function deleteStudent(id) {
    const initialLength = students.length;
    // Filter out the student with the matching ID
    students = students.filter(s => s.id !== id);
    
    if (students.length < initialLength) {
        console.log(`Success: Student with ID ${id} deleted.`); // [cite: 59]
    } else {
        console.log(`Error: Student with ID ${id} not found.`);
    }
}

// --- 5. FILTER & SORT TASKS --- [cite: 60]

// a) Filter male students [cite: 61]
function getMaleStudents() {
    return students.filter(student => student.gender === "male");
}

// b) Sort students by name (A-Z) [cite: 65]
function sortStudentsByName() {
    // Create a copy to sort so we don't mess up the original order permanently
    return [...students].sort((a, b) => a.name.localeCompare(b.name));
}

// c) Show the oldest student [cite: 69]
function getOldestStudent() {
    // Use reduce to find the max age
    return students.reduce((oldest, current) => {
        return (current.age > oldest.age) ? current : oldest;
    }, students[0]);
}

// d) Count total number of students in Grade 11 [cite: 73]
function countGrade11Students() {
    return students.filter(student => student.grade === 11).length;
}


// --- TESTING THE FUNCTIONS (Console Logs) --- [cite: 14]
console.log("--- Initial Students ---");
console.log(getStudents());

console.log("\n--- 1. Adding Students ---");
addStudent("Keza Sarah", 16, "female", 10); // Valid
addStudent("", 18, "male", 12); // Invalid (empty name)
addStudent("Mugisha Yvan", 20, "male", 12); // Invalid (duplicate)

console.log("\n--- 2. Get Student by ID ---");
console.log(getStudentById(1)); // Found
getStudentById(99); // Not found

console.log("\n--- 3. Update Student ---");
updateStudent(1, "Mugisha Yvan Updated", 19, "male", 12);
console.log(getStudentById(1));

console.log("\n--- 4. Delete Student ---");
deleteStudent(2); // Deleting Shimwa Jane
console.log(getStudents());

console.log("\n--- 5a. Male Students ---");
console.log(getMaleStudents());

console.log("\n--- 5b. Sorted by Name ---");
console.log(sortStudentsByName());

console.log("\n--- 5c. Oldest Student ---");
console.log(getOldestStudent());

console.log("\n--- 5d. Count Grade 11 Students ---");
console.log("Total in Grade 11: " + countGrade11Students());