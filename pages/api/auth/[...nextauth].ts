import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

type SingIn = {
  user: string;
  account: string;
  profile: string;
  email: string;
  credentials: boolean;
};

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: <string>process.env.GOOGLE_CLIENT_ID,
      clientSecret: <string>process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `/Members`;
      return baseUrl;
    },
  },
});
