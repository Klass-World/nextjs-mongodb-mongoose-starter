import dbConnect from '../../utils/dbConnect';
import Cruise from '../../models/Cruise';

export default async function handler(req, res) {
  await dbConnect();
  switch (req.method) {
    case 'GET':
      const cruises = await Cruise.find({});
      res.status(200).json(cruises);
      break;
    case 'POST':
      const newCruise = new Cruise(req.body);
      await newCruise.save();
      res.status(201).json(newCruise);
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
