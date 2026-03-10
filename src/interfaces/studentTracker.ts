export type Gender = "Male" | "Female" | "Other";

export interface Student {
    id: string,
    name: string;
    grade: string;
    phoneNumber: string;
    rollNumber: number;
    gender: Gender;
    photo?: string;
}

export interface StudentRequest extends Omit<Student, "id"> {}