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
  title: 'Great Eastern Company | Custom Clearing Agent & Consultant Since 1981',
  description: 'Great Eastern Company (GEC) is a pioneer customs clearing and forwarding agent in Pakistan with 45+ years of experience. We specialize in custom clearance, custom consultancy, and freight forwarding for importers and exporters.',
  keywords: 'custom clearance, custom consultancy, freight forwarding, customs consultant, import clearance, export logistics, Karachi customs, Pakistan logistics, customs house agent',
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
    title: 'Great Eastern Company | Custom Clearing Agent & Consultant Since 1981',
    description: 'Pioneer customs clearing and forwarding agent in Pakistan with 45+ years of experience. Specializing in custom clearance, custom consultancy, and freight forwarding.',
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
    description: 'Pioneer customs clearing and forwarding agent in Pakistan with 45+ years of experience in custom clearance, custom consultancy, and freight forwarding.',
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
              "foundingDate": "1981",
              "description": "Pioneer customs clearing and forwarding agent in Pakistan with 45+ years of experience",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Suite No# 513, Chapal Plaza, Hasrat Mohani Rd, Serai Quarter, Karachi, 74000",
                "addressLocality": "Karachi",
                "addressCountry": "PK"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+92-322-2164085",
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
