/* eslint-disable @typescript-eslint/no-explicit-any */
import { OAuthConfig } from "next-auth/providers/oauth";

export interface Provider {
  name: string;
  adapter:  OAuthConfig<any>;
}