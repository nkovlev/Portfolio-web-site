import ContactsForm from "./ContactsForm"
import ContactsInfo from "./ContactsInfo"

const ContactsSection = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
        <div className="h-96 w-3/5">
          <h1 className="text-white font-poppins font-bold text-3xl mb-8">Get in <span className="text-purple-700">Touch</span></h1>
          <hr className="border-dashed border-t border-gray-700" />
          <div className="flex gap-10">
            <ContactsInfo/>
            <ContactsForm/>
          </div>
        </div>
    </div>
  )
}

export default ContactsSection