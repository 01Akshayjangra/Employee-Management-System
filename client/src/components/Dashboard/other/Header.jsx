import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthProvider';

const Header = () => {
  const { handleLogout, user } = useContext(AuthContext);

  return (
    <div className='flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
      <h1 className='text-2xl font-medium text-zinc-100'>
        Hello <br />
        <span className='text-3xl font-semibold text-zinc-50'>
          {user && user.firstName} ✌
        </span>
      </h1>

      <div className='flex items-center gap-3 self-end'>
        <button
          onClick={handleLogout}
          className='rounded-full px-5 py-2 bg-red-600 text-sm md:text-base font-medium text-white shadow-sm hover:bg-red-500 transition-colors'
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Header