import  { SignIn }  from "@clerk/nextjs";

function Page () {
  return (
    <div className="flex items-center justify-center h-screen">
      <SignIn signUpUrl="/signup"/>
    </div>
  )
}
export default Page;