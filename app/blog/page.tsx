import Link from "next/link";
import Image from "next/image";
export default function Blog() {
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
    <h1 className="text-3xl font-bold mt-4 text-center">Our Post</h1>
  </section>

  {/* Blog Page Section Start */}
  <section className="blog-content py-8 px-4">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row">
        <div className="blog-left lg:w-3/4 lg:mr-4">
          <h2 className="text-2xl font-bold mb-4">Our Certificate & Online Program</h2>
          <h5 className="mb-4">Aug 1, 2021</h5>
          <Image src={'/img/post.png'} height={500} width={600} alt="pic"/>
          {/* <img src="img/post.png" alt="" className="mb-4" /> */}
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            dolor consequatur, nobis quae obcaecati delectus at aspernatur,
            placeat quasi iure mollitia. Repellendus a ut nostrum dolore velit
            odit cumque, quos doloribus sint id aperiam eius aliquam quo modi
            sequi rem quia exercitationem laborum, ratione expedita! Deleniti
            velit officia incidunt illum.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            corrupti blanditiis deserunt incidunt itaque ut laudantium a amet
            omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo, aperiam
            nobis labore pariatur, esse vitae amet repellendus libero architecto
            nisi facere unde ducimus perspiciatis, laudantium alias porro.
            Sapiente voluptatem eligendi at voluptatum optio facilis?
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            corrupti blanditiis deserunt incidunt itaque ut laudantium a amet
            omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo, aperiam
            nobis labore pariatur, esse vitae amet repellendus libero architecto
            nisi facere unde ducimus perspiciatis, laudantium alias porro.
            Sapiente voluptatem eligendi at voluptatum optio facilis?
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            corrupti blanditiis deserunt incidunt itaque ut laudantium a amet
            omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo, aperiam
            nobis labore pariatur, esse vitae amet repellendus libero architecto
            nisi facere unde ducimus perspiciatis, laudantium alias porro.
            Sapiente voluptatem eligendi at voluptatum optio facilis?
          </p>








          <div className="comment-box mb-8">
  <h3 className="text-2xl font-bold mb-4">Leave a Comment</h3>
  <form className="comment-form">
    <div className="mb-4">
      <label htmlFor="name" className="block text-lg font-medium text-gray-800 mb-1">Name</label>
      <input type="text" id="name" name="name" placeholder="Enter Your Name" className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
    </div>
    <div className="mb-4">
      <label htmlFor="email" className="block text-lg font-medium text-gray-800 mb-1">Email</label>
      <input type="email" id="email" name="email" placeholder="Enter Your Email" className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
    </div>
    <div className="mb-4">
      <label htmlFor="comment" className="block text-lg font-medium text-gray-800 mb-1">Comment</label>
      <textarea id="comment" name="comment" rows={5} placeholder="Your Comment" className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"></textarea>
    </div>
    <button type="submit" className="hero_btn btn py-2 px-6 bg-blue-500 text-white rounded-full inline-block hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50">POST COMMENT</button>
  </form>
</div>







        </div>


        <div className="blog-right lg:w-1/4">
          <h3 className="text-xl font-bold mb-4">Post Categories</h3>
          <div className="mb-2">
            <span className="mr-2">Business Analytics</span>
            <span>12</span>
          </div>
          <div className="mb-2">
            <span className="mr-2">Machine Learning</span>
            <span>29</span>
          </div>
          <div className="mb-2">
            <span className="mr-2">Computer Science</span>
            <span>15</span>
          </div>
          <div className="mb-2">
            <span className="mr-2">Data Analytics</span>
            <span>22</span>
          </div>
          <div className="mb-2">
            <span className="mr-2">Full Stack</span>
            <span>20</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Blog Page Section end */}
  
  {/* Footer Section start */}
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
