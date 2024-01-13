import { useNavigate } from "react-router-dom"
import logo from '../assets/logo.png'
const Logo = () => {

    const navigate = useNavigate()
  return (
    <div onClick={() => navigate('/')} className="flex items-center gap-x-1">
        <img className="max-w-6" src={logo} alt="" />
        <h2 className="text-lg font-semibold hover:text-muted-foreground cursor-pointer">BookBrowse</h2>
    </div>
  )
}
export default Logo