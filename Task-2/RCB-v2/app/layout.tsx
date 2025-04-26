import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RCB Fan Website",
  description: "Created By Nidish a fan of RCB",
  generator: "Niidsh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex flex-col min-h-screen">
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
