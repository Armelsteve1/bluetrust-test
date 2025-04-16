import { api } from './api'
import { User, CreateUserPayload } from '../types/user'

export const getUsers = async (): Promise<User[]> => {
  const { data } = await api.get('/users')
  return data
}

export const createUser = async (user: CreateUserPayload): Promise<User> => {
  const { data } = await api.post('/users', user)
  return data
}

export const updateUser = async (id: number, user: CreateUserPayload): Promise<User> => {
  const { data } = await api.put(`/users/${id}`, user)
  return data
}

export const deleteUser = async (id: number): Promise<void> => {
  await api.delete(`/users/${id}`)
}

export const uploadProfilePicture = async (file: File): Promise<string> => {
  const formData = new FormData()
  formData.append('file', file)

  const { data } = await api.post('/users/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

  return data.filePath
}