import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = () => {
    return (
        <div className='flex items-center'>
                <CheckCircleIcon className="h-4 w-4 text-red-500" />
                <p className='ml-2'>Awesome Feature</p>
        </div>
    );
};

export default Feature;