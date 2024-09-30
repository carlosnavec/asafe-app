import GoogleProvider from 'next-auth/providers/google';
import { Provider } from "../../domain/models/provider";

const googleProvider =GoogleProvider({
    clientId: process.env.GOOGLE_ID as string,
    clientSecret: process.env.GOOGLE_SECRET as string,
});


export const google: Provider = {
    name: "google",
    adapter: googleProvider
}