export const EMPLOYEES = [
  { name: "Niroj Shrestha", code: "017095" },
  { name: "Sures Guragai", code: "137364" },
  { name: "Indra Ghimire", code: "033997" },
  { name: "Ankit Gopal Jha", code: "041262" },
  { name: "Sameer Aitwal", code: "053241" },
  { name: "Binay Tuladhar", code: "069413" },
  { name: "Keshab Jhosi", code: "079054" },
  { name: "Pradip Raj Shrestha", code: "097668" },
  { name: "Niraj Maskey", code: "109508" },
  { name: "Susan Dongol", code: "116643" },
  { name: "Sunit Manandhar", code: "127171" },
  { name: "Drishya Chand", code: "138854" },
  { name: "Tuphan Kumar Rai", code: "148996" },
  { name: "Prakash Sthapit", code: "151852" },
  { name: "Rohit Fuwada", code: "163865" },
  { name: "Romi Deula", code: "174449" },
  { name: "Khadananda Dahal", code: "187572" },
  { name: "Karan Maharjan", code: "198714" },
  { name: "Kevin Maskey", code: "216306" },
  { name: "Hridishna Deula", code: "227498" },
  { name: "Shruti Jha", code: "231267" },
  { name: "Himal Adhikari", code: "244127" },
  { name: "Anjal Thapaliya", code: "256472" },
  { name: "Manisha Shrestha", code: "266051" },
  { name: "Sabin Ranjit", code: "272530" },
  { name: "Rupesh Tajpuriya", code: "287212" },
  { name: "Sandeep Chhetri", code: "296412" },
  { name: "Bijaya Aryal", code: "308211" },
  { name: "Sagar Shrestha", code: "338586" },
];

// Only these employees may access the Admin panel:
// Sandeep Chhetri (296412) and Niroj Shrestha (017095)
export const ADMIN_CODES = ["296412", "017095"];

export function isAdmin(employee) {
  return !!employee && ADMIN_CODES.includes(employee.code);
}

// Login accepts both raw "01 7095" style or normalized "017095"
export function findEmployee(inputCode) {
  const normalized = inputCode.replace(/[\s\-]/g, "");
  return EMPLOYEES.find(
    (e) => e.code === normalized || e.code.replace(/\D/g, "") === normalized.replace(/\D/g, "")
  ) || null;
}
