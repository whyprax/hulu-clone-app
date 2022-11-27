import Image from "next/image";
import profilePic from "../../public/Hulu.png";
import HeaderIcon from "./HeaderIcon";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header>
      <div className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className="flex flex-grow items-center max-w-2xl">
          <HeaderIcon Icon={HomeIcon} title="HOME" />
          <HeaderIcon Icon={LightningBoltIcon} title="TRENDING" />
          <HeaderIcon Icon={BadgeCheckIcon} title="VERIFIED" />
          <HeaderIcon Icon={CollectionIcon} title="COLLECTIONS" />
          <HeaderIcon Icon={SearchIcon} title="SEARCH" />
          <HeaderIcon Icon={UserIcon} title="ACCOUNT" />
        </div>

        <div>
          <Image
            src={profilePic}
            alt="hulu-logo"
            width={120}
            className="object-contain"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
