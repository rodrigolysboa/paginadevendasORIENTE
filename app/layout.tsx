import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'OrienteTattoo.App - Seu assistente de decalques digitais',
  description: 'Transforme fotos de tatuagens em decalques prontos para imprimir em segundos com apenas 1 clique!',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
