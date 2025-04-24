import http from 'http';
import https from 'https';
import express from 'express';
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


 // ================== CSRF Start Middleware ----------

// Define CSRF middleware with cookie
const csrfMiddleware = csurf({ cookie: true });

// Skip CSRF for specific routes by using a condition
app.use((req, res, next) => {
  if (req.path.startsWith('/api')) {
    return next(); // Skip CSRF for /api and / routes
  }
  csrfMiddleware(req, res, next); // Apply CSRF protection for other routes
});

// Set csrfToken for the rest of the routes (only where CSRF protection is applied)
app.use((req, res, next) => {
  if (!(req.path.startsWith('/api'))) {
    res.locals.csrfToken = req.csrfToken(); // Set csrfToken for non-skipped routes
  }
  next();
});

//================== CSRF End ======================

app.use('/admin',AdminRouter);
app.use('/api',ApiRouter);
app.use('/',IndexRouter);

app.set("view engine","ejs");
app.set("views",[
    path.join(__dirname,"./views"),
])

app.get('/api', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

//==================================================

server.listen(port,() => {
    console.log(`Server is running on port ${port}`);
})

