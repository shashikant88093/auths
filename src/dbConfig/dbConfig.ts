// MONGO_URL
import mongoose from "mongoose";

export async function connect() {
try {
    const mongoUrl = process.env.MONGO_URL || ""; // Set a default value if MONGO_URL is undefined
    console.log(mongoUrl,"mongoUrl")
    await mongoose.connect(mongoUrl);
    const connection = mongoose.connection;
    connection.on("connected", () => {
            console.log("Connected to database");
            }
    );
    connection.on("error", (error) => {
            console.log("Error connecting to database", error);
            }
    );
} catch (error) {
    console.log("Could not connect to database", error);
}
}

