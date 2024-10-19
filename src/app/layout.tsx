
import "./globals.css";
// import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

 
      <Navbar/>
        {children}
     <Footer/>
      </body>
    </html>
  );
}
