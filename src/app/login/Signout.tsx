"use client"
import {signOut } from 'next-auth/react';
import Logout from 'stories/loguot/Logout';
import { useRouter } from 'next/navigation'

type User = {
  name: string;
};

interface ButtonSignOutProps {
  user : User;
}

function SignOut({user}: ButtonSignOutProps) {
  const router = useRouter()
  return (
    <> 
      <Logout user={user}
              onLogout={() => signOut()} 
              onGoToDashboard={() => {
                router.push('/dashboard')
              }
              } />
    </>
  )
}

export default SignOut;