import  { SignIn }  from "@clerk/nextjs";
import { Suspense } from "react";

function Page () {
  return (
    <div className="flex items-center justify-center h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <SignIn signUpUrl="/signup"/>
      </Suspense>
    </div>
  )
}
export default Page;