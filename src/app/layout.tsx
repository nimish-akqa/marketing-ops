import './globals.scss'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import 'react-datepicker/dist/react-datepicker.min.css';


const poppins = Poppins({ weight:['400','500'],subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PMS",
  description: "Marketting Ops PMS",
};

export default function RootLayout(props: { children: React.ReactNode, modal: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Header></Header>
        <Sidebar></Sidebar>
        {props.children}
        {props.modal}
      <Footer></Footer>
        </body>
    </html>
  );
}
