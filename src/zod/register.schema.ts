import zod from "zod";

export const registerSchema = zod
  .object({
    firstName: zod.string()
      .min(2, "First name must be at least 2 characters")
      .max(30, "First name cannot exceed 30 characters"),

    lastName: zod.string()
      .min(2, "Last name must be at least 2 characters")
      .max(30, "Last name cannot exceed 30 characters"),

    username: zod.string()
      .min(4)
      .max(20)
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username can contain only letters, numbers and underscore",
      ),

    email: zod.email("Invalid email address"),

    phone: zod
      .string()
      .regex(/^(\+8801|01)[3-9]\d{8}$/, "Invalid Bangladeshi phone number"),

    age: zod.number().min(18, "Minimum age is 18").max(60),

    gender: zod.enum(["male", "female", "other"]),

    bio: zod.string().min(20).max(300).optional(),
    password: zod
      .string()
      .min(8)
      .regex(/[A-Z]/, "Must contain one uppercase letter")
      .regex(/[a-z]/, "Must contain one lowercase letter")
      .regex(/[0-9]/, "Must contain one number")
      .regex(/[!@#$%^&*]/, "Must contain one special character"),

    confirmPassword: zod.string(),
    address: zod.object({
      street: zod.string().min(5),
      city: zod.string().min(2),
      state: zod.string().min(2),
      zipCode: zod.string().regex(/^\d{4}$/, "Zip code must be 4 digits"),
      country: zod.string(),
    }),
    socialLinks: zod.object({
      github: zod.url("Invalid Github URL").optional().refine((url)=>url?.includes("github.com"),{message: "GitHub URL must contain github.com"}),
      linkedin: zod.url("Invalid LinkedIn URL").optional().refine((url)=>url?.includes("linkedin.com"),{message: "LinkedIn URL must contain linkedin.com"}),
      portfolio: zod.url("Invalid Portfolio URL").optional(),
    }),
    skills: zod
      .array(zod.string().min(2))
      .min(1, "Select at least one skill")
      .max(10,"You can add maximum 10 skills"),
    education: zod.array(
      zod.object({
        institute: zod.string(),
        degree: zod.string(),
        passingYear: zod.number().min(2000).max(new Date().getFullYear()),
      }),
    ),
    experience: zod.array(
      zod.object({
        company: zod.string(),
        position: zod.string(),
        years: zod.number().min(0).max(30),
      }),
    ),
    preferredRole: zod.enum(["Frontend", "Backend", "Full Stack", "DevOps"]),
    salaryExpectation: zod.number().positive(),
    isRemote: zod.boolean(),
    languages: zod.array(zod.enum(["Bangla", "English", "Hindi"])).min(1),
    acceptTerms: zod.boolean(),
    newsletter: zod.boolean().default(false),
  }).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  }).superRefine((data, ctx) => {
  if (!data.acceptTerms) {
    ctx.addIssue({
      code: "custom",
      path: ["acceptTerms"],
      message: "You must accept the terms and conditions.",
      input: data.acceptTerms,
    });
  }

  if (
    data.preferredRole === "Frontend" &&
    !data.skills.includes("React")
  ) {
    ctx.addIssue({
      code: "custom",
      path: ["skills"],
      message: "Frontend developers should know React.",
      input: data.skills,
    });
  }

  if (
    data.preferredRole === "Backend" &&
    !data.skills.includes("Node.js")
  ) {
    ctx.addIssue({
      code: "custom",
      path: ["skills"],
      message: "Backend developers should know Node.js.",
      input: data.skills,
    });
  }
});

  //convert to typescript
export type RegisterFormData = zod.infer<typeof registerSchema>;
