import React from 'react';
import CountUp from 'react-countup';
import Container from '../Shared/Container/Container';
import { FaShoppingCart, FaUsers, FaAward } from "react-icons/fa";
import { VscLayersActive } from "react-icons/vsc";
import './Counter.css'

const Counter = () => {
    return (
        <div className='counter_wrapper mt-20 xl:mt-40'>
            <Container>
                <div className='content grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 justify-center items-center'>
                    <div className='text-center'>
                        <FaShoppingCart className='m-auto text-3xl xl:text-5xl' />
                        <h1 className='text-3xl xl:text-5xl font-bold my-2'><CountUp delay={1} duration={10} end={100} />+</h1>
                        
                        <h3 className='text-2xl xl:text-3xl font-serif'>Order Completed</h3>
                    </div>
                    <div>
                        <FaUsers className='m-auto text-3xl xl:text-5xl' />
                        <h1 className='text-3xl xl:text-5xl font-bold my-2'><CountUp delay={1} duration={10} end={80} />+</h1>
                        <h3 className='text-3xl font-serif'>Active Clients</h3>
                    </div>
                    <div>
                        <VscLayersActive className='m-auto text-3xl xl:text-5xl' />
                        <h1 className='text-3xl xl:text-5xl font-bold my-2'><CountUp delay={1} duration={10} end={90} />+</h1>
                        <h3 className='text-2xl xl:text-3xl font-serif'>Order Progress</h3>
                    </div>
                    <div>
                        <FaAward className='m-auto text-3xl xl:text-5xl' />
                        <h1 className='text-3xl xl:text-5xl font-bold my-2'><CountUp delay={1} duration={10} end={30} />+</h1>
                        <h3 className='text-2xl xl:text-3xl font-serif'>Awards</h3>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Counter;