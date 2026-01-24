/**
 * @file cidr.ts
 * @description CIDR (Classless Inter-Domain Routing) utility for IP address matching and access control
 * @module lib/cidr
 * @author YYC³ Team
 * @version 1.0.0
 * @created 2026-01-23
 * @updated 2026-01-23
 * @copyright Copyright (c) 2026 YYC³
 * @license MIT
 */

export interface CIDRRange {
  address: string;
  prefix: number;
}

export interface IPAccessRule {
  cidr: string;
  action: 'allow' | 'deny';
  description?: string;
}

export interface IPAccessControlConfig {
  defaultAction: 'allow' | 'deny';
  rules: IPAccessRule[];
}

/**
 * Parse CIDR notation string into address and prefix
 * @param cidr - CIDR notation string (e.g., "192.168.1.0/24")
 * @returns CIDRRange object with address and prefix
 */
export function parseCIDR(cidr: string): CIDRRange {
  const [address, prefix] = cidr.split('/');
  
  if (!address || !prefix) {
    throw new Error(`Invalid CIDR format: ${cidr}`);
  }
  
  const prefixNum = parseInt(prefix, 10);
  
  if (isNaN(prefixNum) || prefixNum < 0 || prefixNum > 32) {
    throw new Error(`Invalid CIDR prefix: ${prefix}`);
  }
  
  return { address, prefix: prefixNum };
}

/**
 * Convert IPv4 address to integer
 * @param ip - IPv4 address string
 * @returns Integer representation of IP address
 */
export function ipToInt(ip: string): number {
  const parts = ip.split('.');
  
  if (parts.length !== 4) {
    throw new Error(`Invalid IPv4 address: ${ip}`);
  }
  
  return (
    (parseInt(parts[0], 10) << 24) |
    (parseInt(parts[1], 10) << 16) |
    (parseInt(parts[2], 10) << 8) |
    parseInt(parts[3], 10)
  ) >>> 0;
}

/**
 * Convert integer to IPv4 address
 * @param int - Integer representation of IP address
 * @returns IPv4 address string
 */
export function intToIp(int: number): string {
  return [
    (int >>> 24) & 0xff,
    (int >>> 16) & 0xff,
    (int >>> 8) & 0xff,
    int & 0xff,
  ].join('.');
}

/**
 * Get network address from CIDR range
 * @param cidr - CIDR notation string
 * @returns Network address as integer
 */
export function getNetworkAddress(cidr: string): number {
  const { address, prefix } = parseCIDR(cidr);
  const ipInt = ipToInt(address);
  const mask = (~((1 << (32 - prefix)) - 1)) >>> 0;
  
  return (ipInt & mask) >>> 0;
}

/**
 * Get broadcast address from CIDR range
 * @param cidr - CIDR notation string
 * @returns Broadcast address as integer
 */
export function getBroadcastAddress(cidr: string): number {
  const { address, prefix } = parseCIDR(cidr);
  const ipInt = ipToInt(address);
  const mask = ((1 << (32 - prefix)) - 1) >>> 0;
  
  return (ipInt | mask) >>> 0;
}

/**
 * Check if IP address is within CIDR range
 * @param ip - IPv4 address string
 * @param cidr - CIDR notation string
 * @returns True if IP is within CIDR range
 */
export function isIPInCIDR(ip: string, cidr: string): boolean {
  try {
    const ipInt = ipToInt(ip);
    const networkInt = getNetworkAddress(cidr);
    const broadcastInt = getBroadcastAddress(cidr);
    
    return ipInt >= networkInt && ipInt <= broadcastInt;
  } catch (error) {
    console.error(`Error checking IP ${ip} in CIDR ${cidr}:`, error);
    return false;
  }
}

/**
 * Check if IP address matches any CIDR range in array
 * @param ip - IPv4 address string
 * @param cidrRanges - Array of CIDR notation strings
 * @returns True if IP matches any CIDR range
 */
export function isIPInAnyCIDR(ip: string, cidrRanges: string[]): boolean {
  return cidrRanges.some(cidr => isIPInCIDR(ip, cidr));
}

/**
 * Validate IPv4 address format
 * @param ip - IPv4 address string
 * @returns True if IP address is valid
 */
export function isValidIPv4(ip: string): boolean {
  const pattern = /^(\d{1,3}\.){3}\d{1,3}$/;
  
  if (!pattern.test(ip)) {
    return false;
  }
  
  const parts = ip.split('.');
  
  return parts.every(part => {
    const num = parseInt(part, 10);
    return num >= 0 && num <= 255;
  });
}

/**
 * Validate CIDR notation format
 * @param cidr - CIDR notation string
 * @returns True if CIDR notation is valid
 */
export function isValidCIDR(cidr: string): boolean {
  try {
    const { address, prefix } = parseCIDR(cidr);
    return isValidIPv4(address) && prefix >= 0 && prefix <= 32;
  } catch {
    return false;
  }
}

/**
 * Get all IP addresses in CIDR range
 * @param cidr - CIDR notation string
 * @returns Array of IP addresses in the range
 */
export function getIPsInCIDR(cidr: string): string[] {
  const networkInt = getNetworkAddress(cidr);
  const broadcastInt = getBroadcastAddress(cidr);
  const ips: string[] = [];
  
  for (let ip = networkInt; ip <= broadcastInt; ip++) {
    ips.push(intToIp(ip));
  }
  
  return ips;
}

/**
 * Get number of IP addresses in CIDR range
 * @param cidr - CIDR notation string
 * @returns Number of IP addresses in the range
 */
export function getCIDRSize(cidr: string): number {
  const { prefix } = parseCIDR(cidr);
  return Math.pow(2, 32 - prefix);
}

/**
 * Check IP access based on access control rules
 * @param ip - IPv4 address string
 * @param config - IP access control configuration
 * @returns True if IP is allowed access
 */
export function checkIPAccess(ip: string, config: IPAccessControlConfig): boolean {
  if (!isValidIPv4(ip)) {
    return config.defaultAction === 'allow';
  }
  
  for (const rule of config.rules) {
    if (isIPInCIDR(ip, rule.cidr)) {
      return rule.action === 'allow';
    }
  }
  
  return config.defaultAction === 'allow';
}

/**
 * Create IP access control configuration
 * @param defaultAction - Default action (allow or deny)
 * @param rules - Array of IP access rules
 * @returns IP access control configuration
 */
export function createIPAccessControl(
  defaultAction: 'allow' | 'deny',
  rules: IPAccessRule[]
): IPAccessControlConfig {
  return {
    defaultAction,
    rules: rules.filter(rule => isValidCIDR(rule.cidr)),
  };
}

/**
 * Get client IP address from request headers
 * @param headers - Request headers object
 * @returns Client IP address string
 */
export function getClientIP(headers: Record<string, string | string[] | undefined>): string {
  const forwarded = headers['x-forwarded-for'];
  const realIP = headers['x-real-ip'];
  
  if (forwarded) {
    const ips = Array.isArray(forwarded) ? forwarded[0] : forwarded;
    return ips.split(',')[0].trim();
  }
  
  if (realIP) {
    return Array.isArray(realIP) ? realIP[0] : realIP;
  }
  
  return '0.0.0.0';
}

/**
 * Common CIDR ranges for reference
 */
export const CommonCIDRRanges = {
  private: [
    '10.0.0.0/8',
    '172.16.0.0/12',
    '192.168.0.0/16',
  ],
  loopback: ['127.0.0.0/8'],
  linkLocal: ['169.254.0.0/16'],
  multicast: ['224.0.0.0/4'],
  reserved: ['240.0.0.0/4'],
  documentation: ['192.0.2.0/24', '198.51.100.0/24', '203.0.113.0/24'],
};
