import connectMongoDB from '../../../../libs/mongodb'
import Web from '../../../../models/webLinkModel'
import { NextResponse } from 'next/server'

// Create a post : post method
export async function POST(request) {
  const { name, url } = await request.json()
  await connectMongoDB()
  await Web.create({ name, url })
  return NextResponse.json({ message: 'Web Created' }, { status: 201 })
}

// get method: reade data
export async function GET(request) {
  await connectMongoDB()
  const web = await Web.find()
  return NextResponse.json({ web })
}

// delete method
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get('id')
  await connectMongoDB()
  await Web.findByIdAndDelete(id)
  return NextResponse.json({ message: 'Web Deleted' }, { status: 200 })
}
