import { Button } from "@/components/ui/button";
import Link from "next/link";


function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-2">
      <h1 className="text-5xl font-bold text-primary">404 - Page Not Found</h1>
      <Button variant="ghost" className="flex flex-col items-center justify-center"> 
        <Link href="/" className="text-lg text-secondary underline">
          Go back to Home
        </Link>
      </Button>
    </div>
  )
}

export default NotFound;