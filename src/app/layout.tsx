import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
    metadataBase: new URL('https://pyro.host/'),
    title: 'pyro.host',
    description: 'Pyro is where your world plays. Instantly available, lag-free servers with unmatched value.',
    openGraph: {
        title: 'Pyro',
        description: 'Pyro where your world plays. Instantly available, lag-free servers with unmatched value.',
        images: [
            {
                url: './ogimage.png',
            },
        ],
        url: 'https://pyro.host',
    },
};

export const viewport: Viewport = {
    themeColor: '#ff4b40',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            data-pyro-html=''
            lang='en'
            className='dark relative min-h-screen w-full overflow-x-hidden bg-black antialiased [font-synthesis-weight:none]'
        >
            <body
                data-pyro-body=''
                className={`${jakarta.className} relative flex min-h-screen w-full flex-col overflow-x-hidden`}
            >
                <>{children}</>
            </body>
            <GoogleAnalytics gaId='G-NWVJ0FNXG1' />
        </html>
    );
}
