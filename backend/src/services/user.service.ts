import prisma from "../config/prisma";
import { UserInput } from "../utils/user.types";

export const getAllUsers = async () => {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    throw new Error("Error fetching users");
  }
}   

export const createUser = async (userData: UserInput) => {
    try {
      const existingUser = await prisma.user.findUnique({
        where: { email: userData.email },
      });
  
      if (existingUser) {
        throw new Error("Email already exists");
      }
  
      const user = await prisma.user.create({
        data: userData,
      });
      return user;
    } catch (error) {
      console.error('Error creating user:', error); 
      if (error instanceof Error) {
        throw new Error("Error creating user: " + error.message);
      }
      throw new Error("Error creating user: An unknown error occurred");
    }
  }
  

export const updateUser = async (userId: string, userData: UserInput) => {
  try {
    const user = await prisma.user.update({
      where: { id: Number(userId) },
      data: userData,
    });
    return user;
  } catch (error) {
    throw new Error("Error updating user");
  }
}

export const deleteUser = async (userId: string) => {
  try {
    const user = await prisma.user.delete({
      where: { id: Number(userId) },
    });
    return user;
  } catch (error) {
    throw new Error("Error deleting user");
  }
}