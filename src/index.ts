import phin from "phin";

export type Data = {
  ip: string;
  city: string | null;
  state: string | null;
  state_code: string | null;
  country: string | null;
  country_code: string | null;
  country_currency: string | null;
  continent: string | null;
  continent_code: string | null;
  post_code: string | null;
  time_zone: string | null;
  latitude: number | null;
  longitude: number | null;
  reverse_dns: string | null;
  isp: string | null;
  isp_org: string | null;
  as_number: string | null;
  as_name: string | null;
  as_org: string | null;
  detection_vpn: boolean;
  detection_server: boolean;
  detection_mobile: boolean;
};

const fetch = async (ip: string | null): Promise<Data> => {
  const { body }: any = await phin({
    url: `https://ip.cactive.co/${ip ?? ''}`,
    method: "GET",
    parse: "json",
  }).catch((error) => {
    throw new Error(error);
  });

  if (!body.success) throw new Error(body.errors[0].message);
  return body.data;
}

export const self = (): Promise<Data> => fetch(null);
export const retrieve = (ip: string): Promise<Data> => fetch(ip);