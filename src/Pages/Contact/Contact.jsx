import React from 'react';
import Nav from '../../Shared/Nav';
import 'animate.css/animate.min.css';

const Contact = () => {
    return (
        <div>
            <div
                className="min-h-screen bg-cover"
                style={{
                    backgroundImage: "url('/images/hero.png')",
                }}
            >
                <div className="bg-black min-h-screen bg-opacity-40">
                    <Nav />
                    <div className="mt-14 grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800 animate__animated animate__fadeInUp">
                        <div className="flex flex-col justify-between">
                            <div className="space-y-2">
                                <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                                <div className="dark:text-gray-600">We are open for any suggestion <br /> or just to have a chat</div>
                            </div>
                            <img src="/public/images/contactgirl.jpg" alt="" className="p-2 h-80 w-80 mt-4 rounded-xl animate__animated animate__fadeIn" />
                        </div>
                        <form noValidate="" className="space-y-6 animate__animated animate__fadeIn">
                            <div>
                                <label htmlFor="name" className="text-base font-semibold">Full name</label>
                                <input id="name" type="text" placeholder="" className="w-full p-3 border border-black rounded dark:bg-gray-100" />
                            </div>
                            <div>
                                <label htmlFor="email" className="text-base font-semibold">Email</label>
                                <input id="email" type="email" className="w-full p-3 border border-black rounded dark:bg-gray-100" />
                            </div>
                            <div>
                                <label htmlFor="message" className="text-base font-semibold">Message</label>
                                <textarea id="message" rows="3" className="w-full p-3 rounded border border-black dark:bg-gray-100"></textarea>
                            </div>
                            <button type="submit" className="w-full p-3 text-base font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50">Send Message</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;
