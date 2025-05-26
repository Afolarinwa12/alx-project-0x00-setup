import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title='' , styles=''}) => {
  return (
    <div>
         <button className={`p-2 m-2 ${styles}`}>
      {title}
    </button>
    </div>
    
  )
}

export default Button;