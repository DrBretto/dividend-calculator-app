import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import color from "../../utils/color";

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

    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    return (
      <ResponsiveContainer width="97%" height="85%" display="flex">
        <PieChart className="pieChart ">
          <Pie
            className="pie"
            data={data}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius="100%"
            fill="#000000"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={color.getColor(index, data[index])}
              />
            ))}
          </Pie>
          <Tooltip />
          {width < 435 && <Legend className="legend hide" />}
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
