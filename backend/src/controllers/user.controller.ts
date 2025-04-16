import * as userService from '../services/user.service';
import { Request, Response, NextFunction } from 'express';

export const getUsers = async (_req :Request, res: Response, next:NextFunction) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    next(error)
  }
}

export const createUser = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error)
  }
}
export const updateUser = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    res.status(200).json(user);
  } catch (error) {
    next(error)
  }
}
export const deleteUser = async (req: Request, res: Response , next:NextFunction) => {
  try {
    const user = await userService.deleteUser(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error)
  }
}