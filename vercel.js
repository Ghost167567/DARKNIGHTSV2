{
  "version": 2,
  "builds": [
    {
      "src": "public/**",
      "use": "@vercel/static"
    },
    {
      "src": "public/api/**/*.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/public/api/$1.js"
    },
    {
      "src": "/(.*)",
      "dest": "/public/$1"
    }
  ]
}
