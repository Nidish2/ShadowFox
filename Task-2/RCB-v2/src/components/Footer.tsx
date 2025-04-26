import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-white">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/rcb-logo.png" alt="RCB Logo" className="h-12 w-12" />
              <span className="font-bold text-xl">RCB</span>
            </div>
            <p className="text-sm text-gray-300">Royal Challengers Bangalore - Official Website</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/rcb" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-gray-300 hover:text-[#E30B5D]" />
              </a>
              <a href="https://twitter.com/rcbtweets" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-gray-300 hover:text-[#E30B5D]" />
              </a>
              <a
                href="https://instagram.com/royalchallengersbangalore"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-gray-300 hover:text-[#E30B5D]" />
              </a>
              <a href="https://youtube.com/rcb" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube className="h-5 w-5 text-gray-300 hover:text-[#E30B5D]" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-[#E30B5D]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-[#E30B5D]">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/players" className="hover:text-[#E30B5D]">
                  Players
                </Link>
              </li>
              <li>
                <Link to="/matches" className="hover:text-[#E30B5D]">
                  Matches
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-[#E30B5D]">
                  News
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Fan Zone</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/fan-zone" className="hover:text-[#E30B5D]">
                  Fan Polls
                </Link>
              </li>
              <li>
                <Link to="/fan-zone" className="hover:text-[#E30B5D]">
                  Wallpapers
                </Link>
              </li>
              <li>
                <Link to="/fan-zone" className="hover:text-[#E30B5D]">
                  Fan Gallery
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-[#E30B5D]">
                  RCB Merchandise
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E30B5D]">
                  Fan Club
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Contact</h3>
            <address className="not-italic text-sm text-gray-300 space-y-2">
              <p>Royal Challengers Bangalore</p>
              <p>M. Chinnaswamy Stadium</p>
              <p>Bengaluru, Karnataka</p>
              <p>India</p>
              <p className="pt-2">
                Email:{" "}
                <a href="mailto:fans@rcb.com" className="hover:text-[#E30B5D]">
                  fans@rcb.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Royal Challengers Bangalore. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#E30B5D]">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#E30B5D]">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#E30B5D]">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
