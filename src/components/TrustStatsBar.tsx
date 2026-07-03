import { siteTrustStats } from '@/lib/site';

export function TrustStatsBar() {
  return (
    <div className="sfw-company-stats">
      {siteTrustStats.map((stat) => {
        const isNumericLead = /^\d|\$/.test(stat.value);

        return (
          <div key={stat.label} className="sfw-company-stat">
            <div
              className={`sfw-company-stat-value${
                isNumericLead ? '' : ' sfw-company-stat-value-text'
              }`}
            >
              {stat.value}
            </div>
            <div className="sfw-company-stat-label">{stat.label}</div>
          </div>
        );
      })}
    </div>
  );
}
