

const ContactsForm = () => {
return (
    <div className='flex flex-col gap-5 w-2/3 mt-12'>
        <div className="flex gap-5">
            <input type="text" placeholder="Name" className="pl-4 py-3 rounded-md bg-neutral-800 text-white" />
            <input type="email" placeholder="Email" className="pl-4 py-3 rounded-md bg-neutral-800 text-white" />
        </div>
        <input type="text" placeholder="Message" className="bg-neutral-800 rounded-md h-28 pl-4 pb-14" />
        <button className="bg-purple-500 py-3 rounded-md text-white hover:bg-white hover:text-black">Send a Message</button>
    </div>
)
}

export default ContactsForm