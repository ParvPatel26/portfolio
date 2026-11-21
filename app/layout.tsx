import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parv Patel — Full-Stack Software Engineer",
  description:
    "Portfolio of Parv Patel, a full-stack software engineer and AI practitioner in Melbourne. Python, Django, FastAPI, Next.js, LangGraph, AWS and Azure.",
  openGraph: {
    title: "Parv Patel — Full-Stack Software Engineer",
    description: "Full-stack + AI projects, experience and skills.",
    type: "website",
  },
};

// Sets the theme before paint to avoid a light/dark flash.
const themeScript = `
try {
  var t = localStorage.getItem('theme');
  if (t === 'light') document.documentElement.classList.remove('dark');
  else document.documentElement.classList.add('dark');
} catch (e) { document.documentElement.classList.add('dark'); }
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
