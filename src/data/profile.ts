// All of your page content lives here — edit this file, not the components.

export const profile = {
  name: "Rainers",
  handle: "@rainers",
  tagline: "Developer · aim trainer · home-server tinkerer",
  avatar: "/avatar.svg", // drop your own image in /public and change this path

  // Discord user ID for live status (Lanyard).
  // Discord → Settings → Advanced → Developer Mode, then right-click yourself → Copy User ID.
  // You must also join discord.gg/lanyard for the API to see your presence.
  discordId: "", // e.g. "123456789012345678"

  now: [
    "Building this site with Astro",
    "Planning a home server (i5-12400, Jellyfin, Minecraft)",
  ],

  about:
    "Write a couple of sentences about yourself here: what you build, what you're into, what people should know.",

  links: [
    { label: "GitHub", url: "https://github.com/", icon: "github" },
    { label: "Discord", url: "https://discord.com/users/", icon: "discord" },
    { label: "Email", url: "mailto:you@example.com", icon: "mail" },
  ],
} as const;

export type LinkIcon = (typeof profile.links)[number]["icon"];
