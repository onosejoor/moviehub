import { Toaster } from "react-hot-toast";
import "./globals.css";
import Nav from "./ui/Nav";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  // bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]
  return (
    <html lang="en">
      <body className={` overflow-x-hidden   bg-[#ffffff]`}>
        <Toaster
          toastOptions={{
            style: {
              textTransform: "capitalize",
            },
          }}
          position="top-center"
        />
        <main className="flex">
          <Nav />
          <div className="flex-1 ">{children}</div>
        </main>
      </body>
    </html>
  );
}
