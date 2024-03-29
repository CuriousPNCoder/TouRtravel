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
            <img src="https://images.unsplash.com/photo-1598135753163-6167c1a1ad65?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentDetailsCardRight;