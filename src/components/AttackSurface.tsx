import { useState } from 'react'
import { RotateCw } from 'lucide-react'

const nodes = [
  { cx: 66, cy: 65, label: 'AUTH', risk: 'medium' },
  { cx: 210, cy: 44, label: 'API', risk: 'low' },
  { cx: 305, cy: 122, label: 'IAM', risk: 'high' },
  { cx: 233, cy: 210, label: 'DATA', risk: 'medium' },
  { cx: 87, cy: 205, label: 'EDGE', risk: 'low' },
  { cx: 164, cy: 132, label: 'CORE', risk: 'core' },
]

function NetworkDiagram({ active }: { active: boolean }) {
  return (
    <svg key={active ? 'active' : 'idle'} className={active ? 'network-map is-scanning' : 'network-map'} viewBox="0 0 370 265" role="img" aria-label="Visualisierung einer analysierten Angriffsfläche">
      <g className="connections"><path d="M66 65L164 132L210 44M164 132L305 122L233 210L87 205ZM66 65L210 44M305 122L210 44M87 205L66 65" /></g>
      <g className="scan-wave"><circle cx="164" cy="132" r="30" /><circle cx="164" cy="132" r="64" /><circle cx="164" cy="132" r="105" /></g>
      {nodes.map((node, index) => (
        <g className={`network-node ${node.risk}`} style={{ '--delay': `${index * 120}ms` } as React.CSSProperties} key={node.label}>
          <circle cx={node.cx} cy={node.cy} r={node.risk === 'core' ? 18 : 11} />
          <text x={node.cx} y={node.cy + 27}>{node.label}</text>
        </g>
      ))}
    </svg>
  )
}

function ScanLog() {
  return (
    <div className="scan-log" aria-live="polite">
      <p><span>01</span> Identity boundary <b>verified</b></p>
      <p><span>02</span> API authorization <b className="warning">review</b></p>
      <p><span>03</span> Exploit chain <b>contained</b></p>
    </div>
  )
}

export function AttackSurface() {
  const [active, setActive] = useState(true)
  const restart = () => setActive((value) => !value)
  return (
    <div className="attack-surface">
      <div className="surface-head"><span>ATTACK SURFACE / LIVE MAP</span><i>3 assets verified</i></div>
      <NetworkDiagram active={active} />
      <ScanLog />
      <button className="restart-scan" onClick={restart}><RotateCw size={14} /> Scan neu starten</button>
    </div>
  )
}
