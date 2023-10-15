"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Weather({ isDark }) {
  const [error, setError] = useState(null);
  const [WeatherData, setWeatherData] = useState(null);

  const GeoOk = (position) => {
    // 위치 정보 가져오기 성공 시 호출되는 함수
    const { latitude, longitude } = position.coords;
    const API_KEY = "86b4b47726aa35b47d9195e4d651a6ea";
    setError(null);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=kr`
    )
      .then((r) => r.json())
      .then((r) => setWeatherData(r));
  };

  const GeoErr = (error) => {
    // 위치 정보 가져오기 실패 시 호출되는 함수
    setError(error.message);
  };

  useEffect(() => {
    // 위치 정보 가져오기 시도
    navigator.geolocation.getCurrentPosition(GeoOk, GeoErr);
  }, []);

  return (
    <div
      className={`HomeC shadow-md rounded-md ml-2 ${
        isDark ? "bg-gray-400 text-gray-100" : "bg-purple-50"
      }`}
    >
      {WeatherData ? (
        error ? (
          <p>Error: {error}</p>
        ) : (
          <div className="WeatherGrid w-full h-[200px] p-3">
            <div className="WeatherA flex items-center justify-center text-bold text-3xl ">
              {WeatherData.name}
            </div>
            <div className="WeatherB flex justify-end ">
              <motion.img
                initial={{ scale: 1.2 }}
                animate={{ scale: 1.4 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1,
                }}
                className="rounded-md"
                /* src={`https://openweathermap.org/img/wn/${WeatherData.weather[0].icon}@2x.png`} */
                src={`https://openweathermap.org/img/wn/03n@2x.png`}
                width={100}
                height={100}
                alt="Weather Icon"
              />
            </div>
            <div className="WeatherC flex items-center justify-center p-3 text-[50px]">
              {Math.round(WeatherData.main.temp * 10) / 10}℃
            </div>
            <div className="WeatherD w-full grid grid-cols-3 items-center justify-center">
              <div className="flex justify-center">
                <p className="text-bold text-lg">
                  {WeatherData.weather[0].main}
                </p>
              </div>
              <div className="flex space-x-2 justify-center items-center">
                <span
                  className={`relative top-[2px] text-[14px] ${
                    isDark ? "text-gray-200" : "text-gray-500"
                  }`}
                >
                  체감
                </span>
                <span className="text-bold text-lg ">
                  {Math.round(WeatherData.main.feels_like * 10) / 10}℃
                </span>
              </div>
              <div className="flex space-x-1 justify-center items-center">
                <span
                  className={`relative top-[2px] text-[14px] ${
                    isDark ? "text-gray-200" : "text-gray-500"
                  }`}
                >
                  습도
                </span>
                <span className="text-bold text-lg">
                  {WeatherData.main.humidity}%
                </span>
              </div>
            </div>
          </div>
        )
      ) : null}
    </div>
  );
}

/* 
{
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "맑음", // 날씨
            "icon": "01d"   // URL is https://openweathermap.org/img/wn/10d@2x.png  //이미지
        }
    ],
    "base": "stations",
    "main": {
        "temp": 20.11,  //온도 
        "feels_like": 19.66,
        "temp_min": 20.11,
        "temp_max": 20.11,
        "pressure": 1020,
        "humidity": 57, // 습도
        "sea_level": 1020,
        "grnd_level": 1017
    },
    "visibility": 10000,
    "wind": {
        "speed": 3.68,
        "deg": 9,
        "gust": 5.03
    },
    "clouds": {
        "all": 2
    },
    "dt": 1696901472,
    "sys": {
        "country": "KR",
        "sunrise": 1696886638,
        "sunset": 1696928132
    },
    "timezone": 32400,
    "id": 1833747,
    "name": "Ulsan", //지역명
    "cod": 200
}
*/

/* 
<w> [webpack.cache.PackFileCacheStrategy] Caching failed for pack: Error: ENOENT: no such file or directory, rename '/home/gg/myblog/.next/cache/webpack/client-development/0.pack.gz_' -> '/home/gg/myblog/.next/cache/webpack/client-development/0.pack.gz'
이거 왜뜸?
 */
