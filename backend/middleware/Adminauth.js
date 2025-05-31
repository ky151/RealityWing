import jwt from 'jsonwebtoken'
import connection  from '../config.js'

const isAuthenticatedAdmin = async (req, res, next) => {
  const { Admin_token } = req.cookies;

  if (!Admin_token) {
    return res.status(401).json({ result: 'Access denied. No token provided.' });
  }

  const con = await connection();

  try {
    const decodedData = jwt.verify(Admin_token, process.env.JWT_SECRET);
    const [results] = await con.query('SELECT * FROM tbl_admin WHERE id = ?', [decodedData.id]);

    if (!results.length) {
      return res.status(401).json({ result: 'Invalid admin token or admin not found.' });
    }

    req.admin = results[0];
    next();
  } catch (error) {
    return res.status(400).json({ result: 'Session Time Out!!' });
  } finally {
    con.release();
  }
};

export { isAuthenticatedAdmin };
