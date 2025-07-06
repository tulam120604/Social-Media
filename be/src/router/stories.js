import { Router } from 'express';
import { middleware } from '../middleware/auth.js';
import { create_story } from '../controller/stories/create.js';
import { upload } from '../middleware/upload.js';

const storiesRouter = Router();

// storiesRouter.get('/stories', middleware, )
storiesRouter.post('/stories/create', middleware, upload.array("media"), create_story)

export default storiesRouter;