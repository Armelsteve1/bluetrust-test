import * as userService from '../services/user.service';
import { Request, Response } from 'express';

export const getUsers = async (_req :Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
}

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.error('❌ Error creating user:', error);
    res.status(500).json({ message: "Error creating user" });
  }
}
export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error updating user" });
  }
}
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.deleteUser(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error deleting user" });
  }
}