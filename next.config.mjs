/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['membersgram.com', 'cdn.example.com', 'https://images.unsplash.com/'],

        // domains: ['membersgram.com'],
        //   domains: ['api.together.ai'] // ← اینجا دامنه تصویرت رو اضافه کن
      },
      // output: 'export', 
};

export default nextConfig;
