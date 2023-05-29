import CustomLink from '../components/CustomLink';
import Image from 'next/image';

export default function Header({ name }) {
  return (
    <header className="pt-2 pl-2 pr-2 pb-5 sm:pb-10 w-full">
        <div className="flex items-center">
          <div>
            <Image src="/images/profile.jpg" alt="Profile" className="rounded-full" width={100} height={100} />
          </div>
          <div className="grow grid grid-cols-1 sm:grid-cols-2 pl-2 items-center">
            <div className="text-2xl" id="blogName">
              Justin Martinez
            </div>
            <div className="space-x-4 flex sm:justify-end" id="navMenu">
              <CustomLink href="/" className="cursor-pointer text-gray-800 border-b-2 border-orange-300 hover:border-orange-600">
                Home
              </CustomLink>
              <CustomLink href="/now" className="cursor-pointer text-gray-800 border-b-2 border-orange-300 hover:border-orange-600">
                Now
              </CustomLink>
              <CustomLink href="/about" className="cursor-pointer text-gray-800 border-b-2 border-zinc-300 hover:border-zinc-600">
                About
              </CustomLink>
            </div>
          </div>
      </div>
    </header>
  );
}
