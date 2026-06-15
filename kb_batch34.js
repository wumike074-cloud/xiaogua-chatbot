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
    answer: "**GDM2000 (Geocentric Datum of Malaysia):**\n- Officially launched August 26, 2003\n- Ellipsoid: GRS1980\n- Projection: Cassini-Soldner (parameters vary by state — different origin latitude, central meridian, false easting/northing for each state)\n\n**Old datums still in use for some projects:**\n- Malaysian BRSO and MRSO systems\n- Use Everest 1830 ellipsoid with Hotine Oblique Mercator projection\n\n**In SingularPad:** All Malaysian datums are pre-loaded. Users can also find datums for other countries directly in the software's coordinate system library.",
    tags: ["malaysia", "gdm2000", "datum", "coordinate-system"]
  },
  {
    id: 361, category: "rtk",
    keywords: ["localization", "coordinate transformation", "four parameters", "seven parameters", "calibration", "坐标转换", "四参数", "七参数", "transformación de coordenadas", "calibración", "transformação de coordenadas", "calibração"],
    question: "What is localization in surveying and how to perform it with 4-parameter and 7-parameter models?",
    answer: "**Localization:** Process of transforming coordinates between two systems by establishing one-to-one correspondence via known points.\n\n**Four-parameter model:**\n- Suitable for small areas (within 5 km)\n- Parameters: X/Y translation, rotation angle, scale factor m (0.999-1.001)\n- Requires at least 2 known points\n\n**Seven-parameter model:**\n- Suitable for larger areas (up to 15 km)\n- Parameters: X/Y/Z translation, 3 rotation angles, 1 scale factor K (~1)\n- Requires at least 3 known points; higher accuracy than 4-parameter\n\n**Best practices:** Known points should cover entire survey area, be evenly distributed. In SingularPad: Project > Localization, enter >=3 point pairs, calculate, verify H/V residuals <= 0.02m, then apply.",
    tags: ["localization", "coordinate-transformation", "datum", "calibration"]
  },
  {
    id: 362, category: "rtk",
    keywords: ["static survey", "RTK", "PPK", "survey method", "comparison", "静态测量", "动态后处理", "comparación de métodos", "comparação de métodos"],
    question: "What are the differences between static survey, RTK, and PPK methods?",
    answer: "**Static Survey:** At least 3 devices; >=40 min observation time; post-processing; range >=50 km; accuracy 2.5mm+1ppm horizontal, 5mm+1ppm vertical; best for control point surveys.\n\n**RTK:** At least 1 base + 1 rover; real-time 4G/radio link; 1-10s per point; range 10-20 km; accuracy 8mm+1ppm horizontal, 15mm+1ppm vertical; best for detail survey and stakeout.\n\n**PPK:** At least 1 base + 1 rover; no real-time link needed; 1-10s per point; post-processing; range >=50 km; accuracy same as static (2.5mm+1ppm/5mm+1ppm); positioning up to 50 Hz; best for UAV surveying and mapping.",
    tags: ["static", "rtk", "ppk", "comparison"]
  },
  {
    id: 363, category: "rtk",
    keywords: ["LoRa", "long range radio", "UHF", "spread spectrum", "low power", "远距离无线电", "扩频技术", "radio de largo alcance", "rádio de longo alcance", "baixo consumo"],
    question: "What is LoRa technology and what are its advantages for RTK data transmission?",
    answer: "**LoRa (Long Range Radio):** Spread spectrum wireless modulation technology for LPWAN communication, developed by Semtech.\n\n**Key advantages:**\n- **Long range:** Up to 15 km in open areas, up to 5 km in dense urban environments\n- **Strong anti-interference:** Communicates with <20dB noise; excellent against sudden random interference\n- **Low power consumption:** Static current <1uA; receiving current <5mA\n- **Anti-multipath:** Maintains stable transmission in high-rise urban environments\n\n**In Y1 GNSS receiver:** Built-in LoRa enables adjustable power (0.5W/1W/2W), 12-hour operation with hot-swap batteries, 15km range, and stable performance in complex environments (city, lakes, forests).",
    tags: ["lora", "radio", "uhf", "wireless"]
  },
  {
    id: 364, category: "rtk",
    keywords: ["DDNS", "Dynamic DNS", "CORS management", "remote access", "static IP", "动态域名", "远程管理", "DNS dinámico", "acceso remoto", "DNS dinâmico", "acesso remoto"],
    question: "What is DDNS and how does it enable remote CORS station management?",
    answer: "**DDNS (Dynamic DNS):** Automatically updates DNS records when your ISP changes your public IP address.\n\n**Problem without DDNS:** Consumer-grade internet assigns temporary IP addresses that change periodically — you must manually update the IP each time to remotely control the CORS station.\n\n**With DDNS:**\n1. Sign up with DDNS provider (e.g., NO-IP at www.noip.com, DynDNS)\n2. Register a domain name bound to your dynamic IP\n3. Configure DDNS account in your CORS receiver\n4. Access the receiver remotely via domain name regardless of IP changes\n\n**SV100 GNSS receiver** has built-in DDNS function supporting common providers — enables remote web page access, configuration, and monitoring without purchasing expensive static IP addresses.",
    tags: ["ddns", "cors", "remote-access", "network"]
  },
  {
    id: 365, category: "rtk",
    keywords: ["NAT-DDNS", "intranet", "private IP", "4G network", "remote management", "内网穿透", "NAT穿越", "NAT", "IP privado", "red privada", "IP privado", "rede privada"],
    question: "What is NAT-DDNS and how does it allow CORS access when using a private 4G IP address?",
    answer: "**NAT-DDNS:** Combines Network Address Translation with Dynamic DNS — enables remote access to devices on private IP networks (behind carrier NAT on 4G).\n\n**The problem:** 4G providers assign private IP addresses behind carrier-grade NAT — devices can connect out but cannot be reached from the internet.\n\n**The solution:** The intranet device proactively connects to a public NAT-DDNS server, which creates a tunnel from the public domain to the private device.\n\n**Setup for SV100:**\n1. Register with NAT-DDNS provider (e.g., Ngrok at ngrok.com, NATAapp at natapp.cn) to get AuthToken and domain\n2. SV100 web page: Device Configuration >> NAT-DDNS Config\n3. Enter domain name and AuthToken, start the service\n4. Access SV100 web page anytime, anywhere via the registered domain name",
    tags: ["nat-ddns", "cors", "remote-access", "4g"]
  },
  {
    id: 366, category: "agnav",
    keywords: ["tractor", "wheel design", "front wheel", "rear wheel", "angle sensor", "auto-steering", "拖拉机", "车轮设计", "diseño de ruedas", "tractor", "design de rodas"],
    question: "Why do tractors have smaller front wheels and larger rear wheels, and how does this affect auto-steering installation?",
    answer: "**Front wheels (smaller/narrower):**\n- Function: Steering (guide wheels)\n- Smaller size reduces ground resistance and steering effort\n- Lighter and easier to control, lower power consumption for turning\n\n**Rear wheels (larger/wider):**\n- Function: Drive wheels — all power transmitted to rear\n- Wider/larger increases contact area, reduces soil compaction, minimizes slippage via deep treads\n- Supports weight shift when pulling heavy implements (center of gravity moves backward)\n\n**Auto-steering installation:** The angle sensor is mounted on the front wheel since it is the steering wheel — detects deflection and transmits real-time angle data to the tablet, which controls the motor to adjust steering for straight-line operation.",
    tags: ["tractor", "angle-sensor", "auto-steering", "design"]
  },
  {
    id: 367, category: "rtk",
    keywords: ["SBAS", "satellite augmentation", "WAAS", "EGNOS", "MSAS", "GAGAN", "星基增强系统", "SBAS", "aumentación satelital", "aumentação por satélite"],
    question: "What is SBAS and how does it improve GNSS positioning accuracy?",
    answer: "**SBAS (Satellite-Based Augmentation System):** Geostationary satellites broadcast correction data (ephemeris errors, clock errors, ionospheric corrections) derived from ground reference stations.\n\n**Operational systems:**\n- WAAS (USA): 3 master stations + 38 reference stations + 3 GEO satellites, ~1-2m accuracy\n- EGNOS (Europe): 4 MCC + 41 RIMS stations + 3 GEO satellites\n- MSAS (Japan), GAGAN (India), SDCM (Russia)\n\n**Under construction:** BDSBAS/SNAS (China), KASS (South Korea), NSAS (Nigeria)\n\n**Accuracy:** Sub-meter level (<1m 3D RMS) — useful for GIS and agricultural navigation without local base stations.\n\n**Key advantage:** Regional correction without needing a local RTK base station, covers entire continents.",
    tags: ["sbas", "waas", "egnos", "correction"]
  },
  {
    id: 368, category: "agnav",
    keywords: ["angle sensor", "auto-steering", "magnetic sensor", "capacitive sensor", "inclination sensor", "角度传感器", "自动驾驶", "sensor angular", "sensor de ângulo"],
    question: "How does an angle sensor work in auto-steering systems?",
    answer: "**Angle sensor function:** Detects real-time wheel angle and converts it to usable output signals for auto-steering correction.\n\n**Three common types:**\n1. **Magnetic angle sensor:** Non-contact, high-performance, automatic misalignment compensation, fault detection — ideal for harsh field environments\n2. **Capacitive angular displacement sensor:** Simple structure, high precision, suitable for dynamic measurement — converts capacitance value via algorithm to angle output\n3. **Inclination sensor:** Based on Newton's second law — measures acceleration to calculate angle; used for system level/horizontal measurement\n\n**In auto-steering workflow:** Mounted on tractor steering wheel > detects how much wheel has turned > feeds angle data to tablet > tablet software calculates correction > controls electric motor to adjust steering for straight-line operation.",
    tags: ["angle-sensor", "auto-steering", "tractor", "sensor"]
  },
  {
    id: 369, category: "rtk",
    keywords: ["RTK bridge", "network to radio", "SV100", "differential data relay", "RTK桥", "中继", "puente RTK", "ponte RTK"],
    question: "What is an RTK bridge and how to configure it on SV100?",
    answer: "**RTK bridge:** Converts network differential data to radio broadcast — receives CORS data via 4G and simultaneously transmits via radio.\n\n**Use cases:**\n- One CORS account shared by multiple rovers (one-to-many)\n- Insufficient SIM cards (e.g., 5 receivers but only 1 SIM)\n- No network coverage at work site but nearby network access exists\n\n**SV100 configuration:**\n1. Login web page via WiFi (192.168.1.1)\n2. Device Configuration >> Working Mode: Set as Base\n3. Work Management >> Ntrip Client: Enter CORS IP, port, username, password, select mount point\n4. Work Management >> Radio >> Radio RTK Bridge: Set to Transmit, configure protocol, channel, frequency, power\n5. Other receivers receive differential data via radio without needing SIM cards",
    tags: ["rtk-bridge", "sv100", "radio", "ntrip"]
  },
  {
    id: 370, category: "rtk",
    keywords: ["Y1", "radio mode", "troubleshooting", "external radio", "SDL1", "电台模式", "故障排查", "modo radio", "resolución de problemas", "modo rádio"],
    question: "How to troubleshoot common Y1 GNSS receiver radio mode issues?",
    answer: "**Rover receives only short-range signals (<few hundred meters):** Replace battery (low voltage reduces range); ensure base is in high open area; check cables and external antenna for damage.\n\n**Rover cannot receive signal at close range:** Check base transmission (data LED flashes at 1Hz); verify registration is not expired; check serial port baud rate is 38400.\n\n**Rover receives signal but only single solution:** Secure rover radio antenna; set differential format to RTCM3 or RTCM32; charge/replace rover battery; upgrade firmware.\n\n**Base station offset prompt:** Verify base has not moved; another base may use same radio frequency — change channel.\n\n**SDL1 datalink errors:** E01 = battery voltage too high; E02 = battery voltage too low; E03 = configuration parameters lost (reconfigure via software).",
    tags: ["y1", "radio", "troubleshooting", "faq"]
  },
  {
    id: 371, category: "rtk",
    keywords: ["Y1", "RTK precautions", "interference", "satellite signal", "注意事项", "干扰", "precauciones RTK", "precauções RTK"],
    question: "What are the key precautions and troubleshooting tips when using Y1 GNSS receiver?",
    answer: "**Key precautions:**\n1. Keep away from wireless signal towers and high-voltage power lines (electromagnetic interference)\n2. Avoid network mode in remote mountains with no signal coverage\n3. Avoid severe obstructions (mountains, tall buildings, forests, tree canopy)\n4. External radio: keep antenna vertical, protect from rain, range within 15km; use low power <5km, high power >5km\n\n**Troubleshooting:**\n- No satellite signals: Send command 'set oscvalue manual 2100' via H-Terminal; if fails, antenna may need repair\n- Registration fails: Ensure '-' character is in English format; check ID with command 'log regsource'\n- Change panel language to English: Right button x2 > left x1 > right x5 > left x1 > right x1 to select English > left x1 to confirm",
    tags: ["y1", "precautions", "troubleshooting", "interference"]
  },
  {
    id: 372, category: "rtk",
    keywords: ["Y1", "4G mode", "GSM", "CORS", "SIM card", "network rover", "网络模式", "4G", "modo red", "modo rede", "cartão SIM"],
    question: "How to troubleshoot Y1 GNSS receiver network/4G mode issues?",
    answer: "**SIM detection stuck:** Check network signal; verify SIM card is properly inserted and contacts are clean.\n\n**Stuck on connecting service (base):** Verify IP address and port are correct; test server via mobile browser (e.g., 47.103.96.216:8080).\n\n**Failed to get source list (rover):** Verify IP/port settings; check SIM connection; try manually entering mountpoint name.\n\n**Always connecting to service (rover):** Verify APN, IP, port, username, password; check if base station is online.\n\n**Rover suddenly switches to single mode:** Check network quality; verify SIM has data balance; check if CORS account is shared — change password and reconnect.\n\n**SC100 enters factory mode:** Caused by stuck volume up button during power-on; press volume down to select 3rd option, volume up to confirm.",
    tags: ["y1", "4g", "network", "cors", "troubleshooting"]
  },
  {
    id: 373, category: "rtk",
    keywords: ["CORS", "site selection", "reference station", "data quality", "选址", "建站条件", "selección de sitio CORS", "seleção de local"],
    question: "How to properly select a site for building a CORS reference station?",
    answer: "**Site selection process:** Map network design > Field visit > Data collection > Quality analysis > Construction.\n\n**Location requirements:**\n- Distance from multipath objects (buildings, trees, water) >200m\n- Satellite visibility above 10° elevation (15° minimum in difficult conditions); obstruction coverage <60° horizontally\n- Distance from EM interference (radio towers, high-voltage lines) >200m\n- Avoid mining areas, railways, highways (vibration)\n- Future planning: select areas with small expected environmental changes\n\n**Station spacing:** ~60km in high-latitude calm regions; ~40km in low-latitude active ionosphere regions. Use triangular network layout.\n\n**Infrastructure:** Reliable communication access, stable power supply, convenient transportation, good security for long-term maintenance.",
    tags: ["cors", "site-selection", "reference-station", "installation"]
  },
  {
    id: 374, category: "agnav",
    keywords: ["articulated tractor", "steering", "hydraulic cylinder", "tractor type", "铰接式拖拉机", "液压转向", "tractor articulado", "trator articulado"],
    question: "How does an articulated tractor work and when is it preferred over conventional tractors?",
    answer: "**Articulated tractor design:** Two frames (front/rear) with equal-diameter wheels on each axle — steering is achieved by hydraulic cylinders changing the relative position of front and rear frames.\n\n**Conventional tractor:** Integral power unit; steering via front wheel angle deflection; front wheels smaller than rear.\n\n**When articulated is preferred:**\n- Conventional optimal at 80-180 HP (smaller front wheels allow tighter turns)\n- Above 200 HP: conventional requires larger front wheels, dual/triple rear wheels, front axle power disconnect at >15-18° turns — structural complexity increases\n- Articulated: same-size wheels eliminate power loss from wheel mismatch; modular design simplifies maintenance; better high-power traction\n\n**Auto-steering relevance:** Understanding tractor type is essential for proper system installation and calibration.",
    tags: ["articulated-tractor", "steering", "auto-steering", "heavy-machinery"]
  },
  {
    id: 375, category: "rtk",
    keywords: ["engineering survey", "construction", "control survey", "deformation monitoring", "工程测量", "建筑施工", "monitoreo de deformación", "monitoramento de deformação"],
    question: "How is engineering survey technology applied across building construction stages?",
    answer: "**Three construction stages:**\n\n1. **Pre-construction:** Provide large-scale topographic maps via ground mapping and photogrammetry; establish plane and elevation control points — foundation of the entire project, no room for error.\n\n2. **In-construction:** Establish construction control network; layout building positions at required precision on-site; quality issues in this stage cause structural defects.\n\n3. **Post-construction:** Deformation monitoring — vertical settlement, horizontal displacement, tilt, deflection, wind vibration, sunlight deformation — ensures safe operation and protects user safety.\n\n**Control survey method:** Grid layout using building coordinate system (axes parallel to main structure); follows principle of whole-to-local, hierarchical control. Engineering surveying serves construction, water conservancy, transportation, mining and other sectors.",
    tags: ["engineering-survey", "construction", "control-survey", "deformation"]
  },
  {
    id: 376, category: "rtk",
    keywords: ["total station", "RTK", "comparison", "accuracy", "error propagation", "全站仪", "RTK对比", "estación total", "comparación", "estação total", "comparação"],
    question: "Which should I choose for surveying — a total station or a GNSS RTK receiver?",
    answer: "**Total Station:**\n- Requires visible light + mutual visibility (no line-of-sight obstructions)\n- Range: ~1000m without prism, 7-10km with prism\n- Millimeter-level accuracy but error accumulates with each station move (error propagation theory)\n- Best for: high-precision small-area, indoor/underground projects\n\n**GNSS RTK:**\n- Requires open sky (no intervisibility needed between points)\n- Range: up to 15km from single base\n- Centimeter-level accuracy (8mm+1ppm), error is relative between base and rover, does not accumulate\n- Best for: open-area, large-scale projects\n\n**Verdict:** RTK is more efficient for most open-field surveys; total station is essential for high-precision or heavily obstructed sites. Many large projects combine both instruments.",
    tags: ["total-station", "rtk", "comparison", "surveying"]
  },
  {
    id: 377, category: "agnav",
    keywords: ["autosteer", "SAgro100", "precision agriculture", "pass-to-pass accuracy", "自动驾驶", "精准农业", "agricultura de precisión", "agricultura de precisão"],
    question: "What are the four key benefits of using an auto-steering kit in farming?",
    answer: "**1. Reduced operator fatigue:** Frees hands from driving; no skilled driver needed; 24/7 continuous operation possible regardless of weather.\n\n**2. 2.5cm pass-to-pass accuracy:** Minimizes gaps/overlap, maximizing land utilization; enables precise fertilization, spraying, irrigation — saves fertilizer, water, and pesticide.\n\n**3. Smart farm management:** Auto-generates routes, records working area, eliminates human errors (missed/overlapped areas); supports multiple farms/plots management and task sharing.\n\n**4. Easy-to-use and low barriers:** Compatible with most tractor types; installed within 30 minutes; calibrated in 15 minutes; supports sowing, harvesting, plowing modes.",
    tags: ["autosteer", "precision-agriculture", "sagro100", "efficiency"]
  },
  {
    id: 378, category: "rtk",
    keywords: ["total station", "centering", "leveling", "setup procedure", "全站仪", "对中整平", "nivelación", "centrado", "estación total", "nivelamento"],
    question: "How to quickly center and level a total station?",
    answer: "**Centering:** Align instrument center with survey point on same plumb line.\n**Leveling:** Make vertical axis of instrument plumb by adjusting horizontal bubble.\n\n**Six-step procedure:**\n1. Set up tripod at shoulder height, center over known point through bolt hole, keep frame roughly level\n2. Attach total station, center leveling screws, place circular level above one tripod leg, tighten central bolt\n3. Rough centering: Enable laser, grasp two legs to suspend, adjust until laser hits the point\n4. Rough leveling: Adjust tripod legs to center circular level bubble\n5. Complete leveling: Align plate level parallel with two leveling screws A and B; rotate 90°, adjust screw C\n6. Final check: If leveling shifted centering, slightly loosen center bolt, slide instrument back, re-tighten",
    tags: ["total-station", "setup", "centering", "leveling"]
  },
  {
    id: 379, category: "rtk",
    keywords: ["base station", "Ntrip Caster", "DDNS", "continuous operation", "single base", "单基站", "连续运行", "estación base continua", "estação base contínua"],
    question: "How to set up a single continuous operation base station with Ntrip Caster and DDNS?",
    answer: "**What you need:** SV100 GNSS receiver, dynamic domain name, router with dynamic public IP support.\n\n**Setup steps:**\n1. SV100 web page: set as Base, obtain base coordinates, start base\n2. Enable Ntrip Server: address = 127.0.0.1, port to be mapped by router, set username/password/mountpoint\n3. Enable Ntrip Caster: same port and password as Ntrip Server\n4. Configure router: map SV100 internal port to router external port (e.g., 25001); enable DDNS account\n5. Access correction data via domain name + port — rovers get Fixed RTK solution\n\n**Benefits:** No static IP needed, no expensive CORS platform software — ideal for farms or construction sites needing permanent single-base coverage.",
    tags: ["base-station", "ntrip", "ddns", "sv100"]
  },
  {
    id: 380, category: "agnav",
    keywords: ["land leveling", "GNSS leveling", "laser leveling", "agriculture", "comparison", "土地平整", "激光平地", "nivelación láser", "nivelamento a laser"],
    question: "What is the difference between GNSS land leveling and laser land leveling?",
    answer: "**Accuracy:** Both achieve 2-3 cm — comparable precision.\n\n**Working range:**\n- Laser: 400m typical, up to 800-1000m with premium transmitters — limited to transmitter visibility\n- GNSS: 3-5km typical, up to 10-15km with long-range base (SL100) — much larger coverage\n\n**Environmental limits:**\n- Laser: Affected by visibility (dust, fog, haze); terrain height differences can block laser signal\n- GNSS: Unaffected by weather/terrain — operates 24/7 in open sky\n\n**Installation:** GNSS is easier — CORS users skip base setup; no need to relocate for large areas.\n\n**Cost:** GNSS is becoming more cost-effective with technology adoption. GNSS offers better comprehensive performance for modern farming as a newer land leveling method.",
    tags: ["land-leveling", "gnss", "laser", "agriculture", "comparison"]
  },
  {
    id: 381, category: "rtk",
    keywords: ["NTRIP", "Caster", "Client", "Server", "differential data protocol", "NTRIP协议", "caster", "protocolo NTRIP", "protocolo NTRIP"],
    question: "What is NTRIP Caster and how is it configured?",
    answer: "**NTRIP architecture (three roles):**\n- **Ntrip Server:** Sends GNSS correction data to Ntrip Caster (base station)\n- **Ntrip Caster:** The correction data center — receives, manages, and distributes GNSS data\n- **Ntrip Client:** Receives correction data from Ntrip Caster (rover)\n\n**Two delivery methods:**\n1. **Direct forward:** Client selects a specific mount point, caster forwards data unchanged\n2. **VRS mode:** Caster generates a virtual reference station near client from multiple Ntrip Sources; client must send its coordinates first\n\n**SV100 configuration:** Built-in Ntrip Server + Caster. Configure Ntrip Server (address = SV100 IP) and Ntrip Caster (same port/password). For remote access without static IP, combine with DDNS and route through domain name + port.",
    tags: ["ntrip", "caster", "differential", "cors"]
  },
  {
    id: 382, category: "rtk",
    keywords: ["RTK", "GIS", "mock location", "SingularPad", "data collection", "GIS采集", "模拟位置", "SIG", "localização simulada"],
    question: "How to use an RTK receiver with GIS software for data collection?",
    answer: "**Method 1 — Mock Location (standard users):**\n1. Connect Y1 receiver to SingularPad, configure as Ntrip Rover with Fixed RTK solution\n2. Enable Mock Location in SingularPad location services\n3. In Android Developer Options, select SingularPad as mock location app\n4. Any GIS software using Internal GPS mode now receives RTK-level positioning from Y1\n\n**Method 2 — Developer API:**\n- SingularPad location service provides Local Coordinates interface for GIS developers\n- Enables real-time conversion from WGS84 BLH to local XYZ coordinates\n- Contact SingularXYZ support for the development guide\n\n**Benefit:** Surveyors can use existing RTK equipment for ad-hoc GIS collection without buying dedicated GIS receivers.",
    tags: ["rtk", "gis", "mock-location", "singualrpad"]
  },
  {
    id: 383, category: "rtk",
    keywords: ["CORS platform", "Amazon Cloud", "AWS", "free server", "static IP", "亚马逊云", "免费服务器", "nube AWS", "servidor gratuito", "nuvem AWS"],
    question: "How to get a free static IP for a CORS platform using Amazon Cloud (AWS)?",
    answer: "**Step 1 — Create AWS account:** Go to aws.amazon.com, register/login, search EC2 module.\n\n**Step 2 — Launch Windows instance:**\n- Quick Start: Windows Server\n- Create new key pair (save the generated .pem file — needed to decrypt administrator password)\n- Configure security group, then launch instance\n\n**Step 3 — Get RDP credentials:**\n- Select instance > Connect > RDP client > Get Password > upload .pem file to decrypt\n\n**Step 4 — Connect:** Open Remote Desktop (search MST on Windows), enter public IP + username + password.\n\n**Important:** AWS offers 750 hours free for first-time users — terminate the instance when not in use to avoid charges. Next step: install CORS software (SNIP) on this remote server.",
    tags: ["cors", "aws", "cloud", "snip", "static-ip"]
  },
  {
    id: 384, category: "rtk",
    keywords: ["CORS platform", "SNIP", "port forwarding", "NTRIP Server", "mountpoint", "SNIP配置", "puerto", "porta"],
    question: "How to complete the free CORS platform setup with SNIP and connect SV100 base station?",
    answer: "**Part 1 — Create AWS port for data transfer:**\n- EC2 > Instances > Security > Security Groups > Edit inbound rules\n- Add rule: Custom TCP, port e.g. 8888, source anywhere, save\n\n**Part 2 — Install and configure SNIP:**\n- Install SNIP on the remote Windows server\n- Click IP map: enter private IP and created port (8888) > Connect (status changes to Listening)\n- Add pushed-in stream: set name, username, password for mountpoint\n\n**Part 3 — Connect SV100 to SNIP:**\n- SV100 web page > Work Management > NTRIP Server > Config\n- Enter: Caster Address (AWS public IP), Port (8888), User, Password, Mount Point\n- Select differential data type, check Startup, OK\n\n**Note:** Unregistered SNIP stays online 1 hour (5 stations); free registration enables permanent basic use (3 stations online).",
    tags: ["cors", "snip", "aws", "ntrip", "sv100"]
  },
  {
    id: 385, category: "rtk",
    keywords: ["Zigzag", "GIS", "feature collection", "code switching", "SingularPad", "自动切换编码", "recolección de elementos", "coleta de elementos"],
    question: "How does Zigzag in SingularPad simplify linear GIS feature collection?",
    answer: "**Zigzag function:** Automatically switches feature codes during linear GIS collection — surveyors can focus on surroundings (e.g., traffic) instead of the software screen.\n\n**Setup:**\n1. Connect receiver, get Fixed RTK, go to Point Survey > Settings > enable Zigzag\n2. Add codes (e.g., footpath, kerb, centerline) as polyline type\n\n**Road collection workflow example:**\n- Left side row: footpath (line 1) > kerb (line 1) > centerline (line 1) > kerb (line 2) > footpath (line 2)\n- Right side row: reverse sequence\n- Set collection interval (e.g., every 10m), progress across road row by row\n\n**Result:** Codes auto-switch between rows — no manual code changes needed, improving both safety and efficiency for linear feature collection.",
    tags: ["zigzag", "gis", "feature-collection", "singualrpad"]
  },
  {
    id: 386, category: "rtk",
    keywords: ["GNSS accuracy", "single point", "SBAS", "Doppler smooth", "no base station", "单点精度", "无基站", "precisión sin base", "precisão sem base"],
    question: "How accurate can GNSS achieve without a base station or RTK corrections?",
    answer: "**1. Single Point Mode (no correction):**\n- Accuracy: 2-3 meters for good receivers\n- Used in mobile phone GPS for daily navigation\n\n**2. SBAS Mode (regional satellite correction):**\n- Accuracy: <1m 3D RMS\n- Uses geostationary satellite corrections covering entire continents\n- Suitable for GIS projects and agricultural navigation with moderate accuracy needs\n\n**3. Doppler Smooth Mode (algorithm-based, no correction data):**\n- Accuracy: 15-30 cm (dynamic positioning only)\n- Uses Doppler algorithm to smooth GNSS points along movement trajectory\n- Suitable for vehicle-mounted systems like agricultural guidance (SAGro10)\n\n**Key takeaway:** SBAS and Doppler modes provide sub-meter to decimeter accuracy without any local base station — useful when RTK infrastructure is unavailable.",
    tags: ["single-point", "sbas", "doppler", "accuracy"]
  },
  {
    id: 387, category: "rtk",
    keywords: ["total station", "stakeout", "position sharing", "QR code", "SingularPad", "全站仪放样", "位置共享", "replanteo", "compartir posición", "locação"],
    question: "How to simplify total station stakeout using SingularPad position sharing via QR code?",
    answer: "**Position Sharing function** eliminates the need for intercom between observer and prism operator.\n\n**Step 1 — Connect and set station:**\n- Bluetooth connect TS1000 total station to SingularPad\n- Set station via Set Station & Orientation or Free Set Station method\n\n**Step 2 — Share stakeout data:**\n- Survey > Point Stakeout > import target points > click Share button\n- SingularPad generates a QR code containing real-time stakeout information\n\n**Step 3 — Prism operator follows prompts:**\n- Prism operator scans QR code with another phone\n- Gets real-time direction, distance, and position prompts on their screen\n- Simply follow software guidance to navigate to the correct stakeout position\n\n**Result:** No more shouting or intercom — prism operator independently finds stakeout points following on-screen prompts.",
    tags: ["total-station", "stakeout", "qr-code", "singualrpad"]
  },
  {
    id: 388, category: "rtk",
    keywords: ["CORS", "static data", "data quality", "PProcessing", "site analysis", "静态数据", "数据质量分析", "calidad de datos GNSS", "qualidade de dados GNSS"],
    question: "How to verify GNSS data quality before building a CORS station?",
    answer: "**Equipment:** SV100 receiver, SA500 choke ring antenna, antenna cable, tripod, tribrach, PProcessing software.\n\n**Step 1 — Record 24-hour static data:**\n- Mount SA500 antenna on tripod/tribrach, connect to SV100 via antenna cable\n- Login SV100 web page, verify normal satellite tracking\n- Work Management > Data Recording > Select 24H > Start Recording (keep power supply stable)\n- After 24h: download data record via web page\n\n**Step 2 — Analyze data quality:**\n- Import recorded file into PProcessing software\n- Right-click file > File Analyse > set threshold parameters (keep defaults for personal use)\n- Click Start — all quality indicators should pass\n\n**If all indicators pass:** The location is suitable for CORS construction. For professional projects, adjust warning parameters per project requirements.",
    tags: ["cors", "static-data", "data-quality", "pprocessing"]
  },
  {
    id: 389, category: "rtk",
    keywords: ["CORS", "antenna installation", "side wall", "steel pier", "lightning protection", "天线安装", "防雷", "instalación de antena GNSS", "instalação de antena"],
    question: "How to properly install a CORS station GNSS antenna?",
    answer: "**Outdoor components:** GNSS antenna, lightning rod, optional solar panels.\n**Indoor components:** GNSS receiver, antenna surge protectors, power supply, internet connection.\n\n**Method 1 — Side Wall Installation:**\n- For roof parapets: building <=30m, <=20 years old, concrete, wall thickness >20cm, height >70cm\n- Fix support rods with chemical bolts (all 4 screw holes used); base spacing 30-60cm\n- Steel pipe protrudes 30cm from wall; antenna cable in 30mm protective tube; all connections sealed\n- Lightning rod: insulator between rod and support (no direct contact); solder lead to ground\n\n**Method 2 — Steel Pier Installation:**\n- When no suitable wall exists; requires wide field of view (>10° elevation), no reflective objects nearby\n- Verify roof load-bearing capacity; add lightning rod if coverage insufficient",
    tags: ["cors", "antenna", "installation", "lightning"]
  },
  {
    id: 390, category: "rtk",
    keywords: ["total station", "RTK", "combined survey", "same coordinate system", "localization", "联合测量", "统一坐标系", "levantamiento combinado", "levantamento combinado"],
    question: "How to combine total station and RTK receiver surveying in the same coordinate system?",
    answer: "**Challenge solved:** SingularPad enables both instruments to work in the same local coordinate system without post-processing.\n\n**Requirements:** At least 2 known points in local coordinate system; TS1000 total station; Y1 RTK receiver.\n\n**Step 1 — Set station for total station:** Create new project, keep default coordinate parameters; Bluetooth connect TS1000; set station based on known points.\n\n**Step 2 — Set coordinate system for GNSS receiver:** Switch device type to GNSS, connect Y1; Project > Localization, use 3 known point pairs to transform geodetic to local system.\n\n**Step 3 — Survey:** Fluently switch between total station and GNSS — all points recorded in the same local coordinate system. Export in CSV, DXF, TXT.\n\n**Benefit:** Real-time status view, immediate problem detection, no re-measurement needed post-processing.",
    tags: ["total-station", "rtk", "combined-survey", "localization"]
  },
  {
    id: 391, category: "rtk",
    keywords: ["Mobile Topographer", "SingularSurv", "mock location", "Android", "third-party app", "第三方软件", "安卓模拟位置", "software externo", "software externo"],
    question: "How to make an RTK receiver work with Mobile Topographer or other third-party apps?",
    answer: "**Using SingularSurv (basic field software):**\n\n**Step 1:** Connect Y1 receiver to SingularSurv, create work mode (e.g., PDA CORS) and get Fixed RTK solution.\n\n**Step 2:** In SingularSurv Settings, enable Mock Location — this shares RTK coordinate information to the Android device.\n\n**Step 3:** Enable Developer Options: Settings > About Phone > tap Build Number 5 times. Then in Developer Options > Select Mock Location App, choose SingularSurv.\n\n**Step 4:** Open Mobile Topographer or any other software — it receives RTK positioning data as if from internal GPS.\n\n**Same method works for:** SingularPad, GIS software, and any app using Android location services.",
    tags: ["mobile-topographer", "mock-location", "singualrsurv", "gis"]
  },
  {
    id: 392, category: "rtk",
    keywords: ["RTK", "RTD", "DGPS", "carrier phase", "pseudo-range", "实时差分", "载波相位", "伪距", "fase portadora", "pseudo-distancia", "fase portadora"],
    question: "What is the difference between RTK and RTD (Real-Time Differential)?",
    answer: "**RTD (Real-Time Differential):**\n- Differential technology: Pseudo-range code (C/A, P) comparison\n- Accuracy: Sub-meter level\n- Working range: >100 km — easy to fix, lower cost\n- Best for: Vehicle navigation, agricultural spraying (moderate accuracy)\n\n**RTK (Real-Time Kinematic):**\n- Differential technology: Carrier phase (L1, L2, L5) comparison\n- Accuracy: Centimeter level — carrier code rate is much higher than pseudo-range\n- Working range: >20 km — harder to fix, higher cost\n- Best for: Land surveying, machine guidance (high accuracy)\n\n**Key difference:** RTD corrects by comparing pseudo-range codes; RTK corrects by comparing carrier phase observations. Carrier phase has much higher resolution, enabling superior precision. Both are types of DGPS.",
    tags: ["rtk", "rtd", "dgps", "comparison"]
  },
  {
    id: 393, category: "rtk",
    keywords: ["Alibaba Cloud", "CORS", "free server", "ECS", "Windows Server", "阿里云", "免费云服务器", "nube Alibaba", "servidor gratuito", "nuvem Alibaba"],
    question: "How to build a CORS server for free using Alibaba Cloud?",
    answer: "**Advantage over AWS:** Alibaba Cloud offers free trial packages valid for a full year (vs AWS 750 hours).\n\n**Step 1 — Create account:** Go to alibabacloud.com, register/login, select Elastic Compute Service (ECS).\n\n**Step 2 — Configure instance:**\n- Choose Windows Server OS\n- Check 'Assign Public IPv4 Address' in Networking settings\n- Set login username and password in System Configurations\n\n**Step 3 — Map CORS port:**\n- Network & Security > Security Groups > Add Rule\n- Direction: Ingress; Port: e.g. 9999; Authorization: 0.0.0.0/0; Save\n\n**Step 4 — Configure server:**\n- Use Remote Desktop (MST) with public IP, username, password\n- Install CORS software (e.g., SNIP) on the server\n- Connect SV100 to the server via NTRIP Server settings using public IP and mapped port",
    tags: ["cors", "alibaba-cloud", "free", "ecs"]
  },
  {
    id: 394, category: "rtk",
    keywords: ["choke ring antenna", "multipath interference", "geodetic antenna", "CORS reference station", "扼流圈天线", "多路径干扰", "antena choke ring", "antena geodésica", "antena de anel", "interferência multicaminho"],
    question: "Should I choose a choke ring antenna or a geodetic antenna for my reference station?",
    answer: "**Choke ring antenna:**\n- Circular rings with slots create high-impedance surface blocking reflected signals\n- Effectively mitigates multipath interference — only direct satellite signals reach the antenna\n- Quarter-wavelength deep design, very smooth controlled signal pattern\n- Professional choice for national CORS and large monitoring projects\n- Cost: ~4-5x higher than geodetic antennas\n\n**Geodetic antenna:**\n- Smaller, lower-cost alternative with good market-proven performance\n- Suitable for personal reference stations without strict project requirements\n\n**Recommendation:**\n- **Sufficient budget + professional CORS:** Choke ring (SA500)\n- **Personal use, cost-sensitive:** Geodetic antenna (SA100)\n\n**SingularXYZ offers both:** SA500 choke ring and SA100 geodetic antenna for different project needs.",
    tags: ["choke-ring", "antenna", "multipath", "cors"]
  },
  {
    id: 395, category: "agnav",
    keywords: ["AB line", "guidance line", "auto-steering", "portable GNSS", "AB引导线", "自动驾驶", "línea guía AB", "linha guia AB"],
    question: "How to measure an AB guidance line for auto-steering using a portable GNSS receiver?",
    answer: "**Why portable GNSS:** Driving a tractor across large farms just to mark points A and B wastes fuel — a portable receiver is faster and more efficient.\n\n**Step 1 — Measure AB line:**\n- Create project in SingularPad, Ellipsoid = WGS-84\n- Connect portable GNSS (P1/T8 Pro/Y1), get Fixed RTK solution\n- Tools > AB Line: measure Point A (start), then Point B (end)\n\n**Step 2 — Export:**\n- For SAgro100: export as *.ini file format\n- For other auto-steering systems: export as *.shp file format\n\n**Step 3 — Import to auto-steering tablet:**\n- Copy file to USB, insert into T10 tablet\n- SAgro100 software: AB > Manage > USB > import AB line\n\n**Additional use:** Same portable GNSS can measure farm boundaries and plot perimeters for smart farm management.",
    tags: ["ab-line", "auto-steering", "guidance", "singualrpad"]
  },
  {
    id: 396, category: "rtk",
    keywords: ["solar storm", "ionosphere", "RTK error", "F10.7", "solar activity", "太阳风暴", "电离层干扰", "tormenta solar", "ionosfera", "tempestade solar", "ionosfera"],
    question: "How do solar storms affect RTK surveying and what can be done about it?",
    answer: "**How solar storms affect RTK:**\n- Solar radiation ionizes ionospheric particles — changes signal propagation time AND bends signal path\n- RTK double-difference algorithm assumes consistent ionospheric delay between base and rover\n- During active solar periods, this assumption breaks down — causes difficulty getting Fixed solution and reduced accuracy\n- Effect worsens with longer baselines; VRS accuracy also degrades when ionosphere is overly active\n\n**Monitoring:** F10.7 index (solar 10.7cm radio flux) indicates heating/ionization level — check Space Environment Prediction Center forecasts.\n\n**Mitigation during active solar periods:**\n- Use shorter baselines when possible\n- Avoid working during peak daytime solar activity hours\n- Use full-constellation receivers tracking more satellites\n- Expect slower re-initialization times — be patient with equipment",
    tags: ["solar-storm", "ionosphere", "rtk-error", "accuracy"]
  },
  {
    id: 397, category: "rtk",
    keywords: ["grid shift", "relative accuracy", "absolute accuracy", "base station restart", "网格校正", "相对精度", "precisión relativa", "precisão relativa"],
    question: "How does Grid Shift maintain surveying accuracy when restarting a base station without known points?",
    answer: "**The problem:** Auto-base mode gives meter-level single-point positioning — each restart creates a different base coordinate, causing meter-level offsets in rover measurements even at the same point.\n\n**Grid Shift solution:**\n1. Day 1: Start base in auto-base mode, survey normally, measure a reference point\n2. Day 2 onwards: When restarting base, select the previously measured point as base station point\n3. This locks the base to the same relative coordinate frame — relative accuracy (point-to-point) is preserved across sessions\n\n**In SingularPad:** Use Calibrate Point function to set base from a measured point.\n\n**If known points become available later:** Use Localization function to shift all project points to the known coordinate system.\n\n**Key concept:** Grid Shift preserves relative accuracy even when absolute accuracy (to a known reference) is unavailable.",
    tags: ["grid-shift", "relative-accuracy", "base-station", "localization"]
  },
  {
    id: 398, category: "rtk",
    keywords: ["IMU", "accuracy test", "tilt survey", "inclination", "RTK倾斜测量", "IMU精度测试", "prueba de precisión IMU", "teste de precisão IMU"],
    question: "How to test the accuracy of an IMU RTK receiver?",
    answer: "**Test preparation:** Y1 GNSS receiver, SingularPad software, PDA. Choose test points in 3 scenes: Open sky, under tree, near building.\n\n**Step 1 — Reference measurement:** Turn OFF IMU, center pole precisely, measure each point = reference coordinates.\n\n**Step 2 — Tilt measurements:** Turn ON IMU. At each point, measure at 4 directions (E, W, N, S) and at tilt angles 0°, 10°, 20°, 30°, 40°, 50°, 60° (Y1 supports up to 60° tilt). Total: 16 measurements per point.\n\n**Step 3 — Compare:** Error = tilt measurement - reference. Analyze how horizontal and vertical accuracy change as tilt angle increases.\n\n**Expected result (Y1):** <3cm error across all tilt angles up to 60°. Test demonstrates IMU performance degrades predictably with increasing tilt — choose appropriate tilt angle for required accuracy.",
    tags: ["imu", "accuracy", "tilt-survey", "calibration"]
  },
  {
    id: 399, category: "rtk",
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
    id: 400, category: "rtk",
    keywords: ["VRS", "virtual reference station", "CORS", "nearest mount point", "虚拟参考站", "最近基站", "estación virtual de referencia", "estação virtual de referência"],
    question: "What is VRS (Virtual Reference Station) and how does it compare to nearest mount point?",
    answer: "**VRS (Virtual Reference Station):**\n- CORS platform generates a virtual base station within several meters of the rover\n- Requires at least 3 physical reference stations in the area\n- Platform solves real-time error model, then virtualizes a station around rover's transmitted coordinates\n- Largely shortens baseline distance, improving RTK accuracy\n\n**Nearest method:**\n- Automatically selects closest physical base station based on rover location — no virtual computation needed\n\n**Key difference:** Both require bidirectional data (rover sends position first). Normal mount points are one-way only.\n\n**Historical context:** VRS was critical when CORS stations were sparse (long baselines). Today, with denser CORS networks and lower construction costs, Nearest is more commonly used due to simpler platform requirements.",
    tags: ["vrs", "cors", "mount-point", "nearest"]
  },
  {
    id: 401, category: "rtk",
    keywords: ["RTK performance", "re-initialization time", "accuracy test", "baseline test", "RTK性能测试", "重新初始化时间", "prueba de rendimiento RTK", "teste de desempenho RTK"],
    question: "How to test RTK receiver performance — accuracy and re-initialization time?",
    answer: "**Test setup:** Short baseline 100m + long baseline 10km. Choose points in Open sky, under tree, near building scenes.\n\n**Step 1 — Reference coordinates:** Record smooth GPS points (5-10 epoch average) at each test point.\n\n**Step 2 — Re-initialization test:**\n- At each point, invert receiver until Fixed RTK becomes Single solution\n- Put upright, record time from Single back to Fixed\n- Measure point coordinate after re-initialization\n- Repeat at least 5 times per point per scene\n\n**Step 3 — Analysis:**\n- Accuracy: Compare each measurement to reference; calculate error (horizontal and vertical)\n- Re-initialization time: Calculate the average across repetitions\n- Example Y1 result: Average re-initialization <3 seconds across different environments and baseline distances",
    tags: ["rtk", "performance", "re-initialization", "accuracy-test"]
  },
  {
    id: 402, category: "agnav",
    keywords: ["spline sleeve", "SAgro100", "tractor compatibility", "steering shaft", "keyway", "花键套", "转向轴", "manga estriada", "compatibilidad", "luva estriada", "compatibilidade"],
    question: "How do spline sleeves enable SAgro100 auto-steering compatibility with different tractors?",
    answer: "**What is a spline sleeve:**\n- Part that transmits mechanical torque between electric motor and tractor steering shaft\n- Tractor steering shaft surface has longitudinal keyways (grooves); spline sleeve has matching keyways\n- When keyways fit together, motor rotation drives the steering shaft synchronously — controlling tractor steering\n\n**How to select the right spline:**\n1. Count the number of teeth (grooves) on your tractor steering shaft\n2. Measure the shaft diameter\n3. Select spline with matching teeth count and diameter from the compatibility table\n\n**SingularXYZ provides:** Standard splines covering mainstream tractor models. If your model is not in the table, custom splines can be manufactured based on your shaft's teeth count and diameter.\n\n**Critical:** Wrong spline = motor cannot properly control steering.",
    tags: ["spline-sleeve", "sagro100", "installation", "compatibility"]
  },
  {
    id: 403, category: "agnav",
    keywords: ["SAgro100", "signal connection", "SAT", "RTK fix", "network error", "信号连接", "故障排查", "conexión de señal", "conexão de sinal"],
    question: "How to troubleshoot SAgro100 auto-steering signal connection issues?",
    answer: "**SAT shows 0:**\n- After startup always 0: Check antenna port/cable connections and replace if needed\n- During ignition: Normal battery voltage drop, will recover after startup\n- SAT becomes 0 while driving: Unstable battery voltage — add voltage regulator module\n\n**Network Error displayed (top right):**\n- Network not enabled: Restart network in Tablet Settings\n- No carrier info: Select different operator in APN, restart\n- 4G card failure: Replace SIM card\n\n**RTK shows Float (despite >20 satellites):**\n- **External radio:** Raise base antenna, increase transmit power, change frequency channel; ensure tractor is within working range\n- **4G mode:** Check network status; verify base station tracks full constellations",
    tags: ["sagro100", "signal", "troubleshooting", "rtk"]
  },
  {
    id: 404, category: "agnav",
    keywords: ["SAgro100", "auto-steering", "motor", "angle sensor", "guidance", "转向电机", "角度传感器", "motor de dirección", "motor de direção"],
    question: "How to troubleshoot SAgro100 auto-steering motor and guidance issues?",
    answer: "**Motor doesn't work:**\n- Check main interface: if Motor Firmware shows 'error' instead of version — motor needs repair\n- Check angle sensor median: 90° sensor = 60°±10°, 120° = 80°±10°, 360° = 240°±10°\n- Turn left = value decreases, turn right = increases; if opposite, adjust inversion mode\n- Motor control mode must be Speed Mode\n- Motor suddenly stopped: configuration file may be lost — try clearing cache\n\n**Guidance icon moves backwards while tractor moves forward:** Two GNSS antennas installed reversed — connect left antenna to Port 1, right to Port 2.\n\n**Steering wheel turns to one direction limit:** Antennas reversed (check above) or angle sensor setting issue.\n\n**Auto-steering stops during driving:** Manual steering override sensitivity too high — change override value to 10.",
    tags: ["sagro100", "steering", "motor", "troubleshooting"]
  },
  {
    id: 405, category: "rtk",
    keywords: ["SV100", "portable base", "field setup", "GSM mode", "radio mode", "便携基站", "SV100设置", "estación base portátil", "estação base portátil"],
    question: "How to set up SV100 as a portable base station in the field?",
    answer: "**Equipment:** SV100, SA100 antenna, external power + DC cable, SIM card (GSM), tripod + 30cm extension bar.\n\n**Installation:**\n- Attach SV100 hook to tripod; install SA100 antenna on tripod, connect via GNSS cable\n- GSM mode: install 4G antenna + insert SIM\n- Radio mode: install whip antenna on SV100\n- Connect external power via DC cable\n- For known point: use tribrach to center SA100 antenna, measure height to ARP\n\n**Configuration via mobile web (192.168.10.12, login admin/admin):**\n1. Device Config > Working Mode > Base: GET coordinates, Start Base\n2. Antenna Setting: input measured height, select SA100 type\n3. GSM mode: GSM Config > Startup 4G; then NTRIP Server > Config (Caster IP, Port, Mountpoint), Startup\n4. Radio mode: Radio > Transmit, set frequency/protocol/power, Startup\n\n**WiFi password:** 12345678 (default).",
    tags: ["sv100", "portable-base", "field-setup", "gsm"]
  },
  {
    id: 406, category: "agnav",
    keywords: ["SAgro100", "steering track", "curves", "AB line deviation", "angle sensor calibration", "轨迹偏差", "曲线修正", "desviación de línea", "desvio de linha"],
    question: "How to fix SAgro100 steering track issues — curves and deviation from AB line?",
    answer: "**Small curves in track:**\n- Verify vehicle parameters are accurate\n- Adjust Sensitivity (higher at faster speeds; default for 3-4 km/h)\n- Adjust Transmission Coefficient: increase if wheel turns too slow, decrease if too fast (range 0-320)\n- Check motor and implement are firmly mounted — no shaking\n\n**Big curves in track:**\n- Check Motor Firmware status (error = replace)\n- Verify angle sensor median and direction; reinstall if incorrect\n- Re-calibrate if system unused for long time\n- Software corruption: record params, export data, delete software folder, restart\n\n**Fixed deviation in one direction:** Enable lateral slope compensation for sloped plots; check median.\n\n**Spacing wider on one side:** Push implement toward wider side; if cannot, use simulated farm tool offset (1/4 of spacing difference).",
    tags: ["sagro100", "steering", "troubleshooting", "calibration"]
  },
  {
    id: 407, category: "rtk",
    keywords: ["RTK", "receiver comparison", "P1", "T8 Pro", "Sfaira ONE", "Y1", "接收机对比", "P1", "Y1", "comparación de receptores", "comparação de receptores"],
    question: "Which SingularXYZ RTK rover should I choose for my work?",
    answer: "**All share:** Full-constellation tracking with advanced anti-interference for strong GNSS positioning.\n\n**P1 (184 channels):** 4G, wearable/portable, data return. Best for: handheld GIS, personnel tracking, AB guidance line + boundary measurement.\n\n**T8 Pro (1408 channels):** All-in-one antenna+module+PDA. Handheld or pole-mounted. Best for: professional GIS, professional surveying with geodetic antenna, AB line measurement.\n\n**Sfaira ONE (1408 channels):** Ultra-portable, Bluetooth only, simple operation. Best for: professional surveying in areas with good 4G network, AB line measurement.\n\n**Y1 (1598 channels):** Full-featured flagship. 15km internal UHF, 4G/WiFi/Bluetooth. Best for: professional surveying in any environment (urban, forest, remote), AB line measurement, all professional surveying tasks.",
    tags: ["rtk", "comparison", "p1", "y1", "t8-pro"]
  },
  {
    id: 408, category: "rtk",
    keywords: ["PPK", "post-processing", "drone surveying", "OTF", "initialization", "动态后处理", "无人机", "post-procesamiento cinemático", "pós-processamento cinemático"],
    question: "How to conduct PPK (Post-Processing Kinematic) field survey?",
    answer: "**PPK advantage:** No real-time data link needed — raw data recorded, processed later. Supports 5Hz, 10Hz, up to 50Hz positioning — ideal for high-speed drone surveying.\n\n**Field procedure:**\n\n**Step 1 — Base station:** Set up Y1 base, start static data recording (press record button or configure in SingularSurv).\n\n**Step 2 — Rover initialization:**\n- Connect Y1 to SingularSurv, Survey > PPK > File, create new PPK file\n- Click Init, keep receiver stable until initialization completes (OTF On-The-Flying ambiguity resolution, 10-30s)\n\n**Step 3 — Survey:** Start surveying in PPK interface; each observation obtains centimeter-level 3D coordinates.\n\n**Step 4 — Export:** Download base static data and rover PPK file. Post-process using PProcessing software (supports standard RINEX format).\n\n**Tip:** PPK handles environments where RTK data link is unstable — common in UAV surveys and canopy-covered areas.",
    tags: ["ppk", "drone", "post-processing", "survey"]
  },
  {
    id: 409, category: "rtk",
    keywords: ["area calculation", "plot division", "SingularPad", "perimeter", "面积计算", "地块分割", "cálculo de área", "división de parcela", "cálculo de área", "divisão de lote"],
    question: "How to calculate and divide plot area in SingularPad software?",
    answer: "**Calculate plot area:**\n- Tools > Perimeter and Area > add boundary points via Button Library (measured points) or import known points\n- If point names follow same format, software auto-recognizes numbering sequence to generate plot\n- Perimeter and area calculated and displayed; preview map confirms correct plot boundary\n\n**Divide plot by specific size (two methods):**\n\n**1. Divide by point:** Select a boundary point, enter desired area in m² — software draws line from that point to split plot. Divide point coordinates saved in library for stakeout.\n\n**2. Divide by line:** Select a boundary line, enter desired area — software draws parallel line to split the plot.\n\n**Application:** Land parcel management, property subdivision, surveying field verification and planning.",
    tags: ["area", "plot-division", "singualrpad"]
  },
