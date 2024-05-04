import Link from "next/link";

export default function Products() {
  
    return (
      <div>
      <>
      <section className="header bg-gray-900 bg-cover bg-center bg-opacity-50 h-[200px]" style={{backgroundImage: "url('img/mainSection.jpg')"}}>
    <nav className="flex items-center justify-between">
      <a href="index.html" className="logo flex items-center">
        Xplore
        <i className="fab fa-staylinked ml-1" />
        kill
      </a>
      <div className="nav-links hidden md:block">
        {/* Responsive bar open and close */}
        <i className="fa fa-times mr-4"  />
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
    <h1 className="text-3xl font-bold mt-4 text-center">Our Courses</h1>
  </section>



  <section className="course bg-gray-100 py-12 px-4">
  <h1 className="text-center text-3xl font-bold mb-8">Course We Offer</h1>
  <p className="text-center text-lg mb-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
  <div className="container mx-auto mt-8">
    <div className="flex flex-col lg:flex-row ">
      <div className="course-col lg:w-1/3 mb-4 lg:mb-0 mt-8">
        <h3 className="text-xl font-bold mb-2">Undergraduate Programs</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum laborum velit non.</p>
      </div>
      <div className="course-col lg:w-1/3 mb-4 lg:mb-0  mt-8">
        <h3 className="text-xl font-bold mb-2">Graduate Programs</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum laborum velit non.</p>
      </div>
      <div className="course-col lg:w-1/3  mt-8">
        <h3 className="text-xl font-bold mb-2">Adult Learning & Degree Completion</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum laborum velit non.</p>
      </div>
    </div>
  </div>
</section>

<section className="facilities bg-gray-100 py-12 px-4">
  <h1 className="text-center text-3xl font-bold mb-8">Best Courses</h1>
  <p className="text-center text-lg mb-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
  <div className="container mx-auto mt-8">
    <div className="flex flex-col lg:flex-row">
      <div className="facilities-col lg:w-1/3 mb-4 lg:mb-0  mt-8">
        <img src="img/course1.png" alt="" className="mb-2" />
        <h3 className="text-xl font-bold mb-2">Web Development</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.</p>
      </div>
      <div className="facilities-col lg:w-1/3 mb-4 lg:mb-0  mt-8">
        <img src="img/course2.png" alt="" className="mb-2" />
        <h3 className="text-xl font-bold mb-2">Artificial Intelligence</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.</p>
      </div>
      <div className="facilities-col lg:w-1/3  mt-8">
        <img src="img/course3.png" alt="" className="mb-2" />
        <h3 className="text-xl font-bold mb-2">Data Science</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.</p>
      </div>
    </div>
  </div>
</section>


  <section className="footer bg-gray-200 py-8 px-4">
  <hr className="my-4" />
  <h4 className="text-center text-3xl font-bold mb-8 ">About Us</h4>
  <p className="text-center text-lg mb-8">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima
    incidunt odio nam facilis, eligendi
    <br /> Itaque fugiat cupiditate consectetur. Aliquid ab deserunt
    exercitationem, illum molestiae dolorem.
  </p>
  <div className="icons flex mb-4">
    <i className="fab fa-facebook-f mr-4" />
    <i className="fab fa-instagram mr-4" />
    <i className="fab fa-twitter mr-4" />
    <i className="fab fa-linkedin" />
  </div>
  <p className="text-center text-lg mb-8">
    Made with <i className="footer bg-gray-200 py-8 px-4" /> by{" "}
    <a href="#" className="text-blue-500">Sagar Developer</a>
  </p>
  <p className="text-center text-lg mb-8">
    Copyright © 2021 <a href="index.html" className="text-blue-500">Xplore Skill</a>. All Rights Reserved
  </p>
</section>






</>

      </div>
    );
  }