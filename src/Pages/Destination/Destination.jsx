import React from "react";
import Nav from "../../Shared/Nav";
import "animate.css";
function Destination() {
    return (
        <div>
            <div
                className="min-h-screen bg-cover"
                style={{
                    backgroundImage: "url('/images/hero.png')",
                }}
            >
                <div className="bg-black min-h-screen bg-opacity-60">
                    <Nav />
                    <div className="py-10 text-center">
                        <h1 className="text-7xl font-bold text-white">Our Destinations</h1>
                        <p className="mt-3 max-w-2xl mx-auto text-lg text-white">
                            Explore some of the most amazing places on earth with our curated tours.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto mt-14 p-6">
                        {/* Destination Card 1 */}
                        <div className="bg-white shadow-md rounded-xl p-3 animate__animated animate__backInLeft">
                            <img
                                className="w-full h-56 rounded-xl  object-cover object-center"
                                src="/public/images/img1.jpg"
                                alt="Destination 1"
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-bold text-gray-800">Rangamati</h2>
                                <p className="mt-2 text-gray-600">
                                    Explore the iconic landmarks and experience the romantic charm of Bangladesh.
                                </p>
                                <a
                                    href="#"
                                    className="block mt-4 text-lg font-semibold text-amber-600 hover:text-amber-800"
                                >
                                    Learn more &rarr;
                                </a>
                            </div>
                        </div>

                        <div className="bg-white shadow-md rounded-xl p-3 animate__animated animate__backInLeft">
                            <img
                                className="w-full h-56 rounded-xl  object-cover object-center"
                                src="/public/images/img2.jpg"
                                alt="Destination 1"
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-bold text-gray-800">khagrachari</h2>
                                <p className="mt-2 text-gray-600">
                                    Explore the iconic landmarks and experience the romantic charm of Bangladesh.
                                </p>
                                <a
                                    href="#"
                                    className="block mt-4 text-lg font-semibold text-amber-600 hover:text-amber-800"
                                >
                                    Learn more &rarr;
                                </a>
                            </div>
                        </div>
                        <div className="bg-white shadow-md rounded-xl p-3 animate__animated animate__backInLeft">
                            <img
                                className="w-full h-56 rounded-xl  object-cover object-center"
                                src="/public/images/img3.jpg"
                                alt="Sajek"
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-bold text-gray-800">Sylhet</h2>
                                <p className="mt-2 text-gray-600">
                                    Explore the iconic landmarks and experience the romantic charm of Bangladesh.
                                </p>
                                <a
                                    href="#"
                                    className="block mt-4 text-lg font-semibold text-amber-600 hover:text-amber-800"
                                >
                                    Learn more &rarr;
                                </a>
                            </div>
                        </div>
                        <div className="bg-white shadow-md rounded-xl p-3 animate__animated animate__backInLeft">
                            <img
                                className="w-full h-56 rounded-xl  object-cover object-center"
                                src="/public/images/Sreemongol.png"
                                alt="Destination 1"
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-bold text-gray-800">Bandorbon</h2>
                                <p className="mt-2 text-gray-600">
                                    Explore the iconic landmarks and experience the romantic charm of Bangladesh.
                                </p>
                                <a
                                    href="#"
                                    className="block mt-4 text-lg font-semibold text-amber-600 hover:text-amber-800"
                                >
                                    Learn more &rarr;
                                </a>
                            </div>
                        </div>

                        {/* Repeat the same structure for other destination cards */}
                    </div>
                    {/* Add Footer component if needed */}
                </div>
            </div>
        </div>
    );
}

export default Destination;
