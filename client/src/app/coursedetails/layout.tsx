import React from "react"

export default function courseDetailsLayout({
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
