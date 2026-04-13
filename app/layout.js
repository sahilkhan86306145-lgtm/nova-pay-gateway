import "./globals.css";

export const metadata = {
  title: "Nova Pay",
  description: "Payment Gateway",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
