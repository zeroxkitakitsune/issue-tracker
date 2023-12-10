import prisma from "@/prisma/client";
import IssueSummary from "./IssueSummary";
import IssueChart from "./IssueChart";
import { Flex, Grid } from "@radix-ui/themes";
import LatestIssues from "./LatestIssues";

export default async function Home() {
  const dataSummary = {
    open: await prisma.issue.count({ where: { status: "OPEN" } }),
    inProgress: await prisma.issue.count({
      where: { status: "IN_PROGRESS" },
    }),
    closed: await prisma.issue.count({ where: { status: "CLOSED" } }),
  };

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="3">
      <Flex direction="column" gap="3">
        <IssueSummary dataSummary={dataSummary} />
        <IssueChart dataSummary={dataSummary} />
      </Flex>
      <LatestIssues />
    </Grid>
  );
}
