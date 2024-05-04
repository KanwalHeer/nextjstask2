import Link from "next/link";
export default function Contact() {
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
  <h1 className="text-3xl font-bold mt-4 text-center">Contact Us</h1>
</section>

<section className="location">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111989.31313237658!2d77.32498792347556!3d28.699635117457326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb41c50fdf%3A0xe6f06fd26a7798ba!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1630495771496!5m2!1sen!2sin"
    width={600}
    height={450}
    style={{ border: 0 }}
    loading="lazy"
    className="w-full"
  />
</section>

<section className="contact-us bg-gray-100 py-12">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="content-col">
        <div className="flex items-center mb-4">
          <i className="fa fa-home mr-2" />
          <div>
            <h5 className="font-bold">NH9 Road, ABC Building</h5>
            <p>Ghaziabad, Uttar Pradesh, IN</p>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <i className="fa fa-phone mr-2" />
          <div>
            <h5 className="font-bold">+91 7445546525</h5>
            <p>Monday To Saturday, 9AM To 6PM</p>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <i className="fa fa-envelope mr-2" />
          <div>
            <h5 className="font-bold">xyz@email.com</h5>
            <p>Email Us Your Query</p>
          </div>
        </div>
      </div>
      <div className="content-col">
        <form className="grid grid-cols-1 gap-4">
          <input type="text" placeholder="Enter Name" className="input-field" />
          <input type="email" placeholder="Enter Email" className="input-field" />
          <input type="text" placeholder="Enter Subject" className="input-field" />
          <textarea rows={8} placeholder="Message" className="input-field" />
          <button type="submit" className="hero_btn btn py-2 px-4 bg-blue-500 text-white rounded-full inline-block">Send Message</button>
        </form>
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
