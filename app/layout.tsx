import "./globals.css";

import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import ClientOnly from "./components/clientOnly";
import Navbar from "./components/navbar/Navbar";
import RegisterModel from "./components/models/RegisterModel";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModel from "./components/models/LoginModel";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/models/Rent";
import SearchModel from "./components/models/SearchModel";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "airbnb",
  description: "airbnb clone",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <Navbar currentUser={currentUser} />
          <RegisterModel />
          <LoginModel />
          <RentModal />
          <SearchModel />
        </ClientOnly>
        <div className="pd-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
