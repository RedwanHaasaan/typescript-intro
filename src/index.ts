//primitive data types= String,Number,Boolean,undefined,null,bigint
let name: string = "Redwan Hasan";
let age: number = 23;
let isStudent: boolean = true;
console.log(`My name is ${name}. I am ${age} years old`)
//array
const skills: string[] = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "NextJS"];
console.log("My Skills:",skills)
//object
const student:{fullName:string,studentID:number} ={
    fullName:"Redwan Hasan Avik",
    studentID:41240302424
}

//function
function getStudentInfo(name:string,id:number):string{
    return `${name}'s Student ID is ${id}`
}

console.log(getStudentInfo("Redwan Hasan Avik",41240302424))

//Type & Interfaces
type Student = {
  readonly id: string;
  fullName: string;
  fathersName: string;
  mothersName: string;
  readonly email: string;
  phone: string;
  dob: string;
  gender: "Male" | "Female" | "Other";
  address: {
    village: string;
    postOffice: string;
    upazila: string;
    district: string;
    country: string;
  };
  interests: string[];
  skills?: string[];
  education: {
    institution: string;
    degree: string;
    passingYear: number;
    cgpa?: number;
  };
  isActive: boolean;
};


const student1: Student = {
  id: "STD-001",
  fullName: "Redwan Hasan",
  fathersName: "MD.Nabbes Ali",
  mothersName: "Ruksana Akter",
  email: "redwanhasan.dev@gmail.com",
  phone: "+8801316997573",
  dob: "2003-03-07",

  gender: "Male",

  address: {
    village: "Chowrasta",
    postOffice: "Chandona",
    upazila: "Gazipur Shadar",
    district: "Gazipur",
    country: "Bangladesh",
  },

  interests: ["Programming", "Reading", "Gaming"],

  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
  ],

  education: {
    institution: "Northern University Bangladesh",
    degree: "BSc in CSE",
    passingYear: 2027,
  },

  isActive: true,
};

console.log("Student1 Profile:",student1)


//interface with extends
interface Person {
  fullName: string;
  age: number;
}

interface ContactInfo {
  email: string;
  phone: string;
}

interface student extends Person, ContactInfo {
  studentId: string;
}

const student2: student = {
  fullName: "Redwan Hasan",
  age: 22,
  email: "redwan@gmail.com",
  phone: "+8801316997573",
  studentId: "STD-001",
};

//generic example
interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}
interface User {
  name: string;
  email: string;
}

const users: ApiResponse<User[]> = {
  success: true,
  message: "Users fetched successfully",
  data: [
    {
      name: "Redwan",
      email: "redwan@gmail.com",
    },
  ],
};
console.log(users.data)