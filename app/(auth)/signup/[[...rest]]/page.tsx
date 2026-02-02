import { SignUp } from "@clerk/nextjs";
import { Suspense } from "react";

function Page () {
  return <div className="flex items-center justify-center h-screen">
    <Suspense fallback={<div>Loading...</div>}>
      <SignUp signInUrl="/login"/>
    </Suspense>
  </div>;
}

export default Page;