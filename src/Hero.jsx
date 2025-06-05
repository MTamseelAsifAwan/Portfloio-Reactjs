import React from 'react';
import Avatar from './man.png'; // Adjust the path as necessary
const Hero = () => {
return (
    <div className="max-h-full w-full flex flex-col items-center justify-center text-center bg-transparent px-4 py-12">
        <img
            className="rounded-full w-40 h-40 md:w-56 md:h-56 mb-6 shadow-lg object-cover"
            src={Avatar}
            alt="Profile"
        />
        <h1 className="text-white text-3xl md:text-4xl font-bold">
            I'M <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent in-hover:font-extrabold">
                Muhammad Tamseel Asif Awan
            </span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white max-w-xl font-medium bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 bg-clip-text">
            A <span className="font-bold text-white">Frontend Developer</span> with <span className="font-semibold text-white">1+ years</span> of experience crafting engaging and responsive web applications.<br />
            Passionate about turning ideas into interactive digital experiences.
        </p>
        {/* Replace Download CV button with custom card */}
        <div className=" duration-500  hover:-rotate-y-1 group [transform:rotate3d(1,-1,1,60deg)]  border-sky-900 border-4 overflow-hidden rounded-2xl relative h-96 w-64 bg-sky-800 p-5 flex flex-col items-start gap-4 mt-8">
          <div className="text-gray-50">
            <span className="font-bold text-5xl">Jr</span>
            <p className="text-xs">Frontend Developer</p>
          </div>
          <a
            href="/Muhammad_Tamseel_Asif_Awan.pdf
            "
            download
            className="duration-300 hover:bg-sky-900 border hover:text-gray-50 bg-gray-50 font-semibold text-sky-800 px-3 py-2 flex flex-row items-center gap-3"
          >
            Download CV
            <svg className="w-6 h-6 fill-current" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
              <path d="M22.1,77.9a4,4,0,0,1,4-4H73.9a4,4,0,0,1,0,8H26.1A4,4,0,0,1,22.1,77.9ZM35.2,47.2a4,4,0,0,1,5.7,0L46,52.3V22.1a4,4,0,1,1,8,0V52.3l5.1-5.1a4,4,0,0,1,5.7,0,4,4,0,0,1,0,5.6l-12,12a3.9,3.9,0,0,1-5.6,0l-12-12A4,4,0,0,1,35.2,47.2Z" fillRule="evenodd"></path>
            </svg>
          </a>
          <svg className="group-hover:scale-125 duration-500 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2 fill-gray-50 stroke-sky-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path data-name="layer1" d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z" strokeMiterlimit="10" strokeWidth="5"></path></svg>
          <svg className="group-hover:scale-125 duration-200 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2 fill-gray-50 stroke-sky-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path data-name="layer1" d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z" strokeMiterlimit="10" strokeWidth="2"></path></svg>
        </div>
        <h2 className="text-gray-400 font-bold text-2xl mt-6">
            Experience With
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-6 mt-4">
            {/* ReactJS */}
            <span title="ReactJS" className="flex-shrink-0">
                <svg className="w-14 h-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
<path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path><path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path><path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path><circle cx="24" cy="24" r="4" fill="#80deea"></circle>
</svg>
            </span>
            {/* Tailwind CSS */}
            <span title="Tailwind CSS" className="flex-shrink-0">
                <svg className="w-14 h-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
<linearGradient id="iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1" x1="21.861" x2="25.703" y1="8.237" y2="36.552" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#00c1e0"></stop><stop offset="1" stop-color="#009bb8"></stop></linearGradient><path fill="url(#iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1)" d="M24,9.604c-5.589,0-9.347,2.439-11.276,7.318c-0.2,0.505,0.417,0.92,0.816,0.551 c2.035-1.882,4.322-2.505,6.86-1.871c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24 c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551c-2.035,1.882-4.322,2.506-6.86,1.872 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-5.589,0-9.348,2.44-11.276,7.319 c-0.2,0.505,0.417,0.92,0.816,0.551c2.035-1.882,4.322-2.506,6.86-1.871c1.825,0.457,3.13,1.781,4.575,3.246 c2.353,2.388,5.077,5.152,11.025,5.152c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551 c-2.035,1.882-4.322,2.506-6.86,1.871c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24L12,24z"></path>
</svg>
            </span>
            {/* Firebase */}
            <span title="Firebase" className="flex-shrink-0">
                <img
                    className="w-14 h-14"
                    src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-firebase-a-googles-mobile-platform-that-helps-you-quickly-develop-high-quality-apps-logo-color-tal-revivo.png"
                    alt="external-firebase-a-googles-mobile-platform-that-helps-you-quickly-develop-high-quality-apps-logo-color-tal-revivo"
                />
            </span>
            {/* Bootstrap */}
            <span title="Bootstrap" className="flex-shrink-0">
                <svg className="w-14 h-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
<path fill="#6c19ff" d="M6.391,10.671c-0.085-2.448,1.822-4.706,4.401-4.706h26.42c2.578,0,4.486,2.258,4.401,4.706	c-0.082,2.352,0.024,5.398,0.791,7.882c0.769,2.492,2.066,4.067,4.19,4.269v2.295c-2.124,0.202-3.421,1.777-4.19,4.269	c-0.767,2.484-0.873,5.53-0.791,7.882c0.085,2.448-1.822,4.706-4.401,4.706h-26.42c-2.578,0-4.486-2.258-4.4-4.706	c0.082-2.352-0.025-5.398-0.791-7.882c-0.769-2.492-2.069-4.067-4.194-4.269v-2.295c2.124-0.202,3.425-1.777,4.194-4.269	C6.367,16.07,6.473,13.023,6.391,10.671z"></path><linearGradient id="Is-EGaxKcc0Cic9QMqyzGa_EzPCiQUqWWEa_gr1" x1="17.846" x2="27.078" y1="-147.541" y2="-163.153" gradientTransform="matrix(1 0 0 -1 0 -132)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"></stop><stop offset="1" stop-color="#f1e5fc"></stop></linearGradient><path fill="url(#Is-EGaxKcc0Cic9QMqyzGa_EzPCiQUqWWEa_gr1)" d="M25.042,34.016c4.366,0,6.997-2.138,6.997-5.664c0-2.665-1.877-4.595-4.665-4.9v-0.111	c2.048-0.333,3.655-2.235,3.655-4.359c0-3.026-2.389-4.997-6.03-4.997h-8.192v20.031H25.042z M19.994,16.525h4.238	c2.304,0,3.612,1.027,3.612,2.887c0,1.985-1.522,3.096-4.281,3.096h-3.57V16.525z M19.994,31.475v-6.594h4.21	c3.015,0,4.579,1.11,4.579,3.276c0,2.165-1.522,3.318-4.394,3.318H19.994z"></path>
</svg>
            </span>
            {/* HTML */}
            <span title="HTML5" className="flex-shrink-0">
                <svg className="w-14 h-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
<path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
</svg>
            </span>
        </div>
    </div>
);
};

export default Hero;
