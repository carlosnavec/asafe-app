import React from 'react';

import { Button } from '../button/Button';
import Link from 'next/link';
import Image from 'next/image';

type User = {
  name: string;
};

type NavigationRoute = {
  label: string;
  href: string;
  prefetch?: boolean;
};

export interface HeaderProps {
  user?: User;
  navigations?: NavigationRoute[];
  onLogout?: () => void;
}

export const HeaderDashboard = ({ user, navigations, onLogout}: HeaderProps) => (
  <header className="bg-gray-800 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Image src="https://webcdn.asafe.com/assets/img/asafe-logo-new.png?v=20240916.2"
            className="mx-auto h-10 w-auto" alt="Asafe" />
        <div className="text-white text-xl font-bold hidden md:block ">Dashboard</div>
      </div>
      <nav>
        <ul className="flex space-x-4 text-white">
        {navigations?.map((nav, index) => (
          <li key={index}>
            <Link href={nav.href} prefetch={nav.prefetch}>
              {nav.label} 
            </Link>
          </li>
        ))}
        </ul>
      </nav>
      <div>
        <div className="flex items-center space-x-4">
          <span className="text-white hidden md:block">Welcome, {user?.name}</span>
          <div className="flex-1">
          <Button
            label='Logout'
            onClick={onLogout}
            primary={false}
          />
          </div>
        </div>
      </div>
    </div>
  </header>
);
