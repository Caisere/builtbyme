import { CompassIcon, HomeIcon, SparkleIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";


const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
        <SparkleIcon className="size-4 text-primary-foreground" />
      </div>
      <span className="font-bold text-xl">
        Built<span className="text-primary">By</span>Me
      </span>
    </Link>
  )
}

function Header () {
  const isSignedIn = false;

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="wrapper px-12">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <nav className="flex items-center gap-1">
            <Link href="/" className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50">
              <HomeIcon className="size-4" />
              <span className="hidden sm:inline-block">Home</span>
            </Link>

              <Link href="/explore" className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50">
              <CompassIcon className="size-4" />
              <span className="hidden sm:inline-block">Explore</span>
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            {!isSignedIn 
              ? (
                <>
                  <Button variant='ghost' asChild className="transtion-colors duration-300">
                    <Link href="/login">
                      <span>Sign In</span>
                    </Link>
                  </Button>

                  <Button asChild className="transtion-colors duration-300">
                    <Link href="/signup">
                      <span>Sign Up</span>
                    </Link>
                  </Button>
                </>
              ) : (
                <>
                  <Button asChild className="transtion-colors duration-300">
                    <Link href="/submit">
                      <span><SparkleIcon className="size-5" /></span>
                      <span>Submit Project</span>
                    </Link>
                  </Button>
                  {/* clerk user */}
                  <Button variant='ghost' className="rounded-full transtion-colors duration-300 border h-8 w-8">
                    <UserIcon className="size-4" />
                  </Button>
                </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;