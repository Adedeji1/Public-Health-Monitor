import type { HealthDataPoint } from "../interface";

interface Props {
  data: HealthDataPoint[];
  unit: string;
}

export function HealthChart({ data, unit }: Props) {
  return (
    <section aria-label="Health metric chart">
      <ul>
        {data.map((point) => (
          <li key={point.date}>
            <strong>{point.date}</strong>: {point.value}
            {unit}
          </li>
        ))}
      </ul>
    </section>
  );
}

