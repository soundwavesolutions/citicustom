import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <div className="mx-auto w-full px-[15px] max-w-[1280px] max-lg:max-w-[768px] max-md:max-w-[578px] max-sm:max-w-[420px]">
        <Link to="/">
          <img
            src="/images/Logo.svg"
            alt="Citi.com | Credit Cards, Banking, Mortgage, Personal Loans"
            height={88}
            width={88}
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
