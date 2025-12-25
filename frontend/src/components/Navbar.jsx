import React from 'react'
import {PlusIcon} from "lucide-react"
import { Link } from 'react-router'


/**
 * Navbar component - A navigation bar component for the application
 * Contains the application title and a button to create new notes
 */
const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
        <div className="mx-auto max-w-6xl p-4">
            <div className="flex items-center justify-between">
                {/* Application title with styling */}
                <h1 className='text-3xl font-bold text-primary font-mono tracking-tight '>ThinkBoard</h1>
                {/* Container for navigation actions */}
                <div className='flex items-center gap-4'>
                  {/* Link to create new note with icon and text */}
                  <Link to={'/create'} className="btn btn-primary">
                    <PlusIcon className="size-5"/>
                    <span>New Note</span>
                  </Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar
