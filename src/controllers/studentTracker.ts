import {Request, Response, NextFunction} from 'express';
import * as studentTrackerService from '../services/studentTracker';

export const fetchAll = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const response = await studentTrackerService.fetchAll(req.query);
        res.status(200).json({
            data: response
        })
    }
    catch (error){
        next(error);

    }

}

export const createStudent = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const data = req.body;
        const response = await studentTrackerService.create(data);
        res.status(201).json({
            data: response
        })

    } catch(error){
        next(error)
    }
}

export const fetchStudentById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const id = req.params.id;
        const response = await studentTrackerService.fetchStudentById(String(id));
        res.status(200).json({
            data: response
        });
    }
    catch (error){
       next(error);
    }
}