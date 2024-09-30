import GitHubProvider from "next-auth/providers/github";

import { Provider } from "../../domain/models/provider";

const gitHubProvider = GitHubProvider({
    clientId: process.env.GITHUB_ID as string,
    clientSecret: process.env.GITHUB_SECRET as string
});

export const gitHub: Provider = {
    name: "github",
    adapter: gitHubProvider
}