import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { 
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton } from "@clerk/nextjs";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight:["400","500","600" ,"700"],
  variable:"--font-poppins",
});

export const metadata: Metadata = {
  title: "Evently",
  description: "Events App",
  icons:{
    icon:"/assets/images/logo.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
     <ClerkProvider>
      <html lang="en">
        <body>
          
          <main>
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
    
  );
}
