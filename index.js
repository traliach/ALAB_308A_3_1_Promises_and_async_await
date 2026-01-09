// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserData(id) { // Make getUserData async because central(id) is async.
  const dbName = await central(id); // Ask central which DB name holds this user (like "db1").
  return dbName; // Return just the DB name for now (smallest possible working step).
}

getUserData(1) // Call getUserData with id 1 (a valid id).
  .then((dbName) => console.log("dbName:", dbName)) // If it works, print the dbName.
  .catch((err) => console.error("Error:", err.message)); // If it fails, print the error message.
  