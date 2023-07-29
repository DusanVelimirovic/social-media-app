// Helper module
// Create basic url

// Import external modules
import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://localhost:8800/api/",
  withCredentials: true, // We will eed this because we will use access token to web service
});
