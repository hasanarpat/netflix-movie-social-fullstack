export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/movies/:path*', '/series/:path*', '/user/:path*', '/'],
  // macther: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
};
