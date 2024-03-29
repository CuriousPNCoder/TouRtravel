import React from 'react'

const ContentDetailsCardRight = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-end gap-4">
          <div className="background-color: bg-white" drop-shadow-md>
            <div className="px-10 py-10">
              <p className="text-3xl">Getting Here & Around</p>
              <p className="pt-6">
                With 4 international airports, served by a wealth of global
                carriers, getting to and around the Kingdom couldn’t be easier.
                A first-rate transportation system connects Saudi Arabia’s
                provinces and cities, serving millions of people each day. With
                4 international airports,
              </p>
              <p className="pt-4 pb-6">
                With 4 international airports, served by a wealth of global
                carriers, getting to and around the Kingdom couldn’t be easier.
                A first-rate transportation system connects Saudi Arabia’s.
              </p>
              <a
                href="#"
                class="inline-flex items-center px-4 py-3 text-sm font-medium text-center text-white rounded-lg bg-amber-500">
                Read more
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <img src="https://img.freepik.com/free-vector/girl-with-travelling-objects-white-background_1308-87230.jpg?t=st=1711697443~exp=1711701043~hmac=72b6050643141220ac5eb2a7bc030bddb8cc666baa3aef6054c291c9eb0dd97f&w=740" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentDetailsCardRight;