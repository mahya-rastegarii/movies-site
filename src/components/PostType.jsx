import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useGenreContext } from '../Context/GenreContext'


export default function PostType() {

 const {fetchMovieGenres, fetchSerialGenres} = useGenreContext()
  return (
    <div className=' flex justify-between shadow-md items-center bg-color-4 rounded-xl p-2 text-color-1 font-semibold text-sm'>
    <NavLink className={ ({isActive}) => isActive ? 'py-1 px-6 ml-2 rounded-lg bg-color-hover hover:text-color-1 custom-transition delay-150':'py-1 px-6 bg-transparent ml-2 rounded-lg hover:text-color-2  custom-transition delay-150'} onClick={fetchMovieGenres} ><span > فیلم </span></NavLink>
    <NavLink className={ ({isActive}) => isActive ? 'py-1 px-6 ml-2 rounded-lg bg-color-hover hover:text-color-1 custom-transition delay-150':'py-1 px-6 bg-transparent ml-2 rounded-lg hover:text-color-2  custom-transition delay-150'} onClick={fetchSerialGenres}><span > سریال </span></NavLink>
    </div>
  )
}
