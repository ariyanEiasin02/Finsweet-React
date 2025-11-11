import React from "react";
import Slider from "react-slick";
import testmonial from "../../assets/testmonial.png";

const reviews = [
  {
    text: "The best agency we’ve worked with so far. They understand our product well.",
    name: "Jenny Wilson",
    role: "Vice President",
    img: testmonial,
  },
  {
    text: "Amazing communication and delivery quality. Impressed with design sense.",
    name: "Robert Fox",
    role: "Product Manager",
    img: testmonial,
  },
  {
    text: "They bring creativity and clarity in every step of the project.",
    name: "Kristin Watson",
    role: "Founder",
    img: testmonial,
  },
];

const Clients = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-[#EFF7F8] py-12 md:py-20">
      <div className="max-w-container mx-auto px-4">
        <h2 className="font-poppins font-semibold text-2xl md:text-4xl text-black mb-10">
          What Our Clients Say
        </h2>

        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="px-4">
              <div className="bg-white rounded-[8px] p-6 shadow-sm flex flex-col justify-between">
                <p className="font-poppins text-gray-800 text-base md:text-lg leading-relaxed">
                  “{review.text}”
                </p>

                <div className="flex items-center mt-6">
                  <img
                    src={review.img}
                    className="w-12 h-12 rounded-full object-cover border border-gray-300"
                    alt="Reviewer"
                  />
                  <div className="ml-3">
                    <h6 className="font-poppins font-semibold text-black text-base">
                      {review.name}
                    </h6>
                    <p className="font-poppins text-sm text-gray-500">
                      {review.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Clients;
