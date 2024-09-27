import {Person,LocationOn, LocalPhone, Email } from '@mui/icons-material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const ModalInfo = () => {
  return (
    <div className="w-60 flex flex-col items-start ">
    <div className="flex gap-4 mb-2 mt-2">
      <Person className="text-purple-700" />
      <p className="text-white font-normal hover:text-purple-700">
        Mykyta Kovlev
      </p>
    </div>
    <hr className="border-dashed border-t w-full border-gray-700" />
    <div className="flex gap-4 mb-2 mt-2">
      <CalendarMonthIcon className="text-purple-700" />
      <p className="text-white font-normal hover:text-purple-700">
        23.10.2002
      </p>
    </div>
    <hr className="border-dashed border-t w-full border-gray-700" />
    <div className="flex gap-4 mb-2 mt-2">
      <LocationOn className="text-purple-700" />
      <p className="text-white font-normal hover:text-purple-700">Kyiv, Ukraine</p>
    </div>
    <hr className="border-dashed border-t w-full border-gray-700" />
    <div className="flex gap-4 mb-2 mt-2">
      <LocalPhone className="text-purple-700" />
      <p className="text-white font-normal  hover:text-purple-700">+380 68 526 84 10</p>
    </div>
    <hr className="border-dashed border-t w-full border-gray-700" />
    <div className="flex gap-4 mb-2 mt-2">
      <Email className="text-purple-700" />
      <p className="text-white font-normal  hover:text-purple-700">mykytakovlev@gmail.com</p>
    </div>
  </div>
  )
}

export default ModalInfo