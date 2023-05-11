const mongose=require('mongoose');
mongose.connect(`mongodb://0.0.0.0/backendprojectin_habbittracker_db154545454dsd`);
const db=mongose.connection;
db.on('error',console.error.bind(console,"errror conected to db"));
db.once('open',function()
{
    console.log("coneted to the database ");
});
module.exports=db;
