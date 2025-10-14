import { auth, currentUser } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import { prisma } from '/prisma';

export async function GET() {
  const { userId } = auth();
  
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const user = await currentUser();
  
  let profile = await prisma.userProfile.findUnique({
    where: { clerkUserId: userId },
  });

  if (!profile && user) {
    profile = await prisma.userProfile.create({
      data: {
        clerkUserId: userId,
        email: user.emailAddresses[0].emailAddress,
        name: `${user.firstName} ${user.lastName}`,
      },
    });
  }

  return NextResponse.json(profile);
}

export async function PUT(request: Request) {
  const { userId } = auth();
  
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  
  const profile = await prisma.userProfile.update({
    where: { clerkUserId: userId },
    data: body,
  });

  return NextResponse.json(profile);
}
