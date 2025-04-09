import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

const nextConfig: NextConfig = {};

const withNextIntl = createNextIntlPlugin();
export default withMDX(withNextIntl(nextConfig));