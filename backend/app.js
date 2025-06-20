import http from 'http';
import https from 'https';
import express from 'express';
import cors from 'cors';
import * as url from 'url';
import * as path from 'path';
import fs from 'fs';
import cookie from 'cookie-parser';
import dotenv from 'dotenv'
import connection from "./config.js";
import requestIp from "request-ip";
import csurf from "csurf";

import AdminRouter from "./routes/adminRoute.js";
import ApiRouter from "./routes/apiRoute.js";
import IndexRouter from "./routes/indexRoute.js";

dotenv.config({path:"./config.env"});

// ----- End of Import Section -----


// ---------- Start of Server Section ----------
const app = express();
const server = http.createServer(app);
const port = 3001;
const __dirname = url.fileURLToPath(new URL('.',import.meta.url));

// ---------- Start Global Middleware Start ----------
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));
app.use(express.static(path.join(__dirname,"public")));
app.use(cookie());
app.use(requestIp.mw());

// Serve Flutter build files
app.use(express.static(path.join(__dirname, 'public/flutter')));

app.use(cors({
  origin: [
    'http://localhost:3000',         // local React (optional, for dev)
	'http://localhost:3001',         // local React (optional, for dev)
    'http://localhost:3002',         // local admin panel (optional)
    'http://46.202.166.22:3000',        // user frontend (server IP)
	'http://46.202.166.22:3001',        // user backend (server IP)
    'http://46.202.166.22:3002',        // admin panel (server IP)
	'http://realitywing.com:3002',        // live domain
	'http://realitywing.com',        // live domain
    'https://realitywing.com'        // live domain
  ],
  credentials: true  // only if you use cookies/auth sessions
}));

app.use('/api_admin',AdminRouter);
app.use('/api',ApiRouter);
app.use('/',IndexRouter);

app.set("view engine","ejs");
app.set("views",[
    path.join(__dirname,"./views"),
])

app.get('/api', (req, res) => {
  res.json({ message: 'Hello, World!' });
});


app.get('/api_admin', (req, res) => {
  res.json({ message: 'Hello, World!' });
});



//==================================================

server.listen(port,() => {
    console.log(`Server is running on port ${port}`);
})

