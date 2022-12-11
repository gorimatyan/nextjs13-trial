import { PrismaClient } from "@prisma/client";
import type { NextPage } from "next";
import { ReactNode } from "react";
import IssuesList from "./IssuesList";

export type IssuesLayoutProps = {
  children: ReactNode;
};
const IssuesLayout = async ({ children }: IssuesLayoutProps) => {
  const prisma = new PrismaClient();
  const issues = await prisma.issue.findMany();
  console.log(issues);

  return (
    <div className="flex">
      <div className=" bg-red-800 w-72 p-3 text-white">
        <aside className="">
          <IssuesList issues={issues} />
        </aside>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default IssuesLayout;
