import TwitterProvider from "next-auth/providers/twitter";
import { Provider } from "../../domain/models/provider";


export const twitterProvider = TwitterProvider({
    clientId: process.env.TWITTER_ID as string,
    clientSecret: process.env.TWITTER_SECRET as string
})  

export const twitter: Provider = {
    name: "twitter",
    adapter: twitterProvider
}