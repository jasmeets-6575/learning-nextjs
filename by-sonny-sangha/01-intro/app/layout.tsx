import "@/styles/globals.css";
import Header from "./header";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>My website</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
