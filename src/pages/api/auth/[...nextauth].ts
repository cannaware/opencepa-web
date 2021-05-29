import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Email({
      server: process.env.NEXTAUTH_EMAIL_SERVER,
      from: process.env.NEXTAUTH_EMAIL_FROM,
      maxAge: 1 * 60 * 60,
    }),
  ],

  database: process.env.NEXTAUTH_DATABASE_URL,
});
