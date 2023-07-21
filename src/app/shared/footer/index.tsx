// components/Footer.tsx
const Footer = () => {
    return (
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto flex flex-wrap justify-center">
          {/* First Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-4">
            <div className="mb-4">
              <img src="logo.png" alt="Footer Logo" className="w-32 mr-2" />
              <span className="font-semibold text-lg">HAROON RANA</span>
            </div>
            <p className="text-sm">
              Your two-line description here. Add a brief overview of your services or
              yourself.
            </p>
          </div>
  
          {/* Second Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-4">
            <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
  
          {/* Third Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-4">
            <h4 className="text-lg font-semibold mb-4">Projects</h4>
            <ul className="space-y-2">
              <li>
                <a href="#project1">Project 1</a>
              </li>
              <li>
                <a href="#project2">Project 2</a>
              </li>
              <li>
                <a href="#project3">Project 3</a>
              </li>
              {/* Add more project links as needed */}
            </ul>
          </div>
  
          {/* Fourth Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-4">
            <h4 className="text-lg font-semibold mb-4">Address</h4>
            <p className="text-sm">
              Your address here
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  