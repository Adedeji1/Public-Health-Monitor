import type { HealthMetric } from "../interface";

interface Props {
  metric: HealthMetric;
}

export function Summary({ metric }: Props) {
  const latest = metric.data[metric.data.length - 1];

  return (
    <section aria-label="Summary">
      <h2>Latest Overview</h2>
      <p>
        <strong>{metric.metric.replace("_", " ")}</strong> in{" "}
        <strong>{metric.region}</strong> is currently{" "}
        <strong>
          {latest.value}
          {metric.unit}
        </strong>
      </p>
    </section>
  );
}
