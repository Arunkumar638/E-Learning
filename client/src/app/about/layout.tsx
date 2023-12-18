import React from "react"

export default function aboutLayout({
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