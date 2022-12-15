import '../styles/globals.css';
import Header from './Header';
export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
