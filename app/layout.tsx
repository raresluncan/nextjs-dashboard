import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <p style={{ backgroundColor: 'red' }}>common layout for all pages</p>
        {children}
      </body>
    </html>
  );
}
