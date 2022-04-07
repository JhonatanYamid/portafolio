import Image from 'next/image';
import BrandItem from './brandItem';
import Slider from "react-slick";

const Brands = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 20000,
        autoplaySpeed: 100,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]

    }
    return (
        <div className="flex flex-col items-center justify-center text-3xl font-bold text-slate-600">
            <h2>Empresas con las que he trabajado</h2>
            <div className='w-full px-10 space-x-10 pt-8'>
                <Slider {...settings}>
                    <BrandItem image={'wenco-logo.png'}/>
                    <BrandItem image={'alsak-logo.png'}/>
                    <BrandItem image={'ca-shield.png'}/>
                    <BrandItem image={'tienda-pintuco.png'}/>
                    <BrandItem image={'konecta-logo.png'}/>
                    <BrandItem image={'kendy-logo.png'}/>
                </Slider>
            </div>

        </div>
    );
}

export default Brands;