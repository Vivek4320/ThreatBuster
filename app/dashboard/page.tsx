import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import DashboardContent from '../../app/dashboard/DashboardContent';

export default async function DashboardPage() {
  const user = await currentUser();
  if (!user) redirect('/sign-in');
  return <DashboardContent user={user} />;
}
