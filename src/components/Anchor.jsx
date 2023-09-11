import React from 'react'

export default function Anchor(href,contenido) {
  return (
    <>
    <a href="{href}" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">{contenido}</a>
    </>
    )
}
