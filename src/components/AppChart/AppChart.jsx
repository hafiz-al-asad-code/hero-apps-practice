import React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const AppChart = ({ filteredApp }) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart layout="vertical" data={filteredApp.ratings}>
        <XAxis
          type="number"
          dataKey="count"
          axisLine={false}
          tickLine={false}
        ></XAxis>
        <YAxis
          type="category"
          dataKey="name"
          reversed={true}
          axisLine={false}
          tickLine={false}
          dx={-16}
        ></YAxis>
        <Bar dataKey="count" fill="#FF8811" barSize={32}></Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AppChart;
