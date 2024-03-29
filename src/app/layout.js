
import "./globals.css";



export const metadata = {
  title: "Dashboard:UI Design",
  description: "Created a UI frontEnd for the assignment",
  author: "Kartikaya Kulshrestha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
