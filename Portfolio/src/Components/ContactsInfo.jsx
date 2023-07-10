import {LocationOn,LocalPhone,Email} from '@mui/icons-material'

const ContactsInfo = () => {
  return (
    <div>
        <div className="flex">
            <LocationOn className='text-white'/>
            <p className="text-white">Kyiv,Ukraine</p>
        </div>
        <div className="flex">
            <LocalPhone className='text-white'/>
            <p className="text-white">+380685268410</p>
        </div>
        <div className="flex">
            <Email className='text-white'/>
            <p className="text-white">mykytakovlev@gmail.com</p>
        </div>
    </div>
  )
}

export default ContactsInfo