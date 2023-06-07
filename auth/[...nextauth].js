import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env.local

const options = {
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Add more authentication providers if needed
  ],

  callbacks: {
    async signIn(user, account, profile) {
      // Custom sign-in logic if required
      return true;
    },

    async redirect(url, baseUrl) {
      // Custom redirect logic if required
      return baseUrl;
    },

    async session(session, user) {
      // Custom session logic if required
      return session;
    },

    async jwt(token, user, account, profile, isNewUser) {
      // Custom JWT token logic if required
      return token;
    },
  },
};

export default (req, res) => NextAuth(req, res, options);
