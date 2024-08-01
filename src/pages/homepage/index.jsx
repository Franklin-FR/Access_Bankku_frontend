import React, { useState } from 'react';
import maskGroup from '../../assets/maskGroup.png';  
import hamburger from '../../assets/hamburger.png'; 
import MutualBenefits from '../../assets/MutualBenefits.png';    
import leadway from '../../assets/leadway.png';   
import Aiico from '../../assets/Aiico.png';
import logoWhite from '../../assets/logoWhite.png';
import logos from '../../assets/logos.png';
import family from '../../assets/family.png';
import vector from '../../assets/vector.png';

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav>
        <div className='flex justify-between items-center px-2 lg:pl-[142px] lg:pr-[139px]'>
          <img src={maskGroup} alt="" className='w-[150px] h-12' />
          <img src={hamburger} alt="" className='w-[25px] h-[17px] lg:hidden' onClick={toggleHamburger} />
          <div className='hidden lg:block'>
            <ul className='flex space-x-4'>
              <li><a href="#home">Home</a></li>
              <li><a href="#product">Product</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact us</a></li>
              <li><a href="#quote">Get Quote</a></li>
              <li><a href="#signin">Sign in</a></li>
            </ul>
          </div>
        </div>
        {isOpen && (
          <div className='fixed inset-0 bg-white flex flex-col items-center justify-center z-50'>
            <button onClick={toggleHamburger} className='absolute top-4 right-4 text-xl font-bold'>X</button>
            <ul className='flex flex-col items-center space-y-4'>
              <li><a href="#home" className='text-xl'>Home</a></li>
              <li><a href="#product" className='text-xl'>Product</a></li>
              <li><a href="#about" className='text-xl'>About</a></li>
              <li><a href="#contact" className='text-xl'>Contact us</a></li>
              <li><a href="#quote" className='text-xl'>Get Quote</a></li>
              <li><a href="#signin" className='text-xl'>Sign in</a></li>
            </ul>
          </div>
        )}
      </nav>

      <main className=' min-h-screen'>
        <div className='relative bg-bg-small lg:bg-bg-large h-[500px] lg:h-[846px] lg:w-full'>
          <div>
            <p className='absolute w-[90%] lg:w-[538px] h-auto top-[142.9px] lg:top-[218px] left-[53.1px] lg:left-[142px] font-helvetica lg:font-poppins font-bold lg:font-semibold text-[31.47px] lg:text-5xl text-white leading-[36.18px] lg:leading-[48px] tracking-[1.5735px]'>
              Access to <span className='text-[#ee7e01]'> insurance</span> that’s made easy.
            </p>
            <p className='absolute w-[90%] lg:w-[514px] h-auto top-[226.16px] lg:top-[334px] left-[55.06px] lg:left-[142px] font-mulish lg:font-poppins font-semibold lg:font-normal text-xs lg:text-lg leading-[19.55px] lg:leading-[32.8px] text-[#FFFFFF]'>
              Access Insurance Broker is a platform that matches its clients with various underwriters and also counsels them on the best insurance offers.
            </p>
            <button className='absolute w-[120.62px] lg:w-[184px] h-[27.53px] lg:h-[42px] top-[345.46px] lg:top-[465px] left-[54.41px] lg:left-[142px] text-[#ee7e01] border border-[#ee7e01] rounded'>Buy insurance</button>
            <div className='flex space-x-2 absolute top-[419.53px] lg:top-[640px] left-[53.1px] lg:left-[142px]'>
              <p className='w-[60.96px] lg:w-[93px] h-[2.62px] lg:h-[4px] border border-2 border-[rgba(255,99,71,0.5)]'></p>
              <p className='w-[60.96px] lg:w-[93px] h-[2.62px] lg:h-[4px] border border-2 border-white'></p>
              <p className='w-[60.96px] lg:w-[93px] h-[2.62px] lg:h-[4px] border border-2 border-white'></p>
              <p className='w-[60.96px] lg:w-[93px] h-[2.62px] lg:h-[4px] border border-2 border-white'></p>
            </div>
          </div>
        </div>

        <div className='flex space-x-7 lg:space-x-40 bg-[#808080] pl-[16.47px] lg:pl-[154px] lg:pr-[153.78px] h-[55.5px] lg:h-[108px] items-center'>
          <div className='w-[40.2px] lg:w-[78.08px] h-[30.37px] lg:h-[59px]'>
            <img src={MutualBenefits} alt="" />
          </div>
          <div className='w-[77.14px] lg:w-[149.85px] h-[26.35px] lg:h-[51px]'>
            <img src={leadway} alt="" />
          </div>
          <div className='w-[56.11px] lg:w-[109px] h-[13.9px] lg:h-[27px]'>
            <img src={Aiico} alt="" />
          </div>
          <div className='w-[23.01px] lg:w-[44.69px] h-[30.89px] lg:h-[60px]'>
            <img src={logoWhite} alt="" />
          </div>
          <div className='w-[62.6px] lg:w-[121.6px] h-[27.8px] lg:h-[54px]'>
            <img src={logos} alt="" />
          </div>
        </div>

        <div className='lg:relative lg:ml-11'>
          <div className='hidden lg:block absolute w-[101px] h-[57px] top-[-87px] right-[2px]'>
            <img src={vector} alt="" />
          </div>
          <div className='interesting flex flex-col lg:flex-row lg:gap-28 lg:mt-[89px]'>
            <div className='lg:order-2 lg:mt-14'>
              <p className='font-bold font-cabin text-center lg:w-[192px] lg:h-[29px] lg:mt-2.5 text-xs lg:text-lg leading-[24.54px] text-[#A5C61F]'>SECURE YOUR FUTURE</p>
              <p className='w-[404px] lg:w-auto lg:max-w-[469px] h-auto lg:h-[119px] mt-[14.39px] text-center font-extrabold font-mulish text-[40.11px] lg:text-5xl leading-[50.34px] lg:leading-[60.24px]'>It's more affordable than you think</p>
              <p className='w-[90%] lg:w-auto lg:max-w-[469px] h-auto mt-[22.22px] font-mulish font-semibold text-[15.04px] lg:text-[18px] leading-[24.54px] lg:leading-[29.37px] text-center text-[#5A5A5A]'>Protecting your loved ones with life insurance doesn't have to be difficult or expensive thanks to Access Insurance Brokers.</p>
              <div className='flex justify-center mt-[16.57px] lg:mt-[65px]'>
                <button className='w-[151.86px] lg:w-[182px] h-[35.03px] lg:h-[41px] items-center border-2 border-[#114C8D] lg:border-[#EB7824] rounded text-[#114C8D] lg:text-[#EB7824] font-normal lg:font-normal text-[15.04px] lg:text-lg'>Get quote</button>
              </div>
            </div>

            <div className='relative lg:relative mt-12 lg:mt-0'>
              <div className='absolute lg:absolute  w-full lg:w-[450px] h-[162px] lg:h-[100%] bg-[#A5C61FCC]'></div>
              <div className='absolute lg:relative  top-8  left-2 lg:left-9 right-2 '>
                <img src={family} alt="" className='w-[402.91px] lg:w-[450px] h-[357.22px] lg:h-auto' />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <section className='bg-custom-gradient py-8 px-4 lg:mt-24 mt-[30.5rem]'>
  <div className='max-w-screen-lg mx-auto text-center'>
    <h2 className='text-white font-bold	text-[12.79px] font-cabin'>How It Works</h2>
    <p className='text-white font-extrabold font-mulish text-[34.1px] mt-1.5'>Your in a safe Hands</p>
    <p className='text-white font-semibold text-sm lg:text-[18px] mt-1'>We have a partnership with a reliable insurance company, one of the biggest and most reputable in the world. this implies</p>
  </div>
  <div className='lg:flex justify-center'>
  <div className=' grid grid-cols-2 lg:grid-cols-3 items-baseline gap-8 mt-16'>
    <div className='relative w-[186.86px] lg:w-[268px] h-[154.09px] border rounded-md text-center bg-[#ffffff]'>
      <div className='absolute left-1/2 transform -translate-x-1/2 	-top-12 font-abel font-normal text-[57.26px]'>
      <p className='text-[#EB7824]'>1</p>
      </div>
       <h3 className='font-cabin font-bold text-black mt-6 '>GET QUOTE</h3>
       <p className='font-mulish font-semibold text-[12.55px] mt-4 mb-3'>Choose the amount you would want cover, and we'll provide you with a quote.</p>
    </div>
    <div className='relative w-[186.86px] lg:w-[268px] h-[154.09px] border rounded-md text-center bg-[#ffffff]'>
      <div className='absolute left-1/2 transform -translate-x-1/2	-top-12 font-abel font-normal text-[57.26px]'>
      <p className='text-[#EB7824]'>2</p>
      </div>
       <h3 className='font-cabin font-bold text-black mt-6 '>APPLY</h3>
       <p className='font-mulish font-semibold text-[12.55px] mt-4 mb-3'>Respond to each question to determine your ultimate cost.</p>
    </div>
    <div className='relative col-span-2 place-self-center lg:col-span-1 lg:place-self-auto  w-[186.86px] lg:w-[268px] h-[154.09px] border rounded-md text-center bg-[#ffffff] mt-6'>
      <div className='absolute left-1/2 -transform -translate-x-1/2	-top-12 font-abel font-normal text-[57.26px]'>
      <p className='text-[#EB7824]'>3</p>
      </div>
       <h3 className='font-cabin font-bold text-black mt-6 '>YOUR POLICY</h3>
       <p className='font-mulish font-semibold text-[12.55px] mt-4 mb-3'>Congratulations for protecting the financial future of your loved one.</p>
    </div>
  </div>
  </div>
 
</section>

    </>
  )
}

export default Homepage;

