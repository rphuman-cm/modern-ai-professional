import '../styles/globals.css'

export const metadata = {
  title: {
    default: 'Modern AI Professional — AI Competence for the Work That Actually Matters',
    template: '%s | Modern AI Professional',
  },
  description:
    'Modern AI Professional helps working professionals develop practical AI competence through the J.E.T. Model: Judgment, Execution, and Trust. Not hype. Professional skill.',
  keywords: [
    'AI competence', 'AI for professionals', 'practical AI skills',
    'AI at work', 'JET model', 'AI judgment', 'professional development',
    'AI prompting', 'AI training for managers',
  ],
  openGraph: {
    siteName: 'Modern AI Professional',
    locale: 'en_US',
    type: 'website',
  },
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
