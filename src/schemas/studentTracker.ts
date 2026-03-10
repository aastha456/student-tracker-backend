import { z } from "zod";

export const createStudentSchema = z.object({
    name: z.string().min(1, "Name is required"),
    grade: z.string().min(1, "Grade is required"),
    phoneNumber: z.string().min(1, "Phone number is required"),
    rollNumber: z.number().int().positive("Roll number must be a positive integer"),
    gender: z.enum(["Male", "Female", "Other"], "Gender must be either male or female or other")
})

export const fetchIdParamSchema = z.object({
    id: z.string().uuid("Invalid ID format")
})

export const fetchAllQuerySchema = z.object({
    gender: z.enum(["Male", "Female", "Other"]).optional()
})