'use client'

import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { BuildingIcon } from "lucide-react";

export default function UserBtn() {
  return (
    <UserButton>
      <UserButton.UserProfilePage
        label="organizations"
        labelIcon={<BuildingIcon className="size-4" />}
        url="organizations"
      >
        <div className="p-4">
          <h4>Manage Organization</h4>
          <OrganizationSwitcher 
            hidePersonal={true}
            afterCreateOrganizationUrl={"/submit"}
            afterSelectPersonalUrl={"/submit"}
            appearance={{
              elements: {
                rootBox: "w-full",
              }
            }}
          />
        </div>
      </UserButton.UserProfilePage>
    </UserButton>
  );
}