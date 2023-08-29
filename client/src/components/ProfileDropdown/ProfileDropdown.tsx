import { useRef } from 'react'
import {RxPerson} from "react-icons/rx";
import {FiCreditCard,FiGithub,FiLifeBuoy,FiLogOut} from "react-icons/fi";
import useClickOutside from '../../hooks/useClickOutside';
import { useAuthStore } from '../../store/authStore';

interface Props{
    setShowProfileDropdown: (value:boolean) => void,
    triggerToast: (errorType:string,text:string) => void
}

const ProfileDropdown = ({setShowProfileDropdown,triggerToast}:Props) => {
    const ref = useRef<HTMLDivElement>(null);
    const { user, login, logout } = useAuthStore();

    useClickOutside(ref,() => {
        setShowProfileDropdown(false)
    })

    const handleLogout = () => {
        logout();
        setShowProfileDropdown(false);
        triggerToast("success","User logged out.")
    }

  return (
    <div className="profile-dropdown" ref={ref}>
        <h4>My Account</h4>
        <ul>
            <li><RxPerson className='icon'/> Profile</li>
            <li><FiCreditCard className='icon'/> Billing</li>
        </ul>
        <ul>
            <li><FiGithub className='icon'/> Github</li>
            <li><FiLifeBuoy className='icon'/> Support</li>
        </ul>
        <ul>
            <li onClick={handleLogout}><FiLogOut className='icon'/> Log out</li>
        </ul>
    </div>
  )
}

export default ProfileDropdown