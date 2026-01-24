import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import {
  checkIPAccess,
  createIPAccessControl,
  getClientIP,
  isValidIPv4,
} from '@/lib/cidr';

/**
 * @file middleware.ts
 * @description Next.js middleware for IP access control using CIDR matching
 * @module middleware
 * @author YYC³ Team
 * @version 1.0.0
 * @created 2026-01-23
 * @updated 2026-01-23
 * @copyright Copyright (c) 2026 YYC³
 * @license MIT
 */

const ipAccessConfig = createIPAccessControl(
  'deny',
  [
    {
      cidr: '0.0.0.0/8',
      action: 'allow',
      description: 'Development network 0.0.0.0/8',
    },
    {
      cidr: '10.0.0.0/8',
      action: 'allow',
      description: 'Private network 10.0.0.0/8',
    },
    {
      cidr: '172.16.0.0/12',
      action: 'allow',
      description: 'Private network 172.16.0.0/12',
    },
    {
      cidr: '192.168.0.0/16',
      action: 'allow',
      description: 'Private network 192.168.0.0/16',
    },
    {
      cidr: '127.0.0.0/8',
      action: 'allow',
      description: 'Loopback addresses',
    },
  ]
);

const allowedPaths = [
  '/api/health',
  '/api/public',
  '/login',
  '/register',
  '/favicon.ico',
  '/_next',
];

const bypassIPCheck = (pathname: string): boolean => {
  return allowedPaths.some(path => pathname.startsWith(path));
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  if (bypassIPCheck(pathname)) {
    return NextResponse.next();
  }
  
  const clientIP = getClientIP(request.headers);
  
  if (!isValidIPv4(clientIP)) {
    return NextResponse.json(
      { error: 'Invalid IP address', ip: clientIP },
      { status: 400 }
    );
  }
  
  const isAllowed = checkIPAccess(clientIP, ipAccessConfig);
  
  if (!isAllowed) {
    console.warn(`IP access denied: ${clientIP} - ${pathname}`);
    
    return NextResponse.json(
      {
        error: 'Access denied',
        message: 'Your IP address is not authorized to access this resource',
        ip: clientIP,
      },
      { status: 403 }
    );
  }
  
  const response = NextResponse.next();
  
  response.headers.set('X-Client-IP', clientIP);
  response.headers.set('X-Access-Control-Allow-Origin', '*');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  
  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
