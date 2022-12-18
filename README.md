# Cactive IP API

---

### API Information:

This is a free to use API hosted in Melbourne, Australia that provides detailed information of IP addresses.

You can request the API through the HTTP or HTTPS protocol and the `GET` method at [ip.cactive.co](https://ip.cactive.co).

You can either provide an IP address with `/[ip]` or leave it blank to get the IP address of the requester.

**Example:** https://ip.cactive.co/8.8.8.8

---

### Installation:

```bash
npm i @cactive/ip
```

### Usage:

```ts
import ip from "@cactive/ip";

const examples = async () => {
    // Get the IP address of the client
    const self = await ip.self();
    console.log(self.ip); // eg: 192.168.0.1

    // Get the time zone of a domain, IPv4 or IPv6
    const external = await ip.retrieve("cactive.cloud");
    console.log(external.time_zone); // eg: Australia/Melbourne
};

examples();
```

### Data Schema:

| Field              | Type           | Example             |
|--------------------|----------------|---------------------|
| `ip`               | String         | `8.8.8.8`           |
| `city`             | String or Null | `Ashburn`           |
| `state`            | String or Null | `Virginia`          |
| `state_code`       | String or Null | `VA`                |
| `country`          | String or Null | `United States`     |
| `country_code`     | String or Null | `US`                |
| `country_curerncy` | String or Null | `USD`               |
| `continent`        | String or Null | `North America`     |
| `continent_code`   | String or Null | `NA`                |
| `post_code`        | String or Null | `20149`             |
| `time_zone`        | String or Null | `America/New_York`  |
| `latitude`         | Number or Null | `39.03`             |
| `longitude`        | Number or Null | `-77.5`             |
| `reverse_dns`      | String or Null | `dns.google`        |
| `isp`              | String or Null | `Google LLC`        |
| `isp_org`          | String or Null | `Google Public DNS` |
| `as_number`        | String or Null | `AS15169`           |
| `as_name`          | String or Null | `GOOGLE`            |
| `as_org`           | String or Null | `Google LLC`        |
| `detection_vpn`    | Boolean        | `false`             |
| `detection_server` | Boolean        | `true`              |
| `detection_mobile` | Boolean        | `false`             |