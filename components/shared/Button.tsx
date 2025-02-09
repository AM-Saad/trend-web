import { motion } from "framer-motion";
import { useMemo } from "react";

interface Props {
    children?: any
    title: string;
    onClick?: (e: any) => void
    style?: any,
    loading?: boolean
    disabled?: boolean
    type?: 'button' | 'submit'
    size?: 'default' | 'small' | 'large'
}

const Logo = () => {

    return (
        <div className='h-12 w-12'>
            <svg id="eMKSLui7RlY1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><path d="M93.5,39.4c-2-3.5-4.9-6.4-8.4-8.4v0c-7.4-4.1-16.4-4.1-23.8,0-3.5,2-6.4,4.9-8.4,8.4-2,3.6-3.1,7.7-3,11.8v0c0,3.5-.8,7-2.5,10.1-1.6,3-4.1,5.4-7,7.1-6.2,3.4-13.7,3.4-19.9,0-2.9-1.7-5.4-4.2-7-7.1-3.5-6.4-3.5-14-.1-20.3c5.5-9.4,17.5-12.6,26.9-7.2l.4.3c.9.5,2,.1,2.5-.8s.1-2-.8-2.5c0,0,0,0,0,0l-.2-.1v0c-7.4-4.1-16.4-4.1-23.8,0-3.5,2-6.4,4.9-8.4,8.4-2,3.6-3.1,7.8-3,12c0,4.2,1,8.2,3,11.9c2,3.5,4.9,6.4,8.4,8.4c7.4,4.1,16.4,4.1,23.8,0c3.5-2,6.4-4.9,8.4-8.4.4-.7.8-1.4,1.1-2.2.3.8.7,1.6,1.2,2.4c2,3.5,4.9,6.4,8.4,8.4c7.4,4.1,16.4,4.1,23.8,0c3.5-2,6.4-4.9,8.4-8.4c2-3.6,3.1-7.7,3-11.9.1-4.1-.9-8.3-3-11.9Zm-3.4,22c-1.6,3-4.1,5.4-7,7.1-6.2,3.4-13.7,3.4-19.9,0-2.9-1.7-5.4-4.2-7-7.1-3.4-6.3-3.4-13.9,0-20.3c5.5-9.4,17.5-12.6,27-7.2c2.9,1.7,5.3,4.2,7,7.2c3.3,6.4,3.3,14-.1,20.3v0Z" transform="matrix(4.136294 0 0 4.136294 42.945616 44.428572)" paint-order="stroke fill markers" fill="rgba(255,255,255,0)" stroke="#000" stroke-dasharray="380" /></svg>
        </div>
    )
}
const Button: React.FC<Props> = ({ children, title, onClick, style, loading, disabled = false, type = 'button', size = 'default' }) => {
    const btnSize: string = useMemo(() => {
        return size === 'default' ? 'h-[2rem] w-[100px]' : size === 'large' ? 'h-[2.4rem] w-[130px]' : 'h-[1.8rem] w-[80px]'

    }, [size])

    return (
        <div>

            <motion.button
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                disabled={loading || disabled}
                onClick={(e) => onClick ? onClick(e) : null}
                type={type}
                className={`${btnSize} shadow rounded  text-sm ${style} hover:scale-95 transform transition-all flex items-center justify-center`}
            >
                {loading ? <Logo /> : title}
                {children}
            </motion.button>
        </div>

    )
}


export default Button
