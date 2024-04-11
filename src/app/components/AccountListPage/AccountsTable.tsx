import React, { useState, useEffect } from "react";
import Button from "../UI/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

type Account = {
  id: number;
  name: string;
  industry: string;
  city: string;
  state: string;
  segment: string;
  ownerID: number;
};

type AccountsTableProps = {
  accounts: Account[];
};

const AccountsTable: React.FC<AccountsTableProps> = ({ accounts }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-white border-b">
          <tr>
            <th className="px-6 py-2 text-left text-s font-medium text-gray-500  tracking-wider">
              Name
            </th>
            <th className="px-6 py-2 text-left text-s font-medium text-gray-500  tracking-wider">
              Industry
            </th>
            <th className="px-6 py-2 text-left text-s font-medium text-gray-500  tracking-wider">
              City
            </th>
            <th className="px-6 py-2 text-left text-s font-medium text-gray-500  tracking-wider">
              State
            </th>
            <th className="px-6 py-2 text-left text-s font-medium text-gray-500  tracking-wider">
              Segment
            </th>
            <th className="px-6 py-2 text-left text-s font-medium text-gray-500  tracking-wider">
              Owner ID
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {accounts.map((account) => (
            <tr key={account.id}>
              <td className="px-6 py-2 whitespace-nowrap">{account.name}</td>
              <td className="px-6 py-2 whitespace-nowrap">
                {account.industry}
              </td>
              <td className="px-6 py-2 whitespace-nowrap">{account.city}</td>
              <td className="px-6 py-2 whitespace-nowrap">{account.state}</td>
              <td className="px-6 py-2 whitespace-nowrap">{account.segment}</td>
              <td className="px-6 py-2 whitespace-nowrap">{account.ownerID}</td>
            </tr>
          ))}
        </tbody>
        <tfoot className="bg-gray-50">
          <tr>
            <td
              colSpan={7}
              className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500"
            >
              <span className="inline-block rotate-180 transform mr-2">
                &#9432;
              </span>{" "}
              Only X rows are shown. View full list for more.
            </td>
          </tr>
          <tr>
            <td
              colSpan={7}
              className="px-2 py-2  text-left bg-white border-t border-gray-200"
            >
              <Button
                buttonType="primary"
                disabled={false}
                onClick={() => alert("Button clicked!")}
              >
                Show Full List
              </Button>
              <Button
                buttonType="primary"
                disabled={false}
                onClick={() => alert("Button clicked!")}
              >
                Show Query
              </Button>
              <Button
                buttonType="primary"
                disabled={false}
                onClick={() => alert("Button clicked!")}
              >
                Show Chart
              </Button>
              <Button
                buttonType="primary"
                disabled={false}
                onClick={() => alert("Button clicked!")}
              >
                Pin to Dashboard
              </Button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default AccountsTable;
