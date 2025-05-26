import Card from "@/components/Card"
import Button from "@/components/Button"
const Landing: React.FC = ()  => {
    return(
        <div>
            <h1 className=" text-xl font-extralight">Landing Page</h1>
             <Card />
              <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2"></h2>
         <Button title="Small Rounded-sm" styles="text-sm rounded-sm bg-blue-500 text-white hover:bg-blue-600" />
        <Button title="Small Rounded-md" styles="text-sm rounded-md bg-green-500 text-white hover:bg-green-600" />
        <Button title="Small Rounded-full" styles="text-sm rounded-full bg-red-500 text-white hover:bg-red-600" />
      </div>
        </div>
    )
}
export default Landing