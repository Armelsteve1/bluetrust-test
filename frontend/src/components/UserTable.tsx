import { useEffect, useState } from 'react'
import { DataGrid, GridColDef, GridActionsCellItem } from '@mui/x-data-grid'
import { getUsers, deleteUser } from '../services/userService'
import { User } from '../types/user'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material'

const UserTable = ({ refresh, onOpenDetailDrawer }: { refresh: boolean, onOpenDetailDrawer: (user: User) => void }) => {
  const [users, setUsers] = useState<User[]>([])
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  const fetchUsers = async () => {
    const data = await getUsers()
    setUsers(data)
  }

  const handleDelete = async (id: number) => {
    setDialogOpen(true)
    setSelectedUser(users.find((user) => user.id === id) || null)
  }

  const confirmDelete = async () => {
    if (selectedUser) {
      await deleteUser(selectedUser.id)
      fetchUsers()
      setDialogOpen(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [refresh])

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First Name', flex: 1 },
    { field: 'lastName', headerName: 'Last Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 150,
      getActions: (params) => [
        <GridActionsCellItem 
          icon={<EditIcon />} 
          label="Modifier" 
          onClick={() => onOpenDetailDrawer(params.row)}
        />,
        <GridActionsCellItem 
          icon={<DeleteIcon />} 
          label="Supprimer" 
          onClick={() => handleDelete(params.id as number)}
        />,
      ]
    }
  ]

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={users}
        columns={columns}
        pageSizeOptions={[5, 10, 20]}
        initialState={{
          pagination: { paginationModel: { pageSize: 10, page: 0 } },
        }}
        disableRowSelectionOnClick
      />
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Confirmer la suppression</DialogTitle>
        <DialogContent>
          {selectedUser && <Typography>Êtes-vous sûr de vouloir supprimer {selectedUser.firstName} {selectedUser.lastName} ?</Typography>}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)} color="primary">
            Annuler
          </Button>
          <Button onClick={confirmDelete} color="secondary">
            Supprimer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default UserTable
