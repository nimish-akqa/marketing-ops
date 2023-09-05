import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SidebarContextProvider from './sidebar-context';

import './globals.scss';
import '../components/Header/header.scss';
import '../components/Sidebar/sidebar.scss';
import '../styles/form.scss';
import '../styles/list.scss';
import 'react-datepicker/dist/react-datepicker.min.css';

const poppins = Poppins({ weight: ['400'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PMS',
  description: 'Marketting Ops PMS'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <SidebarContextProvider>
          <Header></Header>
          <Sidebar></Sidebar>
          <div className="mainContent">
            <div className="pageContent">{children}</div>
          </div>
          <Footer></Footer>
        </SidebarContextProvider>
      </body>
    </html>
  );
}
