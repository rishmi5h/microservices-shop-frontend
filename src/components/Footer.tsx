const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-bold">About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              purus eget sapien.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              purus eget sapien.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Follow Us</h3>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
