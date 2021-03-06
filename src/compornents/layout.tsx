import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

type Props = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
};

export default function Layout({ children, title, description }: Props) {
  const router = useRouter();
  const { data: session } = useSession();
  console.log(router.asPath);
  const pageTitle = title || "Home";
  return (
    <div className="wrap">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description || "Home"} />
      </Head>
      <header>
        <h1>{pageTitle}</h1>
      </header>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          {router.isReady && session && (
            <li>
              <Link href="/Members">Members</Link>
            </li>
          )}
        </ul>
      </nav>
      <main>{children}</main>
      <footer>&copy; Next.js Demo</footer>
    </div>
  );
}
