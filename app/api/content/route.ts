import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { userId } = await auth(); // Get authenticated user ID

  try {
    const body = await request.json();
    const { name, email, company, message, type } = body;

    const contact = await prisma.contact.create({
      data: {
        userId, // Associate with user if logged in
        name,
        email,
        company: company || '',
        message: message || '',
        type: type || 'general',
      },
    });

    return NextResponse.json({ success: true, data: contact }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
