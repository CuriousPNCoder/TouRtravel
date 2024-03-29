import Cards from "../components_tool/card";
import Footer from "../components_tool/footer";
import Heroslider from "../components_tool/heroSlider";
import ContentDetailsCard from "../components_tool/content_detailscard";
import ContentDetailsCardRight from "../components_tool/content_detailscardright";
import ClientSection from "../components_tool/client_section";
import BottomForm from "../components_tool/bottom_form";
import slider1 from "../../assets/img/home-slider/slider-1.jpg";
import slider2 from "../../assets/img/home-slider/slider-2.jpg";
import slider3 from "../../assets/img/home-slider/slider-3.jpg";
import IconCard from "../components_tool/icon_relatedtopics";
import SaleOffer from "../../assets/img/card-img/discount.png";
import EmiFacility from "../../assets/img/card-img/loan.png";
import CallService from "../../assets/img/card-img/customer-service.png";
import Available24 from "../../assets/img/card-img/24-hours.png";



const Home = () => {
  const cards = [
    {
      id: 1,
      title: "Digha",
      description:
        "A tour of the city and it's surrounding led by a professional guide.",
      imageUrl:
        "https://media2.thrillophilia.com/images/photos/000/111/227/original/1584452383_shutterstock_659752654.jpg?width=975&height=600",
    },
    {
      id: 2,
      title: "Darjeeling",
      description: "The real magic is here where you can enjoy the best view.",
      imageUrl:
        "https://media.licdn.com/dms/image/D4D12AQFdnTxuBceVjw/article-cover_image-shrink_600_2000/0/1695134200669?e=2147483647&v=beta&t=ig_5fMXVzDFDaG32IP9W70e-WdrgA8MxC8rbqIRC7ws",
    },
    {
      id: 3,
      title: "Puri",
      description: "Visit the beautiful site and that surround to experience.",
      imageUrl:
        "https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2021/07/jagannath-temple-pti-1625824583-1626056477.jpg",
    },
    {
      id: 4,
      title: "Sea Beach",
      description: "Visit the beautiful site and that surround to experience.",
      imageUrl:
        "https://assets-global.website-files.com/5ca5fe687e34be0992df1fbe/626d20ba347ed25085aecf1b_beach-2022-03-09-10-00-33-utc-min%20(1).jpg",
    },
    {
      id: 5,
      title: "Amazon Jongle",
      description: "Visit the beautiful site and that surround to experience.",
      imageUrl:
        "https://cdn.britannica.com/31/130031-050-469B9571/stream-Amazon-Rainforest-Ecuador.jpg",
    },
    {
      id: 6,
      title: "Manali",
      description: "Visit the beautiful site and that surround to experience.",
      imageUrl:
        "https://www.indiadrivertours.com/wp-content/uploads/2017/06/tpkg-manalitour.jpg",
      
    },
  ];
  const iconcards = [
    {
      id: 1,
      heading: "Upto 20% off",
      description:
        " Book Hotels, Flights, Trains, Bus and Cabs with upto 50% off.",
      imgUrl: SaleOffer,
    },
    {
      id: 2,
      heading: "EMI Facility",
      description: "All types of monthly scheme provide ",
      imgUrl: EmiFacility,
    },
    {
      id: 3,
      heading: "Call Services",
      description: "We are try to always available in call service",
      imgUrl: CallService,
    },
    {
      id: 4,
      heading: "24*7 Available",
      description: " We are try to always available day or night",
      imgUrl: Available24,
    },
  ];

  const images = [slider1, slider2, slider3];
  return (
    <>
      <Heroslider images={images} />
      <ClientSection />
      <div className="flex items-center content-center justify-center  px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 justify-center gap-4">
          {iconcards.map((iconcard) => (
            <IconCard iconcard={iconcard} />
          ))}
        </div>
      </div>
      <div className="p-7 animate__animated animate__fadeInLeft animate__duration-2s">
        <ContentDetailsCard />
      </div>
      <div className="p-7 animate__animated animate__fadeInRight animate__duration-2s">
        <ContentDetailsCardRight />
      </div>
      <div className="p-7 animate__animated animate__fadeInLeft animate__duration-2s">
        <ContentDetailsCard />
      </div>
      <div>
        <div className="animate__animated animate__pulse animate__duration-2s">
          <h2 class="text-4xl font-extrabold dark:text-black text-center">
            Explore Our Popular destinations
          </h2>
          <div className="flex items-center content-center justify-center pt-10 pb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-4">
              {cards.map((card) => (
                <Cards card={card} />
              ))}
            </div>
          </div>
        </div>

        <div class="w-full p-4 text-center bg-white border border-gray-200 shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            Work fast from anywhere
          </h5>
          <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
            Stay up to date and move work forward with Flowbite on iOS &
            Android. Download the app today.
          </p>
          <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <a
              href="#"
              class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
              <svg
                class="me-3 w-7 h-7"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="apple"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512">
                <path
                  fill="currentColor"
                  d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
              </svg>
              <div class="text-left rtl:text-right">
                <div class="mb-1 text-xs">Download on the</div>
                <div class="-mt-1 font-sans text-sm font-semibold">
                  Mac App Store
                </div>
              </div>
            </a>
            <a
              href="#"
              class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
              <svg
                class="me-3 w-7 h-7"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google-play"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <path
                  fill="currentColor"
                  d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path>
              </svg>
              <div class="text-left rtl:text-right">
                <div class="mb-1 text-xs">Get in on</div>
                <div class="-mt-1 font-sans text-sm font-semibold">
                  Google Play
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <BottomForm />
      <Footer />
    </>
  );
};

export default Home;
