async function Page({params}: {params: Promise<{projectId: string}>}) {

  const {projectId} = await params;
  
  return <div>Project Details Page {projectId}</div>;
}

export default Page;