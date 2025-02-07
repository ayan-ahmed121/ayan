<<<<<<< HEAD
/** @type {import('next').NextConfig} */
const nextConfig = {};
=======
import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'cdn.sanity.io'
            }
        ]
    }
};
>>>>>>> 6d9faf5 (Initial commit)

export default nextConfig;
