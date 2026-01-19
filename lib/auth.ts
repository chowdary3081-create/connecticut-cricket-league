import type { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  session: { strategy: 'jwt' },
  providers: [
    Credentials({
      name: 'Admin Login',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const u = credentials?.username?.toString() || '';
        const p = credentials?.password?.toString() || '';

        const adminUser = process.env.ADMIN_USERNAME || '';
        const adminPass = process.env.ADMIN_PASSWORD || '';

        if (!adminUser || !adminPass) return null;
        if (u !== adminUser) return null;
        if (p !== adminPass) return null;

        return { id: 'admin', name: 'CCL Admin' };
      },
    }),
  ],
  pages: { signIn: '/admin/login' },
};
