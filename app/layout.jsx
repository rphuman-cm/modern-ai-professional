import './globals.css'

export const metadata = {
  title: 'Modern AI Professional — AI Competence for the Work That Actually Matters',
  description:
    'Modern AI Professional helps working professionals develop practical AI competence using the J.E.T. Model: Judgment, Execution, and Trust. Not theory. Professional skill.',
  keywords: [
    'AI competence',
    'AI for professionals',
    'practical AI skills',
    'AI at work',
    'JET model',
    'AI judgment',
    'professional development',
    'AI training',
  ],
  openGraph: {
    title: 'Modern AI Professional',
    description: 'AI competence for the work that actually matters.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modern AI Professional',
    description: 'AI competence for the work that actually matters.',
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
