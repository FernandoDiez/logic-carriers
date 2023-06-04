import clientPromise from '../../../mongodb'
import { NextResponse } from 'next/server'
import md5 from 'blueimp-md5'

export async function GET(request) {
  const { searchParams } = request.nextUrl
  const username = searchParams.get('username')
  const password = md5(searchParams.get('password'))

  const client = await clientPromise;
  const db = client.db("logistics");
  const users = await db.collection("users").find({ username: username, password: password }).toArray();
  return NextResponse.json({ status: 200, data: users })
}