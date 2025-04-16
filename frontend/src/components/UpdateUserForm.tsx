import React, { useState, useEffect } from 'react'
import { TextField, Button } from '@mui/material'
import { User } from '../types/user'
import { updateUser } from '../services/userService'

interface Props {
  user: User
  onSuccess: () => void
  onClose: () => void
}

const UpdateUserForm: React.FC<Props> = ({ user, onSuccess, onClose }) => {
  const [formData, setFormData] = useState<User>(user)

  useEffect(() => {
    setFormData(user)
  }, [user])

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    try {
      await updateUser(user.id, formData)
      onSuccess()
      onClose()
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'utilisateur:", error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="First Name"
        value={formData.firstName}
        name="firstName"
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Last Name"
        value={formData.lastName}
        name="lastName"
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        value={formData.email}
        name="email"
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button type="submit" color="primary" variant="contained">
        Modifier
      </Button>
    </form>
  )
}

export default UpdateUserForm
