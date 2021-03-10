import React from 'react';
import './Home.css';
import Product from "./Product.js"

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="banner"
            />

            <div className="home_row">
                <Product
                    id="1"
                    title="Amazon Sales E-book | Best Selling Book Of The Year"
                    price={20}
                    rating={4}
                    image="https://www.datafeedwatch.com/hs-fs/hubfs/ebooks-images/amazon-sales-ebook-cover.png?width=570&height=380&name=amazon-sales-ebook-cover.png"
                />
                <Product
                    id="2"
                    title="Iphone X | 4GB RAM 500GB Internal Storage"
                    price={11.96}
                    rating={4}
                    image="https://www.transparentpng.com/thumb/apple-iphone/fORwQR-smartphone-apple-iphone-x-transparent-background.png"
                />
            </div>
            <div className="home_row">
                <Product
                    id="3"
                    title="Samsung LED Fitbit"
                    price={30.99}
                    rating={2}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />
                 <Product
                    id="4"
                    title="Cannon D500 DSLR "
                    price={100.89}
                    rating={3}
                    image="https://p1.pxfuel.com/preview/225/285/205/digital-camera-canon-eos-lens-flash.jpg"
                />
                 <Product
                    id="5"
                    title="Amazon Alexa"
                    price={80.96}
                    rating={5}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"
                />
            </div>
            <div className="home_row">
                <Product
                    id="6"
                    title="Samsung Curved TV"
                    price={200.99}
                    rating={4}
                    image="https://images.samsung.com/is/image/samsung/uk-uhd-ku6500-ue78ku6500uxxu-black-Black-64724660?$LazyLoad_Home_IMG$"
                />
            </div>
        </div>
    )
}

export default Home
