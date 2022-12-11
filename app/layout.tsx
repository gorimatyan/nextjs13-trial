import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header className="flex p-2 bg-blue-700">
          <h1 className="text-white">これはapp/layoutだぜ</h1>
          <div className="px-2">
            <Link
              href="./issues"
              className="py-2 px-4 mr-1 border border-black bg-white rounded-lg"
            >
              /issuesへ
            </Link>
            <Link
              href="./"
              className="py-2 px-4 mr-1 border border-black bg-white rounded-lg"
            >
              /　へ
            </Link>
          </div>
        </header>
        <main className="px-3 py-4">{children}</main>
      </body>
    </html>
  );
}
