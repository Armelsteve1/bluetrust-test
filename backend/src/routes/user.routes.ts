import { Router } from "express";

import { 
    getUsers,
  createUser,
  updateUser,
  deleteUser
 } from "../controllers/user.controller";
 import { upload } from '../middlewares/upload.middleware'

const router = Router();

router.get('/', getUsers)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        res.status(400).json({ message: 'No file uploaded' });
        return;
    }
  
    const fileUrl = `/uploads/${req.file.filename}`;
    res.status(200).json({ filePath: fileUrl });
})
  
export default router;