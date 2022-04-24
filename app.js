// - Create a Student Array Data Structure ( name, roll, age, class, gender, location, Admission fees ) 30.  now create a console data table with

const students = [
  ["Mahdi", 1, 12, "Five", "Male", "Narayanganj", 500, "A+"],
  ["Shumi", 2, 14, "Eight", "Female", "Mirpur", 800, "B+"],
  ["Kona", 3, 19, "SSC", "Female", "Jatrabari", 1000, "A"],
  ["Jahid", 4, 12, "Five", "Male", "Mirpur", 500, "A"],
  ["Azmin", 5, 19, "SSC", "Male", "Uttara", 1000, "D"],
  ["Rana", 6, 14, "Eight", "Male", "Banani", 800, "B"],
  ["Rupa", 7, 14, "Eight", "Female", "Banani", 800, "B+"],
  ["Ranu", 8, 19, "SSC", "Female", "Uttara", 1000, "A-"],
  ["Akram", 9, 19, "SSC", "Male", "Jatrabari", 1000, "A+"],
  ["Bithy", 10, 12, "Five", "Female", "Narayanganj", 500, "A"],
  ["Rahim", 1, 12, "Five", "Male", "Narayanganj", 500, "A+"],
  ["Rabiya", 2, 14, "Eight", "Female", "Mirpur", 800, "B+"],
  ["Bushra", 3, 19, "SSC", "Female", "Jatrabari", 1000, "A"],
  ["Tipu", 4, 12, "Five", "Male", "Mirpur", 500, "A"],
  ["Azmin", 5, 19, "SSC", "Male", "Uttara", 1000, "D"],
  ["Rana", 6, 14, "Eight", "Male", "Banani", 800, "B"],
  ["Raha", 7, 14, "Eight", "Female", "Banani", 800, "B+"],
  ["Ranu", 8, 25, "SSC", "Female", "Uttara", 1000, "A-"],
  ["Akram", 9, 19, "SSC", "Male", "Jatrabari", 1000, "A+"],
  ["Sharna", 10, 12, "Five", "Female", "Narayanganj", 500, "A"],
  ["Mahdi", 1, 12, "Five", "Male", "Narayanganj", 500, "A+"],
  ["Shumi", 2, 14, "Eight", "Female", "Mirpur", 800, "B+"],
  ["Kona", 3, 19, "SSC", "Female", "Jatrabari", 1000, "A"],
  ["Jahid", 4, 12, "Five", "Male", "Mirpur", 500, "A"],
  ["Azmin", 5, 19, "SSC", "Male", "Uttara", 1000, "D"],
  ["Rana", 6, 14, "Eight", "Male", "Banani", 800, "B"],
  ["Rupa", 7, 14, "Eight", "Female", "Banani", 800, "B+"],
  ["Ranu", 8, 19, "SSC", "Female", "Uttara", 1000, "A-"],
  ["Akram", 9, 19, "SSC", "Male", "Jatrabari", 1000, "A+"],
  ["Bithy", 10, 12, "Five", "Female", "Narayanganj", 500, "A"],
];

//1 - Total Admnission fees
let totalAdmnissionFees = () => {
  let totalAmmount = 0;
  students.map((data) => {
    console.log(`
          Name    : ${data[0]}
          Rolll   : ${data[1]}
          Age     : ${data[2]}
          Class   : ${data[3]}
          Gender  : ${data[4]}
          Location    :  ${data[5]}
          Admission Fees  :   ${data[6]}
      `);
    totalAmmount += data[6];
  });
  console.log(`Total Admnission fees =  ${totalAmmount} `);
};
// totalAdmnissionFees();

//2 - Find All Female or Male Students
let findFemaleStudent = (gender) => {
  students.map((data) => {
    // - Find All Female Students
    if (data[4] == "Female" && gender == "Female") {
      console.log(`
              Name    : ${data[0]}
              Rolll   : ${data[1]}
              Age     : ${data[2]}
              Class   : ${data[3]}
              Gender  : ${data[4]}
              Location    :  ${data[5]}
              Admission Fees  :   ${data[6]}
        `);
    } else if (data[4] == "Male" && gender == "Male") {
      console.log(`
              Name    : ${data[0]}
              Rolll   : ${data[1]}
              Age     : ${data[2]}
              Class   : ${data[3]}
              Gender  : ${data[4]}
              Location    :  ${data[5]}
              Admission Fees  :   ${data[6]}
        `);
    }
  });
};
// Write the gender Female or Male to see all Female or Male students
//findFemaleStudent("Female");

//3 - Find class wise student result
let classWiseStudentResult = (className) => {
  students.map((data) => {
    if (data[3] == "Eight" && className == "Eight") {
      console.log(`
            Name    : ${data[0]}
            Rolll   : ${data[1]}
            Age     : ${data[2]}
            Class   : ${data[3]}
            Gender  : ${data[4]}
            Location    :  ${data[5]}
            Admission Fees  :   ${data[6]}
        `);
    } else if (data[3] == "SSC" && className == "SSC") {
      console.log(`
              Name    : ${data[0]}
              Rolll   : ${data[1]}
              Age     : ${data[2]}
              Class   : ${data[3]}
              Gender  : ${data[4]}
              Location    :  ${data[5]}
              Admission Fees  :   ${data[6]}
          `);
    } else if (data[3] == "Five" && className == "Five") {
      console.log(`
              Name    : ${data[0]}
              Rolll   : ${data[1]}
              Age     : ${data[2]}
              Class   : ${data[3]}
              Gender  : ${data[4]}
              Location    :  ${data[5]}
              Admission Fees  :   ${data[6]}
          `);
    }
  });
};
// Write the any of classs name from Five, Eight, SSC to see
//classWiseStudentResult("SSC");

//4 - Location wise student result
let locationWiseStudentResult = () => {
  students.map((data) => {
    if (data[5] == "Mirpur") {
      console.log(`
              Name    : ${data[0]}
              Rolll   : ${data[1]}
              Age     : ${data[2]}
              Class   : ${data[3]}
              Gender  : ${data[4]}
              Location    :  ${data[5]}
              Admission Fees  :   ${data[6]}
          `);
    }
  });
};
// locationWiseStudentResult();

//5 - find student between 10 - 25 age
let ageWiseStudent = () => {
  students.map((data) => {
    if (data[2] <= 25 && data[2] >= 10) {
      console.log(`
            Name    : ${data[0]}
            Rolll   : ${data[1]}
            Age     : ${data[2]}
            Class   : ${data[3]}
            Gender  : ${data[4]}
            Location    :  ${data[5]}
            Admission Fees  :   ${data[6]}
        `);
    }
  });
};
//ageWiseStudent();
