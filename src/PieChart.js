import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#ff0000",
  "#065535",
  "#407294",
  "#ff7373",
  "#ffa500",
  "#FF8042",
  "#8b0000",
  "#7fe5f0",
  "#133337",
  "#bada55",
  "#666666",
  "#cbcba9",
  "#ffffff",
  "#420420",
  "#c0c0c0",
  "#5ac18e",
  "#696969",
  "#000000",
  "#ff80ed",
  "#dcedc1",
  "#008080",
  "#f7347a",
  "#576675",
  "#ffc0cb",
  "#ffe4e1",
  "#696966",
  "#008080",
  "#ffd700",
  "#e6e6fa",
  "#ffa500",
  "#ff7373",
  "#00ffff",
  "#40e0d0",
  "#d3ffce",
  "#0000ff",
  "#f0f8ff",
  "#b0e0e6",
  "#c6e2ff",
  "#003366",
  "#faebd7",
  "#ffff00",
  "#fa8072",
  "#7fffd4",
  "#800000",
  "#ffb6c1",
  "#eeeeee",
  "#800080",
  "#00ff00",
  "#f08080",
  "#fff68f",
  "#c39797",
  "#cccccc",
  "#ffc3a0",
  "#333333",
  "#20b2aa",
  "#66cdaa",
  "#ff6666",
  "#4ca3dd",
  "#ff00ff",
  "#ffdab9",
  "#ff7f50",
  "#468499",
  "#f6546a",
  "#afeeee",
  "#008000",
  "#c0d6e4",
  "#00ced1",
  "#660066",
  "#0e2f44",
  "#cbbeb5",
  "#990000",
  "#088da5",
  "#b4eeb4",
  "#daa520",
  "#b6fcd5",
  "#101010",
  "#8b0000",
  "#808080",
  "#f5f5f5",
  "#6897bb",
  "#ffff66",
  "#000080",
  "#f5f5dc",
  "#81d8d0",
  "#dddddd",
  "#ff4040",
  "#8a2be2",
  "#66cccc",
  "#794044",
];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class Example extends PureComponent {
  render() {
    const data = this.props.data;
    console.log("piechart data", data);

    return (
      <ResponsiveContainer width="95%" height="80%">
        <PieChart className="pieChart">
          <Pie
            data={data}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={50}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
