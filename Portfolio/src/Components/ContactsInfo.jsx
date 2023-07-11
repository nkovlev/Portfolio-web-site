import {LocationOn, LocalPhone, Email, LinkedIn} from '@mui/icons-material'

const ContactsInfo = () => {
return (
    <div className='flex flex-col gap-5 w-2/3 mt-12'>
        <div className="flex bg-neutral-800 pl-8 py-3 rounded-lg gap-2">
            <LocationOn className='text-purple-700'/>
            <p className="text-white font-normal hover:text-purple-700">Kyiv, Ukraine</p>
        </div>
        <div className="flex bg-neutral-800 pl-8 py-3 rounded-lg gap-2">
            <LocalPhone className='text-purple-700'/>
            <p className="text-white font-normal  hover:text-purple-700">+380 68 526 84 10</p>
        </div>
        <div className="flex bg-neutral-800 pl-8 py-3 rounded-lg gap-2">
            <Email className='text-purple-700'/>
            <p className="text-white font-normal  hover:text-purple-700">mykytakovlev@gmail.com</p>
        </div>
        <div className="flex bg-neutral-800 pl-8 py-3 rounded-lg gap-2">
            <LinkedIn className='text-purple-700'/>
            <a href='https://www.linkedin.com/in/mykyta-kovlev/' target='blank' className="text-white font-normal  hover:text-purple-700">mykyta-kovlev</a>
        </div>
    </div>
)
}

export default ContactsInfo