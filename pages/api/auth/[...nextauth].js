import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth = ({
  // Configure one or more authentication providers
  providers: [
    Providers.Donbook({
        clientId: process.env.DONSBOOK_CLIENT_ID,
        clientSecret: process.env.DONSBOOK_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
});