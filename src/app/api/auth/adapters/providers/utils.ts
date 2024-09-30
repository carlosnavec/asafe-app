/* eslint-disable @typescript-eslint/no-explicit-any */
import { OAuthConfig } from "next-auth/providers/oauth";
import { Provider } from "../../domain/models/provider";

export const getAdapters = (providers: Provider[]): OAuthConfig<any>[] => {
  return providers.map(provider => provider.adapter);
};

export const getNamesProviders = (providers: Provider[]): string[] => {
  return providers.map(provider => provider.name);
};