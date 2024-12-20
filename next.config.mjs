import createNextIntlPlugin from 'next-intl/plugin';
/** @type {import('next').NextConfig} */


const withNextIntl = createNextIntlPlugin();
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
};

export default withNextIntl(nextConfig);
