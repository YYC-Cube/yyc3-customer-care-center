import { describe, it, expect } from 'vitest';
import {
  parseCIDR,
  ipToInt,
  intToIp,
  getNetworkAddress,
  getBroadcastAddress,
  isIPInCIDR,
  isIPInAnyCIDR,
  isValidIPv4,
  isValidCIDR,
  getIPsInCIDR,
  getCIDRSize,
  checkIPAccess,
  createIPAccessControl,
  CommonCIDRRanges,
} from '@/lib/cidr';

describe('CIDR Utilities', () => {
  describe('parseCIDR', () => {
    it('should parse valid CIDR notation', () => {
      const result = parseCIDR('192.168.1.0/24');
      expect(result.address).toBe('192.168.1.0');
      expect(result.prefix).toBe(24);
    });

    it('should throw error for invalid CIDR format', () => {
      expect(() => parseCIDR('invalid-cidr')).toThrow('Invalid CIDR format');
    });

    it('should throw error for invalid prefix', () => {
      expect(() => parseCIDR('192.168.1.0/33')).toThrow('Invalid CIDR prefix');
    });
  });

  describe('ipToInt', () => {
    it('should convert valid IPv4 address to integer', () => {
      expect(ipToInt('192.168.1.1')).toBe(3232235777);
      expect(ipToInt('0.0.0.0')).toBe(0);
      expect(ipToInt('255.255.255.255')).toBe(4294967295);
    });

    it('should throw error for invalid IPv4 address', () => {
      expect(() => ipToInt('invalid')).toThrow('Invalid IPv4 address');
    });
  });

  describe('intToIp', () => {
    it('should convert integer to IPv4 address', () => {
      expect(intToIp(3232235777)).toBe('192.168.1.1');
      expect(intToIp(0)).toBe('0.0.0.0');
      expect(intToIp(4294967295)).toBe('255.255.255.255');
    });
  });

  describe('getNetworkAddress', () => {
    it('should calculate network address for /24 subnet', () => {
      const network = getNetworkAddress('192.168.1.0/24');
      expect(intToIp(network)).toBe('192.168.1.0');
    });

    it('should calculate network address for /16 subnet', () => {
      const network = getNetworkAddress('10.0.0.0/16');
      expect(intToIp(network)).toBe('10.0.0.0');
    });
  });

  describe('getBroadcastAddress', () => {
    it('should calculate broadcast address for /24 subnet', () => {
      const broadcast = getBroadcastAddress('192.168.1.0/24');
      expect(intToIp(broadcast)).toBe('192.168.1.255');
    });

    it('should calculate broadcast address for /16 subnet', () => {
      const broadcast = getBroadcastAddress('10.0.0.0/16');
      expect(intToIp(broadcast)).toBe('10.0.255.255');
    });
  });

  describe('isIPInCIDR', () => {
    it('should return true for IP within CIDR range', () => {
      expect(isIPInCIDR('192.168.1.100', '192.168.1.0/24')).toBe(true);
      expect(isIPInCIDR('10.0.0.5', '10.0.0.0/8')).toBe(true);
    });

    it('should return false for IP outside CIDR range', () => {
      expect(isIPInCIDR('192.168.2.100', '192.168.1.0/24')).toBe(false);
      expect(isIPInCIDR('11.0.0.5', '10.0.0.0/8')).toBe(false);
    });

    it('should handle edge cases', () => {
      expect(isIPInCIDR('192.168.1.0', '192.168.1.0/24')).toBe(true);
      expect(isIPInCIDR('192.168.1.255', '192.168.1.0/24')).toBe(true);
    });
  });

  describe('isIPInAnyCIDR', () => {
    it('should return true if IP matches any CIDR range', () => {
      const ranges = ['192.168.1.0/24', '10.0.0.0/8'];
      expect(isIPInAnyCIDR('192.168.1.100', ranges)).toBe(true);
      expect(isIPInAnyCIDR('10.0.0.5', ranges)).toBe(true);
    });

    it('should return false if IP matches no CIDR range', () => {
      const ranges = ['192.168.1.0/24', '10.0.0.0/8'];
      expect(isIPInAnyCIDR('172.16.0.1', ranges)).toBe(false);
    });
  });

  describe('isValidIPv4', () => {
    it('should return true for valid IPv4 addresses', () => {
      expect(isValidIPv4('192.168.1.1')).toBe(true);
      expect(isValidIPv4('0.0.0.0')).toBe(true);
      expect(isValidIPv4('255.255.255.255')).toBe(true);
    });

    it('should return false for invalid IPv4 addresses', () => {
      expect(isValidIPv4('256.1.1.1')).toBe(false);
      expect(isValidIPv4('192.168.1')).toBe(false);
      expect(isValidIPv4('invalid')).toBe(false);
    });
  });

  describe('isValidCIDR', () => {
    it('should return true for valid CIDR notation', () => {
      expect(isValidCIDR('192.168.1.0/24')).toBe(true);
      expect(isValidCIDR('10.0.0.0/8')).toBe(true);
      expect(isValidCIDR('0.0.0.0/0')).toBe(true);
    });

    it('should return false for invalid CIDR notation', () => {
      expect(isValidCIDR('invalid')).toBe(false);
      expect(isValidCIDR('192.168.1.0/33')).toBe(false);
    });
  });

  describe('getIPsInCIDR', () => {
    it('should return all IPs in small CIDR range', () => {
      const ips = getIPsInCIDR('192.168.1.0/30');
      expect(ips).toHaveLength(4);
      expect(ips[0]).toBe('192.168.1.0');
      expect(ips[3]).toBe('192.168.1.3');
    });
  });

  describe('getCIDRSize', () => {
    it('should calculate size of CIDR range', () => {
      expect(getCIDRSize('192.168.1.0/24')).toBe(256);
      expect(getCIDRSize('10.0.0.0/8')).toBe(16777216);
      expect(getCIDRSize('192.168.1.0/30')).toBe(4);
    });
  });

  describe('checkIPAccess', () => {
    it('should allow IP matching allow rule', () => {
      const config = createIPAccessControl('deny', [
        { cidr: '192.168.1.0/24', action: 'allow' },
      ]);
      expect(checkIPAccess('192.168.1.100', config)).toBe(true);
    });

    it('should deny IP matching deny rule', () => {
      const config = createIPAccessControl('allow', [
        { cidr: '10.0.0.0/8', action: 'deny' },
      ]);
      expect(checkIPAccess('10.0.0.5', config)).toBe(false);
    });

    it('should use default action when no rules match', () => {
      const allowConfig = createIPAccessControl('allow', []);
      const denyConfig = createIPAccessControl('deny', []);
      
      expect(checkIPAccess('192.168.1.1', allowConfig)).toBe(true);
      expect(checkIPAccess('192.168.1.1', denyConfig)).toBe(false);
    });
  });

  describe('CommonCIDRRanges', () => {
    it('should contain common private network ranges', () => {
      expect(CommonCIDRRanges.private).toContain('10.0.0.0/8');
      expect(CommonCIDRRanges.private).toContain('172.16.0.0/12');
      expect(CommonCIDRRanges.private).toContain('192.168.0.0/16');
    });

    it('should contain loopback range', () => {
      expect(CommonCIDRRanges.loopback).toContain('127.0.0.0/8');
    });
  });
});
