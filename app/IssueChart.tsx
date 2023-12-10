"use client";
import React from "react";
import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar } from "recharts";
import { Card } from "@radix-ui/themes";

interface Props {
  dataSummary: { open: number; inProgress: number; closed: number };
}

const IssueChart = ({ dataSummary }: Props) => {
  const data = [
    { label: "Open", value: dataSummary!.open },
    { label: "In Progress", value: dataSummary!.inProgress },
    { label: "Closed", value: dataSummary!.closed },
  ];

  return (
    <Card>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="label"></XAxis>
          <YAxis />
          <Bar
            style={{ fill: "var(--accent-9)" }}
            barSize={60}
            fill="#6e56cf"
            dataKey="value"
          ></Bar>
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default IssueChart;
