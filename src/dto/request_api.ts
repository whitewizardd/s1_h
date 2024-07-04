export const ip_info_url = (ip_address: string): string => {
  return `https://ipinfo.io/${ip_address}?token=${process.env.IPINFO_API_KEY}`;
};
