"use client"
import { signIn } from 'next-auth/react';
import Login from 'stories/login/Login';

interface SignInProps {
  providersNames: string[];
}

function SignIn({ providersNames }: SignInProps) {
    return (
        <>
          <Login providersName={providersNames}
        onLogin={(providerName) => signIn(providerName, { callbackUrl: '/dashboard', error: '/error' })} />
        </>
    );
}

export default SignIn;