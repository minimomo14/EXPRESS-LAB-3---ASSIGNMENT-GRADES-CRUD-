// require the express module
import express from 'express';
import routes from './routes/app-routes';
 
// require the cors module
import cors from "cors"
 
// creates an instance of an Express server
const app = express();
 
// enable Cross Origin Resource Sharing so this API can be used from web-apps on other domains
app.use(cors())
 
// allow POST and PUT requests to use JSON bodies
app.use(express.json());
app.use("/",routes);
 
// define the port
const port = 3001;
 
// run the server
app.listen(port, () => console.log(`Listening on port: ${port}.`));
