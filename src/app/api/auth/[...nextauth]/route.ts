/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth from "next-auth"

import { providers } from "../adapters/providers";
import { getAdapters } from "../adapters/providers/utils";

declare module "next-auth" {
  interface Profile {
    id?: string
  }
}


const handler = NextAuth({
    providers:
      getAdapters(providers),
    callbacks: {
     async jwt({ token, account, profile }) {
      if (account) {
      token.accessToken = account.access_token
      token.id = profile?.id
    }
    return token
    },
  },
  pages: {
    signIn: '/dashboard',
    signOut: '/login',
    error: '/error',
  },
})


export { handler as GET, handler as POST }