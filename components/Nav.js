    import Image from "next/image";
    import box from "../Images/box.png";
    import logo from "../Images/logo.png";

    const Nav = (props) => {
    return (
    <>
        <nav className="navbar navbar-dark bg-dark p-0 text-monospace overflow-x: clip">
        <div className="container flex flex-wrap justify-between items-start mx-auto">
            <a href="https://github.com/Arnish-B/dropchain" className="flex items-center">
            <Image
                alt="Mountains"
                src={box}
                height="35"
                width="35"
                className="mr-1 h-4 sm:h-9 ml-0"
            />
            <span className="self-start text-xl font-semibold whitespace-nowrap dark:text-white">
                Dr0Pch@!N
            </span>
            </a>
            <div className="flex items-center md:order-2">
            <button
                type="button"
                className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="dropdown"
            >
                <span className="sr-only">Open user menu</span>
                {props.account ? (
                <Image
                    alt="Mountains"
                    src={logo}
                    height="35"
                    width="35"
                    className="mr-1 h-4 sm:h-9 ml-0"
                />
                ) : (
                <span>...</span>
                )}
            </button>

            <div
                className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                id="dropdown"
                style={{
                position: "absolute",
                inset: "auto auto 0px 0px",
                margin: "0px",
                transform: "translate(832px, 747px)",
                }}
                data-popper-reference-hidden=""
                data-popper-escaped=""
                data-popper-placement="top"
            >
                <div className="py-3 px-4">
                <span className="block text-sm text-gray-900 dark:text-white">
                    Bonnie Green
                </span>
                <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                    name@dropchain.com
                </span>
                </div>
                <ul className="py-1" aria-labelledby="dropdown">
                <li>
                    <a
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                    Dashboard
                    </a>
                </li>
                <li>
                    <a
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                    Settings
                    </a>
                </li>
                <li>
                    <a
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                    Earnings
                    </a>
                </li>
                <li>
                    <a
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                    Sign out
                    </a>
                </li>
                </ul>
            </div>
            <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
            >
                <span className="sr-only">Open main menu</span>
                <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                ></path>
                </svg>
                <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                ></path>
                </svg>
            </button>
            </div>
            <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
            >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li>
                <a
                    target="_blank"
                    alt=""
                    className="text-white"
                    rel="noopener noreferrer"
                    // href="https://dropchain.com"
                    href={"https://etherscan.io/address/" + props.account}
                >
                    {/* {props.account.substring(0, 6)}...
                    {props.account.substring(38, 42)} */}
                    0x0
                </a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </>
    );
    };

    export default Nav;
