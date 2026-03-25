import { Student, StudentRequest, Gender} from "../interfaces/studentTracker";
import mongoose, { Document, Schema } from "mongoose";

export interface IStudent extends Student, Document {}

const GenderValues: Gender[] = ['Male', 'Female', 'Other'];

const studentSchema = new Schema<IStudent>({
    name: { type: String, required: true },
    grade: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    rollNumber: { type: Number, required: true },
    gender: {type: String, enum: GenderValues, required: true},
    photo: { type: String }
},
{
    timestamps: true
});

const StudentModel = mongoose.model<IStudent>('Student', studentSchema);

export default StudentModel;


