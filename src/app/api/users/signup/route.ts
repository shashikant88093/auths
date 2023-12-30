import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";

import { NextApiRequest, NextApiResponse } from "next";

import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest, response: NextResponse) {
 
  try {
    const reqBody = await request.json();
    console.log(reqBody,"reqBody")
    const { username, email, password } = reqBody;
    // check user exists
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }
    // hash password
    const salt = await bcryptjs.genSalt(12);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    console.log(newUser,"newUser")

   const savedUser = await newUser.save();
    console.log(savedUser,"savedUser")
     return NextResponse.json(
        { message: "User created successfully", savedUser },
        { status: 201 }
     );
  } catch (error:any) {
    return NextResponse.json(
        { message: "Something went wrong", error: error.message },
        { status: 500 }
    );  
    }
}
