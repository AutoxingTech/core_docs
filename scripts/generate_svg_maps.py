import os

output_dir = "/home/simba/ax/core_docs/docs/data-collection/tips-for-mapping-large-area/img"

svg2 = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="400" height="400">
  <rect width="100" height="100" fill="#f8f9fa"/>
  <rect x="5" y="5" width="90" height="90" fill="none" stroke="#343a40" stroke-width="2"/>
  <text x="50" y="45" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#adb5bd">少量建筑</text>
  <text x="50" y="56" font-family="sans-serif" font-size="8" text-anchor="middle" fill="#adb5bd">视野开阔</text>
  
  <rect x="25" y="25" width="15" height="15" fill="#adb5bd" rx="2"/>
  <rect x="65" y="40" width="10" height="20" fill="#adb5bd" rx="2"/>
  <circle cx="30" cy="70" r="8" fill="#adb5bd"/>

  <path d="M 12 12 L 88 12 L 88 28 L 50 28 L 50 85 L 85 85" fill="none" stroke="#0d6efd" stroke-width="2" stroke-dasharray="5,5"/>
  <circle cx="12" cy="12" r="3" fill="#dc3545"/>
  <text x="50" y="10" font-family="sans-serif" font-size="6" text-anchor="middle" fill="#0d6efd">中等密度轨迹</text>
</svg>"""

with open(os.path.join(output_dir, 'scenario2_medium.svg'), 'w') as f: f.write(svg2)
