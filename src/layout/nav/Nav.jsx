import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../assets/images/amir.jpg";
const navigation = [
  { name: "About us", href: "/", current: true },
  { name: "Contact us", href: "/", current: false },
  { name: "Privacy Policy", href: "/", current: false },
  { name: "FAQs", href: "/", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Nav() {
  return (
    <Disclosure as="nav" className="bg-gray-800 my-10 h-13 m-3 rounded-full">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menue button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open Main Menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
              {/* nav section */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-10 w-auto rounded-full"
                    src={Logo}
                    alt="Ultimate Outsourcing LTD"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation?.map((navItem) => (
                      <a
                        key={navItem?.name}
                        href={navItem?.href}
                        className={classNames(
                          navItem.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={navItem.current ? "page" : undefined}
                      >
                        {navItem?.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation?.map((navItem) => (
                <Disclosure.Button
                  key={navItem?.name}
                  as="a"
                  href={navItem?.href}
                  className={classNames(
                    navItem.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={navItem ? "page" : undefined}
                >
                  {navItem?.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
