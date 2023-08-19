// Connect with MySQL server
import mysql from "mysql";

// Create and export connection method
export const db = mysql.createConnection({
  host: "",
  user: "",
  password: "",
  database: "",
});
