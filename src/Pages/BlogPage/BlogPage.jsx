import React from 'react';
import Nav from '../../Shared/Nav';
import 'animate.css/animate.min.css';

const BlogPage = () => {
    return (
        <div>
            <div
                className="min-h-screen bg-cover"
                style={{
                    backgroundImage: "url('/images/hero.png')",
                }}
            >
                <div className="bg-black min-h-screen bg-opacity-30">
                    <Nav />
                    <section className='mt-14 animate__animated animate__fadeInUp'>
                        <div className="container max-w-6xl p-6 mx-auto space-y-8 sm:space-y-12">
                            <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                                <img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                                <div className="p-6 space-y-2 lg:col-span-5">
                                    <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Exploring the Majestic Mountains of Switzerland</h3>
                                    <span className="text-xs dark:text-gray-600">February 19, 2021</span>
                                    <p>Switzerland is renowned for its stunning landscapes, and its majestic mountains are a must-visit for any traveler. From the snow-capped peaks of the Alps to the picturesque villages nestled in the valleys, there's something for everyone to enjoy in this beautiful country.</p>
                                </div>
                            </a>
                            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                                    <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?1" />
                                    <div className="p-6 space-y-2">
                                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Discovering the Hidden Gems of Kyoto, Japan</h3>
                                        <span className="text-xs dark:text-gray-600">January 21, 2021</span>
                                        <p>Kyoto is a city steeped in history and tradition, with its ancient temples, serene gardens, and vibrant culture. Explore the narrow alleyways of Gion, visit the iconic Fushimi Inari Shrine, and indulge in delicious street food at Nishiki Market..</p>
                                    </div>
                                </a>
                                <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                                    <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?2" />
                                    <div className="p-6 space-y-2">
                                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">A Journey Through the Enchanting Landscapes of Iceland</h3>
                                        <span className="text-xs dark:text-gray-600">January 22, 2021</span>
                                        <p>Iceland is a land of fire and ice, where dramatic landscapes meet rugged coastlines. Experience the wonder of the Northern Lights, marvel at the power of cascading waterfalls, and soak in the soothing waters of the Blue Lagoon.</p>
                                    </div>
                                </a>
                                <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                                    <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?3" />
                                    <div className="p-6 space-y-2">
                                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Exploring the Rich Culture of Marrakech, Morocco</h3>
                                        <span className="text-xs dark:text-gray-600">January 23, 2021</span>
                                        <p>Marrakech is a city like no other, with its bustling souks, ornate palaces, and vibrant street life. Lose yourself in the maze-like streets of the Medina, haggle for treasures in the souks, and savor the flavors of Moroccan cuisine.</p>
                                    </div>
                                </a>
                                <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
                                    <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?4" />
                                    <div className="p-6 space-y-2">
                                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Adventures in the Amazon Rainforest, Brazil</h3>
                                        <span className="text-xs dark:text-gray-600">January 24, 2021</span>
                                        <p>The Amazon Rainforest is one of the most biodiverse regions on Earth, home to an incredible array of plant and animal species. Explore the winding waterways of the Amazon River, encounter exotic wildlife, and learn about the indigenous cultures that call this wilderness home.</p>
                                    </div>
                                </a>
                                <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
                                    <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?5" />
                                    <div className="p-6 space-y-2">
                                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Chasing Waterfalls in the Land of New Zealand</h3>
                                        <span className="text-xs dark:text-gray-600">January 25, 2021</span>
                                        <p>New Zealand is a paradise for nature lovers, with its pristine landscapes, towering mountains, and cascading waterfalls. Discover the beauty of Milford Sound, hike to the base of majestic waterfalls, and experience the magic of Middle-earth in the stunning landscapes of the South Island.</p>
                                    </div>
                                </a>
                                <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
                                    <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?6" />
                                    <div className="p-6 space-y-2">
                                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Exploring the Serene Beaches of Bali, Indonesia</h3>
                                        <span className="text-xs dark:text-gray-600">January 26, 2021</span>
                                        <p>Bali is renowned for its stunning beaches, lush rice terraces, and vibrant culture. Relax on the white sands of Kuta Beach, dive into the crystal-clear waters of Nusa Penida, and experience the tranquility of Ubud's lush landscapes.</p>
                                    </div>
                                </a>
                            </div>
                            <div className="flex justify-center">
                                <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600 font-semibold">Load more posts...</button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default BlogPage;
