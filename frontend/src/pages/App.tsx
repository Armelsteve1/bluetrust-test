import { useState } from 'react'
import UserTable from '../components/UserTable'
import UserDrawer from '../components/UserDrawer'
import { Button, Box } from '@mui/material'
import { User } from '../types/user'

const App = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const [refresh, setRefresh] = useState(false)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  const handleSuccess = () => setRefresh(!refresh)

  const handleOpenDetailDrawer = (user: User) => {
    setSelectedUser(user)
    setOpenDrawer(true)
  }

  const handleOpenAddDrawer = () => {
    setSelectedUser(null)
    setOpenDrawer(true)
  }

  return (
    <main className="p-4">
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <h1 className="text-2xl font-bold text-blue-800">BlueTrust - User Manager</h1>
        <Button variant="contained" onClick={handleOpenAddDrawer}>+ Ajouter</Button>
      </Box>
      <UserTable 
        refresh={refresh} 
        onOpenDetailDrawer={handleOpenDetailDrawer}
      />
      <UserDrawer 
        open={openDrawer} 
        onClose={() => setOpenDrawer(false)} 
        onSuccess={handleSuccess} 
        user={selectedUser}
      />
    </main>
  )
}

export default App
