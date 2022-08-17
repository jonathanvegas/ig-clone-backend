import { MongoClient } from "mongodb";
import { uri } from "./credentials";

export const client = new MongoClient(uri);
export const db = client.db("BocaCode");
