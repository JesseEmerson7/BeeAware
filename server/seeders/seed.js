const db = require('../config/connection');
const { User } = require('../models');


db.once('open', async () => {
  try {
    await User.deleteMany({});
    //need to add fake users for seeding
    await User.create();

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
