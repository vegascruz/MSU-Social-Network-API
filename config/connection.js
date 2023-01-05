const { connect, connection } = require('mongoose');
//connect.set('strictQuery', false);

const connectionString = 
process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialNetworkDB';

connect(`mongodb://localhost/developersApplications`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;