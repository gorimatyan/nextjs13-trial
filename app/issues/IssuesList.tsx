import type { NextPage } from "next";
import Link from "next/link";
import { Issue } from "../../type/Issues";

type Props = {
  issues: Issue[];
};

const IssuesList = ({ issues }: Props) => {
  return (
    <>
      <ul>
        {issues.map((issue) => (
          <li key={issue.id} className="pb-1 border-b border-white">
            <article className="py-3 px-1">
              <h2 className="text-xl pb-2 font-semibold">{issue.title}</h2>
              <p className="py-2">{issue.summary}</p>
              <p className="py-2">
                <Link
                  href={`./issues/${issue.id}`}
                  className="bg-white border-black border text-black px-2 py-1 rounded-lg"
                >
                  詳細
                </Link>
              </p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
};

export default IssuesList;
