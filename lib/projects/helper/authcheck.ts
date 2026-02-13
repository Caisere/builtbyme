import { auth } from "@clerk/nextjs/server";

export async function authCheck() {
  const { userId, orgId } = await auth();

  if (!userId) {
    return {
      success: false,
      message: "You must be signed in to submit a product",
    };
  }

  if (!orgId) {
    return {
      success: false,
      message: "You must belong to an organization to submit a product",
    };
  }
  return {
    success: true,
    message: "User is authenticated and belongs to an organization",
  };
}