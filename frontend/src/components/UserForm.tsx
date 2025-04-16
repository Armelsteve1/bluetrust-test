import React from 'react'
import { useForm } from 'react-hook-form'
import { CreateUserPayload, User } from '../types/user'
import { createUser } from '../services/userService'
import { TextField, Button, Stack } from '@mui/material'

interface Props {
  onSuccess: () => void
  onClose: () => void
  user: User | null
}

const UserForm: React.FC<Props> = ({ onSuccess, onClose }) => {
  const { register, handleSubmit, reset } = useForm<CreateUserPayload>()

  const onSubmit = async (data: CreateUserPayload) => {
    await createUser(data)
    reset()
    onSuccess()
    onClose()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <TextField label="Prénom" {...register('firstName')} required />
        <TextField label="Nom" {...register('lastName')} required />
        <TextField label="Email" type="email" {...register('email')} required />
        <TextField label="Téléphone" {...register('phoneNumber')} />
        <TextField label="Pays" {...register('country')} />
        <TextField label="Ville" {...register('city')} />
        <Button type="submit" variant="contained">Créer</Button>
      </Stack>
    </form>
  )
}

export default UserForm
