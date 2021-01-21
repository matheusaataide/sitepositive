import React from 'react';
import { Button, Image } from 'react-bootstrap';
import SwiperCore, { Pagination, EffectFade, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import './styles.css';
import baseURL from '../../util/baseUrl';

SwiperCore.use([Pagination, EffectFade, Mousewheel]);

const TestemonialSlider = testemonials => (
    <div className="blog-slider">
        <Swiper className="blog-slider__wrp"
            spaceBetween={30}
            effect={'fade'}
            loop={true}
            mousewheel={{
                invert: false
            }}
            pagination={{
                el: '.blog-slider__pagination',
                clickable: true,
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}>
            <SwiperSlide className="blog-slider__item">
                <div className="blog-slider__img">
                    <Image src={`${baseURL}/1610935329279-rafael.jpg`} alt="" />
                </div>
                <div className="blog-slider__content">
                    <span className="blog-slider__code">26 December 2019</span>
                    <div className="blog-slider__title">Lorem Ipsum Dolor</div>
                    <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
                    <a href="#" className="blog-slider__button">READ MORE</a>
                </div>
            </SwiperSlide>
            <SwiperSlide className="blog-slider__item">
                <div className="blog-slider__img">
                    <Image src={`${baseURL}/1610935329279-rafael.jpg`} alt="" />
                </div>
                <div className="blog-slider__content">
                    <span className="blog-slider__code">26 December 2019</span>
                    <div className="blog-slider__title">Lorem Ipsum Dolor2</div>
                    <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
                    <a href="#" className="blog-slider__button">READ MORE</a>
                </div>
            </SwiperSlide>
            <SwiperSlide className="blog-slider__item">
                <div className="blog-slider__img">
                    <Image src={`${baseURL}/1610935329279-rafael.jpg`} alt="" />
                </div>
                <div className="blog-slider__content">
                    <span className="blog-slider__code">26 December 2019</span>
                    <div className="blog-slider__title">Lorem Ipsum Dolor</div>
                    <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
                    <Button className="gradient-primary">READ MORE</Button>
                </div>
            </SwiperSlide>
        </Swiper>
        <div className="blog-slider__pagination"></div>
    </div>
);

export default TestemonialSlider;