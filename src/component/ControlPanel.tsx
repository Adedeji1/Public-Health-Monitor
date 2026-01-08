import { MetricType } from "../interface";

interface Props {
  metric: MetricType;
  onChange: (metric: MetricType) => void;
}

export function ControlPanel({ metric, onChange }: Props) {
  return (
    <nav aria-label="Metric selection">
      <label htmlFor="metric-select">Select Metric</label>
      <select
        id="metric-select"
        value={metric}
        onChange={(e) => onChange(e.target.value as MetricType)}
      >
        <option value="infection_rate">Infection Rate</option>
        <option value="vaccination_coverage">Vaccination Coverage</option>
        <option value="hospital_capacity">Hospital Capacity</option>
      </select>
    </nav>
  );
}
