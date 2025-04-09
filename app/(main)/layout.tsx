import React from "react"

type Props = {
    children: React.ReactNode
}

export default function ClientLayout({ children }: Props) {
  return(
        <>
            {children}
        </>
  )
}