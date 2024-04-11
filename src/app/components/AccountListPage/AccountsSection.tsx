import React from "react";
import AssistanceButtons from "./AssistanceButtons";
import QueryInstructions from "./QueryInstructions";
import AccountsTable from "./AccountsTable";
import owlImage from "../../../../public/assets/owl.png"; // Adjust the path as necessary

interface Account {
  id: number;
  name: string;
  industry: string;
  city: string;
  state: string;
  segment: string;
  ownerID: number;
}

interface AccountsSectionProps {
  accounts: Account[];
}

const AccountsSection: React.FC<AccountsSectionProps> = ({ accounts }) => {
  return (
    <div
      className="flex flex-col justify-center items-center p-4 bg-cool-gray"
      style={{ height: "65vh" }}
    >
      <div className="custom-min-width">
        <AssistanceButtons />
        <div className="flex flex-row pt-4 pl-0 pr-4 pb-4">
          <img src={owlImage.src} alt="Owl" style={{ height: "1.5rem" }} />
          <div className="pl-4">
            <QueryInstructions />
            <AccountsTable accounts={accounts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountsSection;
