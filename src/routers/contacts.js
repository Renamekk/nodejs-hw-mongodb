import {Router} from 'express';
import { getContactById, getContacts } from '../services/contacts.js';

const router = Router();

router.get('/contacts', async (_, res) => {
    const data = await getContacts();
    res.json({
      status: 200,
      message: 'Successfully found contacts!',
      data,
    });
  });



  router.get("/contacts/:_id", async (req, res) => {
    const { _id } = req.params;
    const data = await getContactById(_id);

    if (!data) {
      return res.status(404).json({
        status: 404,
        message: `Contact with id=${_id} not found!`,
      });
    }

    res.json({
      status: 200,
      message: 'Successfully found contact!',
      data,
    });
  });


export default router;