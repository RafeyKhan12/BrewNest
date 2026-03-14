import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  template: "%s | BrewNest"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
