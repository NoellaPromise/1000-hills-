import React from 'react';
import Comment from '../components/Comment';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar/Navbar';
import Place from '../components/Place';

const Places = (props) => {
  return (
    <div>
      <div className="container bg-places-main-img h-3/4 w-full bg-no-repeat bg-cover">
        <Navbar />
        <div className="w-10 h-5 m-auto">
          <svg
            preserveAspectRatio="none"
            id="comp-ku6uclzvsvgcontent"
            data-bbox="4.3 53.8 191.6 93.2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="4.3 53.8 191.6 93.2"
            role="img"
          >
            <g>
              <path d="M195.9 147H4.3L40 96l11.2 10.1 23.9-34.2 9.6 8.1 18.2-26.2 43.4 58.4L160.8 95l35.1 52zm-178.2-7h165l-22.5-33.4-14.2 16.9-43-57.7-17 24.5-9.6-8.1-24.1 34.4-11.2-10.1L17.7 140z"></path>
            </g>
          </svg>
        </div>
        <div className="w-52 h-5 m-auto pl-40">
          <svg
            preserveAspectRatio="none"
            id="comp-ku6uclzvsvgcontent"
            data-bbox="4.3 53.8 191.6 93.2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="4.3 53.8 191.6 93.2"
            role="img"
          >
            <g>
              <path d="M195.9 147H4.3L40 96l11.2 10.1 23.9-34.2 9.6 8.1 18.2-26.2 43.4 58.4L160.8 95l35.1 52zm-178.2-7h165l-22.5-33.4-14.2 16.9-43-57.7-17 24.5-9.6-8.1-24.1 34.4-11.2-10.1L17.7 140z"></path>
            </g>
          </svg>
        </div>
        <div className="flex flex-col p-10">
          <span className="text-white text-5xl font-bold italic font-serif p-2">
            Thousand
          </span>
          <span className="text-white text-8xl font-bold italic font-serif p-2">
            Hills View
          </span>
        </div>
      </div>
      <div className="container m-auto flex flex-col justify-center items-center">
        <Place
          {...props}
          number="01"
          name="Lake Kivu"
          nickname="kivu"
          image="/uploads/kivu2.jpg"
        />
        <Place
          {...props}
          number="02"
          name="Cyohoha Tea Plantation"
          nickname="tea"
          image="/uploads/cyohoha.jpg"
        />
        <Place
          {...props}
          number="03"
          name="Ikirenge Cya Ruganzu"
          nickname="feet"
          image="/uploads/ruganzu.jpg"
        />
        <Comment profile="images/avatar.png" />
      </div>
      <Footer {...props} />
    </div>
  );
};

export default Places;
