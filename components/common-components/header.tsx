import { CompassIcon, HomeIcon, SparkleIcon } from "lucide-react";
import Link from "next/link";
import {Link as TransitionLink} from "next-view-transitions";
import { Button } from "../ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Suspense } from "react";


const Logo = () => {
  return (
    <TransitionLink href="/" className="flex items-center gap-2 group">
      <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
        <SparkleIcon className="size-4 text-primary-foreground" />
      </div>
      <span className="font-bold text-xl">
        Built<span className="text-primary">By</span>Me
      </span>
    </TransitionLink>
  )
}

function Header () {

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="wrapper px-12">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <nav className="flex items-center gap-1">
            <TransitionLink href="/" className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50">
              <HomeIcon className="size-4" />
              <span className="hidden sm:inline-block">Home</span>
            </TransitionLink>

              <TransitionLink href="/explore" className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50">
                <CompassIcon className="size-4" />
                <span className="hidden sm:inline-block">Explore</span>
            </TransitionLink>
          </nav>
          <div className="flex items-center gap-3">
            <Suspense fallback={<div>Loading...</div>}>
            <SignedOut>
              <Button asChild variant='ghost'>
                <TransitionLink href="/login">
                  <span>Sign In</span>
                </TransitionLink>
              </Button>
              <Button asChild className="transtion-colors duration-300">
                <TransitionLink href="/signup">
                  <span>Sign Up</span>
                </TransitionLink>
              </Button>            
            </SignedOut>
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
              <SignedIn>
                <TransitionLink href="/submit" className="flex items-center gap-2">
                  <span><SparkleIcon className="size-5" /></span>
                  <span>Submit Project</span>
                </TransitionLink>
                <UserButton  />
              </SignedIn>
            </Suspense>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;