import logo from '../images/logo.svg';

function Header() {
  return (
    <header className="absolute w-full">
      <div className="flex items-center gap-4">
        <img src={logo} alt="logo" className='w-16 h-16'/>
        <h2 className='text-purple-700 text-2xl font-poppins font-extrabold'>.Nick</h2>
      </div>
      
    </header>
  );
}

export default Header;
