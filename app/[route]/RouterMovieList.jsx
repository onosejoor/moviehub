import Link from "next/link";
import Img from "../components/Img";
import BookMarkBtn from "../ui/BookMarkBtn.jsx";

const RouterMovieList = ({
  route,
  path,
  adult,
  rating,
  id,
  date,
  title,
  bookmark,
}) => {
  const image = `https://image.tmdb.org/t/p/w500/${path}`;

  return (
    <>
      <div className="relative flex flex-col gap-5  w-[200px] bg-white overflow-hidden h-full ">
        <div className="group/link ">
          {" "}
          <div className="relative overflow-hidden h-72 ">
            <Link href={`${route}/${id.toString()}`}>
              <div className=" flex h-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  opacity-0 absolute z-0 duration-200  group-hover/link:z-1 group-hover/link:opacity-100">
                <svg
                  fill="#000000"
                  viewBox="0 0 24 24"
                  id="top-right-circle"
                  data-name="Flat Line"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon flat-line"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <circle
                      id="secondary"
                      cx="12"
                      cy="12"
                      r="9"
                      style={{
                        fill: "#00008B",
                        strokeWidth: "0.9359999999999999",
                      }}
                    ></circle>
                    <polyline
                      id="primary"
                      points="11 9 15 9 15 13"
                      style={{
                        fill: "none",
                        stroke: "#ffffff",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "0.9359999999999999",
                      }}
                    ></polyline>
                    <path
                      id="primary-2"
                      data-name="primary"
                      d="M9,15l6-6m3.36-3.36a9,9,0,1,0,0,12.72A9,9,0,0,0,18.36,5.64Z"
                      style={{
                        fill: "none",
                        stroke: "#ffffff",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "0.9359999999999999",
                      }}
                    ></path>
                  </g>
                </svg>
              </div>
            </Link>

            <Img
              src={image}
              className={
                "w-full  group-hover/link:brightness-50 group-hover/link:grayscale duration-200 object-cover rounded-xl h-full"
              }
              alt={title}
            />
            {adult && (
              <strong className="absolute right-[10px] top-[10px] p-2 rounded-full bg-blue-100 text-black ">
                18+
              </strong>
            )}
          </div>
        </div>

        <div className={`flex gap-4 flex-col`}>
          <div className="flex justify-between items-center ">
            <div className="flex gap-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="blue"
                xmlns="http://www.w3.org/2000/svg"
                height={"20px"}
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z"
                    strokeWidth="0.9600000000000002"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              <p className="text-base text-gray-600 ">{rating}</p>
            </div>

            {!bookmark ? (
              <BookMarkBtn
                path={path}
                rating={rating}
                adult={adult}
                id={id}
                date={date}
                title={title}
                route={route}
              />
            ) : (
              <BookMarkBtn
              path={path}
              rating={rating}
              adult={adult}
              id={id}
              date={date}
              title={title}
              route={route}
              deleteBtn={true}
            />
            )}
          </div>
          <div className="flex gap-2 items-center">
            <svg
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
              strokeWidth="0.00024000000000000003"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14H16C16.5523 14 17 13.5523 17 13C17 12.4477 16.5523 12 16 12H8Z"
                  fill="blue"
                ></path>{" "}
                <path
                  d="M7 17C7 16.4477 7.44772 16 8 16H12C12.5523 16 13 16.4477 13 17C13 17.5523 12.5523 18 12 18H8C7.44772 18 7 17.5523 7 17Z"
                  fill="blue"
                ></path>{" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7 2C7.55228 2 8 2.44772 8 3V4H16V3C16 2.44772 16.4477 2 17 2C17.5523 2 18 2.44772 18 3V4.10002C20.2822 4.56329 22 6.58104 22 9V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V9C2 6.58104 3.71776 4.56329 6 4.10002V3C6 2.44772 6.44772 2 7 2ZM20 10H4V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V10Z"
                  fill="blue"
                ></path>{" "}
              </g>
            </svg>
            <time dateTime={date} className="text-base text-gray-600">
              {date}
            </time>
          </div>
        </div>
      </div>
    </>
  );
};

export default RouterMovieList;
