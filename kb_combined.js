,
  {
    id: 350, category: "rtk",
    keywords: ["visual survey", "photographic survey", "IMU initialization", "Horus", "视觉测量", "摄影测量", "IMU初始化", "levantamiento visual", "fotogrametría", "levantamento visual", "fotogrametria"],
    question: "How does the Horus visual survey workflow work and what are the key considerations?",
    answer: "**Standard workflow:**\n\n1. Configure receiver in rover mode with Fixed RTK solution\n2. Complete IMU initialization before starting visual survey\n3. Enable Photographic Survey under Survey menu and connect to Horus Wi-Fi\n4. Capture at least 8 images moving sideways around target with maximum overlap\n5. Press and hold screen to select target point; save when purple coordinate points appear around green crosshair\n\n**Key tips:** Avoid low-texture/reflective surfaces; maintain movement distance approx half the distance to target (e.g., 10m move for 20m target); use SIM card in data collector when using CORS mode to avoid network interruption after connecting to Horus Wi-Fi.",
    tags: ["visual-survey", "horus", "imu", "workflow"]
  },
  {
    id: 351, category: "agnav",
    keywords: ["PPP", "Precise Point Positioning", "auto-steering", "E6-HAS", "BDS B2b", "精准单点定位", "自动驾驶", "PPP", "posicionamiento puntual preciso", "posicionamento pontual preciso"],
    question: "How to activate PPP in an auto-steering system when there is no network or RTK base available?",
    answer: "**PPP activation steps:**\n\n1. Check receiver firmware version is R4.10Build18264 or higher (upgrade if needed, default password: 12345678)\n2. Switch to Single Point mode in GNSS settings\n3. Select PPP source based on location: E6-HAS for Galileo regions or PPP (BDS B2b) for BeiDou regions\n4. Wait for PPP convergence on the main interface\n5. Verify convergence via SP Tool: connect COM port, send command PPPNAVA 1, check response for converging status\n\n**Note:** PPP provides decimeter-level accuracy — sufficient for most agricultural tasks (planting, spraying, harvesting) when RTK is unavailable.",
    tags: ["ppp", "auto-steering", "e6-has", "bds-b2b", "single-point"]
  },
  {
    id: 352, category: "rtk",
    keywords: ["RTCM", "1021", "1027", "coordinate system", "datum transformation", "投影坐标", "RTCM消息", "sistema de coordenadas", "transformación de datum", "sistema de coordenadas projetadas"],
    question: "How do RTCM 1021-1027 messages simplify projected coordinate system setup?",
    answer: "**RTCM 1021-1027 messages** transmit local datum transformation information (projection parameters and 7 parameters) directly from CORS, eliminating manual coordinate system configuration.\n\n**Requirements:**\n- CORS provider must support transmitting RTCM1021-1027 messages\n- RTK receiver and field software must be compatible\n\n**In SingularSurv:** Tick RTCM1021-1027 options when setting CORS work mode — software receives datum information automatically.\n\n**In SingularPad:** Select coordinate system parameters type as RTCM1021-1027 parameters directly.\n\n**Benefits:** Saves time configuring datum parameters and protects privacy of local coordinate system parameters.",
    tags: ["rtcm", "coordinate-system", "cors", "datum"]
  },
  {
    id: 353, category: "rtk",
    keywords: ["IP67", "waterproof", "dust-proof", "IP rating", "ingress protection", "防水等级", "防尘", "protección contra agua", "grado de protección IP", "impermeável", "à prova de poeira"],
    question: "What does the IP67 rating mean for GNSS surveying equipment?",
    answer: "**IP rating explained:**\n\n- First digit 6: Complete protection against dust ingress (maximum level on scale 0-6)\n- Second digit 7: Protection against temporary immersion in water up to 1 meter for 30 minutes\n- IP scale for liquids ranges from 0 (no protection) to 9 (high-pressure hot water from different angles)\n- Ratings are defined by IEC (International Electrotechnical Commission)\n\n**Important:** IP rating guarantees short-term protection only — not recommended for long-term extreme use. If a device accidentally falls into water, it should still work after timely retrieval. SingularXYZ Y1 GNSS receiver is IP67 rated for fieldwork security.",
    tags: ["ip67", "waterproof", "durability"]
  },
  {
    id: 354, category: "rtk",
    keywords: ["GNSS", "services", "positioning", "navigation", "timing", "SBAS", "卫星导航服务", "定位导航", "servicios GNSS", "serviços GNSS"],
    question: "What services does GNSS provide beyond basic positioning?",
    answer: "**Three core GNSS services:**\n\n1. **Positioning:** Ephemeris data + distance measurements from multiple satellites determine receiver location — used in surveying, construction, monitoring, precision agriculture, personnel positioning.\n2. **Speed measurement:** Derived from Doppler shifts and position changes over time.\n3. **Timing:** High-precision atomic clock synchronization for telecommunications, power grids, meteorology, and factory automation.\n\n**Additional:** Galileo provides SAR (Search and Rescue); BDS provides short message communication.\n\n**GNSS includes:** Global systems (GPS, GLONASS, Galileo, BDS), regional systems (QZSS, IRNSS), and SBAS augmentation (WAAS, EGNOS, MSAS, GAGAN).",
    tags: ["gnss", "positioning", "timing", "sbas"]
  },
  {
    id: 355, category: "rtk",
    keywords: ["DOP", "PDOP", "HDOP", "VDOP", "GDOP", "satellite geometry", "精度衰减因子", "卫星几何分布", "precisión", "geometría satelital", "precisão", "geometria satelital"],
    question: "How to interpret DOP values to judge GNSS positioning accuracy?",
    answer: "**DOP (Dilution of Precision) indicates satellite geometry quality:**\n\n- **PDOP** (<1 Ideal, 1-2 Excellent, 2-5 Good, 5-10 Moderate, >10 Poor): 3D position accuracy indicator\n- **HDOP:** Horizontal accuracy only; **VDOP:** Vertical accuracy only\n- **GDOP:** Overall including timing — GDOP² = PDOP² + TDOP²\n- **Relationship:** HDOP² + VDOP² = PDOP²\n\nLower DOP values = better satellite distribution = higher accuracy. Values below 2 are suitable for most precise applications. DOP is a prediction based on satellite positions relative to each other in the constellation.",
    tags: ["dop", "pdop", "hdop", "accuracy", "satellite-geometry"]
  },
  {
    id: 356, category: "rtk",
    keywords: ["UTC", "GPS time", "time synchronization", "timing receiver", "协调世界时", "GPS时间", "时间同步", "tiempo UTC", "sincronización", "tempo GPS", "sincronização"],
    question: "What is the difference between UTC time and GPS time?",
    answer: "**UTC (Coordinated Universal Time):**\n- Successor to GMT, maintained by BIPM — used as base for all local times (e.g., China = UTC+8)\n- Includes leap seconds to align with Earth's rotation\n- Sufficient for daily life activities (accurate to seconds)\n\n**GPS Time:**\n- Atomic time scale from GPS satellite clocks and ground control stations\n- Does NOT include leap seconds — constantly offset from UTC by integer number of seconds\n- Provides nanosecond-level precision for industrial use: telecommunications, power grids, meteorology, factory automation\n\n**For surveying:** GNSS receivers derive both UTC and GPS time — high-accuracy time observations are the basis for all position calculations.",
    tags: ["utc", "gps-time", "timing", "synchronization"]
  },
  {
    id: 357, category: "rtk",
    keywords: ["QZSS", "IRNSS", "regional satellite system", "Japan", "India", "准天顶卫星", "区域导航", "sistema satelital regional", "sistema satélite regional"],
    question: "How do regional satellite systems QZSS and IRNSS enhance GNSS positioning?",
    answer: "**QZSS (Japan):**\n- 4 satellites (3 inclined orbit + 1 geostationary); ensures one high-elevation satellite over Japan 24/7\n- Improves GPS availability from 90% to 99.8% in Japanese territory\n- L1 SAIF service: meter-level positioning correction (like WAAS); L-Band signal: centimeter-level accuracy\n- Also broadcasts earthquake/tsunami early warning alerts\n\n**IRNSS (India):**\n- Independent navigation covering India + 1500km border region\n- At least 4 satellites always visible within Indian territory\n- Accuracy: <10m within India, <20m in surrounding areas\n\n**Key benefit:** Regional systems supplement global GNSS in areas with poor satellite visibility (mountains, urban canyons) and provide sovereign navigation capability.",
    tags: ["qzss", "irnss", "regional-satellite", "sbas"]
  },
  {
    id: 358, category: "rtk",
    keywords: ["RINEX", "static survey", "raw data", "post-processing", "observation file", "静态测量", "原始数据格式", "RINEX", "datos brutos", "dados brutos", "pós-processamento"],
    question: "What is RINEX format and how to use it for GNSS static surveys?",
    answer: "**RINEX (Receiver Independent Exchange Format):**\n- Standard ASCII text format for GNSS raw data — independent of receiver manufacturer/model\n- Common versions: RINEX 2.x and RINEX 3.x\n\n**RINEX 2.x file types:**\n- O file: Observation data (required for processing)\n- N file: GPS navigation message (required for processing)\n- G file: GLONASS navigation message; M file: Meteorological data\n- Naming: SSSSDDDHHMM.YYT (station name, day of year, time, year, type)\n\n**File structure:** Header section (receiver model, antenna height, approximate coordinates) + observation data by epoch.\n\n**RINEX 3.x:** Supports multi-constellation in single file with system codes: G=GPS, R=GLONASS, C=BDS, E=Galileo, S=SBAS, J=QZSS, I=IRNSS.",
    tags: ["rinex", "static-survey", "raw-data", "post-processing"]
  },
  {
    id: 359, category: "rtk",
    keywords: ["CORS", "VRS", "reference station", "differential data", "连续运行参考站", "虚拟参考站", "estación de referencia continua", "estação de referência contínua"],
    question: "How does a CORS system work and what is VRS technology?",
    answer: "**CORS (Continuous Operational Reference System) has 5 parts:**\n- Reference station network (uniformly distributed)\n- Data transmission system (fiber optic)\n- Data processing center (core — forms differential positioning data)\n- Broadcasting system (mobile network, UHF, Internet)\n- User application system (RTK rovers, driving assistance, etc.)\n\n**VRS (Virtual Reference Station):**\n- Requires at least 3 reference stations in area\n- Data processing center virtualizes a station within ~1km of rover based on nearby station data\n- Eliminates ionosphere, troposphere, and orbit errors effectively\n- Enables centimeter-level positioning even when rover is tens of km from physical stations",
    tags: ["cors", "vrs", "reference-station", "differential"]
  },
  {
    id: 360, category: "rtk",
    keywords: ["GDM2000", "Malaysia", "Cassini-Soldner", "GRS1980", "datum", "马来西亚坐标", "GDM2000", "Malasia", "sistema de coordenadas", "Malásia"],
    question: "What projected coordinate systems and datums are used in Malaysia?",
    answer: "**GDM2000 (Geocentric Datum of Malaysia):**\n- Officially launched August 26, 2003\n- Ellipsoid: 361GRS1980\n- Projection: Cassini-Soldner (parameters vary by state — different origin latitude, central meridian, false easting/northing for each state)\n\n**Old datums still in use for some projects:**\n- Malaysian BRSO and MRSO systems\n- Use Everest 1830 ellipsoid with Hotine Oblique Mercator projection\n\n**In SingularPad:** All Malaysian datums are pre-loaded. Users can also find datums for other countries directly in the software's coordinate system library.",
    tags: ["malaysia", "gdm2000", "datum", "coordinate-system"]
  },
  {
    id: 362, category: "rtk",
    keywords: ["localization", "coordinate transformation", "four parameters", "seven parameters", "calibration", "坐标转换", "四参数", "七参数", "transformación de coordenadas", "calibración", "transformação de coordenadas", "calibração"],
    question: "What is localization in surveying and how to perform it with 4-parameter and 7-parameter models?",
    answer: "**Localization:** Process of transforming coordinates between two systems by establishing one-to-one correspondence via known points.\n\n**Four-parameter model:**\n- Suitable for small areas (within 5 km)\n- Parameters: X/Y translation, rotation angle, scale factor m (0.999-1.001)\n- Requires at least 2 known points\n\n**Seven-parameter model:**\n- Suitable for larger areas (up to 15 km)\n- Parameters: X/Y/Z translation, 3 rotation angles, 1 scale factor K (~1)\n- Requires at least 3 known points; higher accuracy than 4-parameter\n\n**Best practices:** Known points should cover entire survey area, be evenly distributed. In SingularPad: Project > Localization, enter >=3 point pairs, calculate, verify H/V residuals <= 0.02m, then apply.",
    tags: ["localization", "coordinate-transformation", "datum", "calibration"]
  },
  {
    id: 363, category: "rtk",
    keywords: ["static survey", "RTK", "PPK", "survey method", "comparison", "静态测量", "动态后处理", "comparación de métodos", "comparação de métodos"],
    question: "What are the differences between static survey, RTK, and PPK methods?",
    answer: "**Static Survey:** At least 3 devices; >=40 min observation time; post-processing; range >=50 km; accuracy 2.5mm+1ppm horizontal, 5mm+1ppm vertical; best for control point surveys.\n\n**RTK:** At least 1 base + 1 rover; real-time 4G/radio link; 1-10s per point; range 10-20 km; accuracy 8mm+1ppm horizontal, 15mm+1ppm vertical; best for detail survey and stakeout.\n\n**PPK:** At least 1 base + 1 rover; no real-time link needed; 1-10s per point; post-processing; range >=50 km; accuracy same as static (2.5mm+1ppm/5mm+1ppm); positioning up to 50 Hz; best for UAV surveying and mapping.",
    tags: ["static", "rtk", "ppk", "comparison"]
  },
  {
    id: 364, category: "rtk",
    keywords: ["LoRa", "long range radio", "UHF", "spread spectrum", "low power", "远距离无线电", "扩频技术", "radio de largo alcance", "rádio de longo alcance", "baixo consumo"],
    question: "What is LoRa technology and what are its advantages for RTK data transmission?",
    answer: "**LoRa (Long Range Radio):** Spread spectrum wireless modulation technology for LPWAN communication, developed by Semtech.\n\n**Key advantages:**\n- **Long range:** Up to 15 km in open areas, up to 5 km in dense urban environments\n- **Strong anti-interference:** Communicates with <20dB noise; excellent against sudden random interference\n- **Low power consumption:** Static current <1uA; receiving current <5mA\n- **Anti-multipath:** Maintains stable transmission in high-rise urban environments\n\n**In Y1 GNSS receiver:** Built-in LoRa enables adjustable power (0.5W/1W/2W), 12-hour operation with hot-swap batteries, 15km range, and stable performance in complex environments (city, lakes, forests).",
    tags: ["lora", "radio", "uhf", "wireless"]
  },
  {
    id: 365, category: "rtk",
    keywords: ["DDNS", "Dynamic DNS", "CORS management", "remote access", "static IP", "动态域名", "远程管理", "DNS dinámico", "acceso remoto", "DNS dinâmico", "acesso remoto"],
    question: "What is DDNS and how does it enable remote CORS station management?",
    answer: "**DDNS (Dynamic DNS):** Automatically updates DNS records when your ISP changes your public IP address.\n\n**Problem without DDNS:** Consumer-grade internet assigns temporary IP addresses that change periodically — you must manually update the IP each time to remotely control the CORS station.\n\n**With DDNS:**\n1. Sign up with DDNS provider (e.g., NO-IP at www.noip.com, DynDNS)\n2. Register a domain name bound to your dynamic IP\n3. Configure DDNS account in your CORS receiver\n4. Access the receiver remotely via domain name regardless of IP changes\n\n**SV100 GNSS receiver** has built-in DDNS function supporting common providers — enables remote web page access, configuration, and monitoring without purchasing expensive static IP addresses.",
    tags: ["ddns", "cors", "remote-access", "network"]
  },
  {
    id: 366, category: "rtk",
    keywords: ["NAT-DDNS", "intranet", "private IP", "4G network", "remote management", "内网穿透", "NAT穿越", "NAT", "IP privado", "red privada", "IP privado", "rede privada"],
    question: "What is NAT-DDNS and how does it allow CORS access when using a private 4G IP address?",
    answer: "**NAT-DDNS:** Combines Network Address Translation with Dynamic DNS — enables remote access to devices on private IP networks (behind carrier NAT on 4G).\n\n**The problem:** 4G providers assign private IP addresses behind carrier-grade NAT — devices can connect out but cannot be reached from the internet.\n\n**The solution:** The intranet device proactively connects to a public NAT-DDNS server, which creates a tunnel from the public domain to the private device.\n\n**Setup for SV100:**\n1. Register with NAT-DDNS provider (e.g., Ngrok at ngrok.com, NATAapp at natapp.cn) to get AuthToken and domain\n2. SV100 web page: Device Configuration >> NAT-DDNS Config\n3. Enter domain name and AuthToken, start the service\n4. Access SV100 web page anytime, anywhere via the registered domain name",
    tags: ["nat-ddns", "cors", "remote-access", "4g"]
  },
  {
    id: 367, category: "agnav",
    keywords: ["tractor", "wheel design", "front wheel", "rear wheel", "angle sensor", "auto-steering", "拖拉机", "车轮设计", "diseño de ruedas", "tractor", "design de rodas"],
    question: "Why do tractors have smaller front wheels and larger rear wheels, and how does this affect auto-steering installation?",
    answer: "**Front wheels (smaller/narrower):**\n- Function: Steering (guide wheels)\n- Smaller size reduces ground resistance and steering effort\n- Lighter and easier to control, lower power consumption for turning\n\n**Rear wheels (larger/wider):**\n- Function: Drive wheels — all power transmitted to rear\n- Wider/larger increases contact area, reduces soil compaction, minimizes slippage via deep treads\n- Supports weight shift when pulling heavy implements (center of gravity moves backward)\n\n**Auto-steering installation:** The angle sensor is mounted on the front wheel since it is the steering wheel — detects deflection and transmits real-time angle data to the tablet, which controls the motor to adjust steering for straight-line operation.",
    tags: ["tractor", "angle-sensor", "auto-steering", "design"]
  },
  {
    id: 368, category: "rtk",
    keywords: ["SBAS", "satellite augmentation", "WAAS", "EGNOS", "MSAS", "GAGAN", "星基增强系统", "SBAS", "aumentación satelital", "aumentação por satélite"],
    question: "What is SBAS and how does it improve GNSS positioning accuracy?",
    answer: "**SBAS (Satellite-Based Augmentation System):** Geostationary satellites broadcast correction data (ephemeris errors, clock errors, ionospheric corrections) derived from ground reference stations.\n\n**Operational systems:**\n- WAAS (USA): 3 master stations + 38 reference stations + 3 GEO satellites, ~1-2m accuracy\n- EGNOS (Europe): 4 MCC + 41 RIMS stations + 3 GEO satellites\n- MSAS (Japan), GAGAN (India), SDCM (Russia)\n\n**Under construction:** BDSBAS/SNAS (China), KASS (South Korea), NSAS (Nigeria)\n\n**Accuracy:** Sub-meter level (<1m 3D RMS) — useful for GIS and agricultural navigation without local base stations.\n\n**Key advantage:** Regional correction without needing a local RTK base station, covers entire continents.",
    tags: ["sbas", "waas", "egnos", "correction"]
  },
  {
    id: 369, category: "agnav",
    keywords: ["angle sensor", "auto-steering", "magnetic sensor", "capacitive sensor", "inclination sensor", "角度传感器", "自动驾驶", "sensor angular", "sensor de ângulo"],
    question: "How does an angle sensor work in auto-steering systems?",
    answer: "**Angle sensor function:** Detects real-time wheel angle and converts it to usable output signals for auto-steering correction.\n\n**Three common types:**\n1. **Magnetic angle sensor:** Non-contact, high-performance, automatic misalignment compensation, fault detection — ideal for harsh field environments\n2. **Capacitive angular displacement sensor:** Simple structure, high precision, suitable for dynamic measurement — converts capacitance value via algorithm to angle output\n3. **Inclination sensor:** Based on Newton's second law — measures acceleration to calculate angle; used for system level/horizontal measurement\n\n**In auto-steering workflow:** Mounted on tractor steering wheel > detects how much wheel has turned > feeds angle data to tablet > tablet software calculates correction > controls electric motor to adjust steering for straight-line operation.",
    tags: ["angle-sensor", "auto-steering", "tractor", "sensor"]
  },
  {
    id: 370, category: "rtk",
    keywords: ["RTK bridge", "network to radio", "SV100", "differential data relay", "RTK桥", "中继", "puente RTK", "ponte RTK"],
    question: "What is an RTK bridge and how to configure it on SV100?",
    answer: "**RTK bridge:** Converts network differential data to radio broadcast — receives CORS data via 4G and simultaneously transmits via radio.\n\n**Use cases:**\n- One CORS account shared by multiple rovers (one-to-many)\n- Insufficient SIM cards (e.g., 5 receivers but only 1 SIM)\n- No network coverage at work site but nearby network access exists\n\n**SV100 configuration:**\n1. Login web page via WiFi (192.168.1.1)\n2. Device Configuration >> Working Mode: Set as Base\n3. Work Management >> Ntrip Client: Enter CORS IP, port, username, password, select mount point\n4. Work Management >> Radio >> Radio RTK Bridge: Set to Transmit, configure protocol, channel, frequency, power\n5. Other receivers receive differential data via radio without needing SIM cards",
    tags: ["rtk-bridge", "sv100", "radio", "ntrip"]
  },
  {
    id: 371, category: "rtk",
    keywords: ["Y1", "radio mode", "troubleshooting", "external radio", "SDL1", "电台模式", "故障排查", "modo radio", "resolución de problemas", "modo rádio"],
    question: "How to troubleshoot common Y1 GNSS receiver radio mode issues?",
    answer: "**Rover receives only short-range signals (<few hundred meters):** Replace battery (low voltage reduces range); ensure base is in high open area; check cables and external antenna for damage.\n\n**Rover cannot receive signal at close range:** Check base transmission (data LED flashes at 1Hz); verify registration is not expired; check serial port baud rate is 38400.\n\n**Rover receives signal but only single solution:** Secure rover radio antenna; set differential format to RTCM3 or RTCM32; charge/replace rover battery; upgrade firmware.\n\n**Base station offset prompt:** Verify base has not moved; another base may use same radio frequency — change channel.\n\n**SDL1 datalink errors:** E01 = battery voltage too high; E02 = battery voltage too low; E03 = configuration parameters lost (reconfigure via software).",
    tags: ["y1", "radio", "troubleshooting", "faq"]
  },
  {
    id: 372, category: "rtk",
    keywords: ["Y1", "RTK precautions", "interference", "satellite signal", "注意事项", "干扰", "precauciones RTK", "precauções RTK"],
    question: "What are the key precautions and troubleshooting tips when using Y1 GNSS receiver?",
    answer: "**Key precautions:**\n1. Keep away from wireless signal towers and high-voltage power lines (electromagnetic interference)\n2. Avoid network mode in remote mountains with no signal coverage\n3. Avoid severe obstructions (mountains, tall buildings, forests, tree canopy)\n4. External radio: keep antenna vertical, protect from rain, range within 15km; use low power <5km, high power >5km\n\n**Troubleshooting:**\n- No satellite signals: Send command 'set oscvalue manual 2100' via H-Terminal; if fails, antenna may need repair\n- Registration fails: Ensure '-' character is in English format; check ID with command 'log regsource'\n- Change panel language to English: Right button x2 > left x1 > right x5 > left x1 > right x1 to select English > left x1 to confirm",
    tags: ["y1", "precautions", "troubleshooting", "interference"]
  },
  {
    id: 373, category: "rtk",
    keywords: ["Y1", "4G mode", "GSM", "CORS", "SIM card", "network rover", "网络模式", "4G", "modo red", "modo rede", "cartão SIM"],
    question: "How to troubleshoot Y1 GNSS receiver network/4G mode issues?",
    answer: "**SIM detection stuck:** Check network signal; verify SIM card is properly inserted and contacts are clean.\n\n**Stuck on connecting service (base):** Verify IP address and port are correct; test server via mobile browser (e.g., 47.103.96.216:8080).\n\n**Failed to get source list (rover):** Verify IP/port settings; check SIM connection; try manually entering mountpoint name.\n\n**Always connecting to service (rover):** Verify APN, IP, port, username, password; check if base station is online.\n\n**Rover suddenly switches to single mode:** Check network quality; verify SIM has data balance; check if CORS account is shared — change password and reconnect.\n\n**SC100 enters factory mode:** Caused by stuck volume up button during power-on; press volume down to select 3rd option, volume up to confirm.",
    tags: ["y1", "4g", "network", "cors", "troubleshooting"]
  },
  {
    id: 374, category: "rtk",
    keywords: ["CORS", "site selection", "reference station", "data quality", "选址", "建站条件", "selección de sitio CORS", "seleção de local"],
    question: "How to properly select a site for building a CORS reference station?",
    answer: "**Site selection process:** Map network design > Field visit > Data collection > Quality analysis > Construction.\n\n**Location requirements:**\n- Distance from multipath objects (buildings, trees, water) >200m\n- Satellite visibility above 10° elevation (15° minimum in difficult conditions); obstruction coverage <60° horizontally\n- Distance from EM interference (radio towers, high-voltage lines) >200m\n- Avoid mining areas, railways, highways (vibration)\n- Future planning: select areas with small expected environmental changes\n\n**Station spacing:** ~60km in high-latitude calm regions; ~40km in low-latitude active ionosphere regions. Use triangular network layout.\n\n**Infrastructure:** Reliable communication access, stable power supply, convenient transportation, good security for long-term maintenance.",
    tags: ["cors", "site-selection", "reference-station", "installation"]
  },
  {
    id: 375, category: "agnav",
    keywords: ["articulated tractor", "steering", "hydraulic cylinder", "tractor type", "铰接式拖拉机", "液压转向", "tractor articulado", "trator articulado"],
    question: "How does an articulated tractor work and when is it preferred over conventional tractors?",
    answer: "**Articulated tractor design:** Two frames (front/rear) with equal-diameter wheels on each axle — steering is achieved by hydraulic cylinders changing the relative position of front and rear frames.\n\n**Conventional tractor:** Integral power unit; steering via front wheel angle deflection; front wheels smaller than rear.\n\n**When articulated is preferred:**\n- Conventional optimal at 80-180 HP (smaller front wheels allow tighter turns)\n- Above 200 HP: conventional requires larger front wheels, dual/triple rear wheels, front axle power disconnect at >15-18° turns — structural complexity increases\n- Articulated: same-size wheels eliminate power loss from wheel mismatch; modular design simplifies maintenance; better high-power traction\n\n**Auto-steering relevance:** Understanding tractor type is essential for proper system installation and calibration.",
    tags: ["articulated-tractor", "steering", "auto-steering", "heavy-machinery"]
  },
  {
    id: 376, category: "rtk",
    keywords: ["engineering survey", "construction", "control survey", "deformation monitoring", "工程测量", "建筑施工", "monitoreo de deformación", "monitoramento de deformação"],
    question: "How is engineering survey technology applied across building construction stages?",
    answer: "**Three construction stages:**\n\n1. **Pre-construction:** Provide large-scale topographic maps via ground mapping and photogrammetry; establish plane and elevation control points — foundation of the entire project, no room for error.\n\n2. **In-construction:** Establish construction control network; layout building positions at required precision on-site; quality issues in this stage cause structural defects.\n\n3. **Post-construction:** Deformation monitoring — vertical settlement, horizontal displacement, tilt, deflection, wind vibration, sunlight deformation — ensures safe operation and protects user safety.\n\n**Control survey method:** Grid layout using building coordinate system (axes parallel to main structure); follows principle of whole-to-local, hierarchical control. Engineering surveying serves construction, water conservancy, transportation, mining and other sectors.",
    tags: ["engineering-survey", "construction", "control-survey", "deformation"]
  },
  {
    id: 377, category: "rtk",
    keywords: ["total station", "RTK", "comparison", "accuracy", "error propagation", "全站仪", "RTK对比", "estación total", "comparación", "estação total", "comparação"],
    question: "Which should I choose for surveying — a total station or a GNSS RTK receiver?",
    answer: "**Total Station:**\n- Requires visible light + mutual visibility (no line-of-sight obstructions)\n- Range: ~1000m without prism, 7-10km with prism\n- Millimeter-level accuracy but error accumulates with each station move (error propagation theory)\n- Best for: high-precision small-area, indoor/underground projects\n\n**GNSS RTK:**\n- Requires open sky (no intervisibility needed between points)\n- Range: up to 15km from single base\n- Centimeter-level accuracy (8mm+1ppm), error is relative between base and rover, does not accumulate\n- Best for: open-area, large-scale projects\n\n**Verdict:** RTK is more efficient for most open-field surveys; total station is essential for high-precision or heavily obstructed sites. Many large projects combine both instruments.",
    tags: ["total-station", "rtk", "comparison", "surveying"]
  },
  {
    id: 378, category: "agnav",
    keywords: ["autosteer", "SAgro100", "precision agriculture", "pass-to-pass accuracy", "自动驾驶", "精准农业", "agricultura de precisión", "agricultura de precisão"],
    question: "What are the four key benefits of using an auto-steering kit in farming?",
    answer: "**1. Reduced operator fatigue:** Frees hands from driving; no skilled driver needed; 24/7 continuous operation possible regardless of weather.\n\n**2. 2.5cm pass-to-pass accuracy:** Minimizes gaps/overlap, maximizing land utilization; enables precise fertilization, spraying, irrigation — saves fertilizer, water, and pesticide.\n\n**3. Smart farm management:** Auto-generates routes, records working area, eliminates human errors (missed/overlapped areas); supports multiple farms/plots management and task sharing.\n\n**4. Easy-to-use and low barriers:** Compatible with most tractor types; installed within 30 minutes; calibrated in 15 minutes; supports sowing, harvesting, plowing modes.",
    tags: ["autosteer", "precision-agriculture", "sagro100", "efficiency"]
  },
  {
    id: 379, category: "rtk",
    keywords: ["total station", "centering", "leveling", "setup procedure", "全站仪", "对中整平", "nivelación", "centrado", "estación total", "nivelamento"],
    question: "How to quickly center and level a total station?",
    answer: "**Centering:** Align instrument center with survey point on same plumb line.\n**Leveling:** Make vertical axis of instrument plumb by adjusting horizontal bubble.\n\n**Six-step procedure:**\n1. Set up tripod at shoulder height, center over known point through bolt hole, keep frame roughly level\n2. Attach total station, center leveling screws, place circular level above one tripod leg, tighten central bolt\n3. Rough centering: Enable laser, grasp two legs to suspend, adjust until laser hits the point\n4. Rough leveling: Adjust tripod legs to center circular level bubble\n5. Complete leveling: Align plate level parallel with two leveling screws A and B; rotate 90°, adjust screw C\n6. Final check: If leveling shifted centering, slightly loosen center bolt, slide instrument back, re-tighten",
    tags: ["total-station", "setup", "centering", "leveling"]
  },
  {
    id: 380, category: "rtk",
    keywords: ["base station", "Ntrip Caster", "DDNS", "continuous operation", "single base", "单基站", "连续运行", "estación base continua", "estação base contínua"],
    question: "How to set up a single continuous operation base station with Ntrip Caster and DDNS?",
    answer: "**What you need:** SV100 GNSS receiver, dynamic domain name, router with dynamic public IP support.\n\n**Setup steps:**\n1. SV100 web page: set as Base, obtain base coordinates, start base\n2. Enable Ntrip Server: address = 127.0.0.1, port to be mapped by router, set username/password/mountpoint\n3. Enable Ntrip Caster: same port and password as Ntrip Server\n4. Configure router: map SV100 internal port to router external port (e.g., 25001); enable DDNS account\n5. Access correction data via domain name + port — rovers get Fixed RTK solution\n\n**Benefits:** No static IP needed, no expensive CORS platform software — ideal for farms or construction sites needing permanent single-base coverage.",
    tags: ["base-station", "ntrip", "ddns", "sv100"]
  },
  {
    id: 381, category: "agnav",
    keywords: ["land leveling", "GNSS leveling", "laser leveling", "agriculture", "comparison", "土地平整", "激光平地", "nivelación láser", "nivelamento a laser"],
    question: "What is the difference between GNSS land leveling and laser land leveling?",
    answer: "**Accuracy:** Both achieve 2-3 cm — comparable precision.\n\n**Working range:**\n- Laser: 400m typical, up to 800-1000m with premium transmitters — limited to transmitter visibility\n- GNSS: 3-5km typical, up to 10-15km with long-range base (SL100) — much larger coverage\n\n**Environmental limits:**\n- Laser: Affected by visibility (dust, fog, haze); terrain height differences can block laser signal\n- GNSS: Unaffected by weather/terrain — operates 24/7 in open sky\n\n**Installation:** GNSS is easier — CORS users skip base setup; no need to relocate for large areas.\n\n**Cost:** GNSS is becoming more cost-effective with technology adoption. GNSS offers better comprehensive performance for modern farming as a newer land leveling method.",
    tags: ["land-leveling", "gnss", "laser", "agriculture", "comparison"]
  },
  {
    id: 382, category: "rtk",
    keywords: ["NTRIP", "Caster", "Client", "Server", "differential data protocol", "NTRIP协议", "caster", "protocolo NTRIP", "protocolo NTRIP"],
    question: "What is NTRIP Caster and how is it configured?",
    answer: "**NTRIP architecture (three roles):**\n- **Ntrip Server:** Sends GNSS correction data to Ntrip Caster (base station)\n- **Ntrip Caster:** The correction data center — receives, manages, and distributes GNSS data\n- **Ntrip Client:** Receives correction data from Ntrip Caster (rover)\n\n**Two delivery methods:**\n1. **Direct forward:** Client selects a specific mount point, caster forwards data unchanged\n2. **VRS mode:** Caster generates a virtual reference station near client from multiple Ntrip Sources; client must send its coordinates first\n\n**SV100 configuration:** Built-in Ntrip Server + Caster. Configure Ntrip Server (address = SV100 IP) and Ntrip Caster (same port/password). For remote access without static IP, combine with DDNS and route through domain name + port.",
    tags: ["ntrip", "caster", "differential", "cors"]
  },
  {
    id: 383, category: "rtk",
    keywords: ["RTK", "GIS", "mock location", "SingularPad", "data collection", "GIS采集", "模拟位置", "SIG", "localização simulada"],
    question: "How to use an RTK receiver with GIS software for data collection?",
    answer: "**Method 1 — Mock Location (standard users):**\n1. Connect Y1 receiver to SingularPad, configure as Ntrip Rover with Fixed RTK solution\n2. Enable Mock Location in SingularPad location services\n3. In Android Developer Options, select SingularPad as mock location app\n4. Any GIS software using Internal GPS mode now receives RTK-level positioning from Y1\n\n**Method 2 — Developer API:**\n- SingularPad location service provides Local Coordinates interface for GIS developers\n- Enables real-time conversion from WGS84 BLH to local XYZ coordinates\n- Contact SingularXYZ support for the development guide\n\n**Benefit:** Surveyors can use existing RTK equipment for ad-hoc GIS collection without buying dedicated GIS receivers.",
    tags: ["rtk", "gis", "mock-location", "singualrpad"]
  },
  {
    id: 384, category: "rtk",
    keywords: ["CORS platform", "Amazon Cloud", "AWS", "free server", "static IP", "亚马逊云", "免费服务器", "nube AWS", "servidor gratuito", "nuvem AWS"],
    question: "How to get a free static IP for a CORS platform using Amazon Cloud (AWS)?",
    answer: "**Step 1 — Create AWS account:** Go to aws.amazon.com, register/login, search EC2 module.\n\n**Step 2 — Launch Windows instance:**\n- Quick Start: Windows Server\n- Create new key pair (save the generated .pem file — needed to decrypt administrator password)\n- Configure security group, then launch instance\n\n**Step 3 — Get RDP credentials:**\n- Select instance > Connect > RDP client > Get Password > upload .pem file to decrypt\n\n**Step 4 — Connect:** Open Remote Desktop (search MST on Windows), enter public IP + username + password.\n\n**Important:** AWS offers 750 hours free for first-time users — terminate the instance when not in use to avoid charges. Next step: install CORS software (SNIP) on this remote server.",
    tags: ["cors", "aws", "cloud", "snip", "static-ip"]
  },
  {
    id: 385, category: "rtk",
    keywords: ["CORS platform", "SNIP", "port forwarding", "NTRIP Server", "mountpoint", "SNIP配置", "puerto", "porta"],
    question: "How to complete the free CORS platform setup with SNIP and connect SV100 base station?",
    answer: "**Part 1 — Create AWS port for data transfer:**\n- EC2 > Instances > Security > Security Groups > Edit inbound rules\n- Add rule: Custom TCP, port e.g. 8888, source anywhere, save\n\n**Part 2 — Install and configure SNIP:**\n- Install SNIP on the remote Windows server\n- Click IP map: enter private IP and created port (8888) > Connect (status changes to Listening)\n- Add pushed-in stream: set name, username, password for mountpoint\n\n**Part 3 — Connect SV100 to SNIP:**\n- SV100 web page > Work Management > NTRIP Server > Config\n- Enter: Caster Address (AWS public IP), Port (8888), User, Password, Mount Point\n- Select differential data type, check Startup, OK\n\n**Note:** Unregistered SNIP stays online 1 hour (5 stations); free registration enables permanent basic use (3 stations online).",
    tags: ["cors", "snip", "aws", "ntrip", "sv100"]
  },
  {
    id: 386, category: "rtk",
    keywords: ["Zigzag", "GIS", "feature collection", "code switching", "SingularPad", "自动切换编码", "recolección de elementos", "coleta de elementos"],
    question: "How does Zigzag in SingularPad simplify linear GIS feature collection?",
    answer: "**Zigzag function:** Automatically switches feature codes during linear GIS collection — surveyors can focus on surroundings (e.g., traffic) instead of the software screen.\n\n**Setup:**\n1. Connect receiver, get Fixed RTK, go to Point Survey > Settings > enable Zigzag\n2. Add codes (e.g., footpath, kerb, centerline) as polyline type\n\n**Road collection workflow example:**\n- Left side row: footpath (line 1) > kerb (line 1) > centerline (line 1) > kerb (line 2) > footpath (line 2)\n- Right side row: reverse sequence\n- Set collection interval (e.g., every 10m), progress across road row by row\n\n**Result:** Codes auto-switch between rows — no manual code changes needed, improving both safety and efficiency for linear feature collection.",
    tags: ["zigzag", "gis", "feature-collection", "singualrpad"]
  },
  {
    id: 387, category: "rtk",
    keywords: ["GNSS accuracy", "single point", "SBAS", "Doppler smooth", "no base station", "单点精度", "无基站", "precisión sin base", "precisão sem base"],
    question: "How accurate can GNSS achieve without a base station or RTK corrections?",
    answer: "**1. Single Point Mode (no correction):**\n- Accuracy: 2-3 meters for good receivers\n- Used in mobile phone GPS for daily navigation\n\n**2. SBAS Mode (regional satellite correction):**\n- Accuracy: <1m 3D RMS\n- Uses geostationary satellite corrections covering entire continents\n- Suitable for GIS projects and agricultural navigation with moderate accuracy needs\n\n**3. Doppler Smooth Mode (algorithm-based, no correction data):**\n- Accuracy: 15-30 cm (dynamic positioning only)\n- Uses Doppler algorithm to smooth GNSS points along movement trajectory\n- Suitable for vehicle-mounted systems like agricultural guidance (SAGro10)\n\n**Key takeaway:** SBAS and Doppler modes provide sub-meter to decimeter accuracy without any local base station — useful when RTK infrastructure is unavailable.",
    tags: ["single-point", "sbas", "doppler", "accuracy"]
  },
  {
    id: 388, category: "rtk",
    keywords: ["total station", "stakeout", "position sharing", "QR code", "SingularPad", "全站仪放样", "位置共享", "replanteo", "compartir posición", "locação"],
    question: "How to simplify total station stakeout using SingularPad position sharing via QR code?",
    answer: "**Position Sharing function** eliminates the need for intercom between observer and prism operator.\n\n**Step 1 — Connect and set station:**\n- Bluetooth connect TS1000 total station to SingularPad\n- Set station via Set Station & Orientation or Free Set Station method\n\n**Step 2 — Share stakeout data:**\n- Survey > Point Stakeout > import target points > click Share button\n- SingularPad generates a QR code containing real-time stakeout information\n\n**Step 3 — Prism operator follows prompts:**\n- Prism operator scans QR code with another phone\n- Gets real-time direction, distance, and position prompts on their screen\n- Simply follow software guidance to navigate to the correct stakeout position\n\n**Result:** No more shouting or intercom — prism operator independently finds stakeout points following on-screen prompts.",
    tags: ["total-station", "stakeout", "qr-code", "singualrpad"]
  },
  {
    id: 389, category: "rtk",
    keywords: ["CORS", "static data", "data quality", "PProcessing", "site analysis", "静态数据", "数据质量分析", "calidad de datos GNSS", "qualidade de dados GNSS"],
    question: "How to verify GNSS data quality before building a CORS station?",
    answer: "**Equipment:** SV100 receiver, SA500 choke ring antenna, antenna cable, tripod, tribrach, PProcessing software.\n\n**Step 1 — Record 24-hour static data:**\n- Mount SA500 antenna on tripod/tribrach, connect to SV100 via antenna cable\n- Login SV100 web page, verify normal satellite tracking\n- Work Management > Data Recording > Select 24H > Start Recording (keep power supply stable)\n- After 24h: download data record via web page\n\n**Step 2 — Analyze data quality:**\n- Import recorded file into PProcessing software\n- Right-click file > File Analyse > set threshold parameters (keep defaults for personal use)\n- Click Start — all quality indicators should pass\n\n**If all indicators pass:** The location is suitable for CORS construction. For professional projects, adjust warning parameters per project requirements.",
    tags: ["cors", "static-data", "data-quality", "pprocessing"]
  },
  {
    id: 390, category: "rtk",
    keywords: ["CORS", "antenna installation", "side wall", "steel pier", "lightning protection", "天线安装", "防雷", "instalación de antena GNSS", "instalação de antena"],
    question: "How to properly install a CORS station GNSS antenna?",
    answer: "**Outdoor components:** GNSS antenna, lightning rod, optional solar panels.\n**Indoor components:** GNSS receiver, antenna surge protectors, power supply, internet connection.\n\n**Method 1 — Side Wall Installation:**\n- For roof parapets: building <=30m, <=20 years old, concrete, wall thickness >20cm, height >70cm\n- Fix support rods with chemical bolts (all 4 screw holes used); base spacing 30-60cm\n- Steel pipe protrudes 30cm from wall; antenna cable in 30mm protective tube; all connections sealed\n- Lightning rod: insulator between rod and support (no direct contact); solder lead to ground\n\n**Method 2 — Steel Pier Installation:**\n- When no suitable wall exists; requires wide field of view (>10° elevation), no reflective objects nearby\n- Verify roof load-bearing capacity; add lightning rod if coverage insufficient",
    tags: ["cors", "antenna", "installation", "lightning"]
  },
  {
    id: 391, category: "rtk",
    keywords: ["total station", "RTK", "combined survey", "same coordinate system", "localization", "联合测量", "统一坐标系", "levantamiento combinado", "levantamento combinado"],
    question: "How to combine total station and RTK receiver surveying in the same coordinate system?",
    answer: "**Challenge solved:** SingularPad enables both instruments to work in the same local coordinate system without post-processing.\n\n**Requirements:** At least 2 known points in local coordinate system; TS1000 total station; Y1 RTK receiver.\n\n**Step 1 — Set station for total station:** Create new project, keep default coordinate parameters; Bluetooth connect TS1000; set station based on known points.\n\n**Step 2 — Set coordinate system for GNSS receiver:** Switch device type to GNSS, connect Y1; Project > Localization, use 3 known point pairs to transform geodetic to local system.\n\n**Step 3 — Survey:** Fluently switch between total station and GNSS — all points recorded in the same local coordinate system. Export in CSV, DXF, TXT.\n\n**Benefit:** Real-time status view, immediate problem detection, no re-measurement needed post-processing.",
    tags: ["total-station", "rtk", "combined-survey", "localization"]
  },
  {
    id: 392, category: "rtk",
    keywords: ["Mobile Topographer", "SingularSurv", "mock location", "Android", "third-party app", "第三方软件", "安卓模拟位置", "software externo", "software externo"],
    question: "How to make an RTK receiver work with Mobile Topographer or other third-party apps?",
    answer: "**Using SingularSurv (basic field software):**\n\n**Step 1:** Connect Y1 receiver to SingularSurv, create work mode (e.g., PDA CORS) and get Fixed RTK solution.\n\n**Step 2:** In SingularSurv Settings, enable Mock Location — this shares RTK coordinate information to the Android device.\n\n**Step 3:** Enable Developer Options: Settings > About Phone > tap Build Number 5 times. Then in Developer Options > Select Mock Location App, choose SingularSurv.\n\n**Step 4:** Open Mobile Topographer or any other software — it receives RTK positioning data as if from internal GPS.\n\n**Same method works for:** SingularPad, GIS software, and any app using Android location services.",
    tags: ["mobile-topographer", "mock-location", "singualrsurv", "gis"]
  },
  {
    id: 393, category: "rtk",
    keywords: ["RTK", "RTD", "DGPS", "carrier phase", "pseudo-range", "实时差分", "载波相位", "伪距", "fase portadora", "pseudo-distancia", "fase portadora"],
    question: "What is the difference between RTK and RTD (Real-Time Differential)?",
    answer: "**RTD (Real-Time Differential):**\n- Differential technology: Pseudo-range code (C/A, P) comparison\n- Accuracy: Sub-meter level\n- Working range: >100 km — easy to fix, lower cost\n- Best for: Vehicle navigation, agricultural spraying (moderate accuracy)\n\n**RTK (Real-Time Kinematic):**\n- Differential technology: Carrier phase (L1, L2, L5) comparison\n- Accuracy: Centimeter level — carrier code rate is much higher than pseudo-range\n- Working range: >20 km — harder to fix, higher cost\n- Best for: Land surveying, machine guidance (high accuracy)\n\n**Key difference:** RTD corrects by comparing pseudo-range codes; RTK corrects by comparing carrier phase observations. Carrier phase has much higher resolution, enabling superior precision. Both are types of DGPS.",
    tags: ["rtk", "rtd", "dgps", "comparison"]
  },
  {
    id: 394, category: "rtk",
    keywords: ["Alibaba Cloud", "CORS", "free server", "ECS", "Windows Server", "阿里云", "免费云服务器", "nube Alibaba", "servidor gratuito", "nuvem Alibaba"],
    question: "How to build a CORS server for free using Alibaba Cloud?",
    answer: "**Advantage over AWS:** Alibaba Cloud offers free trial packages valid for a full year (vs AWS 750 hours).\n\n**Step 1 — Create account:** Go to alibabacloud.com, register/login, select Elastic Compute Service (ECS).\n\n**Step 2 — Configure instance:**\n- Choose Windows Server OS\n- Check 'Assign Public IPv4 Address' in Networking settings\n- Set login username and password in System Configurations\n\n**Step 3 — Map CORS port:**\n- Network & Security > Security Groups > Add Rule\n- Direction: Ingress; Port: e.g. 9999; Authorization: 0.0.0.0/0; Save\n\n**Step 4 — Configure server:**\n- Use Remote Desktop (MST) with public IP, username, password\n- Install CORS software (e.g., SNIP) on the server\n- Connect SV100 to the server via NTRIP Server settings using public IP and mapped port",
    tags: ["cors", "alibaba-cloud", "free", "ecs"]
  },
  {
    id: 395, category: "rtk",
    keywords: ["choke ring antenna", "multipath interference", "geodetic antenna", "CORS reference station", "扼流圈天线", "多路径干扰", "antena choke ring", "antena geodésica", "antena de anel", "interferência multicaminho"],
    question: "Should I choose a choke ring antenna or a geodetic antenna for my reference station?",
    answer: "**Choke ring antenna:**\n- Circular rings with slots create high-impedance surface blocking reflected signals\n- Effectively mitigates multipath interference — only direct satellite signals reach the antenna\n- Quarter-wavelength deep design, very smooth controlled signal pattern\n- Professional choice for national CORS and large monitoring projects\n- Cost: ~4-5x higher than geodetic antennas\n\n**Geodetic antenna:**\n- Smaller, lower-cost alternative with good market-proven performance\n- Suitable for personal reference stations without strict project requirements\n\n**Recommendation:**\n- **Sufficient budget + professional CORS:** Choke ring (SA500)\n- **Personal use, cost-sensitive:** Geodetic antenna (SA100)\n\n**SingularXYZ offers both:** SA500 choke ring and SA100 geodetic antenna for different project needs.",
    tags: ["choke-ring", "antenna", "multipath", "cors"]
  },
  {
    id: 396, category: "agnav",
    keywords: ["AB line", "guidance line", "auto-steering", "portable GNSS", "AB引导线", "自动驾驶", "línea guía AB", "linha guia AB"],
    question: "How to measure an AB guidance line for auto-steering using a portable GNSS receiver?",
    answer: "**Why portable GNSS:** Driving a tractor across large farms just to mark points A and B wastes fuel — a portable receiver is faster and more efficient.\n\n**Step 1 — Measure AB line:**\n- Create project in SingularPad, Ellipsoid = WGS-84\n- Connect portable GNSS (P1/T8 Pro/Y1), get Fixed RTK solution\n- Tools > AB Line: measure Point A (start), then Point B (end)\n\n**Step 2 — Export:**\n- For SAgro100: export as *.ini file format\n- For other auto-steering systems: export as *.shp file format\n\n**Step 3 — Import to auto-steering tablet:**\n- Copy file to USB, insert into T10 tablet\n- SAgro100 software: AB > Manage > USB > import AB line\n\n**Additional use:** Same portable GNSS can measure farm boundaries and plot perimeters for smart farm management.",
    tags: ["ab-line", "auto-steering", "guidance", "singualrpad"]
  },
  {
    id: 397, category: "rtk",
    keywords: ["solar storm", "ionosphere", "RTK error", "F10.7", "solar activity", "太阳风暴", "电离层干扰", "tormenta solar", "ionosfera", "tempestade solar", "ionosfera"],
    question: "How do solar storms affect RTK surveying and what can be done about it?",
    answer: "**How solar storms affect RTK:**\n- Solar radiation ionizes ionospheric particles — changes signal propagation time AND bends signal path\n- RTK double-difference algorithm assumes consistent ionospheric delay between base and rover\n- During active solar periods, this assumption breaks down — causes difficulty getting Fixed solution and reduced accuracy\n- Effect worsens with longer baselines; VRS accuracy also degrades when ionosphere is overly active\n\n**Monitoring:** F10.7 index (solar 10.7cm radio flux) indicates heating/ionization level — check Space Environment Prediction Center forecasts.\n\n**Mitigation during active solar periods:**\n- Use shorter baselines when possible\n- Avoid working during peak daytime solar activity hours\n- Use full-constellation receivers tracking more satellites\n- Expect slower re-initialization times — be patient with equipment",
    tags: ["solar-storm", "ionosphere", "rtk-error", "accuracy"]
  },
  {
    id: 398, category: "rtk",
    keywords: ["grid shift", "relative accuracy", "absolute accuracy", "base station restart", "网格校正", "相对精度", "precisión relativa", "precisão relativa"],
    question: "How does Grid Shift maintain surveying accuracy when restarting a base station without known points?",
    answer: "**The problem:** Auto-base mode gives meter-level single-point positioning — each restart creates a different base coordinate, causing meter-level offsets in rover measurements even at the same point.\n\n**Grid Shift solution:**\n1. Day 1: Start base in auto-base mode, survey normally, measure a reference point\n2. Day 2 onwards: When restarting base, select the previously measured point as base station point\n3. This locks the base to the same relative coordinate frame — relative accuracy (point-to-point) is preserved across sessions\n\n**In SingularPad:** Use Calibrate Point function to set base from a measured point.\n\n**If known points become available later:** Use Localization function to shift all project points to the known coordinate system.\n\n**Key concept:** Grid Shift preserves relative accuracy even when absolute accuracy (to a known reference) is unavailable.",
    tags: ["grid-shift", "relative-accuracy", "base-station", "localization"]
  },
  {
    id: 399, category: "rtk",
    keywords: ["IMU", "accuracy test", "tilt survey", "inclination", "RTK倾斜测量", "IMU精度测试", "prueba de precisión IMU", "teste de precisão IMU"],
    question: "How to test the accuracy of an IMU RTK receiver?",
    answer: "**Test preparation:** Y1 GNSS receiver, SingularPad software, PDA. Choose test points in 3 scenes: Open sky, under tree, near building.\n\n**Step 1 — Reference measurement:** Turn OFF IMU, center pole precisely, measure each point = reference coordinates.\n\n**Step 2 — Tilt measurements:** Turn ON IMU. At each point, measure at 4 directions (E, W, N, S) and at tilt angles 0°, 10°, 20°, 30°, 40°, 50°, 60° (Y1 supports up to 60° tilt). Total: 16 measurements per point.\n\n**Step 3 — Compare:** Error = tilt measurement - reference. Analyze how horizontal and vertical accuracy change as tilt angle increases.\n\n**Expected result (Y1):** <3cm error across all tilt angles up to 60°. Test demonstrates IMU performance degrades predictably with increasing tilt — choose appropriate tilt angle for required accuracy.",
    tags: ["imu", "accuracy", "tilt-survey", "calibration"]
  },
  {
    id: 400, category: "rtk",
    keywords: ["RTK errors", "ionosphere", "multipath", "baseline distance", "satellite signal", "RTK误差源", "多路径", "fuentes de error RTK", "fontes de erro RTK"],
    question: "What are the main sources of RTK errors and how to minimize them?",
    answer: "**1. Ionospheric Error:** Signal bends and changes speed through ionosphere.
**Solution:** Use RTK differential correction; select powerful multi-constellation receiver.\n\n**2. Baseline Distance Error:** Error increases ~1mm per km from base (RTK spec: 8mm+1ppm).
**Solution:** Keep base-rover distance within 20km for best accuracy.\n\n**3. Multipath Error:** Signal reflects off buildings, water, glass, vehicles before reaching receiver.
**Solution:** Avoid large reflective surfaces; for CORS/monitoring use choke ring antenna.\n\n**4. Satellite Signal Quality:** Poor signal from occlusion (forest, buildings, power towers).
**Solution:** Set base in open sky; rover should use full-constellation receiver tracking more satellites in harsh environments.\n\n**5. Human Error:** Pole not centered, target missed, wrong antenna height.
**Solution:** Use IMU receiver for tilt compensation (no pole-centering needed); rely on surveyor care and experience.",
    tags: ["rtk-errors", "accuracy", "ionosphere", "multipath"]
  },
  {
    id: 401, category: "rtk",
    keywords: ["VRS", "virtual reference station", "CORS", "nearest mount point", "虚拟参考站", "最近基站", "estación virtual de referencia", "estação virtual de referência"],
    question: "What is VRS (Virtual Reference Station) and how does it compare to nearest mount point?",
    answer: "**VRS (Virtual Reference Station):**\n- CORS platform generates a virtual base station within several meters of the rover\n- Requires at least 3 physical reference stations in the area\n- Platform solves real-time error model, then virtualizes a station around rover's transmitted coordinates\n- Largely shortens baseline distance, improving RTK accuracy\n\n**Nearest method:**\n- Automatically selects closest physical base station based on rover location — no virtual computation needed\n\n**Key difference:** Both require bidirectional data (rover sends position first). Normal mount points are one-way only.\n\n**Historical context:** VRS was critical when CORS stations were sparse (long baselines). Today, with denser CORS networks and lower construction costs, Nearest is more commonly used due to simpler platform requirements.",
    tags: ["vrs", "cors", "mount-point", "nearest"]
  },
  {
    id: 402, category: "rtk",
    keywords: ["RTK performance", "re-initialization time", "accuracy test", "baseline test", "RTK性能测试", "重新初始化时间", "prueba de rendimiento RTK", "teste de desempenho RTK"],
    question: "How to test RTK receiver performance — accuracy and re-initialization time?",
    answer: "**Test setup:** Short baseline 100m + long baseline 10km. Choose points in Open sky, under tree, near building scenes.\n\n**Step 1 — Reference coordinates:** Record smooth GPS points (5-10 epoch average) at each test point.\n\n**Step 2 — Re-initialization test:**\n- At each point, invert receiver until Fixed RTK becomes Single solution\n- Put upright, record time from Single back to Fixed\n- Measure point coordinate after re-initialization\n- Repeat at least 5 times per point per scene\n\n**Step 3 — Analysis:**\n- Accuracy: Compare each measurement to reference; calculate error (horizontal and vertical)\n- Re-initialization time: Calculate the average across repetitions\n- Example Y1 result: Average re-initialization <3 seconds across different environments and baseline distances",
    tags: ["rtk", "performance", "re-initialization", "accuracy-test"]
  },
  {
    id: 403, category: "agnav",
    keywords: ["spline sleeve", "SAgro100", "tractor compatibility", "steering shaft", "keyway", "花键套", "转向轴", "manga estriada", "compatibilidad", "luva estriada", "compatibilidade"],
    question: "How do spline sleeves enable SAgro100 auto-steering compatibility with different tractors?",
    answer: "**What is a spline sleeve:**\n- Part that transmits mechanical torque between electric motor and tractor steering shaft\n- Tractor steering shaft surface has longitudinal keyways (grooves); spline sleeve has matching keyways\n- When keyways fit together, motor rotation drives the steering shaft synchronously — controlling tractor steering\n\n**How to select the right spline:**\n1. Count the number of teeth (grooves) on your tractor steering shaft\n2. Measure the shaft diameter\n3. Select spline with matching teeth count and diameter from the compatibility table\n\n**SingularXYZ provides:** Standard splines covering mainstream tractor models. If your model is not in the table, custom splines can be manufactured based on your shaft's teeth count and diameter.\n\n**Critical:** Wrong spline = motor cannot properly control steering.",
    tags: ["spline-sleeve", "sagro100", "installation", "compatibility"]
  },
  {
    id: 404, category: "agnav",
    keywords: ["SAgro100", "signal connection", "SAT", "RTK fix", "network error", "信号连接", "故障排查", "conexión de señal", "conexão de sinal"],
    question: "How to troubleshoot SAgro100 auto-steering signal connection issues?",
    answer: "**SAT shows 0:**\n- After startup always 0: Check antenna port/cable connections and replace if needed\n- During ignition: Normal battery voltage drop, will recover after startup\n- SAT becomes 0 while driving: Unstable battery voltage — add voltage regulator module\n\n**Network Error displayed (top right):**\n- Network not enabled: Restart network in Tablet Settings\n- No carrier info: Select different operator in APN, restart\n- 4G card failure: Replace SIM card\n\n**RTK shows Float (despite >20 satellites):**\n- **External radio:** Raise base antenna, increase transmit power, change frequency channel; ensure tractor is within working range\n- **4G mode:** Check network status; verify base station tracks full constellations",
    tags: ["sagro100", "signal", "troubleshooting", "rtk"]
  },
  {
    id: 405, category: "agnav",
    keywords: ["SAgro100", "auto-steering", "motor", "angle sensor", "guidance", "转向电机", "角度传感器", "motor de dirección", "motor de direção"],
    question: "How to troubleshoot SAgro100 auto-steering motor and guidance issues?",
    answer: "**Motor doesn't work:**\n- Check main interface: if Motor Firmware shows 'error' instead of version — motor needs repair\n- Check angle sensor median: 90° sensor = 60°±10°, 120° = 80°±10°, 360° = 240°±10°\n- Turn left = value decreases, turn right = increases; if opposite, adjust inversion mode\n- Motor control mode must be Speed Mode\n- Motor suddenly stopped: configuration file may be lost — try clearing cache\n\n**Guidance icon moves backwards while tractor moves forward:** Two GNSS antennas installed reversed — connect left antenna to Port 1, right to Port 2.\n\n**Steering wheel turns to one direction limit:** Antennas reversed (check above) or angle sensor setting issue.\n\n**Auto-steering stops during driving:** Manual steering override sensitivity too high — change override value to 10.",
    tags: ["sagro100", "steering", "motor", "troubleshooting"]
  },
  {
    id: 406, category: "rtk",
    keywords: ["SV100", "portable base", "field setup", "GSM mode", "radio mode", "便携基站", "SV100设置", "estación base portátil", "estação base portátil"],
    question: "How to set up SV100 as a portable base station in the field?",
    answer: "**Equipment:** SV100, SA100 antenna, external power + DC cable, SIM card (GSM), tripod + 30cm extension bar.\n\n**Installation:**\n- Attach SV100 hook to tripod; install SA100 antenna on tripod, connect via GNSS cable\n- GSM mode: install 4G antenna + insert SIM\n- Radio mode: install whip antenna on SV100\n- Connect external power via DC cable\n- For known point: use tribrach to center SA100 antenna, measure height to ARP\n\n**Configuration via mobile web (192.168.10.12, login admin/admin):**\n1. Device Config > Working Mode > Base: GET coordinates, Start Base\n2. Antenna Setting: input measured height, select SA100 type\n3. GSM mode: GSM Config > Startup 4G; then NTRIP Server > Config (Caster IP, Port, Mountpoint), Startup\n4. Radio mode: Radio > Transmit, set frequency/protocol/power, Startup\n\n**WiFi password:** 12345678 (default).",
    tags: ["sv100", "portable-base", "field-setup", "gsm"]
  },
  {
    id: 407, category: "agnav",
    keywords: ["SAgro100", "steering track", "curves", "AB line deviation", "angle sensor calibration", "轨迹偏差", "曲线修正", "desviación de línea", "desvio de linha"],
    question: "How to fix SAgro100 steering track issues — curves and deviation from AB line?",
    answer: "**Small curves in track:**\n- Verify vehicle parameters are accurate\n- Adjust Sensitivity (higher at faster speeds; default for 3-4 km/h)\n- Adjust Transmission Coefficient: increase if wheel turns too slow, decrease if too fast (range 0-320)\n- Check motor and implement are firmly mounted — no shaking\n\n**Big curves in track:**\n- Check Motor Firmware status (error = replace)\n- Verify angle sensor median and direction; reinstall if incorrect\n- Re-calibrate if system unused for long time\n- Software corruption: record params, export data, delete software folder, restart\n\n**Fixed deviation in one direction:** Enable lateral slope compensation for sloped plots; check median.\n\n**Spacing wider on one side:** Push implement toward wider side; if cannot, use simulated farm tool offset (1/4 of spacing difference).",
    tags: ["sagro100", "steering", "troubleshooting", "calibration"]
  },
  {
    id: 408, category: "rtk",
    keywords: ["RTK", "receiver comparison", "P1", "T8 Pro", "Sfaira ONE", "Y1", "接收机对比", "P1", "Y1", "comparación de receptores", "comparação de receptores"],
    question: "Which SingularXYZ RTK rover should I choose for my work?",
    answer: "**All share:** Full-constellation tracking with advanced anti-interference for strong GNSS positioning.\n\n**P1 (184 channels):** 4G, wearable/portable, data return. Best for: handheld GIS, personnel tracking, AB guidance line + boundary measurement.\n\n**T8 Pro (1408 channels):** All-in-one antenna+module+PDA. Handheld or pole-mounted. Best for: professional GIS, professional surveying with geodetic antenna, AB line measurement.\n\n**Sfaira ONE (1408 channels):** Ultra-portable, Bluetooth only, simple operation. Best for: professional surveying in areas with good 4G network, AB line measurement.\n\n**Y1 (1598 channels):** Full-featured flagship. 15km internal UHF, 4G/WiFi/Bluetooth. Best for: professional surveying in any environment (urban, forest, remote), AB line measurement, all professional surveying tasks.",
    tags: ["rtk", "comparison", "p1", "y1", "t8-pro"]
  },
  {
    id: 409, category: "rtk",
    keywords: ["PPK", "post-processing", "drone surveying", "OTF", "initialization", "动态后处理", "无人机", "post-procesamiento cinemático", "pós-processamento cinemático"],
    question: "How to conduct PPK (Post-Processing Kinematic) field survey?",
    answer: "**PPK advantage:** No real-time data link needed — raw data recorded, processed later. Supports 5Hz, 10Hz, up to 50Hz positioning — ideal for high-speed drone surveying.\n\n**Field procedure:**\n\n**Step 1 — Base station:** Set up Y1 base, start static data recording (press record button or configure in SingularSurv).\n\n**Step 2 — Rover initialization:**\n- Connect Y1 to SingularSurv, Survey > PPK > File, create new PPK file\n- Click Init, keep receiver stable until initialization completes (OTF On-The-Flying ambiguity resolution, 10-30s)\n\n**Step 3 — Survey:** Start surveying in PPK interface; each observation obtains centimeter-level 3D coordinates.\n\n**Step 4 — Export:** Download base static data and rover PPK file. Post-process using PProcessing software (supports standard RINEX format).\n\n**Tip:** PPK handles environments where RTK data link is unstable — common in UAV surveys and canopy-covered areas.",
    tags: ["ppk", "drone", "post-processing", "survey"]
  },
  {
    id: 410, category: "rtk",
    keywords: ["area calculation", "plot division", "SingularPad", "perimeter", "面积计算", "地块分割", "cálculo de área", "división de parcela", "cálculo de área", "divisão de lote"],
    question: "How to calculate and divide plot area in SingularPad software?",
    answer: "**Calculate plot area:**\n- Tools > Perimeter and Area > add boundary points via Button Library (measured points) or import known points\n- If point names follow same format, software auto-recognizes numbering sequence to generate plot\n- Perimeter and area calculated and displayed; preview map confirms correct plot boundary\n\n**Divide plot by specific size (two methods):**\n\n**1. Divide by point:** Select a boundary point, enter desired area in m² — software draws line from that point to split plot. Divide point coordinates saved in library for stakeout.\n\n**2. Divide by line:** Select a boundary line, enter desired area — software draws parallel line to split the plot.\n\n**Application:** Land parcel management, property subdivision, surveying field verification and planning.",
    tags: ["area", "plot-division", "singualrpad"]
  },

,
  {
    id: 411, category: "rtk",
    keywords: ["attitude sensor", "IMU", "gyroscope", "accelerometer", "magnetometer", "姿态传感器", "惯性测量单元", "sensor de actitud", "sensor de atitude"],
    question: "What is an attitude sensor and how does it work?",
    answer: "**Working Principle:**\n\n- Measures object orientation (angle, direction, position) in space via data fusion algorithms.\n- Two types: IMU-based (gyroscope + accelerometer using Newton's laws) and magnetometer-based (uses Earth's magnetic field).\n- IMU gyroscopes measure angular velocity around X/Y/Z axes; accelerometers measure acceleration along three axes.\n- Accuracy improved via Kalman filtering, adaptive filtering, and digital filtering techniques.\n- Used in SAgro100 auto-steering system to obtain tractor attitude and heading data.",
    tags: ["sensors", "autosteer", "gnss"]
  },
  {
    id: 412, category: "rtk",
    keywords: ["SV100", "base station", "router", "Ethernet", "NTRIP", "CORS", "基站", "路由器", "estación base", "estação base"],
    question: "How to set SV100 as a base station with a router?",
    answer: "**Setup Steps:**\n\n- Query router IP (e.g., 192.168.0.1) and configure SV100 IP within the same gateway via WiFi (192.168.10.12, admin/admin).\n- In Web UI, go to Device Configuration > Ethernet Config, set default gateway to router IP and SV100 IP to 192.168.1.X (unused).\n- Set antenna height/type under Antenna Setting, then choose Working Mode > Base, input base ID and coordinates, click Start Base.\n- Verify Position Information shows FIXEDPOS, then configure Data Transmission > NTRIP Server with caster address/port/credentials/mount point.\n- Select Diff Data format and MSM frequency, click OK. Rovers can now connect via the mount point.",
    tags: ["base-station", "cors", "setup"]
  },
  {
    id: 413, category: "rtk",
    keywords: ["static measurement", "web UI", "data recording", "RINEX", "X1", "SV100", "静态测量", "medición estática", "medição estática"],
    question: "How to conduct static measurement via web page?",
    answer: "**Static Recording via Web UI:**\n\n- Access Web UI via WiFi (X1/SV100), go to Work Management > Data Recording.\n- Click Config to set sample interval, file format, and other settings per project requirements.\n- Two recording channels available simultaneously.\n- Download static files via Work Management > File Download.\n- Filter by Record Name, File Type, File Date, click Refresh to sort, then click Download to save locally.",
    tags: ["static-survey", "data-recording", "web-ui"]
  },
  {
    id: 414, category: "rtk",
    keywords: ["geodetic height", "normal height", "orthometric height", "geoid", "ellipsoid", "大地高", "正常高", "正高", "altura geodésica", "altura ortométrica"],
    question: "What is the difference between geodetic height, normal height and orthometric height?",
    answer: "**Three Height Types:**\n\n- Geodetic height: distance from a point to the reference ellipsoid (what GNSS RTK directly measures).\n- Orthometric height: distance from a point to the geoid (also called altitude or absolute elevation).\n- Normal height: distance from a point to the quasi-geoid.\n- Relationship: Geodetic height = Orthometric height + N (geoid difference).\n- Geodetic height = Normal height + ξ (elevation anomaly). GNSS RTK gives geodetic height; use geoid model to convert to normal height.",
    tags: ["elevation", "geoid", "fundamentals"]
  },
  {
    id: 415, category: "rtk",
    keywords: ["road stakeout", "SingularPad", "XML", "road design", "broken stations", "centerlines", "道路放样", "道路设计", "replanteo de carretera", "estacas de estrada"],
    question: "How to import and design road files in SingularPad for road stakeout?",
    answer: "**Road File Preparation:**\n\n- Import road files via Survey > Stake Road, supporting XML and DXF formats.\n- XML files contain alignment, profiles, cross-sections for standardized data exchange between software.\n- For new road designs: define broken stations first (long chains = repeated pile numbers; short chains = broken pile numbers).\n- Input broken station mileages as real numbers (e.g., K1+234.000 = K1+238.000).\n- Define centerlines using line element method, intersection method, or other methods, then set vertical profiles, cross-sections, and slopes.",
    tags: ["road-stakeout", "singularpad", "design"]
  },
  {
    id: 416, category: "agnav",
    keywords: ["CAN protocol", "Controller Area Network", "autosteer", "SAgro", "data transmission", "CAN总线", "自动转向", "protocolo CAN", "protocolo CAN agrícola"],
    question: "What is CAN protocol and how does it work in agricultural autosteer systems?",
    answer: "**CAN Protocol for Autosteer:**\n\n- Serial communication protocol for real-time applications, supporting up to 1Mb/s transmission with 11-bit addressing.\n- Broadcast principle: one node sends data received by all nodes; priority based on identifier (most zeros = highest priority).\n- Uses differential signals (CAN_HIGH/CAN_LOW) with 120-ohm terminal resistors at both ends for impedance matching.\n- Bit-by-bit arbitration ensures orderly data transmission when multiple nodes compete for bus access.\n- Used in SAgro-series for real-time tractor communication, enabling ±2.5cm auto-steering accuracy.",
    tags: ["can-protocol", "autosteer", "communication"]
  },
  {
    id: 417, category: "rtk",
    keywords: ["base station", "coordinate shift", "grid shift", "calibrate point", "offsets", "基站偏移", "坐标校正", "cambio de base", "ajuste de coordenadas"],
    question: "How to adjust project coordinates when the base station changes?",
    answer: "**Two Grid Shift Methods:**\n\n- \"Add Offsets to Points at Specified Period\": applies base offset to already-surveyed points within a specific time period.\n- \"Calibrate Point\": applies offset to points about to be surveyed, NOT to previously saved points.\n- Use \"Add Offsets\" when static post-processing reveals known point coordinates after RTK surveying has started.\n- The applied offset is visible in point details and can be cleared/reapplied repeatedly.\n- Points surveyed before and after using \"Calibrate Point\" appear as distinct periods in the offset function.",
    tags: ["coordinate-shift", "base-station", "singularpad"]
  },
  {
    id: 418, category: "rtk",
    keywords: ["geoid model", "EGM2008", "EGM96", "elevation conversion", "normal height", "大地水准面模型", "高程转换", "modelo geoidal", "modelo geoide"],
    question: "What is a geoid model and how to use it in RTK surveying?",
    answer: "**Geoid Model Usage:**\n\n- A leveling model that converts geodetic height (from GNSS) to normal height by accounting for elevation anomalies.\n- Common models: EGM84, EGM96, EGM2008, EGM2020, built from global surface gravity data.\n- In SingularPad: import geoid model file when creating a new project or via Project > Coordinate System.\n- For large global models: use professional software to extract country/area-specific portions.\n- Alternative method: joint measurement of known GPS points for post-processing adjustment, but more time-consuming and expensive.",
    tags: ["geoid-model", "elevation", "singularpad"]
  },
  {
    id: 419, category: "rtk",
    keywords: ["road stakeout", "SingularPad", "stakeout modes", "point stakeout", "peg", "道路放样", "放样模式", "replanteo", "estacas"],
    question: "How to conduct road stakeout using SingularPad software?",
    answer: "**Stakeout Modes in SingularPad:**\n\n- Stake by line (default): guides vertically towards the road, follow the route to stake out.\n- Stake by point: input station and offset parameters before beginning to calculate the next stake points.\n- Add peg: calculate a single point by station and offset (positive = left side, negative = right side).\n- Recalculate: generate points at specified intervals and offset distances automatically.\n- Also supports cross-section measurement, auxiliary profile stakeout, and stake road by cross-section modes.",
    tags: ["road-stakeout", "singularpad", "modes"]
  },
  {
    id: 420, category: "rtk",
    keywords: ["heading", "pitch", "roll", "NMEA", "dual antenna", "orientation", "航向角", "姿态数据", "rumbo", "orientação"],
    question: "What is heading data and how is it used in GNSS applications?",
    answer: "**Heading Data Explained:**\n\n- Three orientation parameters: pitch (Y-axis rotation), heading (Z-axis rotation), and roll (X-axis rotation).\n- NMEA #HEADINGA log provides solution status, position type, baseline length, heading (0-360°), pitch (-90 to 90°), and standard deviations.\n- Heading calculated using dual-antenna receiver: compares two antenna positions to compute angle from True North.\n- Longer baseline distance between antennas yields higher heading accuracy.\n- SV100 DUAL provides reliable heading information via WebUI; stabilizes after initial convergence period.",
    tags: ["heading", "orientation", "dual-antenna"]
  },
  {
    id: 421, category: "rtk",
    keywords: ["NMEA", "GPGLL", "GPZDA", "GPGSV", "GPRMC", "RTK", "导航电文", "mensajes NMEA", "mensagens NMEA"],
    question: "What are the common NMEA messages used in RTK devices?",
    answer: "**Key NMEA-0183 Messages:**\n\n- $GPGLL: Geographic position (time, latitude, longitude, data status).\n- $GPZDA: UTC time and date information for timing applications.\n- $GPGSV: Satellite information (PRN numbers, elevation, azimuth, SNR values).\n- $GPRMC: Time, date, speed over ground, and true heading for navigation.\n- Header prefix varies by constellation: GP=GPS, GL=GLONASS, GA=Galileo, GB=BeiDou, GN=multi-system.\n- Each message ends with a checksum field for data integrity verification.",
    tags: ["nmea", "messages", "rtk"]
  },
  {
    id: 422, category: "rtk",
    keywords: ["coordinate calculation", "forward calculation", "inverse calculation", "azimuth", "SingularPad", "坐标正算", "坐标反算", "cálculo de coordenadas", "cálculo de coordenadas"],
    question: "How do coordinate forward and inverse calculations work in surveying?",
    answer: "**Calculation Methods:**\n\n- Forward: given point A (XA, YA), distance L, and azimuth α, calculate point B via XB = XA + L*cos(α), YB = YA + L*sin(α).\n- Inverse: given points A and B, calculate azimuth by first finding quadrant angle R = arctan(|yB-yA|/|xB-xA|).\n- Determine α based on quadrant: 1st quadrant α=R, 2nd α=180°-R, 3rd α=180°+R, 4th α=360°-R.\n- Distance L = sqrt(Δx² + Δy²).\n- SingularPad automates both calculations - input coordinates directly for instant, error-free results.",
    tags: ["coordinate-calculation", "azimuth", "singularpad"]
  },
  {
    id: 423, category: "rtk",
    keywords: ["RTK radio", "serial baud rate", "air baud rate", "radio channel", "frequency", "电台模式", "波特率", "modo radio", "taxa de transmissão"],
    question: "How to set up RTK radio mode correctly?",
    answer: "**Radio Mode Configuration:**\n\n- Serial port baud rate: transmission rate between RTK device and external radio via 7-pin cable; recommend 19200+ for BDS data.\n- Air baud rate: wireless transmission rate (higher = faster but shorter range); Lora options: 500-18000 bps, normal: 9600/19200 bps.\n- Base and rover must use identical radio protocol and air baud rate for effective communication.\n- Lora radios are NOT compatible with normal radios; SDL1 external radio defaults to 38400 baud rate.\n- Channels 1-9 have fixed frequencies (454.05-463.05 MHz); custom channels require matching frequencies on base and rover.",
    tags: ["radio-mode", "rtk", "configuration"]
  },
  {
    id: 424, category: "rtk",
    keywords: ["SingularConverter", "RINEX", "static data", "XYZ format", "data conversion", "数据转换", "conversión de datos", "conversão de dados"],
    question: "How to convert XYZ binary static data to RINEX format using SingularConverter?",
    answer: "**SingularConverter Steps:**\n\n- Launch software and click \"Select File\" to choose the .xyz binary format file.\n- Click folder icon to choose destination for the converted RINEX file.\n- Click \"Set\" to verify and modify station information (antenna type, measure type), then click Confirm.\n- Click \"Convert\" to run the conversion process.\n- Important: avoid non-English characters in both input and output file paths (may result in empty output). Locate converted RINEX file in the chosen save path.",
    tags: ["singularconverter", "rinex", "data-conversion"]
  },
  {
    id: 425, category: "rtk",
    keywords: ["datum", "geodetic datum", "WGS84", "ITRF", "reference ellipsoid", "大地基准面", "参考椭球", "datum geodésico", "datum geodésico"],
    question: "What is a geodetic datum and why is it important?",
    answer: "**Datum Fundamentals:**\n\n- A geodetic datum is the reference point (\"zero\" point) against which all coordinates (latitude, longitude, height) are measured.\n- Global datums (WGS84, ITRF) cover the entire Earth surface, fixed to Earth's center; undergo periodic updates.\n- Challenge with global datums: tectonic plate movement causes subtle coordinate shifts over time.\n- SingularPad supports both WGS and ITRF datums.\n- Solution to the mobility problem: local datums (see Part 2), which are fixed to specific physical locations on the Earth's surface.",
    tags: ["datum", "fundamentals", "wgs84"]
  },
  {
    id: 426, category: "agnav",
    keywords: ["autosteer", "SAgro100", "SAgro150", "SAgro200", "precision farming", "自动转向", "精准农业", "piloto automático", "direção automática"],
    question: "How to choose the right SingularXYZ autosteer system?",
    answer: "**SAgro-Series Comparison:**\n\n- SAgro100: dual-antenna, ultra-low speed 0.15km/h, >45min installation, highest precision but complex dual-antenna & crossbar setup.\n- SAgro150: single-antenna, min speed 0.5km/h, ~35min installation, field-validated performance, fewer components.\n- SAgro200: smart antenna all-in-one design (Radio/4G/GNSS/BT), >30min installation, easiest setup, caters to mainstream market.\n- All offer ±2.5cm accuracy with full-constellation GNSS, support straight line/curve/path/U-turn/pivot modes for ploughing, planting, spraying, harvesting.\n- Universal compatibility via diverse spline sleeves; 20+ languages supported.",
    tags: ["autosteer", "comparison", "sagro"]
  },
  {
    id: 427, category: "rtk",
    keywords: ["local datum", "coordinate system", "SingularPad", "reference frame", "地方基准面", "坐标系统", "datum local", "datum local"],
    question: "What are local datums and how do they differ from global datums?",
    answer: "**Local Datums Explained:**\n\n- Local datums are reference planes fixed to specific physical objects or locations, ensuring uniform object movement within a region.\n- They solve the coordinate shift problem caused by tectonic plate movement affecting global datums (WGS84, ITRF).\n- Many countries establish their own local datums for national surveying and mapping needs.\n- SingularPad provides country-specific local datums and allows custom local datum creation by entering relevant parameters.\n- Essential for precision and accuracy in surveying projects within a defined geographic region.",
    tags: ["local-datum", "coordinate-system", "singularpad"]
  },
  {
    id: 428, category: "rtk",
    keywords: ["coordinate system", "share code", "QR code", "SingularPad", "parameters", "坐标系统", "参数共享", "sistema de coordenadas", "compartilhamento de parâmetros"],
    question: "How to share coordinate system parameters between surveyors in SingularPad?",
    answer: "**Sharing Methods in SingularPad:**\n\n- Configure 7 parameter categories: Ellipsoid, ITRF, Projections, Datum, Horizon Adjustment, Vertical Adjustment, Local Offsets.\n- After configuration, click \"Share\" to generate a share code and QR code.\n- Colleagues import via: \"+\" button > \"Share Code\" (enter code) or \"Scan QR Code\" (scan the QR).\n- Click \"Save & Apply\" to automatically save and apply parameters to the current project.\n- Alternative: save and export parameters as a .sys file, share via Bluetooth or cable.",
    tags: ["coordinate-system", "sharing", "singularpad"]
  },
  {
    id: 429, category: "rtk",
    keywords: ["Galileo HAS", "PPP", "high accuracy", "satellite correction", "E6-B", "伽利略高精度服务", "servicio de alta precisión", "serviço de alta precisão"],
    question: "What is Galileo High Accuracy Service (HAS)?",
    answer: "**Galileo HAS Overview:**\n\n- Free PPP (Precise Point Positioning) correction service transmitted via Galileo E6-B signal and terrestrial internet.\n- Two service levels: Level 1 (global, <300s convergence) and Level 2 (European Coverage Area with atmospheric corrections, <100s convergence).\n- Horizontal accuracy <20cm, vertical accuracy <40cm, both at 95% confidence.\n- Supports Galileo and GPS constellations on E1/E5a/E5b/E6 and L1/L5/L2C frequencies.\n- No base station or CORS needed - cost-effective for autonomous driving, drones, precision agriculture, and GIS applications.",
    tags: ["galileo-has", "ppp", "corrections"]
  },
  {
    id: 430, category: "rtk",
    keywords: ["Galileo HAS", "activation", "PPP", "SingularPad", "autosteer", "伽利略高精度服务", "activación HAS", "ativação HAS"],
    question: "How to activate and use Galileo HAS with SingularXYZ products?",
    answer: "**HAS Activation Steps:**\n\n- First verify your device firmware supports HAS (contact support@singularxyz.com to check).\n- Connect device to SingularPad, go to Device > Communication > Debug, input the activation command (obtain from support).\n- Wait several minutes for GNSS device to converge and achieve HAS-level accuracy.\n- For SAgro autosteer kits: recommend contacting support team for remote activation for convenience.\n- HAS provides ~20cm horizontal accuracy - suitable for GIS, vehicle guidance, agricultural spraying; use RTK mode for centimeter-level projects.",
    tags: ["galileo-has", "activation", "singularpad"]
  },
  {
    id: 431, category: "rtk",
    keywords: ["IMU compass", "stakeout", "SingularPad", "X1 receiver", "tilt", "惯性导航", "放样", "brújula IMU", "bússola IMU"],
    question: "How to use the receiver IMU as a compass for stakeout?",
    answer: "**IMU Compass Stakeout Steps:**\n\n- Ensure X1 receiver and SingularPad software are updated to latest versions.\n- Turn on and initialize the IMU function when RTK is in fixed status.\n- Go to stakeout interface > Settings > Stakeout Setting, select \"Device panel azimuth\" as stakeout reference.\n- Make the receiver front panel face the forward direction, then follow direction prompts on the map.\n- This bypasses a failing controller compass, enabling reliable stakeout navigation even in challenging environments.",
    tags: ["imu", "stakeout", "singularpad"]
  },
  {
    id: 432, category: "rtk",
    keywords: ["GNSS receiver", "comparison", "product lineup", "X1", "Sfaira ONE", "Y1", "接收机选型", "selección de receptor", "seleção de receptor"],
    question: "How to choose the right SingularXYZ GNSS receiver for surveying?",
    answer: "**Receiver Selection Guide:**\n\n- Compare key features and application areas across different SingularXYZ models (X1, Sfaira ONE, Y1, etc.).\n- Newer product models introduce enhanced capabilities over previous generations.\n- Consider accuracy requirements, IMU tilt functionality, form factor, connectivity options, and budget.\n- Reference the earlier blog \"Which RTK Rover is Right for you?\" for detailed feature-by-feature comparisons.\n- Contact support for personalized recommendations based on your specific project requirements.",
    tags: ["receiver", "comparison", "selection"]
  },
  {
    id: 433, category: "rtk",
    keywords: ["GIS", "attributes", "code library", "feature coding", "SingularPad", "属性编码", "要素编码", "atributos GIS", "atributos de código"],
    question: "How to add attributes to measured features during surveys in SingularPad?",
    answer: "**Feature Attribute Setup:**\n\n- Go to Code Library Manager, create new code list, then Add individual codes with remarks, code name, and group name.\n- Add Point Attributes: specify name, remark, and field type (integer, double, text, drop-down menu, checkbox, or date-time).\n- Drop-down menus require predefining options; checkboxes appear for binary selection.\n- Apply the code list to your project, then in point survey select the code and input corresponding attribute values.\n- Attributes enable subsequent GIS data analysis, thematic map creation, and detailed feature documentation.",
    tags: ["gis", "attributes", "singularpad"]
  },
  {
    id: 434, category: "rtk",
    keywords: ["cloud server", "CORS", "SingularCaster", "AWS", "Alibaba Cloud", "云服务器", "servidor en la nube", "servidor em nuvem"],
    question: "How to choose a cloud server for SingularCaster CORS software?",
    answer: "**Cloud Server Selection:**\n\n- Providers: AWS, Alibaba Cloud, Azure, Huawei Cloud, Google Cloud, Oracle Cloud - compare prices for desired configuration.\n- Region: choose closest to your user base for lowest network latency and fastest access speed.\n- Recommended config: dual-core 1.7GHz+ CPU, Windows Server 2019+ 64-bit, 6GB+ RAM, 40GB+ SSD (separate non-system disk for software).\n- 1M bandwidth supports simultaneous data transmission from about 35 sites.\n- Request a free trial of SingularCaster before purchasing the cloud server to test performance first.",
    tags: ["cloud-server", "singularcaster", "cors"]
  },
  {
    id: 435, category: "rtk",
    keywords: ["antenna height", "base station", "pole height", "slant height", "SingularPad", "天线高", "基站设置", "altura de antena", "altura da antena"],
    question: "How to measure and set the height of an RTK base station?",
    answer: "**Antenna Height Measurement & Configuration:**\n\n- Two measurement methods: pole height (vertical distance from receiver bottom to ground point) and slant height (from side reference point to ground, easier to operate).\n- In SingularPad Base mode: select \"Input Base Coordinates\" as Start Up Mode, enter ground control point coordinates.\n- Choose measurement method (Pole/Slant) and input measured height - software auto-calculates based on device antenna parameters.\n- For non-SingularXYZ receivers: manually input antenna parameters in Device Information first.\n- For static measurement: view calculated antenna height via SingularPad and input into post-processing software.",
    tags: ["antenna-height", "base-station", "singularpad"]
  },
  {
    id: 436, category: "rtk",
    keywords: ["CORS", "VRS", "NTRIP", "reference station", "RTK network", "连续运行参考站", "estación de referencia", "estação de referência"],
    question: "What is CORS and how does a CORS network work?",
    answer: "**CORS (Continuously Operating Reference Station) Guide:**\n\n- A network of GNSS reference stations transmitting raw data and RTK corrections to a data processing center for users.\n- VRS (Virtual Reference Station): generates a virtual base beside the rover using 3+ stations, shortening baseline and improving RTK accuracy.\n- NEAREST: automatically selects correction data from the closest base station to the rover.\n- Advantages for users: convenience (no base setup), cost-effective, standardized coordinates, higher accuracy via VRS.\n- For CORS providers: expanded user base, increased profitability from CORS accounts and equipment sales.",
    tags: ["cors", "vrs", "network"]
  },
  {
    id: 437, category: "rtk",
    keywords: ["static recording", "RTK base", "SingularPad", "web page", "data download", "静态记录", "基站记录", "grabación estática", "gravação estática"],
    question: "How to record static data simultaneously while using receiver as RTK base?",
    answer: "**Dual Recording Methods:**\n\n- SingularPad: connect via Bluetooth, go to Device > Base, enable static recording (default: 1 hour, Rinex3.02) then continue RTK base setup.\n- Web page (X1): connect to receiver WiFi (password: 12345678), access 192.168.10.12 (admin/admin), go to Data Recording, configure interval/format.\n- Download via USB: connect receiver to PC with Type-C cable and copy data directly.\n- Download via Web page: connect to WiFi, go to File Download, filter by name/type/date, click Refresh then Download.\n- Meets project requirements for accuracy verification while RTK base is operating.",
    tags: ["static-recording", "rtk-base", "singularpad"]
  },
  {
    id: 438, category: "rtk",
    keywords: ["AR", "augmented reality", "stakeout", "SingularPad", "camera overlay", "增强现实", "放样", "realidad aumentada", "realidade aumentada"],
    question: "How does AR (Augmented Reality) integration improve stakeout in SingularPad?",
    answer: "**AR Stakeout Features:**\n\n- AR merges virtual information with real-world camera view for intuitive stakeout navigation.\n- Core technologies: 3D registration, virtual-reality fusion display, and human-computer interaction via camera and sensors.\n- Access via Survey > Point Stakeout > select target points > click AR icon to enter AR interface.\n- Displays rear camera image as background with virtual stakeout point position overlaid.\n- Retains standard prompts (front/rear/left/right/E/W/S) alongside the AR visualization for comprehensive guidance.",
    tags: ["ar", "stakeout", "singularpad"]
  },
  {
    id: 439, category: "rtk",
    keywords: ["CORS gaps", "SingularXYZ Caster", "base station", "X1", "Sfaira ONE", "NTRIP", "网络RTK", "cobertura CORS", "cobertura CORS"],
    question: "How to overcome CORS coverage gaps using SingularXYZ Caster?",
    answer: "**Caster-Based RTK Without CORS Account:**\n\n- Set up X1 as base: insert SIM, configure GSM APN via WebUI (192.168.10.12, admin/admin), set antenna height, start base mode.\n- Upload correction data via NTRIP Server to SingularXYZ Caster: IP 47.103.96.216, Port 8992, customize user/password/mount point.\n- On Sfaira ONE rover: set Data Link to Phone Internet, enter same caster credentials, Get mount point list, select and Start.\n- When real-time differential data is received, click Apply to begin centimeter-level RTK surveying.\n- Cost-effective solution for regions without CORS coverage or with expensive CORS accounts.",
    tags: ["caster", "cors-gaps", "rtk"]
  },
  {
    id: 440, category: "rtk",
    keywords: ["line survey", "SingularPad", "linework", "editing", "drawing tools", "线测量", "线编辑", "levantamento de linha", "levantamento de linha"],
    question: "How to create and edit lines in SingularPad?",
    answer: "**Line Creation & Editing:**\n\n- Select \"line\" in drawing tools to create lines using surveyed points or points ready to survey.\n- Real-time feedback on length from starting point during line creation.\n- Seamlessly switch between multiple lines at any time during surveying.\n- Edit controls: Cross Mark (delete line), Check Mark (finish line creation), Return Mark (change end point).\n- Can continue from where you left off on an existing line: from start or pick up from any point in database.",
    tags: ["line-survey", "singularpad", "linework"]
  },
  {
    id: 441, category: "rtk",
    keywords: ["TS1000", "total station", "language settings", "NEZ", "ENZ", "instrument constant", "全站仪", "基本设置", "estación total", "estação total"],
    question: "How to modify basic settings on the TS1000 total station?",
    answer: "**TS1000 Basic Settings:**\n\n- Language: power off, press F2+POWER simultaneously, navigate F4(P\) > F1(LANGUAGE), select language with F1/F2, press F4(ENTER), restart.\n- NEZ/ENZ display: power off, press F2+POWER, select F2(MODE SET), scroll F4(P\) twice, F1(NEZ/ENZ), choose display, F4(ENTER), restart.\n- Instrument constant: power off, press F1+POWER, select F2(INST. CONSTANT), use F1/F2 to navigate and modify constants, press F4(ENT).\n- All setting changes require restarting the total station to take effect.",
    tags: ["ts1000", "total-station", "settings"]
  },
  {
    id: 442, category: "rtk",
    keywords: ["base map", "Google map", "OpenStreetMap", "WMS", "CAD", "map calibration", "底图", "地图校准", "mapa base", "calibração de mapa"],
    question: "How to set up and calibrate base maps in SingularPad?",
    answer: "**Base Map Setup & Calibration:**\n\n- Built-in maps: Google standard (urban/road), Google satellite (forest/field), OpenStreetMap (community/rural) - select via map icon in survey interface.\n- WMS Map: click map icon > WMS Map Setting > Add, enter WMS URL, select layers, save as new map.\n- CAD base map: go to Project > Layers Settings, import .dxf/.dwg files, then access via Survey > CAD Stakeout.\n- Map calibration: map icon > Map Calibration, select correct map point and measure same point with receiver, apply the displayed offset.\n- Calibration corrects for reference differences between the map display and actual receiver position.",
    tags: ["base-map", "calibration", "singularpad"]
  },
  {
    id: 443, category: "agnav",
    keywords: ["autosteer compatibility", "tractor types", "SAgro", "precision farming", "自动转向兼容性", "compatibilidad", "compatibilidade"],
    question: "What tractor types and farming tasks are compatible with SAgro-Series autosteer kits?",
    answer: "**SAgro-Series Compatibility:**\n\n- Tractor types: front/rear wheel drive, articulated, crawler, compact utility tractors.\n- Farming tasks: plowing, cultivating, planting, spraying, fertilizing, harvesting.\n- Compatible brands: John Deere, CLAAS, Fendt, CASE IH, Deutz-Fahr, New Holland, KUBOTA, Yanmar, AGCO, Foton.\n- Real user cases: SAgro200 for cultivating/planting in Europe, SAgro150 for sugarcane fertilizing/ridging, SAgro100 for garlic/rice/corn/potato planting.\n- Contact support for unlisted tractor models or specific compatibility questions.",
    tags: ["autosteer", "compatibility", "sagro"]
  },
  {
    id: 444, category: "rtk",
    keywords: ["line stakeout", "SingularPad", "mileage", "station distance", "offset", "线放样", "里程放样", "replanteo de línea", "estacas de linha"],
    question: "How to perform line stakeout with different methods in SingularPad?",
    answer: "**Line Stakeout Methods:**\n\n- Stakeout by Mileage: enter distance from start point to stake any node on the line directly.\n- Stakeout by Station Distance: enter interval distance (e.g., 5m) to stake at regular spacing along the line.\n- Stakeout by Segment: enter number of segments to divide the line into equal parts for staking.\n- Stakeout with Offset: input offset value to generate a parallel auxiliary line at the specified perpendicular distance.\n- Offset mode also supports distance and segment-based staking relative to the auxiliary line.",
    tags: ["line-stakeout", "singularpad", "modes"]
  },
  {
    id: 445, category: "rtk",
    keywords: ["azimuth", "bearing", "direction", "angle measurement", "true north", "方位角", "方向角", "acimut", "rumo"],
    question: "What is the difference between azimuth and bearing in land surveying?",
    answer: "**Azimuth vs Bearing:**\n\n- Azimuth: measured 0-360 degrees clockwise from true north; uses numerical values only.\n- Bearing: measured 0-90 degrees, clockwise or anticlockwise; uses alphanumeric values (e.g., N45°E).\n- Azimuth references true north as baseline (surveying/mapping start from north; astronomy/military from south).\n- Bearing is based on relative direction between two points; can start from south or north.\n- Azimuth used in high-precision applications (surveying, mapping); bearing is more common in daily navigation.",
    tags: ["azimuth", "bearing", "fundamentals"]
  },
  {
    id: 446, category: "agnav",
    keywords: ["U-turn", "autosteer", "SAgro", "tractor turning", "path alignment", "自动调头", "vuelta en U", "retorno automático"],
    question: "How to use the U-Turn function in SAgro-Series autosteer kits?",
    answer: "**U-Turn Setup & Parameters:**\n\n- Enable: System Settings > Auto-Steering > Settings, ensure U-TURN function status shows \"Already opened\".\n- Turning Radius: set according to tractor size (too small = cannot complete; too large = path deviation). Experiment to find optimum.\n- Distance from Border: set to 0 if plot has no defined boundary for proper turn positioning.\n- U-TURN Interval: sets number of empty lines between paths (1 = one empty line, 2 = two empty lines); adjust for crop spacing.\n- Properly calibrated, U-Turn allows tractors to automatically turn and align with the next path line without manual intervention.",
    tags: ["u-turn", "autosteer", "sagro"]
  },
  {
    id: 447, category: "agnav",
    keywords: ["demo mode", "simulation", "SAgro", "autosteer", "training", "演示模式", "modo demo", "modo de demonstração"],
    question: "How to activate demo mode on SAgro-Series autosteer and guidance systems?",
    answer: "**Demo Mode Activation:**\n\n- For Autosteer systems: go to System > Satellite > Receiver, select \"Simulate demo\"; System > Vehicle > Sensor Type, select \"Encoder\".\n- System automatically restarts into demo mode; set AB line and click start autosteer in software.\n- For Guidance systems: contact support for simulation .txt file, copy to tablet root directory, reopen guidance software.\n- Useful for trade shows, training sessions, system testing, remote demonstrations, and user familiarization.\n- No tractor installation needed in demo mode.",
    tags: ["demo-mode", "simulation", "sagro"]
  },
  {
    id: 448, category: "rtk",
    keywords: ["DDNS", "SV100", "remote management", "NO-IP", "port forwarding", "动态域名", "gestión remota", "gerenciamento remoto"],
    question: "How to set up DDNS for remote management of SV100 CORS stations?",
    answer: "**DDNS Setup with NO-IP:**\n\n- Create hostname on noip.com (select ddns.net domain, DNS Host (A) record type, enter router IPv4 address).\n- Configure SV100 Ethernet settings: check router DNS server, set SV100 IP within same gateway via WiFi (192.168.10.12).\n- Map SV100 internal port to router external port in router's web interface (do NOT use port 80 for web interface).\n- Create DDNS key in NO-IP (save the one-time password), enter User/Password/Domain in SV100 web page, click Startup.\n- Access remotely via: hostname.ddns.net:externalport.",
    tags: ["ddns", "sv100", "remote-management"]
  },
  {
    id: 449, category: "rtk",
    keywords: ["drone", "DJI", "base station", "X1", "NTRIP caster", "WiFi", "无人机基站", "estación base drone", "estação base drone"],
    question: "How to set up a base station for drone RTK operations using X1 receiver's internal caster?",
    answer: "**Drone RTK Base Setup with X1:**\n\n- Connect PDA to X1 WiFi (SN name, password 12345678), access WebUI at 192.168.10.12 (admin/admin).\n- Start base: Device Configuration > Working Mode > GET > Start Base.\n- Configure NTRIP Caster: set Port/User/Password (any values), check Startup, click OK.\n- Configure NTRIP Server: address 192.168.10.12, same Port/User/Password, any Mount Point, check Startup, click OK.\n- On DJI controller: connect to X1 WiFi, set RTK Service Type to Custom Network RTK, input same host/port/credentials, Save.",
    tags: ["drone", "dji", "rtk-base", "x1"]
  },
  {
    id: 450, category: "rtk",
    keywords: ["TS1000", "total station", "USB", "data export", "data import", "GTS", "SSS", "全站仪数据", "exportación de datos", "exportação de dados"],
    question: "How to import and export data on TS1000 total station via USB?",
    answer: "**TS1000 USB Data Transfer:**\n\n- Supported formats: GTS (standard Topcon format) and SSS (point name, N, E, Z, code).\n- Export: MENU > F3(MEMORY MGR.) > F4(P\) > F3(THUMB DRIVE) > F1(EXPORT) > select Meas/Coord data > select project > select format > F3(YES).\n- Import: same path to THUMB DRIVE > F2(IMPORT) > select file from USB > F4(IMPT) > select target project via F2(LIST) > F4(ENTER) > F3(YES).\n- Use up/down arrow keys to navigate file selections.\n- Check exported data on USB stick after completion.",
    tags: ["ts1000", "data-transfer", "usb"]
  },
  {
    id: 451, category: "rtk",
    keywords: ["Sfaira ONE", "test report", "accuracy", "tilt compensation", "environments", "精度测试", "prueba de rendimiento", "teste de desempenho"],
    question: "How does the Sfaira ONE GNSS receiver perform in different environments?",
    answer: "**Sfaira ONE Performance Results (Tested in Finland):**\n\n- Open areas: ±1cm without tilt, ±4cm with 15° tilt; very low standard deviation, highly reliable.\n- Partially obstructed (trees, buildings): <1cm without tilt, <±4cm with tilt; consistent precision maintained.\n- Heavily obstructed: ±2cm without tilt, ±4cm horizontal and within 10cm vertical with tilt.\n- Tilt compensation works effectively across all test environments.\n- Test used ETRS-TM35FIN/ETRSGK26 coordinate systems with FIN2005N00 geoid file.",
    tags: ["sfaira-one", "performance", "test-report"]
  },
  {
    id: 452, category: "rtk",
    keywords: ["RTK accuracy", "RMS", "DOP", "covariance matrix", "ENU", "精度评估", "precisión RTK", "precisão RTK"],
    question: "How to evaluate RTK accuracy in different dimensions?",
    answer: "**RTK Accuracy Metrics:**\n\n- One-dimensional: standard deviations from covariance matrix diagonal (Pxx, Pyy, Pzz) transformed to ENU coordinates.\n- Bidimensional (horizontal): combined East and North error analysis.\n- Three-dimensional: closely related to DOP indicators (PDOP, HDOP, VDOP).\n- Vertical RMS: sqrt(sum(ΔUi²)/n) - root mean square of vertical errors.\n- Horizontal RMS: sqrt(sum(ΔEi² + ΔNi²)/n); 3D RMS: sqrt(sum(ΔEi² + ΔNi² + ΔUi²)/n).",
    tags: ["accuracy", "rms", "dop"]
  },
  {
    id: 453, category: "rtk",
    keywords: ["base station", "RTK setup", "environment", "known point", "antenna height", "基站设置", "estación base", "configuração de base"],
    question: "What are the key tips for setting up a reliable RTK base station?",
    answer: "**Reliable Base Station Setup Tips:**\n\n- Environment: choose clear outdoor sky view, elevated position; avoid buildings, trees, vehicles, high-power radar, TV/cellular towers, power lines.\n- Known point: use \"Assigned Base Coordinates\" mode in SingularPad with known point coordinates for consistent reference.\n- No known point: perform point calibration each time you start the base to adjust coordinates.\n- Set accurate antenna height using pole height or slant height method.\n- Proper environment and known point calibration ensure consistent coordinate references across all survey points.",
    tags: ["base-station", "setup", "tips"]
  },
  {
    id: 454, category: "rtk",
    keywords: ["APN", "SIM card", "GSM", "4G", "internet", "SingularPad", "接入点", "punto de acceso", "ponto de acesso"],
    question: "What is APN and how to configure it in SingularXYZ devices?",
    answer: "**APN Setup Guide:**\n\n- APN (Access Point Name): gateway between mobile network and internet, determines IP assignment, security, and data routing.\n- For SV100: access WebUI via WiFi > Device Configuration > GSM Config, enter APN per SIM card type (provided by network operator).\n- Username and Password from SIM provider; Authentication Type: select \"None\" in most cases (or PAP/CHAP per provider requirements).\n- For X1 smart antennas: configure APN via SingularPad Bluetooth connection > Internal GSM/Device Internet mode.\n- Correct APN configuration ensures reliable 4G connectivity for RTK differential data transmission.",
    tags: ["apn", "gsm", "configuration"]
  },
  {
    id: 455, category: "rtk",
    keywords: ["TS1000", "total station", "data conversion", "CSV", "DXF", "TS-Link", "数据格式转换", "conversión de formato", "conversão de formato"],
    question: "How to convert TS1000 total station data to CSV and DXF formats?",
    answer: "**Data Format Conversion via TS-Link:**\n\n- Export coordinate data from TS1000: .XYZ (GTS format) or .PTS (SSS format) via USB.\n- Open TS-Link conversion software and import the exported coordinate data files.\n- Click File > Export, select desired format (CSV, DXF, and more), choose storage path, click Save.\n- Note: TS-Link supports coordinate data conversion only, not raw measurement data.\n- Contact technical team for TS-Link software access.",
    tags: ["ts1000", "data-conversion", "ts-link"]
  },
  {
    id: 456, category: "agnav",
    keywords: ["NMEA", "autosteer", "SAgro200", "GPGGA", "data output", "导航电文输出", "salida NMEA", "saída NMEA"],
    question: "How to output NMEA messages from SAgro-Series autosteer kits?",
    answer: "**NMEA Output Setup for SAgro200:**\n\n- Configure receiver type as \"SAgro200\" and sensor as \"Dual Gyro Sensor\".\n- Navigate: Satellite > Data Output > NMEA-0183 Output interface.\n- Select desired NMEA messages (GPGGA for position, plus speed and attitude data) and set output frequency.\n- Messages output via COM port of receiver cable.\n- Use RS232-to-USB converter to collect NMEA messages on a laptop for trajectory recording and field data analysis.",
    tags: ["nmea", "autosteer", "sagro200"]
  },
  {
    id: 457, category: "rtk",
    keywords: ["antenna phase center", "APC", "ARP", "PCO", "PCV", "GNSS", "天线相位中心", "centro de fase", "centro de fase"],
    question: "What is the antenna phase center and how is it calculated?",
    answer: "**Antenna Phase Center (APC) Explained:**\n\n- APC: the electrical center of the antenna's radiation field - the theoretical point from which signals are received.\n- ARP (Antenna Reference Point): intersection of receiver bottom and central antenna axis.\n- For X1-series: distance from ARP to APC = H + HL1 = 0.068m.\n- For Y1: distance from ARP to APC = H + (HL1 + HL2)/2 = 0.0634m.\n- To get measured point coordinates: add range pole height to the ARP position after converting from APC.",
    tags: ["antenna-phase-center", "apc", "gnss"]
  },
  {
    id: 458, category: "rtk",
    keywords: ["TS1000", "total station", "station occupation", "back-sight", "resection", "设站", "后方交会", "ocupación de estación", "ocupação de estação"],
    question: "What are the different station occupation methods for TS1000 total station?",
    answer: "**Station Occupation Methods:**\n\n- Set Back-Sight by Coordinate: input occupation and back-sight point coordinates, aim at target to calculate position using coordinate forward calculation.\n- Set Back-Sight by Angle: input occupation point coordinates and horizontal angle between OB and Y-axis.\n- Resection: calculate occupation point from two known back-sight points (A, B) using measured distances (L1, L2).\n- Side Shot: establish a transfer station as new occupation point when stakeout and occupation points are not inter-visible.\n- All methods use the Gauss plane rectangular coordinate system.",
    tags: ["ts1000", "station-occupation", "total-station"]
  },
  {
    id: 459, category: "rtk",
    keywords: ["personal server", "SingularCaster", "CORS", "port forwarding", "router", "个人服务器", "servidor personal", "servidor pessoal"],
    question: "How to build a personal server for SingularCaster CORS software?",
    answer: "**Personal Server Setup Steps:**\n\n- Requirements: capable PC for extended runtime, router with port forwarding support and public IP address.\n- Connect PC to router, access router config interface, navigate to port forwarding section.\n- Map router public IP to PC internal IP for specified ports to allow external device communication.\n- Add inbound rules to PC firewall for the forwarded ports.\n- Install SingularCaster per user manual (contact support for manual and remote assistance); cost-effective alternative to cloud servers for small-scale CORS.",
    tags: ["personal-server", "singularcaster", "cors"]
  },
  {
    id: 460, category: "rtk",
    keywords: ["photovoltaic", "solar panel", "stake-out", "SingularPad", "pile layout", "光伏放样", "replanteo fotovoltaico", "estacas fotovoltaicas"],
    question: "How to conduct photovoltaic stake-out with SingularPad?",
    answer: "**PV Stake-out Steps in SingularPad:**\n\n- Import photovoltaic design file into SingularPad's Photovoltaic Stake function.\n- Survey \"Start\" and \"End\" points to establish the PV panel boundary.\n- Input parameters: Length (3D), Number of Segments (equal or unequal intervals), Row layout (Single/South/North Row), Row Distance.\n- Software auto-generates midpoint positions for foundation pile staking.\n- Follow indicator panel to locate midpoints; use arrow buttons to jump between points. Repeat for all PV panels in project.",
    tags: ["photovoltaic", "stakeout", "singularpad"]
  },
  {
    id: 461, category: "rtk",
    keywords: ["LAN IP", "public IP", "static IP", "CORS", "network", "SV100", "IP地址", "dirección IP", "endereço IP"],
    question: "What are the differences between LAN, public, and static IPs in CORS setup?",
    answer: "**IP Types for CORS:**\n\n- LAN IP: local network communication (e.g., 192.168.x.x), used for on-site SV100 configuration via web interface.\n- Public IP: enables remote communication across large distances; needed for rovers outside local network to receive differential data.\n- Static IP: permanent, unchanging address recommended for stable long-term CORS connections; more costly than dynamic IPs.\n- Alternative to static IP: DDNS (Dynamic DNS) for cost-efficient remote access without a static IP.\n- SV100 uses LAN IP for local config, Public/Static IP or DDNS for remote CORS station access.",
    tags: ["ip-address", "cors", "network"]
  },
  {
    id: 462, category: "rtk",
    keywords: ["TS1000", "data conversion", "TS-Link", "decimal formatting", "troubleshooting", "数据转换问题", "solución de conversión", "solução de conversão"],
    question: "How to fix data conversion failures in TS-Link for TS1000 total station data?",
    answer: "**TS-Link Conversion Error Fix:**\n\n- Error \"not a valid floating point value\" caused by decimal formatting issues or spaces in feature codes.\n- Open data file in Excel, use ROUND function on coordinate columns (B, C, D) with Num_digits=3.\n- Double-click cell corner to apply ROUND to entire columns automatically.\n- Save as new .CSV file, then import into TS-Link for successful conversion.\n- Also ensure feature codes have no spaces (e.g., \"abc\" is valid, \"a bc\" is not).",
    tags: ["ts1000", "troubleshooting", "ts-link"]
  },
  {
    id: 463, category: "rtk",
    keywords: ["NMEA", "GPRMC", "GPTRA", "GPVTG", "positioning", "navigation", "导航电文", "mensajes NMEA", "mensagens NMEA"],
    question: "What are the key NMEA messages for high-precision positioning?",
    answer: "**Advanced NMEA Messages:**\n\n- GPRMC: time, date, speed over ground, true course angle - essential for navigation and autonomous tracking.\n- GPTRA: heading angle (0-360°), pitch (-90 to 90°), roll angles from dual-antenna baseline - vital for marine/aerial/robotic navigation.\n- GPVTG: track made good and ground speed in knots and km/h - used for marine and vehicle navigation.\n- All messages include UTC time, checksum, and sentence terminator for data integrity.\n- Applications span construction, agriculture, marine navigation, and autonomous vehicles.",
    tags: ["nmea", "messages", "positioning"]
  },
  {
    id: 464, category: "rtk",
    keywords: ["SingularCaster", "troubleshooting", "login failure", "CORS server", "软件故障", "solución de problemas", "solução de problemas"],
    question: "How to troubleshoot common SingularCaster login issues?",
    answer: "**SingularCaster Troubleshooting:**\n\n- First verify IP and port: server IP should be 127.0.0.1, port 8080 via Configure button on login screen.\n- Check service status: open Task Manager > Services, find SingularPointCasterService; restart if not running.\n- If service keeps stopping after reboot: uninstall SingularCaster, remove associated database files.\n- Download and install the latest version of SingularCaster from the official website.\n- Regularly check configuration settings and server operational status for smooth CORS management.",
    tags: ["singularcaster", "troubleshooting", "login"]
  },
  {
    id: 465, category: "rtk",
    keywords: ["SingularPad", "activation", "license", "registration", "troubleshooting", "软件激活", "activación de software", "ativação de software"],
    question: "How to activate SingularPad software and resolve common registration issues?",
    answer: "**SingularPad Activation & FAQs:**\n\n- Register via: Project > About Software > Software Activation, enter license code or scan QR code (one-month free trial available).\n- \"Registration Code Transferred Out\": code moved to another device; save the new activation code shown, or contact support to reset.\n- \"ERROR_ID_LOCK\": incorrect software ID (starts with 'A'); ensure internet connection, restart phone and software.\n- \"ERROR_AUTH_CODE_USED\": code already registered on another device; transfer registration since one license works on one device only.\n- Contact support for any persistent issues during the activation process.",
    tags: ["singularpad", "activation", "license"]
  }

,
  {
    id: 466, category: "rtk",
    keywords: ["STRSVR", "RTKLIB", "GNSS", "data transfer", "NTRIP", "serial port", "数据传输", "调试工具", "transferencia", "datos", "transferência", "depuração"],
    question: "What is STRSVR and how do I use it for GNSS data transfer and debugging?",
    answer: "**STRSVR is a network transfer tool from RTKLIB for GNSS data streaming:**\n\n- Supports Serial, FTP, HTTP, TCP Client/Server, File, and NTRIP protocols\n- Input NTRIP Client to retrieve CORS corrections; Output NTRIP Server to broadcast data to a caster\n- Green=normal, Yellow=warning, Red=failure for each transmission channel\n- Use Serial input + File output to log raw data for debugging\n- Use TCP/UDP modes for fast device-to-device data exchange",
    tags: ["gnss", "ntrip", "debugging"]
  },
  {
    id: 467, category: "rtk",
    keywords: ["RTK", "solution", "SINGLE", "DGNSS", "FLOAT", "FIXED", "accuracy", "差分", "固定解", "solución", "precisión", "solução", "precisão"],
    question: "What do the RTK solution statuses SINGLE, DGNSS, FLOAT, and FIXED mean?",
    answer: "**RTK solution statuses indicate positioning accuracy level:**\n\n- SINGLE: No corrections, meter-level accuracy, default when only tracking satellites\n- DGNSS: Receiving corrections but coarse, meter to sub-meter accuracy\n- FLOAT: Processing corrections but integer ambiguities not resolved, decimeter-level\n- FIXED: Integer ambiguities resolved, centimeter-level, ready for professional surveying\n- Monitor differential age: 1-2s ideal for CORS/GSM, 2-5s for radio mode",
    tags: ["rtk", "accuracy", "fixed"]
  },
  {
    id: 468, category: "agnav",
    keywords: ["autosteer", "crash", "lag", "PrecisionAg", "T10", "tablet", "stuck", "崩溃", "卡顿", "bloqueo", "retraso", "travamento", "atraso"],
    question: "How to fix PrecisionAg autosteer software stuck or crashing on the T10 tablet?",
    answer: "**Resolve crashes by clearing old database and reinstalling PrecisionAg:**\n\n- Backup tractor/implement parameters before uninstalling (settings will be lost)\n- Export AB lines to USB if you need to keep previous guidance lines\n- Uninstall PrecisionAg and delete the Intnavigation folder under File Explorer > Download\n- Reinstall PrecisionAg from USB; latest version only caches 1 week of data\n- Contact support@singularxyz.com for remote reinstallation if needed",
    tags: ["autosteer", "troubleshooting", "precisionag"]
  },
  {
    id: 469, category: "rtk",
    keywords: ["static", "data", "GNSS", "Sfaira ONE", "RINEX", "SingularConverter", "静态数据", "原始数据", "datos", "estáticos", "dados", "estáticos"],
    question: "How to obtain GNSS static data from the Sfaira ONE Series receiver?",
    answer: "**Sfaira ONE lacks internal storage but you can log static data via USB:**\n\n- Connect via Type-C USB cable to PC and open a serial tool (e.g. SuperCom)\n- Send commands: OBSVMB 1, GPSEPHB ONCHANGED, BDSEPHB ONCHANGED, GLOEPHB ONCHANGED, GALEPHB ONCHANGED\n- Save log file from serial tool, rename extension to *.xyz\n- Use SingularConverter software to convert *.xyz to standard RINEX format for post-processing",
    tags: ["static", "rinex", "sfaira"]
  },
  {
    id: 470, category: "rtk",
    keywords: ["SBAS", "PPP", "Sfaira ONE", "Galileo HAS", "BDS B2b", "无基站", "星基增强", "sin", "base", "sem", "estação"],
    question: "How to enable SBAS and PPP modes on the Sfaira ONE Series receiver?",
    answer: "**SBAS and PPP provide positioning without a base station on Sfaira ONE:**\n\n- Verify firmware version 11492+ via Debug page command \"log version\"\n- For PPP (20cm): Set Datalink to PPP, choose E6-HAS (Galileo) or B2b (BDS), wait ~10 min for convergence\n- For SBAS (submeter): Tap Satellite icon > Settings > toggle SBAS ON; status changes to DGNSS\n- Both modes require no CORS account or base station, ideal for remote areas",
    tags: ["sbas", "ppp", "sfaira"]
  },
  {
    id: 471, category: "rtk",
    keywords: ["SingularCaster", "upgrade", "reinstall", "CORS", "PostgreSQL", "升级", "重装", "actualización", "reinstalación", "atualização", "reinstalação"],
    question: "How to properly reinstall or upgrade SingularCaster software?",
    answer: "**SingularCaster has three components (Database, Server, Client) that must be installed in sequence:**\n\n- Uninstall in order: PostgreSQL (Database), SingularPointCasterService (Server), SingularPointClient (Client)\n- Delete all related folders and old log files (do NOT delete regcode files needed for reactivation)\n- Reinstall in order: Database, Server, then Client using latest version from SingularXYZ\n- Contact support if you encounter issues during installation",
    tags: ["caster", "cors", "installation"]
  },
  {
    id: 472, category: "scanner",
    keywords: ["total station", "angle units", "DEG", "GON", "MIL", "TS1000", "角度单位", "全站仪", "unidades", "ángulo", "unidades", "ângulo"],
    question: "What are the different angle units (DEG, GON, MIL) and how to switch them on the TS1000?",
    answer: "**Three angle unit systems with different circle divisions:**\n\n- DEG (Degree): 360 parts per circle, standard worldwide for mapping and geography\n- GON (Gradian): 400 parts per circle, common in European engineering; 1 GON = 0.9 degrees\n- MIL (Milliradian): NATO standard 6400/circle or Metric 2000/circle, used in military/artillery\n- To switch on TS1000: Hold F2+POWER, press F1 for UNIT SET, F3 to ANGLE, select unit, F4 to confirm",
    tags: ["total-station", "angle", "ts1000"]
  },
  {
    id: 473, category: "rtk",
    keywords: ["SingularThings", "IoT", "P2", "device", "MQTT", "platform", "物联网", "plataforma", "conectar", "dispositivo", "conectar", "dispositivo"],
    question: "How to add and connect P2 devices to the SingularThings IoT platform?",
    answer: "**Connect P2 devices via MQTT to SingularThings IoT platform:**\n\n- In platform: Entities > Devices > Add new device, set Credentials to MQTT Basic, configure Client ID/Username/Password\n- In SingularNav app: Go to IoT section, enter matching Client ID/Username/Password, toggle Enable and Save\n- Status shows \"Connection\" and device state updates to \"Active\" when successful\n- Platform features include geofencing, real-time tracking, trajectory recording, and operation area statistics",
    tags: ["iot", "p2", "mqtt"]
  },
  {
    id: 474, category: "rtk",
    keywords: ["Orion ONE", "laser", "surveying", "green", "laser", "accuracy", "IMU", "激光测量", "precisión", "láser", "precisão", "laser"],
    question: "How accurate is the Orion ONE laser surveying and what is its effective range?",
    answer: "**Orion ONE laser surveying provides centimeter-level accuracy with important limitations:**\n\n- Specification accuracy: ≤5.5cm within 60-degree tilt range at 5-meter distance\n- Real-world tests showed <3cm difference vs. traditional pole measurements\n- Recommended range limited to 10m due to IMU angular error amplification, laser divergence, and aiming precision\n- Use a bipod for stability; hand tremors can affect accuracy significantly\n- Green laser is visible even in strong sunlight for easy targeting",
    tags: ["orion", "laser", "accuracy"]
  },
  {
    id: 475, category: "rtk",
    keywords: ["Orion ONE", "laser", "AR", "WiFi", "Bluetooth", "surface", "performance", "性能", "superficie", "rendimiento", "superfície"],
    question: "What are the limitations and additional performance features of Orion ONE?",
    answer: "**Key facts about Orion ONE laser/AR limitations and overall performance:**\n\n- Laser works best on smooth, solid, light-colored surfaces (concrete, asphalt, metal); poor on glass or liquids\n- WiFi is only needed for AR stakeout image transmission; Bluetooth handles GNSS data and commands\n- After disabling AR, WiFi can be turned off without affecting other operations\n- Features 4x ARM Cortex-A7 1.5GHz, 2T NPU, 4K 30FPS video, H.264/H.265 encoding\n- Dual-band WiFi (2.4G+5G) at 150Mbps with low-latency transmission; 15km enhanced UHF radio",
    tags: ["orion", "ar", "performance"]
  },
  {
    id: 476, category: "rtk",
    keywords: ["Orion ONE", "laser", "surveying", "IMU", "bipod", "non-contact", "激光", "免接触", "medición", "sin", "contacto", "medição"],
    question: "How to perform laser surveying step by step with the Orion ONE receiver?",
    answer: "**Step-by-step laser surveying with Orion ONE:**\n\n- Connect Orion ONE to SingularPad via Bluetooth and achieve RTK FIXED solution first\n- Initialize IMU tilt function as prompted by software; shake device to stabilize; check IMU icon shows \"Ready\"\n- In Point Survey interface, turn on laser; aim beam at target and click survey button\n- Recommended operating range: 3-5 meters for optimal accuracy\n- Use a bipod to reduce shaking; avoid direct eye exposure to laser radiation",
    tags: ["orion", "laser", "surveying"]
  },
  {
    id: 477, category: "rtk",
    keywords: ["Orion ONE", "AR", "stakeout", "augmented reality", "WiFi", "camera", "放样", "增强现实", "realidad", "aumentada", "realidade", "aumentada"],
    question: "How to use Visual AR Stakeout with the Orion ONE receiver?",
    answer: "**AR Stakeout overlays stakeout points on live camera view for intuitive guidance:**\n\n- Ensure RTK FIXED solution; if using CORS mode, insert SIM in collector for internet (WiFi used for AR)\n- Initialize IMU tilt function via Survey > Point Survey > IMU button, shake pole to finish\n- Import stakeout points, select one, click Stakeout > AR icon; connect to Orion ONE WiFi (SN name, password 12345678)\n- Ensure receiver faces backward; follow on-screen prompts to align rod tip with highlighted target point\n- Click survey button to complete; WiFi can be disconnected after AR is done",
    tags: ["orion", "ar", "stakeout"]
  },
  {
    id: 478, category: "rtk",
    keywords: ["RTK", "comparison", "lineup", "GNSS", "receiver", "Orion ONE", "Z1", "X1", "P2", "Sfaira ONE", "选型", "对比", "comparación", "comparação"],
    question: "Which SingularXYZ GNSS RTK receiver should I choose for my surveying needs?",
    answer: "**SingularXYZ 2025 RTK lineup comparison by application:**\n\n- Orion ONE: Visual AR stakeout + laser surveying, most advanced feature set\n- Z1: Palm-sized RTK, portable with IMU tilt and 15-hour battery\n- X1-Series: Full-functional RTK with radio base+rover capability and comprehensive features\n- P2-Series: Wearable RTK with triple-alert safety, ideal for GIS and personnel tracking\n- Sfaira ONE Series: Portable RTK with PPP and SBAS, 16-hour battery, IMU tilt\n- For CORS stations use N1 or SV100; for vehicle navigation use SV100 Dual or FOG",
    tags: ["rtk", "comparison", "lineup"]
  },
  {
    id: 479, category: "rtk",
    keywords: ["SingularPad", "license", "transfer", "activate", "QR", "code", "许可证", "转移", "licencia", "transferir", "licença", "transferir"],
    question: "How to transfer a SingularPad permanent license to a new device?",
    answer: "**Two methods to transfer SingularPad license depending on old device condition:**\n\n- If old device works: Open SingularPad > Project > About Software > Transfer Out Code, save the QR/license code\n- On new device: Install SingularPad > Project > About Software > Software Activation, enter code or scan QR\n- If old device is damaged: Contact support@singularxyz.com with device SN and order details for backend license reset\n- Once transferred, the old device can no longer use SingularPad",
    tags: ["singularpad", "license", "activation"]
  },
  {
    id: 480, category: "rtk",
    keywords: ["Z1", "web", "page", "WiFi", "Bluetooth", "firmware", "static", "数据", "网页", "página", "web", "configuração"],
    question: "How to access the Z1 GNSS receiver web interface for data download and settings?",
    answer: "**Z1 Bluetooth and WiFi cannot operate simultaneously; switch to WiFi first:**\n\n- Connect Z1 to SingularPad via Bluetooth, go to Device > Device Settings, enable WiFi (keep default IP 192.168.10.12)\n- On PC/mobile, connect to Z1 WiFi (SSID = device SN, password = 12345678)\n- Open browser, enter 192.168.10.12, login with username: admin, password: admin\n- Use web interface to download static data, configure settings, or perform firmware updates",
    tags: ["z1", "wifi", "configuration"]
  },
  {
    id: 481, category: "agnav",
    keywords: ["autosteer", "farm", "plot", "AB line", "guidance", "PrecisionAG", "任务管理", "地块", "gestión", "tareas", "gerenciamento", "talhões"],
    question: "How to efficiently manage guidance lines across different farms and plots in PrecisionAG?",
    answer: "**Organize guidance lines by creating separate farms and plots in PrecisionAG:**\n\n- New AB lines go to Default Farm > Default Plot by default; create custom farms via Farm > Add Farm\n- Add plots within each farm: select farm > Add Plot, use Path method to drive tractor along perimeter boundary\n- After setting boundaries, create guidance lines under their respective plots for organized navigation\n- This structure allows quick location, switching, and reuse of AB lines across different fields",
    tags: ["autosteer", "precisionag", "guidance"]
  },
  {
    id: 482, category: "rtk",
    keywords: ["coordinate", "mismatch", "localization", "WGS84", "CAD", "SketchUp", "transformation", "坐标系", "转换", "coordenadas", "transformación", "coordenadas", "transformação"],
    question: "How to resolve coordinate mismatches between design drawings and RTK measurements?",
    answer: "**Use the Localization feature in SingularXYZ software to align GNSS and design coordinates:**\n\n- GNSS uses global WGS84 coordinates; CAD/SketchUp models use local project coordinate systems\n- Collect control points in the field with RTK GNSS, then input corresponding design coordinates\n- The software computes transformation parameters to align both coordinate systems\n- All subsequent survey points are automatically converted to the correct design coordinate system\n- Applications: construction stakeout, road/bridge engineering, cadastral surveys, infrastructure projects",
    tags: ["localization", "coordinates", "transformation"]
  },
  {
    id: 483, category: "rtk",
    keywords: ["receiver", "front", "panel", "indicators", "LED", "satellite", "battery", "状态灯", "指示灯", "indicadores", "panel", "indicadores", "painel"],
    question: "How to read GNSS receiver status from front panel indicators and buttons?",
    answer: "**Front panel indicators on X1-Series (similar across most SingularXYZ receivers):**\n\n- Satellite Tracking Indicator: Flashes count = number of tracked satellites; low flashes = reposition receiver\n- Correction Data Indicator: Confirms RTK correction data transmission/reception; check if struggling to fix\n- Static & Network Indicator: Visual feedback when static recording is active; start/stop logging with button press\n- Power Indicator: Shows power-on, low battery, or charging status; prevents unexpected power loss",
    tags: ["receiver", "indicators", "status"]
  },
  {
    id: 484, category: "rtk",
    keywords: ["GIS", "CORS", "PPP", "SBAS", "work", "mode", "accuracy", "工作模式", "精度", "modo", "trabajo", "modo", "trabalho"],
    question: "How to choose the right GIS work mode: CORS, PPP, or SBAS?",
    answer: "**Three GIS work modes compared by accuracy and requirements:**\n\n- CORS Mode: Centimeter-level, requires network access and CORS/NTRIP account\n- PPP Mode: 10-20cm accuracy, no network or CORS needed, requires ~10 min convergence time\n- SBAS Mode: Submeter accuracy, no network/CORS needed but requires SBAS satellite coverage\n- Device compatibility: Sfaira ONE supports all three; P2 supports CORS+SBAS; T8 Pro supports all three; Z1 supports all three plus radio",
    tags: ["gis", "cors", "ppp", "sbas"]
  },
  {
    id: 485, category: "scanner",
    keywords: ["total station", "PTL", "Point", "To", "Line", "offset", "baseline", "全线站", "参考线", "línea", "referencia", "linha", "referência"],
    question: "What is the PTL (Point To Line) function in total stations and how is it used?",
    answer: "**PTL calculates relative position between a measured point and a reference baseline:**\n\n- Uses built-in algorithms to compute vertical distance and horizontal offset from target point to reference line\n- Reference line defined by two or more known coordinate points\n- Applications: Measuring offsets from baseline, construction layout (road centerlines/sidelines), topographic surveying\n- TS1000 total station includes PTL for road, railway, tunnel construction alignment verification\n- Enables quick calculation of whether points meet design specifications",
    tags: ["total-station", "ptl", "offset"]
  },
  {
    id: 486, category: "rtk",
    keywords: ["AR", "stakeout", "augmented", "reality", "visual", "GNSS", "IMU", "camera", "增强现实", "放样", "realidad", "aumentada", "realidade", "aumentada"],
    question: "How does AR (Augmented Reality) stakeout work in surveying?",
    answer: "**AR stakeout overlays design points onto real-world camera view using three technologies:**\n\n- GNSS: Provides real-time high-precision positioning and location data\n- IMU: Measures acceleration and angular velocity for motion trajectory and attitude (direction/orientation)\n- Camera: Calibrated to map image pixels to real-world coordinates for visual overlay\n- Controller Camera Mode: Uses controller camera+compass, provides rough directional guidance, no special receiver needed\n- Receiver Camera Mode (Orion ONE): True-position AR from receiver perspective, centimeter-level visual guidance",
    tags: ["ar", "stakeout", "visual"]
  },
  {
    id: 487, category: "rtk",
    keywords: ["laser", "stakeout", "Orion ONE", "non-contact", "verification", "IMU", "激光放样", "免接触", "verificación", "láser", "verificação", "laser"],
    question: "How to use laser stakeout with Orion ONE for non-contact point verification?",
    answer: "**Laser stakeout enables quick point verification without physically accessing the point:**\n\n- Connect Orion ONE to SingularPad > Survey > Point Stakeout, select target point\n- Go to Settings > Tool Bar, add \"Enable Laser\" button to display items\n- Initialize IMU tilt via tilt survey button and follow software prompts\n- Click to enable laser; applications include re-verifying marked points from distance, elevated/hard-to-reach locations\n- Ideal for muddy, unsafe areas, building exteriors, obstructed environments, and multi-person team operations",
    tags: ["laser", "stakeout", "orion"]
  },
  {
    id: 488, category: "rtk",
    keywords: ["RTK", "fix", "rate", "signal", "interference", "multipath", "base", "station", "固定率", "信号干扰", "tasa", "fijación", "taxa", "fixação"],
    question: "What factors affect RTK fix rate and how can I improve it?",
    answer: "**Four main factors affecting RTK fix rate and proven improvement strategies:**\n\n- Signal blockage (trees/buildings): Use high-performance receiver with full-constellation tracking and anti-interference\n- Multipath effect (glass/metal/water): Raise antenna height, change radio frequency, avoid reflective surfaces\n- Electromagnetic interference (power lines/towers): Change radio frequency or relocate\n- Differential data issues: Keep baseline <50km, optimize base station placement with clear sky view\n- Use tilt measurement or laser (Orion ONE) to measure in obstructed areas without leveling pole",
    tags: ["rtk", "fixed", "troubleshooting"]
  },
  {
    id: 489, category: "rtk",
    keywords: ["GNSS", "frequency", "band", "multi-frequency", "L1", "L2", "L5", "BDS", "GPS", "Galileo", "GLONASS", "频率", "多频", "frecuencia", "frequência"],
    question: "What are GNSS frequency bands and why does multi-frequency technology matter?",
    answer: "**Multi-frequency GNSS tracks L1, L2, L5 and other bands simultaneously for better accuracy:**\n\n- Ionospheric Error Correction: Dual-frequency (e.g. L1+L5) corrects ionospheric delays for more accurate positioning\n- Multipath Resistance: Higher frequencies like L5 are less prone to reflections in urban canyons\n- Key bands: GPS L1 (1575.42), L2 (1227.60), L5 (1176.45); BDS B1I (1561.098), B2I (1207.14), B2a (1176.45)\n- Galileo E1, E5a, E5b, E6; GLONASS G1, G2, G3; QZSS L1/L2/L5; NavIC L5/S-band\n- More tracked frequencies = better accuracy in challenging environments",
    tags: ["gnss", "frequency", "multifrequency"]
  },
  {
    id: 490, category: "rtk",
    keywords: ["S20", "RTCM", "base", "station", "serial", "command", "agriculture", "基站", "农业", "estación", "base", "estação", "agricultura"],
    question: "How to configure the S20 smart antenna as a base station with RTCM output?",
    answer: "**Configure S20 as RTCM base station via serial commands:**\n\n- Connect S20 to PC via configuration cable, identify COM port in Device Manager, open serial tool (e.g. QCom)\n- Send commands in order: UNLOGALL (stop output), MODE BASE [lon] [lat] [elev] (set base coordinates in degrees/meters)\n- Set RTCM message output: RTCM1033 COM1 10, RTCM1094/1074/1124/1084 COM1 1 (number = interval in seconds)\n- Each command returns \"OK\" on success; S20 now outputs RTCM correction data for precision agriculture integration",
    tags: ["s20", "rtcm", "base"]
  },
  {
    id: 491, category: "rtk",
    keywords: ["GNSS", "antenna", "helical", "geodetic", "patch", "ceramic", "aviation", "天线", "类型", "antena", "tipos", "tipos", "antena"],
    question: "What are the main types of GNSS antennas and their applications?",
    answer: "**GNSS antenna types divided into built-in and external categories:**\n\n- Built-in Helical: Lightweight, good in complex environments; used in P2 and Sfaira ONE wearables/handhelds\n- Built-in Geodetic: Higher gain, good multipath suppression; used in X1, Orion ONE, Z1, S20, Y1 receivers\n- Built-in Ceramic Patch: Low cost/power, meter-level accuracy; used in smartphones and IoT devices\n- External Helical (SA180/SA200): Strong signal during movement; T8 Pro tablet, mobile mapping\n- External Geodetic (SA102/SA100): Best accuracy and multipath suppression; CORS base stations, deformation monitoring\n- External Aviation (SA300): Rugged, aerodynamic; UAVs and aerial navigation",
    tags: ["antenna", "gnss", "hardware"]
  },
  {
    id: 492, category: "rtk",
    keywords: ["RTCM", "correction", "data", "format", "RTK", "NTRIP", "差分数据", "格式", "formato", "corrección", "formato", "correção"],
    question: "What is the RTCM format and how is it used in RTK correction data transmission?",
    answer: "**RTCM is a standardized binary format for real-time GNSS correction data streaming:**\n\n- Developed by Radio Technical Commission for Maritime Services; analogous to RINEX but for real-time use\n- RTCM2.X: 30+ message types, limited system support; RTCM3.2: standard format, most commonly used today\n- RTCM3.3: adds BDS ephemeris, Galileo and SBAS support on top of RTCM3.2\n- Message types include: observation messages (per satellite system), ephemeris, base station coordinates, SSR (orbit/clock)\n- SingularXYZ products support RTCM2.X/3.X formats for centimeter-level positioning",
    tags: ["rtcm", "correction", "format"]
  },
  {
    id: 493, category: "rtk",
    keywords: ["tilt", "survey", "IMU", "magnetometer", "calibration", "pole", "倾斜测量", "惯性测量", "inclinación", "IMU", "inclinação"],
    question: "How does a GNSS receiver implement tilt surveying using IMU technology?",
    answer: "**IMU-based tilt surveying eliminates the need to center the bubble on the range pole:**\n\n- Tilt survey calculates ground point coordinates from receiver position + pole height + tilt angle + tilt azimuth\n- Uses Pythagorean Theorem to compute tilt offset in N/E/H directions\n- Two solutions: magnetometer (susceptible to magnetic interference, unstable near metal) and IMU (preferred)\n- IMU contains accelerometer + gyroscope sensors; requires calibration before use\n- SingularXYZ Y1 IMU receiver provides centimeter-level accuracy with one-step calibration",
    tags: ["imu", "tilt", "surveying"]
  },
  {
    id: 494, category: "rtk",
    keywords: ["P1", "MyCumulus", "GIS", "NTRIP", "Bluetooth", "centimeter", "厘米级", "GIS软件", "software", "GIS", "precisão", "centimétrica"],
    question: "How to achieve centimeter-level positioning with P1 GNSS receiver and MyCumulus GIS software?",
    answer: "**Connect P1 to MyCumulus for cm-level GIS data collection:**\n\n- Pair P1 receiver with PDA via Bluetooth in device settings\n- In MyCumulus: Settings > Admin Settings > select the device\n- Configure NTRIP: enter CORS account credentials (PDA needs internet connection)\n- Wait for RTK FIXED status in GNSS info panel, then start data collection\n- P1 supports full constellation (GPS, GLONASS, BDS, Galileo, QZSS, SBAS) and provides SDK for third-party customization",
    tags: ["p1", "mycumulus", "gis"]
  },
  {
    id: 495, category: "rtk",
    keywords: ["GNSS", "receiver", "choose", "buy", "specifications", "selection", "选购", "接收机", "seleccionar", "receptor", "escolher", "receptor"],
    question: "How to choose the right GNSS receiver for surveying work?",
    answer: "**Key parameters to evaluate when selecting a GNSS receiver:**\n\n- Satellite Tracking: Ensure full multi-constellation support (GPS, GLONASS, Galileo, BDS); check regional systems (QZSS for Japan, NavIC for India)\n- Accuracy: Verify 1cm-level specifications under statistical conditions\n- Battery: Focus on continuous working hours (not mAh); hot-swap battery allows uninterrupted work\n- Weight & Size: Lighter/smaller devices reduce daily burden; check portability\n- Environment: IP67 waterproof/dustproof and 2-meter drop protection are minimum requirements\n- Communication: 4G for urban areas, radio for poor network; check radio range if needed",
    tags: ["gnss", "buying", "guide"]
  },
  {
    id: 496, category: "agnav",
    keywords: ["automatic", "steering", "system", "autosteer", "agriculture", "tractor", "GNSS", "自动驾驶", "农业", "dirección", "automática", "direção", "automática"],
    question: "How is an automatic steering system for agricultural tractors composed and how does it work?",
    answer: "**Autosteer system components and their functions:**\n\n- Two GNSS Antennas: Main antenna for positioning, secondary antenna for heading/direction\n- Sensor (Gyroscope/Angle): Monitors tractor attitude in real time\n- Tablet Console: Embedded GNSS module, runs software, calculates position/speed/heading, outputs steering commands\n- Electric Motor: Receives tablet signals to control steering (straight, curve, pivot, U-turn)\n- Cables: Connect all components for power and data transmission\n- SingularXYZ SAgro100 supports AB line, curve, pivot, and U-turn patterns",
    tags: ["autosteer", "agriculture", "sagro"]
  },
  {
    id: 497, category: "rtk",
    keywords: ["GNSS", "how", "works", "satellite", "constellation", "ground", "control", "定位原理", "卫星", "cómo", "funciona", "como", "funciona"],
    question: "How does GNSS (Global Navigation Satellite System) work?",
    answer: "**GNSS consists of three segments working together for positioning:**\n\n- Space Segment: 24-30 satellites in 3-6 orbital planes at ~20,000 km altitude, with backup satellites\n- Ground Control: Main control station + monitoring stations + ground antennas; tracks satellites, calculates orbit/clock parameters\n- User Equipment: GNSS receivers capture satellite signals, measure pseudorange, and compute position via trilateration\n- Receiver needs signals from at least 4 satellites to calculate latitude, longitude, altitude, and time\n- Multiple constellations (GPS, BDS, Galileo, GLONASS) improve availability and accuracy",
    tags: ["gnss", "basics", "positioning"]
  },
  {
    id: 498, category: "rtk",
    keywords: ["NMEA", "NMEA-0183", "GPGGA", "GPGSA", "echo", "sounder", "protocol", "数据协议", "测深仪", "protocolo", "dados", "ecobatímetro"],
    question: "What is NMEA-0183 and what information does the GPGGA message contain?",
    answer: "**NMEA-0183 is a standard data format supported by all GNSS manufacturers:**\n\n- Created by National Marine Electronics Association, originally for marine navigation systems\n- GPGGA contains positioning information (latitude, longitude, altitude, fix quality, satellite count)\n- Other common messages: GPGSA/GPGSV (satellite tracking status), GPVTG (velocity), GPRMC (recommended minimum data)\n- Essential for GNSS-to-device communication: echo sounders, sonar, autopilots, marine navigation systems\n- All SingularXYZ devices (Y1, P1, T8 Pro) support NMEA-0183 output via Bluetooth/USB/serial/4G",
    tags: ["nmea", "gpgga", "protocol"]
  },
  {
    id: 499, category: "rtk",
    keywords: ["NFC", "Bluetooth", "touch", "connect", "pairing", "Y1", "近场通信", "触碰连接", "conexión", "táctil", "conexão", "toque"],
    question: "How does NFC benefit surveyors by simplifying RTK device connections?",
    answer: "**NFC enables touch-and-connect Bluetooth pairing for RTK receivers:**\n\n- NFC (Near-Field Communication) works over <4cm distance for contactless data exchange\n- Used by Apple Pay and Android Pay; same technology simplifies RTK Bluetooth pairing\n- With NFC-enabled RTK (e.g. SingularXYZ Y1), just touch phone to receiver to auto-connect\n- No need to manually search Bluetooth devices or match in software settings\n- NFC bootstraps the Bluetooth connection automatically, making field startup faster and more convenient",
    tags: ["nfc", "bluetooth", "connection"]
  },
  {
    id: 500, category: "rtk",
    keywords: ["QField", "QGIS", "T8", "Pro", "CORS", "GIS", "centimeter", "厘米级", "QGIS插件", "precisión", "centimétrica", "precisão"],
    question: "How to achieve centimeter-level accuracy with QField on the T8 Pro tablet?",
    answer: "**Run High-Precision software in background to feed RTK corrections to QField:**\n\n- Open High-Precision software (pre-installed on T8 Pro), tap SETUP IP to enter CORS address and port\n- Select MountPoint, enter username/password, click CONNECT to receive GNSS correction data\n- Wait for RTK FIXED status (centimeter-level accuracy achieved)\n- Run High-Precision software in background, then open QField to work with centimeter accuracy\n- T8 Pro features 8\" HD touchscreen, 15-hour battery with 7000mAh, all-in-one design for both GIS and land surveying",
    tags: ["qfield", "t8pro", "gis"]
  },
  {
    id: 501, category: "rtk",
    keywords: ["T8", "Pro", "MyCumulus", "GIS", "CORS", "NTRIP", "cloud", "数据采集", "云平台", "recolección", "datos", "coleta", "nuvem"],
    question: "How to use the T8 Pro tablet with MyCumulus GIS software for high-precision data collection?",
    answer: "**Configure T8 Pro NTRIP connection in MyCumulus for cm-level GIS data collection:**\n\n- Login to MyCumulus on T8 Pro (project created on MyCumulus Cloud beforehand)\n- Go to NTRIP Configuration menu, enter CORS account credentials, click Verify; successful connection shows \"Connected to XXX\"\n- Check GNSS Info: ensure RTK Fix status and receiving data before starting\n- Collect point data within task, then upload to cloud\n- T8 Pro also supports ArcGIS Collector, QField for QGIS, Mapit GIS and other third-party apps",
    tags: ["t8pro", "mycumulus", "gis"]
  },
  {
    id: 502, category: "rtk",
    keywords: ["NTRIP", "Ntrip", "CORS", "RTCM", "caster", "client", "server", "网络传输", "差分", "protocolo", "transporte", "protocolo", "transporte"],
    question: "What is NTRIP and how does it work for RTK correction data transmission?",
    answer: "**NTRIP (Networked Transport of RTCM via Internet Protocol) streams GNSS corrections over the internet:**\n\n- Developed by German Federal Agency for Cartography and Geodesy for real-time differential data\n- Three components: NTRIP Server (sends data from base/CORS), NTRIP Caster (broadcasts streams), NTRIP Client (rover receives)\n- NTRIP vs UHF Radio: NTRIP has no distance limit but needs internet coverage; UHF radio works ~3km without network\n- For flexible use: choose a receiver with both 4G+NTRIP and radio, like SingularXYZ Y1\n- Requires a 4G-capable GNSS receiver and CORS account for centimeter-level RTK fixed solution",
    tags: ["ntrip", "cors", "rtk"]
  }

