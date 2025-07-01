import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-yellow-50 to-amber-50 border-t border-amber-200 py-4 mt-auto">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-amber-700 font-medium">
          © {new Date().getFullYear()} - BD Todo App
        </p>
      </div>
    </footer>
  )
}

export default Footer