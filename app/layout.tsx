import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'Great Eastern Company | Custom Clearing Agent & Consultant Since 1950',
  description: 'Great Eastern Company (GEC) is a pioneer customs clearing and forwarding agent in Pakistan with 75+ years of experience. We specialize in customs consulting, import/export clearance, EFS licensing, and DTRE services.',
  keywords: 'customs clearing agent, customs consultant, import clearance, export clearance, EFS license, DTRE, freight forwarding, Karachi customs, Pakistan logistics, duty free license, customs house agent',
  authors: [{ name: 'Great Eastern Company' }],
  creator: 'Great Eastern Company',
  publisher: 'Great Eastern Company',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://greateasterncompany.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Great Eastern Company | Custom Clearing Agent & Consultant Since 1950',
    description: 'Pioneer customs clearing and forwarding agent in Pakistan with 75+ years of experience. Specializing in customs consulting, import/export clearance, and EFS licensing.',
    url: 'https://greateasterncompany.com',
    siteName: 'Great Eastern Company',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/logo.jpeg',
        width: 800,
        height: 600,
        alt: 'Great Eastern Company Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Great Eastern Company | Custom Clearing Agent & Consultant',
    description: 'Pioneer customs clearing and forwarding agent in Pakistan with 75+ years of experience.',
    images: ['/images/logo.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/logo.jpeg',
    apple: '/images/logo.jpeg',
  },
}

export const viewport = {
  themeColor: '#1e3a5f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Great Eastern Company",
              "alternateName": "GEC",
              "url": "https://greateasterncompany.com",
              "logo": "https://greateasterncompany.com/images/logo.jpeg",
              "foundingDate": "1950",
              "description": "Pioneer customs clearing and forwarding agent in Pakistan with 75+ years of experience",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Suit 209, Techno City Office Tower, Hasrat Muhanni Road",
                "addressLocality": "Karachi",
                "addressCountry": "PK"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+92-21-32277113",
                  "contactType": "customer service"
                }
              ],
              "sameAs": []
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
