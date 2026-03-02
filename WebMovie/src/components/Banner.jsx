import React from 'react'
import IconRating from '../assets/rating.png'
import IconRatingHaalf from '../assets/rating-half.png'
import Temp from '../assets/temp-1.jpeg'
import IconPlay from '../assets/play-button.png'

const Banner = () => {
  return (
    <div className='w-full h-[700px] bg-banner bg-cover bg-center bg-no-repeat relative '>
      <div className='absolute z-10 bg-black inset-0 opacity-40'></div>

      <div className='relative z-20 w-full h-full flex items-center justify-between px-10'>
        <div className='flex flex-col space-y-4 items-start max-w-[45%]'>
          <div className='text-white bg-linear-to-r from-red-700 to-red-500 text-md py-2 px-3 w-fit'>
            TV Show
          </div>
          <h1 className='text-white text-5xl font-bold'>Nghe nói em thích tôi</h1>
          <div className='flex items-center space-x-2'>
            <img src={IconRating} alt="rating" className='w-6 h-6' />
            <img src={IconRating} alt="rating" className='w-6 h-6' />
            <img src={IconRating} alt="rating" className='w-6 h-6' />
            <img src={IconRating} alt="rating" className='w-6 h-6' />
            <img src={IconRatingHaalf} alt="rating" className='w-6 h-6' />
          </div>
          <p className='text-white text-xl leading-relaxed'>
            Sau 7 năm xa nhà, Nguyễn Lưu Tranh trở về thành phố nơi cô sinh ra và trở thành bác sĩ thực tập khoa Thần Kinh của bệnh viện Bắc Nhã. Ở đây cô gặp lại chồng cũ mình – Ninh Chí Khiêm là một trong những bác sĩ giỏi nhất của bệnh viện.
          </p>
          <div className='flex items-center space-x-4'>
            <button className='px-6 py-2 bg-black text-white rounded font-bold hover:bg-white hover:text-black transition-all duration-300 border border-black'>
              Chi Tiết
            </button>
            <button className='px-6 py-2 bg-red-700 text-white rounded font-bold hover:bg-red-800 transition-all duration-300'>
              Xem Phim
            </button>
          </div>
        </div>
        <div className="w-[50%] flex justify-center">
          <div className='w-[400px] h-[550px] relative group overflow-hidden shadow-2xl rounded-lg'>
            <img src={Temp} alt="poster" className='w-full h-full object-cover scale-110' />
            <div className='absolute w-full h-full top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <img src={IconPlay} alt="play" className='w-20 h-20 cursor-pointer hover:scale-110 transition-all duration-300' />
            </div>
          </div>
        </div>
      </div>


    </div>

  )
}

export default Banner