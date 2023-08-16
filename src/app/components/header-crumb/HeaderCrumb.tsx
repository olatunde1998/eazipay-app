import Link from "next/link";

import { useRouter } from "next/navigation";

interface HeaderCrumbProps {
  prevLink: string;
  nextLink: string;
  showForwardIcon?: boolean;
}

export const HeaderCrumb = ({
  prevLink,
  nextLink,
  showForwardIcon = true,
}: HeaderCrumbProps) => {
  const router = useRouter();
  const handlePrevLinkClick = () => {
    router.back();
  };

  return (
    <div>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-2 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              href="#"
              className="inline-flex items-center text-sm md:text-xl font-bold text-black hover:text-black hover:opacity-100"
              onClick={handlePrevLinkClick}
            >
              {prevLink}
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  );
};
