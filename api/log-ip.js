// api/log-ip.js
import { Pool } from 'pg';

// Configure the connection pool using environment variables
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL, // Use the connection string from your Vercel environment variables
});

export default async function handler(req, res) {
  // Get the IP address from the request
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  try {
    // Insert the IP address into the database
    await pool.query('INSERT INTO ip_logs (ip_address, timestamp) VALUES ($1, $2)', [
      ip,
      new Date(),
    ]);

    console.log(`IP Address logged: ${ip}`);
    res.status(200).json({ message: 'IP logged successfully.' });
  } catch (error) {
    console.error('Error logging IP:', error);
    res.status(500).json({ message: 'Error logging IP.' });
  }
}
