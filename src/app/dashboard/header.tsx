"use client"

import { signOut, useSession } from 'next-auth/react';
import {HeaderDashboard} from 'stories/headerDashboard/HeaderDashboard';


type NavigationRoute = {
  label: string;
  href: string;
  prefetch?: boolean;
};

function Header() {
  const { data: session } = useSession();
  const handleLogout = () => signOut();
  const navigations : NavigationRoute[] = [ 
    { label: 'Home', href: '/dashboard', prefetch: true },
    { label: 'List', href: '/dashboard/photo', prefetch: false }
  ];
  return (
    <HeaderDashboard 
      user={{
        ...session?.user,
        name: session?.user?.name ?? '',
      }}
      navigations={navigations}
      onLogout={handleLogout}/> 
  )
}

export default Header