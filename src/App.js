import { Button, Flex } from "antd";
import "./App.css";
import { images } from "./getImages";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Zoom, Navigation, Pagination } from "swiper/modules";

function App() {
  return (
    <div className="app">
      <Flex className="app-header" gap="middle" justify="end">
        <Button type="primary" shape="round" size="large">
          Позвонить
        </Button>
      </Flex>

      <h1 className="app-title">Наши работы:</h1>

      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          "--swiper-pagination-fraction-color": "#fff",
        }}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
          type: "fraction",
        }}
        modules={[Zoom, Navigation, Pagination]}
        className="app-swiper"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-zoom-container">
              <img className="app-image" src={item} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default App;
