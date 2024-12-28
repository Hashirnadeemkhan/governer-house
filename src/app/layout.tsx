
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
       <head>
        {/* Add the Bootstrap CDN link here */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          integrity="sha384-XXZXF9G9c5KzMj+TcHGxNfySjCvYzJxlEVmsZ4t1Q53fuKJHpFsNPEFJZnKwM5RZ"
          crossOrigin="anonymous"
        />
      </head>
      <body>

 
      <Navbar/>
        {children}
     <Footer/>

     
     
      </body>
    </html>
  );
}
