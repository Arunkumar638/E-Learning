import React from "react"

export default function cartLayout({
    children,
}:{
    children:React.ReactNode
}){
    return(
        <html lang="en">
        <body>{children}</body>
      </html>
      )
}
