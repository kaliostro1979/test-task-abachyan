import React, {useContext} from 'react'
import Cookies from 'js-cookie';
import {Context} from "@/js/react/context/context";

const RecentlyViewedProducts = ()=>{

    const {allProducts} = useContext(Context)
    const dataFromCookie = Cookies.get('shopify_recently_viewed')
    const recentlyViewedProductsArray = dataFromCookie.split(' ');


    const recentArray = allProducts.filter((item)=>{
        for (let i = 0; i < recentlyViewedProductsArray.length; i++){
            if (item.handle == recentlyViewedProductsArray[i]){
                return item
            }
        }
    })

    return(
        <section data-section-type="recently-viewed" className="recently-viewed">
            <h2>Recently Viewed</h2>
            <div className="recently-container row">
                {
                    recentArray.map((r)=>{
                        return(
                            <div key={r.id} className="rec-prod col-lg-3">
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
            </div>
        </section>
    )
}

export default RecentlyViewedProducts