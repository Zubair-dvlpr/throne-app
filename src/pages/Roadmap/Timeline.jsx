import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timeline1 from '../../assets/images/timeline1.png';
import timeline2 from '../../assets/images/Ellipse6.png';
import timeline3 from '../../assets/images/Ellipse5.png';
import timeline4 from '../../assets/images/Ellipse7.png';
import Button from '../../components/Shared/Button'
import popup from '../../assets/images/popup.webp';

// Modal Component
const Modal = ({ isVisible, onClose, currentStep }) => {
    if (!isVisible) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const steps = 5;
    const progressPercentage = (currentStep / steps) * 100;

    return (
        <div className="fixed inset-0 flex items-center px-4 justify-center bg-black bg-opacity-50 backdrop-blur-md z-50" onClick={handleOverlayClick}>
            <div className="bg-white p-8 rounded-lg w-[390px] md:w-[862px] bg-center bg-no-repeat relative" style={{ backgroundImage: `url(${popup})` }}>
                <h2 className="font-semibold mb-4 text-[80px] text-center font-Ringbearer"><span className='text-5xl'> Q1  </span>2024</h2>


                {/* Progress Bar */}
                <div className="flex items-center justify-between mb-4">
                    <p className="text-2xl font-semibold text-center mb-4">Step {currentStep + 1}/{steps}</p>
                    <div className="w-3/4 h-2 mx-4 rounded-full" style={{
                        backgroundImage: `linear-gradient(90deg, #00BF63 ${progressPercentage}%, #FB50D0 ${progressPercentage}%, #FFF768 100%)`
                    }} />
                    <p className="text-2xl font-semibold">{progressPercentage.toFixed(0)}%</p>
                </div>

                {/* List with icons */}
                <ul className="space-y-4">
                    <li className="flex items-center p-5 rounded-xl bg-[#FFFFFF1A]">
                        <span className="mr-4">✅</span>
                        First item description
                    </li>
                    <li className="flex items-center p-5 rounded-xl bg-[#FFFFFF1A]">
                        <span className="mr-4">✅</span>
                        Second item description
                    </li>
                    <li className="flex items-center p-5 rounded-xl bg-[#FFFFFF1A]">
                        <span className="mr-4">✅</span>
                        Third item description
                    </li>
                    <li className="flex items-center p-5 rounded-xl bg-[#FFFFFF1A]">
                        <span className="mr-4">✅</span>
                        Fourth item description
                    </li>
                </ul>
            </div>
        </div>
    );
};




const Timeline = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [step, setStep] = useState('');

    const showModal = (content) => {
        setStep(content);
        setIsModalVisible(true);
    };

    const hideModal = () => {
        setIsModalVisible(false);
        setModalContent('');
    };

    return (
        <div className='max-w-[1320px] timeline mx-auto relative'>
            <VerticalTimeline lineColor="#C1D7D2">

                <VerticalTimelineElement
                    className="vertical-timeline-element--work  vertical-timeline-element--left"
                    contentStyle={{ background: 'transparent', color: '#fff', boxShadow: 'none' }}
                    contentArrowStyle={{ borderRight: '0px solid rgb(33, 150, 243)' }}
                    date=""
                    iconClassName="iconImage bg-cover bg-center"
                    icon=""
                    iconStyle={{ backgroundImage: `url(${timeline1})`, boxShadow: 'none' }}
                >
                    <div className='content  w-fit'>
                        <h3 className="text-2xl font-medium font-Ringbearer ">Q1</h3>
                        <h4 className="text-2xl font-medium mt-2 text-[#00BF63] font-Ringbearer"> <span className='text-white'> 2024 </span>  COMPLETED  </h4>
                        <p className='text-2xl tracking-[7.2px] font-Bai-Jamjuree mt-6'> STEP 5/5 100% </p>
                        <div className='mt-8' >
                            <Button>VIEW DETAILS</Button>
                        </div>
                    </div>
                </VerticalTimelineElement>

                {/* Second element (Right) */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work vertical-timeline-element--left"
                    contentStyle={{ background: 'transparent', color: '#fff', boxShadow: 'none' }}
                    contentArrowStyle={{ borderRight: '0px solid rgb(33, 150, 243)' }}
                    date=""
                    iconClassName="iconImage bg-cover bg-center"
                    icon=""
                    iconStyle={{ backgroundImage: `url(${timeline2})`, boxShadow: 'none' }}

                >
                    <div className='content  w-fit'>
                        <h3 className="text-2xl font-medium font-Ringbearer ">Q2</h3>
                        <h4 className="text-2xl font-medium mt-2 text-[#00BF63] font-Ringbearer"> <span className='text-white'> 2024 </span>  COMPLETED  </h4>
                        <p className='text-2xl tracking-[7.2px] font-Bai-Jamjuree mt-6'> STEP 5/5 100% </p>
                        <div className='mt-8'>
                            <Button>VIEW DETAILS</Button>
                        </div>
                    </div>
                </VerticalTimelineElement>

                {/* Third element (Left) */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work vertical-timeline-element--left"
                    contentStyle={{ background: 'transparent', color: '#fff', boxShadow: 'none' }}
                    contentArrowStyle={{ borderRight: '0px solid rgb(33, 150, 243)' }}
                    date=""
                    iconClassName="iconImage bg-cover bg-center"
                    icon=""
                    iconStyle={{ backgroundImage: `url(${timeline3})`, boxShadow: 'none' }}

                >
                    <div className='content  w-fit'>
                        <h3 className="text-2xl font-medium font-Ringbearer ">Q3</h3>
                        <h4 className="text-2xl font-medium mt-2 text-[#D8813E] font-Ringbearer"> <span className='text-white'> 2024 </span> IN PROGRESS </h4>
                        <p className='text-2xl tracking-[7.2px] font-Bai-Jamjuree mt-6'> STEP 0/5 100% </p>
                        <div className='mt-8' >
                            <Button>VIEW DETAILS</Button>
                        </div>
                    </div>
                </VerticalTimelineElement>

                {/* Fourth element (Right) */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work border-none vertical-timeline-element--right"
                    contentStyle={{ background: 'transparent', color: '#fff', boxShadow: 'none' }}
                    contentArrowStyle={{ borderRight: '0px solid rgb(33, 150, 243)' }}
                    date=""
                    iconClassName="iconImage bg-cover bg-center"
                    icon=""
                    iconStyle={{ backgroundImage: `url(${timeline4})`, boxShadow: 'none' }}

                >
                    <div className='content w-fit'>
                        <h3 className="text-2xl font-medium font-Ringbearer ">Q4</h3>
                        <h4 className="text-2xl font-medium mt-2 text-[#D8813E] font-Ringbearer"> <span className='text-white'> 2024 </span>   IN PROGRESS  </h4>
                        <p className='text-2xl tracking-[7.2px] font-Bai-Jamjuree mt-6'> STEP 0/5 100% </p>
                        <div className='mt-8' >
                            <Button>VIEW DETAILS</Button>
                        </div>
                    </div>
                </VerticalTimelineElement>
            </VerticalTimeline>


            <Modal isVisible={isModalVisible} onClose={hideModal} currentStep={step} />
        </div>
    );
}

export default Timeline;
