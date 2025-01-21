'use client'

import {useEffect} from 'react'
import {useRouter} from 'next/navigation'

function redirectLogin(router) {
   router.push('/login')
}

export default function Home() {
   const router = useRouter()

   useEffect(() => {
      redirectLogin(router)
   })

   return null
}
