import ContactsForm from "./components/ContactsForm"
import ContactsInfo from "./components/ContactsInfo"
import { motion } from 'framer-motion';

const ContactsSection = () => {
  return (
    <motion.div className="h-full mt-40 flex flex-col justify-center items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
        <div className="h-96 w-3/5">
          <h1 className="text-white font-poppins font-bold text-3xl mb-8">Get in <span className="text-purple-700">Touch</span></h1>
          <hr className="border-dashed border-t border-gray-700" />
          <div className="flex gap-10 flex-col lg:flex-row">
            <ContactsInfo/>
            <ContactsForm/>
          </div>
        </div>
    </motion.div>
  )
}

export default ContactsSection