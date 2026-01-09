import type { HealthMetric } from "../../interface";

export const healthData: HealthMetric[] = [
  {
    metric: "infection_rate",
    region: "Global",
    unit: "%",
    data: [
      { date: "2024-01", value: 3.2 },
      { date: "2024-02", value: 2.8 },
      { date: "2024-03", value: 2.4 },
    ],
  },
  {
    metric: "vaccination_coverage",
    region: "Global",
    unit: "%",
    data: [
      { date: "2024-01", value: 64 },
      { date: "2024-02", value: 66 },
      { date: "2024-03", value: 69 },
    ],
  },
];
