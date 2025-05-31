// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'MY-APP',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 4000', // یا پورت دلخواه
      cwd: './', // مسیر پروژه
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}

// $mp6VkC*Z2KwMri