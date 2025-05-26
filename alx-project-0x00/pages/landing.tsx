import Card from "@/components/Card"
import Button from "@/components/Button"
const Landing: React.FC = ()  => {
    return(
        <div>
            <h1 className=" text-xl font-extralight">Landing Page</h1>
             <Card />
              <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Button Instances</h1>

      {/* Small Buttons */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Small Buttons</h2>
        <Button title="Small Rounded-sm" styles="text-sm rounded-sm bg-blue-500 text-white hover:bg-blue-600" />
        <Button title="Small Rounded-md" styles="text-sm rounded-md bg-green-500 text-white hover:bg-green-600" />
        <Button title="Small Rounded-full" styles="text-sm rounded-full bg-red-500 text-white hover:bg-red-600" />
      </div>

      {/* Medium Buttons */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Medium Buttons</h2>
        <Button title="Medium Rounded-sm" styles="text-base rounded-sm bg-purple-500 text-white hover:bg-purple-600" />
        <Button title="Medium Rounded-md" styles="text-base rounded-md bg-yellow-500 text-white hover:bg-yellow-600" />
        <Button title="Medium Rounded-full" styles="text-base rounded-full bg-indigo-500 text-white hover:bg-indigo-600" />
      </div>

      {/* Large Buttons */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Large Buttons</h2>
        <Button title="Large Rounded-sm" styles="text-lg rounded-sm bg-pink-500 text-white hover:bg-pink-600" />
        <Button title="Large Rounded-md" styles="text-lg rounded-md bg-teal-500 text-white hover:bg-teal-600" />
        <Button title="Large Rounded-full" styles="text-lg rounded-full bg-orange-500 text-white hover:bg-orange-600" />
      </div>
    </div>
        </div>
    )
}
export default Landing