
import Link from "next/link";
import Image from "next/image";




export default function Home() {

  
  return (
    <>
    {/* Created BY - Sagar Developer */}
    <section className="header bg-gray-900 bg-cover bg-center bg-opacity-50 h-[300px]" style={{backgroundImage: "url('img/mainSection.jpg')"}}>
      <nav className="flex items-center justify-between p-4">
        <a href="index.html" className="logo flex items-center space-x-2">
          <span className="text-xl font-bold">Xplore</span>
          <i className="fab fa-staylinked" />
          <span className="font-normal">kill</span>
        </a>
        <div className="nav-links hidden md:block">
          {/* Responsive bar open and close */}
          <i className="fa fa-times" />
          <ul className="flex items-center space-x-4">
          <Link href={'/'}>
            <li>
              <a href="/">Home</a>
            </li>
            </Link>
            
            <Link href={'/courses'}>
            <li>
              <a href="/courses">Courses</a>
            </li>
            </Link>

            <Link href={'/blog'}>
            <li>
              <a href="/blog">Blog</a>
            </li>
            </Link>
            
            <Link href={'/about'}>
            <li>
              <a href="/about">About</a>
            </li>
            </Link>

            <Link href={'/contact'}>
            <li>
              <a href="/contact">Contact</a>
            </li>
            </Link>

          </ul>
        </div>
        <i className="fa fa-bars md:hidden"  />
        {/* Responsive bar open and close */}
      </nav>
      <div className="text_box text-center mt-10">
        <h2 className="text-3xl font-bold">GET READY</h2>
        <p id="headtext" className="text-xl font-semibold">
          TO DISCOVER CAMPUS
        </p>
        <p className="text-lg mt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
          consequuntur corrupti sapiente aut porro
          <br /> esse blanditiis in quae perspiciatis quo.
        </p>
        <a href="#" className="hero_btn bg-yellow-500 text-black py-2 px-6 mt-4 mb-6 rounded-full inline-block hover:bg-yellow-600">
          Visit Us To Know More
        </a>
      </div>
    </section>



    {/* Course Section Start */}
    <section className="course bg-gray-100 py-12 px-4">
  <div className="PageBlock flex items-center">
    <div className="verticalLine h-20 border-l-2 border-gray-400"></div>
    <div className="Clear"></div>
  </div>
  <h1 className="text-center text-3xl font-bold mb-8 ">
    EXPLORE OUR 60+ <br /> MAJOR PROGRAMS
  </h1>
  <p className="text-center text-lg mb-8">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="course-col bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Undergraduate Programs</h3>
      <p className="text-base text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas soluta labore quisquam impedi
        distinctio explicabo aut minima quos pariatur unde aliquam earum laborum velit non.
      </p>
    </div>
    <div className="course-col bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Graduate Programs</h3>
      <p className="text-base text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas soluta labore quisquam impedit
        distinctio explicabo aut minima quos pariatur unde aliquam earum laborum velit non.
      </p>
    </div>
    <div className="course-col bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Adult Learning & Degree Completion</h3>
      <p className="text-base text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas soluta labore quisquam impedit
        distinctio explicabo aut minima quos pariatur unde aliquam earum laborum velit non.
      </p>
    </div>
  </div>
</section>



    {/* Course Section End */}
    {/* Campus Section Start*/}
    <section className="course bg-gray-100 py-12 px-4 ">
  <div className="PageBlock flex items-center">
    <div className="verticalLine h-20 border-l-2 border-gray-400"></div>
    <div className="Clear"></div>
  </div>
  <h1 className="text-center text-3xl font-bold mb-8 ">TAKE OUR VIRTUAL TOUR</h1>
  <p className="text-center text-lg mb-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="campus-col bg-white rounded-lg shadow-md overflow-hidden">

    <Image src={'/img/banner1.png'} height={'400'} width={'400'} alt="pic" />
   
      <div className="layer bg-black bg-opacity-50 py-2 px-4 text-white">
        <h3 className="text-lg font-semibold">DELHI</h3>
      </div>
    </div>
    <div className="campus-col bg-white rounded-lg shadow-md overflow-hidden">

    <Image src={'/img/Campus2.png'} height={'400'} width={'400'} alt="pic" />
     
      <div className="layer bg-black bg-opacity-50 py-2 px-4 text-white">
        <h3 className="text-lg font-semibold">HYDERABAD</h3>
      </div>
    </div>
    <div className="campus-col bg-white rounded-lg shadow-md overflow-hidden">
    <Image src={'/img/Campus3.png'} height={'400'} width={'400'} alt="pic" />
      
      <div className="layer bg-black bg-opacity-50 py-2 px-4 text-white">
        <h3 className="text-lg font-semibold">MUMBAI</h3>
      </div>
    </div>
  </div>
</section>





<section className="facilities py-10 bg-gray-100">
  <div className="PageBlock">
    <div className="verticalLine" />
    <div className="Clear" />
  </div>
  <h1 className="text-center text-3xl font-bold mb-8">Our Facilities</h1>
  <p className="text-center text-lg mb-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
  <div className="row grid grid-cols-1 md:grid-cols-3 gap-4">

    <div className="facilities-col">
    <Image src={'/img/libary.png'} height={'400'} width={'400'} alt="pic" />
     
      <h3 className="text-xl font-semibold mt-4">Best Library</h3>
      <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.</p>
    </div>
    <div className="facilities-col">
    <Image src={'/img/playground.png'} height={'400'} width={'400'} alt="pic" />
     
      <h3 className="text-xl font-semibold mt-4">Athletics</h3>
      <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.</p>
    </div>
    <div className="facilities-col">
    <Image src={'/img/food.png'} height={'400'} width={'400'} alt="pic" />
     
      <h3 className="text-xl font-semibold mt-4">Tasty and Healthy Food</h3>
      <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.</p>
    </div>
  </div>
</section>



<section className="testimonials py-10 bg-gray-100">
  <div className="PageBlock">
    <div className="verticalLine" />
    <div className="Clear" />
  </div>
  <h1 className="text-center text-3xl font-bold mb-8">What Our Students Say</h1>
  <p className="text-center text-lg mb-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="testimonials-col flex">
    <Image src={'/img/user.png'} height={'12'} width={'12'} alt="pic" className="w-12 h-12 rounded-full mr-4"/>
     
      <div>
        <p className="text-gray-700 mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a deserunt. In quia repellat maxime.
        </p>
        <h3 className="text-lg font-semibold mb-1">Student Name</h3>
        <div className="flex">
          <i className="fa fa-star text-yellow-500 mr-1" />
          <i className="fa fa-star text-yellow-500 mr-1" />
          <i className="fa fa-star text-yellow-500 mr-1" />
          <i className="fa fa-star text-yellow-500 mr-1" />
          <i className="fa fa-star text-yellow-500" />
        </div>
      </div>
    </div>
    <div className="testimonials-col flex">
    <Image src={'/img/user.png'} height={'12'} width={'12'} alt="pic" className="w-12 h-12 rounded-full mr-4"/>
     
      <div>
        <p className="text-gray-700 mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a deserunt. In quia repellat maxime.
        </p>
        <h3 className="text-lg font-semibold mb-1">Student Name</h3>
        <div className="flex">
          <i className="fa fa-star text-yellow-500 mr-1" />
          <i className="fa fa-star text-yellow-500 mr-1" />
          <i className="fa fa-star text-yellow-500 mr-1" />
          <i className="fa fa-star text-yellow-500 mr-1" />
          <i className="fa fa-star-half-alt text-yellow-500" />
        </div>
      </div>
    </div>
  </div>
</section>



<section className="cta py-10 bg-blue-500 text-white text-center">
  <h1 className="text-3xl font-bold mb-4">GET READY FOR A BRIGHT FUTURE</h1>
  <Link href={'/contact'}
   className="inline-block bg-white text-blue-500 py-2 px-6 rounded-full uppercase font-semibold transition duration-300 hover:bg-blue-700 hover:text-white">
    CONTACT US
</Link>
</section>



<section className="footer py-8 px-4 bg-gray-200">
  <hr className="border-gray-400 my-4" />
  <h4 className="text-center text-3xl font-bold mb-8">About Us</h4>
  <p className="text-center text-lg mb-8">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima incidunt odio nam facilis, eligendi Itaque fugiat cupiditate consectetur. Aliquid ab deserunt exercitationem, illum molestiae dolorem.
  </p>
  <div className="flex mb-4">
    <i className="fab fa-facebook-f text-gray-600 mr-4" />
    <i className="fab fa-instagram text-gray-600 mr-4" />
    <i className="fab fa-twitter text-gray-600 mr-4" />
    <i className="fab fa-linkedin text-gray-600 mr-4" />
  </div>
  <p className="text-center text-lg mb-8">
    Made with <i className="fas fa-heart text-red-600" /> by{" "}
    <a href="index.html" className="text-blue-600">Sagar Developer</a>
  </p>
  <p className="text-center text-lg mb-8">
    Copyright © 2021 <a href="index.html" className="text-blue-600">Xplore Skill</a>. All Rights
    Reserved
  </p>
</section>
  

</>

     
  )  
}