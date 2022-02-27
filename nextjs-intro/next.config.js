const { redirect } = require('next/dist/server/api-utils')


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //url change
  async redirects(){
    return [
      {
        source:"/old-blog/:path*",
        destination:"/new-sexy-blog/:path*",
        permanent:false
      }
    ]
  },
  //url not change
  async rewrites(){
    return[
      {
        source:"/api/movies",
        destination:`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`,
      }
    ]
  }
}

module.exports = nextConfig
