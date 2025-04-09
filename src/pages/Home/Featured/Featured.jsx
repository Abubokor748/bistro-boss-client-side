import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css'

const Featured = () => {
    return (
        <section className='bg-fixed pt-8 my-20 featured-item text-white'>
            <SectionTitle
            heading={"Check it Out"}
            subHeading={"Featured Items"}
            ></SectionTitle>

        	<div className='md:flex justify-items-center bg-slate-400 bg-opacity-50 py-20 px-36 gap-12'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className=''>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illo quia optio facilis harum, aut aliquam ad qui architecto maxime modi. Natus id corrupti necessitatibus! Consectetur illo ab minus quaerat?</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;        	