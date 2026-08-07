import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

interface IProduct {
  name: string;
  imageUrl: string;
}

const LaptopSwiper = ({ products }: { products: Array<IProduct> }) => {
  return (
    <Swiper
      spaceBetween={100}
      slidesPerView={3}
      navigation
      pagination={{ type: "bullets", clickable: true }}
      autoplay={{ delay: 2800, disableOnInteraction: false, pauseOnMouseEnter: true }}
      loop={true}
      speed={900}
      grabCursor={true}
      modules={[Autoplay, Navigation, Pagination]}
    >
      {products.map((product: any, idx: number) => {
        return (
          <SwiperSlide key={idx}>
            <div className="flex h-60 w-96 items-center justify-center rounded-2xl border border-sand-200 bg-white p-4 shadow-card transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-panel">
              <Image
                src={product.imageUrl}
                alt={product.name}
                className="aspect-square w-full object-contain"
                width={200}
                height={200}
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

const MobileSwiper = ({ products }: { products: Array<IProduct> }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ type: "bullets", clickable: true }}
      autoplay={{ delay: 2800, disableOnInteraction: false, pauseOnMouseEnter: true }}
      loop={true}
      speed={900}
      grabCursor={true}
      modules={[Autoplay, Navigation, Pagination]}
      className="mx-auto flex w-full items-center justify-center"
    >
      {products.map((product: any, idx: number) => {
        return (
          <SwiperSlide key={idx}>
            <div className="flex w-full items-center justify-center rounded-2xl border border-sand-200 bg-white p-4 shadow-card transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-panel">
              <Image
                src={product.imageUrl}
                alt={product.name}
                className="aspect-square w-full object-contain"
                width={200}
                height={200}
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

const TabletSwiper = ({ products }: { products: Array<IProduct> }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ type: "bullets", clickable: true }}
      autoplay={{ delay: 2800, disableOnInteraction: false, pauseOnMouseEnter: true }}
      loop={true}
      speed={900}
      grabCursor={true}
      modules={[Autoplay, Navigation, Pagination]}
      className="mx-auto flex w-full items-center justify-center"
    >
      {products.map((product: any, idx: number) => {
        return (
          <SwiperSlide key={idx}>
            <div className="flex w-full items-center justify-center rounded-2xl border border-sand-200 bg-white p-4 shadow-card transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-panel">
              <Image
                src={product.imageUrl}
                alt={product.name}
                className="aspect-square w-full object-contain"
                width={200}
                height={200}
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

const PRODUCTS: Array<IProduct> = Array.from({ length: 19 }).map((_, i) => {
  return {
    name: `Product ${i + 1}`,
    imageUrl: `/products/img_${i + 1000}.png`,
  };
});

export const ProductsSwiper = () => {
  return (
    <>
      <div className="flex justify-center md:hidden">
        <div className="flex w-[300px] items-center justify-center">
          <MobileSwiper products={PRODUCTS} />
        </div>
      </div>

      <div className="hidden justify-center md:flex xl:hidden">
        <div className="flex items-center justify-center md:w-[700px] lg:w-[900px]">
          <TabletSwiper products={PRODUCTS} />
        </div>
      </div>

      <div className="hidden items-center justify-center md:hidden xl:flex">
        <LaptopSwiper products={PRODUCTS} />
      </div>
    </>
  );
};
