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
    const user = await prisma.user.create({
      data: userData,
    });
    return user;
  } catch (error) {
    throw new Error("Error creating user");
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