import { Link } from 'react-router-dom'
import footerLogo from '../assets/images/footerLogo.jpg'
import googlePlayLogo from '../assets/images/googlePlayLogo.jpg'
import appleLogo from '../assets/images/appleLogo.jpg'
import exeLogo from '../assets/images/exeLogo.jpg'

function Footer() {
  return (
    <>
      <div className="border-y border-gray-200 bg-white">
        <div className="container mx-auto px-3">
          <div className='py-3 mt-2'>
            <img src={footerLogo} alt="" className='w-45' />
          </div>
          <div className='px-11 pb-10 flex justify-between items-center'>
            <div>
              <div className='text-gray-700 font-semibold text-xl'>
                Market
              </div>
              <div className='text-gray-600 mt-3 font-normal'>
                <Link to={'#'} className='block hover:text-black transition-colors duration-150'>Biz barada</Link>
                <Link to={'#'} className='block hover:text-black transition-colors duration-150'>Eltip bermek we töleg tertibi</Link>
                <Link to={'#'} className='block hover:text-black transition-colors duration-150'>Aragatnaşyk</Link>
                <Link to={'#'} className='block hover:text-black transition-colors duration-150'>Ulanyş düzgünleri we gizlinlik şertleri</Link>
              </div>
            </div>
            <div>
              <div className='text-gray-700 font-semibold text-xl'>
                Habarlaşmak üçin
              </div>
              <div className='text-gray-600 mt-3'>
                <div className='flex items-center'>
                  <span className='mr-6'>Telefon:</span>
                  <a className='hover:text-black transition-colors duration-150' href="#">+993 12 22-74-75</a>
                </div>
                <div className='flex items-center'>
                  <span className='mr-12'>Imo:</span>
                  <a className='hover:text-black transition-colors duration-150' href="#">+993 63 75-74-22</a>
                </div>
                <div className='flex items-center'>
                  <span className='mr-9'>E-mail:</span>
                  <a className='hover:text-black transition-colors duration-150' href="#">info@ynamdar.com</a>
                </div>
                <div className='flex items-center'>
                  <span className='mr-2'>Instagram:</span>
                  <a className='hover:text-black transition-colors duration-150' href="#">@ynamdar_com</a>
                </div>
              </div>
            </div>
            <div>
              <div className='text-gray-700 font-semibold text-xl'>
                Mobile programmalar
              </div>
              <div className='flex items-center mt-3'>
                <a href="">
                  <img className='w-40 mr-2' src={googlePlayLogo} alt="" />
                </a>
                <a href="">
                  <img className='w-40' src={appleLogo} alt="" />
                </a>
              </div>
              <a href="">
                <img className='w-40 mt-2' src={exeLogo} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white'>
        <div className='text-gray-600 container mx-auto px-3 py-2 '>
          © 2019-2024 ynamdar.com. Ähli hukuklary goraglydyr.
        </div>
      </div>
    </>
  )
}

export default Footer