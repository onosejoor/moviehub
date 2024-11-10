import { Toaster } from "react-hot-toast";
import "./globals.css";
import Nav from "./ui/Nav";
import Footer from "./ui/Footer";

export const metadata = {
  title: {
    template: "%s | Moviehub",
    default: "Moviehub Your Favourite movie finder",
  },

  description:
    "Discover your next favorite movie effortlessly with MovieHub, the ultimate movie finder. Whether you're a fan of action-packed blockbusters, heartwarming dramas, spine-tingling thrillers, or timeless classics, MovieHub has got you covered. With our extensive database and intuitive search features, you can explore movie ratings, reviews, trailers, and more.",
  keywords:
    "movie finder, movie search, movie database, film reviews, movie trailers, movie ratings, ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` overflow-x-hidden   bg-[#ffffff] `}>
        <Toaster
          toastOptions={{
            style: {
              textTransform: "capitalize",
            },
          }}
          position="top-center"
        />
        <div className="lg:max-w-[1400px] xl:m-auto">
          <main className="flex min-h-screen ">
            <Nav />
            <div className="flex-1">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
