import React from "react";
import { FaHeart } from "react-icons/fa";

// Dummy Data (Replace with API or props)
const events = [
  {
    title: "Awesome Music Festival",
    startDateTime: "Saturday, Oct 14 | 6:00 PM",
    location: "Central Park New York",
    category: "Music",
  },
];

const SubmitBtn =
  "https://static.vecteezy.com/system/resources/previews/046/902/294/non_2x/ripped-transparent-paper-texture-free-png.png";
const redflage = "https://cdn-icons-png.flaticon.com/512/991/991950.png";

const EventDetails = () => {
  return (
    <div className="bg-[#f6d46b] py-6">
      <div className="container mx-auto px-4">
        {events.map((event, index) => (
          <div key={index} className="event-section my-6">
            {/* Title Section */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Left Section */}
              <div className="w-full md:w-1/2 text-[#480249] relative">
                <h1 className="text-2xl md:text-4xl mb-4 font-bold">
                  {event.title}
                </h1>
              </div>

              {/* Right Section */}
              <div className="w-full md:w-1/2 flex flex-col gap-4">
                <div
                  className="p-4 rounded-lg bg-cover bg-center border border-2 border-danger"
                  style={{
                    backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/046/902/294/non_2x/ripped-transparent-paper-texture-free-png.png)`,
                  }}
                >
                  <p className="font-bold">
                    When flagging content, please include a message for our
                    admin!
                  </p>
                  <button
                    className="bg-no-repeat bg-contain w-24 h-10 mt-4"
                    style={{ backgroundImage: `url(${SubmitBtn})` }}
                  >
                    Submit
                  </button>
                </div>

                {/* Icons Section */}
                <div className="flex items-center gap-4">
                  <img src={redflage} alt="Flag" className="w-10 h-10" />
                  <FaHeart size={50} className="text-red-500 " />
                </div>
              </div>
            </div>

            {/* Image and Details Section */}
            <div className="mt-6 flex flex-col md:flex-row gap-6">
              {/* Left Image */}
              <div className="w-full md:w-2/3">
                <img
                  src="https://img.freepik.com/free-vector/people-dancing-background_1048-7872.jpg"
                  alt="Festival"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              {/* Right Section */}
              <div className="w-full md:w-1/3 flex flex-col gap-4">
                <img
                  src="https://images.unsplash.com/photo-1547153760-18fc86324498?w=500"
                  alt="Logo"
                  className="h-48 w-full object-cover rounded-lg"
                />

                {/* Event Date */}
                <div className="flex flex-col items-center justify-center bg-[#9bb09d] w-full h-48 rounded-b-[90px]">
                  <p className="text-center font-bold">{event.startDateTime}</p>
                </div>

                {/* Location & Category */}
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="bg-[#ffa7df] w-48 h-48 rounded-br-[90px] flex items-center justify-center text-black">
                    <p className="font-bold text-center">
                      {event.location.split(" ")[0]}
                      <br />
                      {event.location.split(" ")[1]}
                    </p>
                  </div>

                  <div className="w-48 h-48 rounded-full bg-white flex items-center justify-center">
                    <p className="text-center font-bold">{event.category}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventDetails;
