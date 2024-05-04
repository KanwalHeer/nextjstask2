import Link from "next/link";
import Image from "next/image";
export default function About() {
  return (
    <div>
  
  <section className="header bg-gray-900 bg-cover bg-center bg-opacity-50 h-[200px]" style={{backgroundImage: "url('img/mainSection.jpg')"}}>
  <nav className="flex items-center justify-between">
    <a href="index.html" className="logo flex items-center">
      Xplore
      <i className="fab fa-staylinked ml-1" />
      kill
    </a>
    <div className="nav-links hidden md:block">
      {/* Responsive bar open and close */}
      <i className="fa fa-times mr-4" />
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
    <i className="fa fa-bars md:hidden" />
  </nav>
  <h1 className="text-3xl font-bold mt-4 text-center">About Us</h1>
</section>

<section className="about-us bg-gray-100 py-12 px-8 ">
  <div className="container mx-auto">
    <div className="flex flex-col lg:flex-row items-center justify-center">
      <div className="about-col lg:w-1/2 lg:mr-4 text-center">
        <h1 className="text-3xl font-bold mb-8">We are the world's largest University</h1>
        <p className="text-lg mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          cumque in accusantium molestias maiores fuga vitae eos, ducimus
          officiis repudiandae voluptatem error. Laboriosam, numquam blanditiis
          aspernatur, nobis tempora consequatur id aliquam asperiores voluptatum
          iste animi voluptatem fugiat totam excepturi dolor.
        </p>
        <a href="#" className="hero_btn btn py-2 px-4 bg-blue-500 text-white rounded-full inline-block">EXPLORE NOW</a>
      </div>
      <div className="about-col lg:w-1/2 mt-6 lg:mt-0">
      <Image src={'/img/about.png'} height={500} width={600} alt="pic"/>
        
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





    </div>

  );
}
