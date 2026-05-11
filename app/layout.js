import './globals.css';

export const metadata = {
  title: 'Timetable Management',
  description: 'Dynamic non-AI timetable generator',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
