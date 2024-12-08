import React from "react"
import Image from "next/image"
 export default function Dashboard(){
    return(
        <>
<div className=" flex pl-2">  {/* Main div: flex layout for TYPE, CATEGORY, and Image */}

{/* First Section: TYPE and CATEGORY */}
<div className="pl-2 border-2 border-white  shadow-md p-4 w-72 "> {/* left section width 50% */}
  <h1 className="space-x-5 text-sm text-gray-600">TYPE</h1>

  {/* Option 1 */}
  <div className="flex mt-3 pl-2">
    <label>
      <div className="flex">
        <input type="checkbox" />
        <p className="pl-1">Sport</p>
      </div>
    </label>
    <p className="text-gray-500 text-sm pl-1">(10)</p>
  </div>

  {/* Option 2 */}
  <div className="flex mt-3 pl-2">
    <label>
      <div className="flex">
        <input type="checkbox" />
        <p className="pl-1">SUV</p>
      </div>
    </label>
    <p className="text-gray-500 text-sm pl-1">(12)</p>
  </div>

  {/* Option 3 */}
  <div className="flex mt-3 pl-2">
    <label>
      <div className="flex">
        <input type="checkbox" />
        <p className="pl-1">MPV</p>
      </div>
    </label>
    <p className="text-gray-500 text-sm pl-1">(16)</p>
  </div>

  {/* Option 4 */}
  <div className="flex mt-3 pl-2">
    <label>
      <div className="flex">
        <input type="checkbox" />
        <p className="pl-1">Sedan</p>
      </div>
    </label>
    <p className="text-gray-500 text-sm pl-1">(20)</p>
  </div>

  {/* Option 5 */}
  <div className="flex mt-3 pl-2">
    <label>
      <div className="flex">
        <input type="checkbox" />
        <p className="pl-1">Coupe</p>
      </div>
    </label>
    <p className="text-gray-500 text-sm pl-1">(14)</p>
  </div>

  {/* Option 6 */}
  <div className="flex mt-3 pl-2">
    <label>
      <div className="flex">
        <input type="checkbox" />
        <p className="pl-1">Hatchback</p>
      </div>
    </label>
    <p className="text-gray-500 text-sm pl-1">(14)</p>
  </div>

  {/* CATEGORY */}
  <h1 className="space-x-5 text-sm text-gray-600 mt-5">CATEGORY</h1>

  {/* Option 1 */}
  <div className="flex mt-3 pl-2">
    <label>
      <div className="flex">
        <input type="checkbox" />
        <p className="pl-1">2 Person</p>
      </div>
    </label>
    <p className="text-gray-500 text-sm pl-1">(10)</p>
  </div>

  {/* Option 2 */}
  <div className="flex mt-3 pl-2">
    <label>
      <div className="flex">
        <input type="checkbox" />
        <p className="pl-1">4 Person</p>
      </div>
    </label>
    <p className="text-gray-500 text-sm pl-1">(14)</p>
  </div>

  {/* Option 3 */}
  <div className="flex mt-3 pl-2">
    <label>
      <div className="flex">
        <input type="checkbox" />
        <p className="pl-1">6 Person</p>
      </div>
    </label>
    <p className="text-gray-500 text-sm pl-1">(12)</p>
  </div>

  {/* Option 4 */}
  <div className="flex mt-3 pl-2">
    <label>
      <div className="flex">
        <input type="checkbox" />
        <p className="pl-1">8 or More</p>
      </div>
    </label>
    <p className="text-gray-500 text-sm pl-1">(16)</p>
  </div>

  {/* Price Range */}
  <div className="mt-5">
    <h1 className="space-x-5 text-sm text-gray-600 mt-5">PRICE</h1>
    <Image
      src="/priceRanger.png"
      alt="price ranger"
      width={180}
      height={20}
      className="mt-5 pl-1"
    />
    <p className="text-gray-500 font-semibold mt-1">Max. $100.00</p>
  </div>
</div>

{/* second section */}

{/* Image (on the right side of TYPE & CATEGORY) */}
<div className="pl-4"> {/* Right section for images */}
  <div className="flex flex-col items-center justify-center space-y-4"> {/* Flex column layout with spacing between images */}
    
    {/* Main car image with background */}
    <div className="relative  rounded-[5%]  w-[300px]"> {/* Main car image container */}
      <Image
        src="/View.png"
        alt="view car"
        width={350}
        height={300}
        className="mt-5"
      />
    </div>
    
    {/* Group of 3 smaller images */}
    <div className="flex space-x-4"> {/* Flex container for the 3 smaller images */}
      {/* Small car image 1 */}
      <div className=" rounded-[5%]  w-[90px]">
        <Image
          src="/car.png"
          alt="view car"
          width={100}
          height={100}
          className=""
        />
      </div>
      
      {/* Small car image 2 */}
      <div className="relative  rounded-[5%] w-[90px]">
        <Image
          src="/carSeat.png"
          alt="view car"
          width={100}
          height={100}
          className=""
        />
      </div>

      {/* Small car image 3 */}
      <div className="relative rounded-[5%] w-[90px]">
        <Image
          src="/underCar.png"
          alt="view car"
          width={100}
          height={100}
          className=""
        />
      </div>
    </div>
  </div>
  {/* third section */}
{/* review section */}
</div>
<div>
    <div>
<div className="pl-2 "> {/* Main wrapper for review section */}
  <div className="bg-gray-100 pl-2 mt-5 w-1/2 rounded-lg shadow-md space-y-4"> {/* Gray background, padding, rounded corners */}
    
    {/* Review Title */}
    <div>
    <h1 className="text-xl font-semibold text-gray-800">Nissan GT - R</h1>
    {/* Review 1 */}
        <div className="text-yellow-500">
            {/* Star Rating (can be customized with icons) */}
            ★★★★☆
            </div>        
              <div className="flex">440+ Reviewers</div>
             </div>
             <div>NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track"</div>

             <div className="flex justify-between "> {/* Flex container with space between tables */}

{/* Table 1 (Left-aligned) */}
<table className="border-collapse">
  <tr>
    <td className="">TypeCar</td>
    <th className="">Sport</th>
  </tr>
  <tr>
    <td>Steering</td>
    <th className="pl-2">Manual</th>
  </tr>
</table>

{/* Table 2 (Right-aligned) */}
<table className="border-collapse">
  <tr>
    <td>Capacity</td>
    <th className="pl-4">2 Person</th>
  </tr>
  <tr>
    <td>Gasoline</td>
    <th className="">70L</th>
  </tr>
</table>

</div>
<footer>


    <div className="flex">
    <h1 className="text-3xl font-bold">$80:00/</h1>
    <h1 className="">day</h1>
    </div>
    <div>
        <h1 className="text-gray-500">$100.00</h1> 
</div>
{/* <div className="flex justify-end ">
  <button className="bg-blue-500 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none hover:blur-sm transition-all">
    Rent Now
  </button>
</div> */}
</footer>
</div>
         
<div className="  mt-10"> {/* Main wrapper for review section */}
    <div className="bg-gray-100 p-6 rounded-lg shadow-md space-y-4"> {/* Gray background, padding, rounded corners */}
      
      {/* Review Title */}
      <h1 className="text-xl font-semibold text-gray-800">User Reviews</h1>
  
      {/* Review 1 */}
      <div className="flex items-start space-x-4">
        {/* Profile Image */}
        <div className="w-12 h-12 bg-gray-300 rounded-full">
          <Image 
            src="/reviewer1.png" 
            alt="Reviewer"
            width={48} 
            height={48} 
            className="rounded-full" 
          />
        </div>
  
        {/* Review Content */}
        <div className="space-y-2">
          {/* Reviewer's Name and Star Rating */}
          <div className="flex items-center space-x-2">
            <h3 className="font-medium text-gray-900">John Doe</h3>
            <div className="text-yellow-500">
              {/* Star Rating (can be customized with icons) */}
              ★★★★☆
            </div>
          </div>
  
          {/* Review Text */}
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod urna at magna varius, et fermentum elit congue. Ut eget nulla neque.
          </p>
        </div>
      </div>
  
      {/* Review 2 */}
      <div className=" flex items-start space-x-4">
        {/* Profile Image */}
        <div className="w-12 h-12 bg-gray-300 rounded-full">
          <Image 
            src="/reviewer2.png" 
            alt="reviewer2"
            width={48} 
            height={48} 
            className="rounded-full" 
          />
        </div>
  
        {/* Review Content */}
        <div className="space-y-2">
          {/* Reviewer's Name and Star Rating */}
          <div className="flex items-center space-x-2">
            <h3 className="font-medium text-gray-900">Jane Smith</h3>
            <div className="text-yellow-500">
              {/* Star Rating (can be customized with icons) */}
              ★★★☆☆
            </div>
          </div>
  
          {/* Review Text */}
          <p className="text-gray-600 text-sm">
            Excellent product! The features were just as described, and I was able to set it up easily. Highly recommend it for anyone looking for quality.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>   
        </div>
      </div>
    </div>
        </>
          )
          }
