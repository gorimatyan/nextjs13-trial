import { PrismaClient } from "@prisma/client";
import type { NextPage } from "next";

type Props = {
  params: {
    issueId: number;
  };
};

const IssueDetailPage = async ({ params }: Props) => {
  const prisma = new PrismaClient();
  const issue = await prisma.issue.findFirst({
    where: { id: +params.issueId },
  });
  console.log(params);

  return (
    <>
      <div className="p-4">
        <h2 className="text-2xl pb-4">{issue?.title}</h2>
        <div>
          <p>{issue?.description}</p>
        </div>
      </div>
    </>
  );
};

export default IssueDetailPage;
