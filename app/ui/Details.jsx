import Img from "../components/Img";
import Modal from "../components/Modal";

export default function Details({
  adult,
  src,
  overview,
  release_date,
  backdrop,
  runtime,
  title,
  vote,
  languages,
  companies,
  genres,
}) {
  const imgUrl = process.env.IMG_URL;
  return (
    <>
      <section className="p-5">
        <div className="flex items-center flex-col md:flex-row py-5 w-full  gap-10">
          <div className="h-full w-full md:min-w-72 lg:min-w-96 self-start ">
            <Img
              src={src}
              alt={title}
              className={" min-w-full  h-full rounded-xl"}
            />
          </div>
          <div>
            <div className="flex items-center md:items-start flex-col gap-5">
              <div className="flex gap-5 items-center">
                <h2 className="text-4xl sm:text-left text-center md:w-4/5 w-full font-semibold flex items-center gap-5">
                  {title}{" "}
                </h2>
                {adult && (
                  <span className="p-2 rounded-full bg-blue-200 text-xs ">
                    18+
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-7 my-5">
                <p className="text-gray-700 lg:w-4/5 w-full text-center lg:text-left">{overview}</p>

                <div className="flex gap-5 flex-wrap md:justify-start justify-center">
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
                    <b className="text-gray-600 font-semibold">{vote}</b>
                  </div>
                  <div className="flex gap-3 text-blue-950">
                    Release Date:{" "}
                    <span>
                      <time
                        className="font-semibold text-gray-600"
                        dateTime={release_date}
                      >
                        {release_date}
                      </time>
                    </span>
                  </div>
                  <div className="flex gap-3 text-blue-950">
                    Runtime:{" "}
                    <span className="font-semibold text-gray-600">
                      {runtime}mins
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="blue"
                      aria-label="language"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height={"25px"}
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path d="M5 8l6 6"></path>{" "}
                        <path d="M4 14l6-6 2-3"></path>{" "}
                        <path d="M2 5h12"></path> <path d="M7 2h1"></path>{" "}
                        <path d="M22 22l-5-10-5 10"></path>{" "}
                        <path d="M14 18h6"></path>{" "}
                      </g>
                    </svg>
                    :{" "}
                    {languages.map((language, index) => {
                      return (
                        <b key={index} className="text-gray-700">
                          {language.english_name}
                        </b>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="flex gap-5 flex-wrap justify-center md:justify-start">
                {genres.map((genre) => {
                  return (
                    <div
                      key={genre.id}
                      className="px-4 py-2 rounded-lg bg-blue-200 "
                    >
                      {genre.name}
                    </div>
                  );
                })}
              </div>
              <div className="sm:justify-start justify-center flex">
                <br />
                <Modal src={backdrop} alt={title} />
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-5">
          <h2 className="text-lg text-blue-950 w-fit my-7 mx-auto px-3 py-2 rounded-2xl bg-blue-200">
            Production Companies
          </h2>
          <div className="flex gap-10 justify-center flex-wrap p-3">
            {companies.map((company) => {
              if (company.logo_path) {
                return (
                  <Img
                  placeholder={true}
                    key={company.id}
                    className={"w-40 h-20"}
                    src={`${imgUrl}/w185${company.logo_path}`}
                    alt={company.name}
                  />
                );
              }
            })}
          </div>
        </div>
      </section>
    </>
  );
}
