import mysql from "mysql2/promise";
import { NextRequest, NextResponse } from "next/server";
let totaldata: any = [];

// MySQL connection configuration
async function connection() {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "priyanka",
      password: "qwerty@1234",
      database: "Circlify",
    });
    console.log("Connected to the database");
    return connection;
  } catch (error: any) {
    console.error("Error connecting to the database:", error.message);
    throw error;
  }
}

export async function GET(req: any) {
  let connectToDatabase;
  try {
    connectToDatabase = await connection();
    const [rows] = await connectToDatabase.execute("SELECT * FROM users");
    totaldata = rows;
    console.log(rows);
    return NextResponse.json(rows, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  } finally {
    if (connectToDatabase) await connectToDatabase.end();
  }
}

export async function POST(req: any) {
  const userData = await req.json();
  let connectToDatabase = await connection();
  const newUserData = {
    name: userData.name,
    surname: userData.surname,
    description: userData.description,
    city: userData.city,
    school: userData.school,
    work: userData.work,
    website: userData.website,
    created_at: new Date(),
  };
  totaldata.push(newUserData);
  console.log(totaldata);
  const [insertUserResult] = await connectToDatabase.execute(
    "INSERT INTO users (name, surname, description, city, school, work, website) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [
      newUserData.name,
      newUserData.surname,
      newUserData.description,
      newUserData.city,
      newUserData.school,
      newUserData.work,
      newUserData.website,
    ]
  );
  if (insertUserResult) {
    return new Response(JSON.stringify(newUserData), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200,
    });
  }
}
