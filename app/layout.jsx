import "./globals.css";

export const metadata = {
  title: "Nova Pay",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
