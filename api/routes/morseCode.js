import express from 'express';
import { MorseCode } from '../models/morseCode';

const router = express.Router();
router.route('/')
  .post((req, res) => {
    const morseCode = new MorseCode({
      message: req.body.message,
      settings: req.body.settings
    });
    morseCode.save((err, result) => {
      if (err) {
        res.sendStatus(500);
      }
      res.status(201).json({
        urlId: result.urlId
      });
    });
  });

router.route('/:urlId')
  .get((req, res) => {
    MorseCode.findOne({urlId: req.params.urlId}, {_id: 0, __v: 0}).exec((err, result) => {
      if (err) {
        res.sendStatus(500);
      } else if (!result) {
        res.sendStatus(404);
      }

      res.json(result);
    });
  });

export default router;
