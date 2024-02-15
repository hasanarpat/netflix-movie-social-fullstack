import { User } from '@/models/User';
import type { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Github from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';

export const options: NextAuthOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      async profile(profile) {
        // console.log('Profile Github', profile);

        let userRole = 'Github User';
        if (profile?.email == process.env.ADMIN) {
          userRole = 'admin';
        }

        console.log(userRole, profile.avatar_url, profile.login);

        const userData = {
          name: profile.name,
          username: profile.login,
          email: profile.email,
          password: profile.email,
          profilePicture: profile.avatar_url,
          age: 32,
          watchList: '',
        };

        const resUser = await fetch('http://localhost:3000/api/user', {
          method: 'POST',
          body: JSON.stringify(userData),
        });

        if (!resUser.ok) console.log('failed to save user');
        const resUserData = await resUser.json();
        // console.log(resUserData);

        const wlData = {
          userId: resUserData._id,
          favorites: [],
        };

        const resWL = await fetch('http://localhost:3000/api/watchList', {
          method: 'POST',
          body: JSON.stringify(wlData),
        });

        if (!resWL.ok) console.log('failed to save wl');

        // console.log(await resWL.json());

        return {
          ...profile,
          image: profile.avatar_url,
          name: profile.login,
          username: profile.login,
          role: userRole,
        };
      },
    }),
    Google({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      profile(profile) {
        // console.log('Profile Google', profile);

        let userRole = 'Google User';
        if (profile?.email == process.env.ADMIN) {
          userRole = 'admin';
        }

        return {
          ...profile,
          id: profile.sub,
          image: profile.picture,
          role: userRole,
        };
      },
    }),
    Credentials({
      name: 'Credentials',
      credentials: {
        username: {
          label: ' Username',
          type: 'text',
          placeholder: 'Username',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password',
        },
      },
      async authorize(credentials, req) {
        const user = { id: '42', name: 'admin', password: 'nextauth' };

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else return null;
      },
    }),
  ],
};
