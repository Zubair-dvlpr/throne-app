import React from 'react';
import Button from '../../components/Shared/Button';

const BlogPost = ({ image, date, title, description }) => {
    return (
        <div className="bg-[#FFFFFF33] p-6 flex flex-col justify-between shadow-md rounded-3xl overflow-hidden">
            <div>
                <div className='max-w-[602px] rounded-2xl h-[308px] bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(${image})` }}>
                </div>
                <div className="flex flex-col  mt-6">
                    <div>
                        <p className="text-sm text-[#FDCD5E] font-medium uppercase">Date: {date}</p>
                        <h3 className="text-2xl text-white font-Ringbearer font-medium leading-[47px] my-3">{title}</h3>
                        <p className="text-white mb-8">{description}</p>
                    </div>

                </div>
            </div>

            <Button>READ MORE</Button>
        </div>
    );
};

export default BlogPost;
