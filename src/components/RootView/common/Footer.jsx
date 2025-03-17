import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10 animate__animated animate__fadeInUp">
      <div className="w-full mx-auto px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left place-items-center  lg:px-10">
          
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">🚗 AutoSphere</h2>
            <p className="text-gray-400 text-sm">
              Your go-to platform for car services, parts, and expert guidance.
              Drive with confidence!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-gray-200 transition duration-300">Services</a></li>
              <li><a href="#" className="hover:text-gray-200 transition duration-300">Shop</a></li>
              <li><a href="#" className="hover:text-gray-200 transition duration-300">Finance</a></li>
              <li><a href="#" className="hover:text-gray-200 transition duration-300">Reviews</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300 text-xl"><FaFacebookF /></a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300 text-xl"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition duration-300 text-xl"><FaInstagram /></a>
              <a href="#" className="text-gray-400 hover:text-blue-700 transition duration-300 text-xl"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Baby Name. All rights reserved By - <Link className="text-orange-500 hover:underline" to="https://najatul-islam.vercel.app/" target="_blank">Md Najatul Islam</Link>.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
