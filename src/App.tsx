import { useState } from "react";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { ControlPanel } from "./features/healthData/components/ControlPanel";
import { HealthChart } from "./features/healthData/components/HealthChart";
import { Summary } from "./features/healthData/components/Summary";
import { healthData } from "./features/healthData/data";
import { MetricType } from "./features/healthData/types";
import { ControlPanel } from "./component/ControlPanel";
import { HealthChart } from "./component/HealthChart";
import { Summary } from "./component/Summary";
import { healthData } from "./component/data/types";
import { MetricType } from "./interface";

export default function App() {
  const [metric, setMetric] = useState<MetricType>("infection_rate");

  const selectedMetric = healthData.find(
    (m) => m.metric === metric
  );

  return (
    <>
      <Header />

      <main>
        <ControlPanel metric={metric} onChange={setMetric} />

        {selectedMetric && (
          <>
            <HealthChart
              data={selectedMetric.data}
              unit={selectedMetric.unit}
            />
            <Summary metric={selectedMetric} />
          </>
        )}
      </main>

      <Footer />
    </>
  );
}
