'use client';
import CountUp from 'react-countup';

const 
AnimatedCounter = ({ amount }: { amount: number}) => {
    return (
        <div>
            <CountUp 
            decimals={2}
            decimal=','
            end={amount}
            prefix='$'
            />
        </div>
    )
}

export default AnimatedCounter
