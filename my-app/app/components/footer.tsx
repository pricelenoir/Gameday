const Footer = () => {
    return (
      <footer className="bg-black text-white py-4 border-t border-gray-600">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Gameday Fantasy Sports. All rights reserved.</p>
          <nav className="flex justify-center space-x-4 mt-2">
            <a href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="hover:underline">
              Terms of Service
            </a>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    );
  };
  
  export default Footer;  