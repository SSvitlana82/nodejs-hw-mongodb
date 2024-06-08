import { Router } from 'express';
import {
  getContactsController,
  getContactcByIdController,
  createContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
const router = Router();

router.get('/contacts', ctrlWrapper(getContactsController));
router.get('/contacts/:contactId', ctrlWrapper(getContactcByIdController));
router.post('/contacts', ctrlWrapper(createContactController));

export default router;
