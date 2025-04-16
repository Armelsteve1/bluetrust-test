export interface User {
    id: number
    firstName: string
    lastName: string
    email: string
    phoneNumber?: string
    country?: string
    city?: string
    profilePicture?: string
    createdAt?: string
    updatedAt?: string
  }
  
  export type CreateUserPayload = Omit<User, 'id' | 'createdAt' | 'updatedAt'>
  