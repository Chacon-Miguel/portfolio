import Link from 'next/link'
import { FaGithub, FaLinkedin, FaGoodreads, FaEnvelope, FaInstagram } from 'react-icons/fa'
import { appVersion } from "@/lib/constants";

export default function Footer() {

    return (
        <footer
            className="mt-4 py-6 text-center text-sm text-gray-500 px-4 border-t
            dark:border-gray-800 border-gray-300 dark:bg-black"
            id="footerPortfolio"
        >
            <div className="flex justify-center gap-6 mb-2 text-lg">
                <Link
                    href="https://github.com/Chacon-Miguel"
                    aria-label="GitHub"
                    className="hover:text-blue-500 transition-transform hover:scale-125 duration-200"
                    target="_blank"
                >
                    <FaGithub />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/chaconm36/"
                    aria-label="LinkedIn"
                    className="hover:text-blue-500 transition-transform hover:scale-125 duration-200"
                    target="_blank"
                >
                    <FaLinkedin />
                </Link>
                <Link
                    href="https://www.goodreads.com/user/show/190494717-miguel-chacon"
                    aria-label="GoodReads"
                    className="hover:text-blue-500 transition-transform hover:scale-125 duration-200"
                    target="_blank"
                >
                    <FaGoodreads />
                </Link>
                <Link
                    href="https://www.instagram.com/mig9253"
                    aria-label="Instagram"
                    className="hover:text-blue-500 transition-transform hover:scale-125 duration-200"
                    target="_blank"
                >
                    <FaInstagram />
                </Link>
                <Link
                    href="mailto:chaconm36@gmail.com"
                    target="_blank"
                    aria-label="Email"
                    className="hover:text-blue-500 transition-transform hover:scale-125 duration-200"
                >
                    <FaEnvelope />
                </Link>
            </div>

            {/* Copyright section */}
            <p className="text-xs sm:text-sm">© {new Date().getFullYear()} Miguel Chacon. All rights reserved.</p>

            {/* Display version & Link to GitHub Repo */}
            {/* You can update or remove this for your own template */}
            <p className="text-xs sm:text-sm">
                <Link href={`https://github.com/alemoraru/nextjs-portofolio-website/releases/tag/v${appVersion}`}
                    rel="noopener noreferrer">
                    <span
                        className="font-semibold hover:text-blue-500 transition-colors duration-200"
                    >
                        v{appVersion}
                    </span>
                </Link>
                &nbsp;built by&nbsp;
                <Link href="https://github.com/alemoraru" rel="noopener noreferrer">
                    <span
                        className="font-semibold hover:text-blue-500 transition-colors duration-200"
                    >
                        @Chacon-Miguel
                    </span>
                </Link>
            </p>
        </footer>
    )
}
