import React from "react"
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from "../layout.config";

type Props = {
    children: React.ReactNode
}

export default function ClientLayout({ children }: Props) {
  return(
    <HomeLayout {...baseOptions}>{children}</HomeLayout>
  )
}