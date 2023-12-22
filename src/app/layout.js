import "./globals.css";

export const metadata = {
  title: "CKB DAO (PoC)",
  description: "An Papp to manage CKB DAO assets",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main class="max-w-5xl mx-auto prose dark:prose-invert">
          {children}
        </main>
      </body>
    </html>
  );
}
