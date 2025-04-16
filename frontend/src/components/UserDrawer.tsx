import React from 'react'
import { Drawer, IconButton, Box, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import UpdateUserForm from './UpdateUserForm'
import { User } from '../types/user'
import UserForm from './UserForm'

interface Props {
  open: boolean
  onClose: () => void
  onSuccess: () => void
  user: User | null
}

const UserDrawer: React.FC<Props> = ({ open, onClose, onSuccess, user }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 400, p: 3 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6">{user ? 'Modifier un utilisateur' : 'Ajouter un utilisateur'}</Typography>
          <IconButton onClick={onClose}><CloseIcon /></IconButton>
        </Box>
        {user ? (
          <UpdateUserForm user={user} onSuccess={onSuccess} onClose={onClose} />
        ) : (
          <UserForm user={user} onSuccess={onSuccess} onClose={onClose} />
        )}
      </Box>
    </Drawer>
  )
}

export default UserDrawer
