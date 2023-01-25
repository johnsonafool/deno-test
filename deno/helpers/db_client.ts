import { MongoClient, Database } from "https://deno.land/x/mongo@v0.8.0/mod.ts";

let db: Database;

export function connect() {
  const client = new MongoClient();
  // docker expose port
  client.connectWithUri("mongodb+srv://localhost:27018");
  db = client.database("todo-app");
}

export function getDb() {
  return db;
}
