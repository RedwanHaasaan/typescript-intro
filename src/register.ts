import { registerSchema } from "./zod/register.schema";

const dummyData = {
  firstName: "Redwan",
  lastName: "Hasan",
  username: "redwan_01",
  email: "redwanhasan.dev@gmail.com",
  phone: "+8801316997573",
  age: 23,
  gender: "male",
  bio: "Passionate MERN Stack Developer with experience building scalable web applications.",
  password: "Password@123",
  confirmPassword: "Password@123",

  address: {
    street: "123 Gazipur Road",
    city: "Gazipur",
    state: "Dhaka",
    zipCode: "1700",
    country: "Bangladesh",
  },
  socialLinks: {
    github: "https://github.com/redwan",
    linkedin: "https://linkedin.com/in/redwan",
    portfolio: "https://redwan.dev",
  },

  skills: [
    "React",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
  ],
  education: [
    {
      institute: "Northern University Bangladesh",
      degree: "B.Sc. in Computer Science & Engineering",
      passingYear: 2026,
    },
    {
      institute: "Shafipur Ideal Public College",
      degree: "Higher Secondary Certificate",
      passingYear: 2023,
    },
  ],
  experience: [
    {
      company: "Rise Together",
      position: "Frontend Developer Intern",
      years: 1,
    },
    {
      company: "Freelance",
      position: "MERN Stack Developer",
      years: 2,
    },
  ],
  preferredRole: "Frontend",
  salaryExpectation: 25000,
  isRemote: true,
  languages: ["Bangla", "English","Hindi"],
  acceptTerms: true,
  newsletter: true,
};

const result = registerSchema.safeParse(dummyData)
console.log(result)