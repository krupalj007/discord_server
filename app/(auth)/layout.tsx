
// import LandingPage from '@/components/landing'
import type {Metadata} from 'next'
import LandingPage from '../landing/landing'

export const metadata: Metadata = {
    title: 'Discord | Share Your Day',
    description: 'Best Platform For Gaming Community',
  }


const AuthLayout = ({children} : {children : React.ReactNode}) => {
    return (
        <div >
            {/* {children} */}
            <LandingPage
            children={children}
            />
        </div>
    )
}


export default AuthLayout