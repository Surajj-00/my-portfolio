import type { Metadata } from "next";
import {Space_Grotesk} from "next/font/google";
import "./globals.css";

const space_grotesk = Space_Grotesk({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
	title: "Suraj Sahu",
	description: "A Frontend Developer",
  icons: {
    icon: '/icons/next.svg'
  }

};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={space_grotesk.className}>
      <body>{children}</body>
    </html>
  )
}
