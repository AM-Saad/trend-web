/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental:{
    serverActions: true,
  },
  
  images: {
    domains: ["images.unsplash.com","images.ctfassets.net"],
  },
  basePath: "",
  routes: [
    {
      path: "/services",
      component: "pages/services",
    },
    {
      path: "/contactus",
      component: "pages/contactus",
    },
    {
      path: "/about",
      component: "pages/about",
    },
    {
      path: "/",
      component: "pages/page",
    },
    {
      path:'portfolio',
      component:'pages/portfolio'
    }
  ],
  async redirects() {
    return [
      {
        source: "/bitbucket",
        destination: "https://bitbucket.org/coformatique/cofo-web",
        permanent: false,
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  useFileSystemPublicRoutes: true
};

module.exports = nextConfig;
