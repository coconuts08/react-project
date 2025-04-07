import HomeButton from "./component/partials/button/HomeButton";
import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);
  const[color, setColor] = React.useState("#ffffff")
  const colorRef = React.useRef();

  const user = {
    name: "Dauglass black",
    imageUrl: "https://i.pinimg.com/736x/bf/fb/ae/bffbae0f57ceb90dba6664ca5fdb7804.jpg",
    imageSize: 90,
    bio: "Dauglas black likes to eat Donut, watermelon and chicken",
  };

  

  // setCount(count + 1);
  

  const incrementButton = () => {
    setCount(count + 1);
    console.log("Incremented");
  };

  const decrementButton = () => {
    if(count === 0) {
      alert("Counter can't be negative.");
      return;
    }
    setCount(count - 1);
    console.log("Decremented");
  };

  const handleSubmitCjangeBackgroundColor =(e) => {
    e.preventDefault();
    setColor(colorRef.current.value);

  };
  console.log("colorRef")


  const numbers = [1, 2, 3, 4, 5];

  return (

    
    
    <>
      <div style={{backgroundColor:color}} className="className h-[100dvh]">
        <div className="className flex items-center justify-center flex-col h-full gap-1">
          <p className="text-xl">Counter: {count}</p>
          <h1 className="text-xl text-red-700 font-bold underline ">
            Welcome to React!
          </h1>
          <div className="flex gap-1 p-4">
            <HomeButton 
            buttonFunction={incrementButton} buttonText=
            {"Increment"}/>
            
            <HomeButton 
            buttonFunction={decrementButton} buttonText=
            {"Decrement"}/>
          </div>


          <hr className="border1 border-black w-[90vw]" />

          <p className="text-xl p-2">Chose a color to change background color</p>
          <form onSubmit = {handleSubmitCjangeBackgroundColor} className="flex gap-4" action="">
            <input
            ref = {colorRef}
            type="color" className="px-4 h-[43.2px] w-[82.25px] py-2 border-2 border-gray-200 rounded-md cursor-pointer"/>
            <button type="submit" className="border-2 py-2 px-4 rounded-md hover:bg-red-500 hover:text-white transition-all ease-in-out">
              Submit
            </button>
          </form> 
          <hr className="border1 border-black w-[90vw]" />
            <ul>
              {numbers.map((item, key) => {
                return <li key={key}>Wow: {item}</li>
              })}
            </ul>




            <hr className="border1 border-black w-[90vw]" />
            <div className="flex justify-center items-center ">
      <div className="w-80 rounded-xl shadow-lg overflow-hidden font-sans text-center bg-white">
        {/* Gradient Header */}
        <div className="h-24 bg-gradient-to-r from-indigo-500 to-purple-500"></div>

        {/* Profile Image */}
        <div
          className="relative -top-11 flex justify-center items-center"
          style={{ height: `${user.imageSize}px` }}
        >
          <img
            className="w-[90px] h-[90px] rounded-full border-4 border-white object-cover"
            src={user.imageUrl}
            alt={"Photo of " + user.name}
          />
        </div>

        {/* Name and Bio */}
        <div className="p-4 mt-[-4rem]">
          <h2 className="my-2 text-xl">{user.name}</h2>
          <p className="text-sm">{user.bio}</p>
        </div>
      </div>
    </div>
        </div>
      </div>
      

    </>
  );
}

export default App