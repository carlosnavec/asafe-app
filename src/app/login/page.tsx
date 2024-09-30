
import { getServerSession } from 'next-auth';

import SignOut from './Signout';
import SignIn from './Signin';
import { getNamesProviders } from '../api/auth/adapters/providers/utils';
import { providers } from '../api/auth/adapters/providers';

async function LoginPage() {
  const session  = await getServerSession();
  const providersNames = getNamesProviders(providers);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {!session ? (
        <>
          <SignIn  providersNames={providersNames} />
        </>
      ) : (
        <>
          {session.user && (
            <SignOut
              user={{
                ...session.user,
                name: session.user.name ?? '',
              }}
            />
          )}
        </>
      )}
    </div>
  );
}

export default LoginPage;