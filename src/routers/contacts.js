import { Router } from 'express';
import {
  getContactsController,
  getContactcByIdController,
  createContactController,
  patchContactController,
  deleteContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactSchema,
  upDateContactSchema,
} from '../validation/contacts.js';
const router = Router();

router.get('/contacts', ctrlWrapper(getContactsController));
router.get('/contacts/:contactId', ctrlWrapper(getContactcByIdController));
router.post(
  '/contacts',
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);
router.patch(
  '/contacts/:contactId',
  validateBody(upDateContactSchema),
  ctrlWrapper(patchContactController),
);
router.delete('/contacts/:contactId', ctrlWrapper(deleteContactController));
export default router;
