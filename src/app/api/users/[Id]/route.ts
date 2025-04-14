import mysql from "mysql2/promise";

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

export async function GET(
  _req: Request,
  { params }: { params: { Id: string } }
) {
  try {
    let connectToDatabase = await connection();
    const [rows]: [any[], any] = await connectToDatabase.execute(
      `SELECT * FROM users where id = ${params.Id}`
    );
    if (rows.length) {
      return Response.json(rows[0]);
    } else {
      return Response.json({ error: "User not found" });
    }
  } catch (error) {
    console.log(error);
    return Response.json({ error });
  }
}
