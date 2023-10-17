"use client";
import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Slider = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[90vw] md:max-w-[70vw]">
        <AwesomeSlider
          animation="cubeAnimation"
          infinite={true}
          buttons={true}
          bullets={false}
          playButton={true}
          interval={100}
          play={true}
        >
          <div>
            <img
              src="https://images.unsplash.com/photo-1511130558090-00af810c21b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1889&q=80"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </AwesomeSlider>
      </div>
    </div>
  );
};

export default Slider;
