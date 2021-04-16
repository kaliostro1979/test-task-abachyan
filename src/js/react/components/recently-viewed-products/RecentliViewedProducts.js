import React, {useContext} from 'react'
import Cookies from 'js-cookie';
import {Context} from "@/js/react/context/context";
import Slider from "react-slick";
import RecentlyProductItem from "@/js/react/components/recently-viewed-products/RecentlyProductItem";

const RecentlyViewedProducts = () => {

    const {allProducts} = useContext(Context)
    const dataFromCookie = Cookies.get('shopify_recently_viewed')
    const recentlyViewedProductsArray = dataFromCookie.split(' ');

    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
    };

    const recentArray = allProducts.filter((item) => {
        for (let i = 0; i < recentlyViewedProductsArray.length; i++) {
            if (item.handle == recentlyViewedProductsArray[i]) {
                return item
            }
        }
    })

    return (
        <section data-section-type="recently-viewed" className="recently-viewed">
            <h2>Recently Viewed</h2>
            <div className="recently-container row">
                <div className="col-lg-12">
                    <Slider {...settings}>
                        {
                            recentArray.map((r) => {
                                return (
                                    <RecentlyProductItem
                                        key={r.id}
                                        handle={r.handle}
                                        image={r.image.src}
                                        title={r.title}
                                    />
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default RecentlyViewedProducts