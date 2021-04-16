import React, {useContext} from 'react'
import Cookies from 'js-cookie';
import {Context} from "@/js/react/context/context";
import Slider from "react-slick";


const RecentlyViewedProducts = () => {

    const {allProducts} = useContext(Context)
    const dataFromCookie = Cookies.get('shopify_recently_viewed')
    const recentlyViewedProductsArray = dataFromCookie.split(' ');


    const settings = {
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        arrows: true
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
                <div className="col-lg-10 offset-1">
                    <Slider {...settings}>
                        {
                            recentArray.map((r) => {
                                return (

                                    <div key={r.id} className="rec-prod">
                                        <div className="product-image">
                                            <img src={r.image.src}/>
                                        </div>
                                        <div className="product-title">
                                            <a href={r.handle}>{r.title}</a>
                                        </div>
                                    </div>

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