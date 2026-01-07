export type MetricType =
  | "infection_rate"
  | "vaccination_coverage"
  | "hospital_capacity";

export interface HealthDataPoint {
  date: string;
  value: number;
}

export interface HealthMetric {
  metric: MetricType;
  region: string;
  unit: string;
  data: HealthDataPoint[];
}