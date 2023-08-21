import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PMS",
  description: "Marketting Ops PMS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        <Sidebar></Sidebar>
        {children}
      <Footer></Footer>
        </body>
    </html>
  );
}
