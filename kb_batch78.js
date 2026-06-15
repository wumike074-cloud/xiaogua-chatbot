,
  {
    id: 450, category: "rtk",
    keywords: ["STRSVR", "RTKLIB", "GNSS", "data transfer", "NTRIP", "serial port", "数据传输", "调试工具", "transferencia", "datos", "transferência", "depuração"],
    question: "What is STRSVR and how do I use it for GNSS data transfer and debugging?",
    answer: "**STRSVR is a network transfer tool from RTKLIB for GNSS data streaming:**\n\n- Supports Serial, FTP, HTTP, TCP Client/Server, File, and NTRIP protocols\n- Input NTRIP Client to retrieve CORS corrections; Output NTRIP Server to broadcast data to a caster\n- Green=normal, Yellow=warning, Red=failure for each transmission channel\n- Use Serial input + File output to log raw data for debugging\n- Use TCP/UDP modes for fast device-to-device data exchange",
    tags: ["gnss", "ntrip", "debugging"]
  },
  {
    id: 451, category: "rtk",
    keywords: ["RTK", "solution", "SINGLE", "DGNSS", "FLOAT", "FIXED", "accuracy", "差分", "固定解", "solución", "precisión", "solução", "precisão"],
    question: "What do the RTK solution statuses SINGLE, DGNSS, FLOAT, and FIXED mean?",
    answer: "**RTK solution statuses indicate positioning accuracy level:**\n\n- SINGLE: No corrections, meter-level accuracy, default when only tracking satellites\n- DGNSS: Receiving corrections but coarse, meter to sub-meter accuracy\n- FLOAT: Processing corrections but integer ambiguities not resolved, decimeter-level\n- FIXED: Integer ambiguities resolved, centimeter-level, ready for professional surveying\n- Monitor differential age: 1-2s ideal for CORS/GSM, 2-5s for radio mode",
    tags: ["rtk", "accuracy", "fixed"]
  },
  {
    id: 452, category: "agnav",
    keywords: ["autosteer", "crash", "lag", "PrecisionAg", "T10", "tablet", "stuck", "崩溃", "卡顿", "bloqueo", "retraso", "travamento", "atraso"],
    question: "How to fix PrecisionAg autosteer software stuck or crashing on the T10 tablet?",
    answer: "**Resolve crashes by clearing old database and reinstalling PrecisionAg:**\n\n- Backup tractor/implement parameters before uninstalling (settings will be lost)\n- Export AB lines to USB if you need to keep previous guidance lines\n- Uninstall PrecisionAg and delete the Intnavigation folder under File Explorer > Download\n- Reinstall PrecisionAg from USB; latest version only caches 1 week of data\n- Contact support@singularxyz.com for remote reinstallation if needed",
    tags: ["autosteer", "troubleshooting", "precisionag"]
  },
  {
    id: 453, category: "rtk",
    keywords: ["static", "data", "GNSS", "Sfaira ONE", "RINEX", "SingularConverter", "静态数据", "原始数据", "datos", "estáticos", "dados", "estáticos"],
    question: "How to obtain GNSS static data from the Sfaira ONE Series receiver?",
    answer: "**Sfaira ONE lacks internal storage but you can log static data via USB:**\n\n- Connect via Type-C USB cable to PC and open a serial tool (e.g. SuperCom)\n- Send commands: OBSVMB 1, GPSEPHB ONCHANGED, BDSEPHB ONCHANGED, GLOEPHB ONCHANGED, GALEPHB ONCHANGED\n- Save log file from serial tool, rename extension to *.xyz\n- Use SingularConverter software to convert *.xyz to standard RINEX format for post-processing",
    tags: ["static", "rinex", "sfaira"]
  },
  {
    id: 454, category: "rtk",
    keywords: ["SBAS", "PPP", "Sfaira ONE", "Galileo HAS", "BDS B2b", "无基站", "星基增强", "sin", "base", "sem", "estação"],
    question: "How to enable SBAS and PPP modes on the Sfaira ONE Series receiver?",
    answer: "**SBAS and PPP provide positioning without a base station on Sfaira ONE:**\n\n- Verify firmware version 11492+ via Debug page command \"log version\"\n- For PPP (20cm): Set Datalink to PPP, choose E6-HAS (Galileo) or B2b (BDS), wait ~10 min for convergence\n- For SBAS (submeter): Tap Satellite icon > Settings > toggle SBAS ON; status changes to DGNSS\n- Both modes require no CORS account or base station, ideal for remote areas",
    tags: ["sbas", "ppp", "sfaira"]
  },
  {
    id: 455, category: "rtk",
    keywords: ["SingularCaster", "upgrade", "reinstall", "CORS", "PostgreSQL", "升级", "重装", "actualización", "reinstalación", "atualização", "reinstalação"],
    question: "How to properly reinstall or upgrade SingularCaster software?",
    answer: "**SingularCaster has three components (Database, Server, Client) that must be installed in sequence:**\n\n- Uninstall in order: PostgreSQL (Database), SingularPointCasterService (Server), SingularPointClient (Client)\n- Delete all related folders and old log files (do NOT delete regcode files needed for reactivation)\n- Reinstall in order: Database, Server, then Client using latest version from SingularXYZ\n- Contact support if you encounter issues during installation",
    tags: ["caster", "cors", "installation"]
  },
  {
    id: 456, category: "scanner",
    keywords: ["total station", "angle units", "DEG", "GON", "MIL", "TS1000", "角度单位", "全站仪", "unidades", "ángulo", "unidades", "ângulo"],
    question: "What are the different angle units (DEG, GON, MIL) and how to switch them on the TS1000?",
    answer: "**Three angle unit systems with different circle divisions:**\n\n- DEG (Degree): 360 parts per circle, standard worldwide for mapping and geography\n- GON (Gradian): 400 parts per circle, common in European engineering; 1 GON = 0.9 degrees\n- MIL (Milliradian): NATO standard 6400/circle or Metric 2000/circle, used in military/artillery\n- To switch on TS1000: Hold F2+POWER, press F1 for UNIT SET, F3 to ANGLE, select unit, F4 to confirm",
    tags: ["total-station", "angle", "ts1000"]
  },
  {
    id: 457, category: "rtk",
    keywords: ["SingularThings", "IoT", "P2", "device", "MQTT", "platform", "物联网", "plataforma", "conectar", "dispositivo", "conectar", "dispositivo"],
    question: "How to add and connect P2 devices to the SingularThings IoT platform?",
    answer: "**Connect P2 devices via MQTT to SingularThings IoT platform:**\n\n- In platform: Entities > Devices > Add new device, set Credentials to MQTT Basic, configure Client ID/Username/Password\n- In SingularNav app: Go to IoT section, enter matching Client ID/Username/Password, toggle Enable and Save\n- Status shows \"Connection\" and device state updates to \"Active\" when successful\n- Platform features include geofencing, real-time tracking, trajectory recording, and operation area statistics",
    tags: ["iot", "p2", "mqtt"]
  },
  {
    id: 458, category: "rtk",
    keywords: ["Orion ONE", "laser", "surveying", "green", "laser", "accuracy", "IMU", "激光测量", "precisión", "láser", "precisão", "laser"],
    question: "How accurate is the Orion ONE laser surveying and what is its effective range?",
    answer: "**Orion ONE laser surveying provides centimeter-level accuracy with important limitations:**\n\n- Specification accuracy: ≤5.5cm within 60-degree tilt range at 5-meter distance\n- Real-world tests showed <3cm difference vs. traditional pole measurements\n- Recommended range limited to 10m due to IMU angular error amplification, laser divergence, and aiming precision\n- Use a bipod for stability; hand tremors can affect accuracy significantly\n- Green laser is visible even in strong sunlight for easy targeting",
    tags: ["orion", "laser", "accuracy"]
  },
  {
    id: 459, category: "rtk",
    keywords: ["Orion ONE", "laser", "AR", "WiFi", "Bluetooth", "surface", "performance", "性能", "superficie", "rendimiento", "superfície"],
    question: "What are the limitations and additional performance features of Orion ONE?",
    answer: "**Key facts about Orion ONE laser/AR limitations and overall performance:**\n\n- Laser works best on smooth, solid, light-colored surfaces (concrete, asphalt, metal); poor on glass or liquids\n- WiFi is only needed for AR stakeout image transmission; Bluetooth handles GNSS data and commands\n- After disabling AR, WiFi can be turned off without affecting other operations\n- Features 4x ARM Cortex-A7 1.5GHz, 2T NPU, 4K 30FPS video, H.264/H.265 encoding\n- Dual-band WiFi (2.4G+5G) at 150Mbps with low-latency transmission; 15km enhanced UHF radio",
    tags: ["orion", "ar", "performance"]
  },
  {
    id: 460, category: "rtk",
    keywords: ["Orion ONE", "laser", "surveying", "IMU", "bipod", "non-contact", "激光", "免接触", "medición", "sin", "contacto", "medição"],
    question: "How to perform laser surveying step by step with the Orion ONE receiver?",
    answer: "**Step-by-step laser surveying with Orion ONE:**\n\n- Connect Orion ONE to SingularPad via Bluetooth and achieve RTK FIXED solution first\n- Initialize IMU tilt function as prompted by software; shake device to stabilize; check IMU icon shows \"Ready\"\n- In Point Survey interface, turn on laser; aim beam at target and click survey button\n- Recommended operating range: 3-5 meters for optimal accuracy\n- Use a bipod to reduce shaking; avoid direct eye exposure to laser radiation",
    tags: ["orion", "laser", "surveying"]
  },
  {
    id: 461, category: "rtk",
    keywords: ["Orion ONE", "AR", "stakeout", "augmented reality", "WiFi", "camera", "放样", "增强现实", "realidad", "aumentada", "realidade", "aumentada"],
    question: "How to use Visual AR Stakeout with the Orion ONE receiver?",
    answer: "**AR Stakeout overlays stakeout points on live camera view for intuitive guidance:**\n\n- Ensure RTK FIXED solution; if using CORS mode, insert SIM in collector for internet (WiFi used for AR)\n- Initialize IMU tilt function via Survey > Point Survey > IMU button, shake pole to finish\n- Import stakeout points, select one, click Stakeout > AR icon; connect to Orion ONE WiFi (SN name, password 12345678)\n- Ensure receiver faces backward; follow on-screen prompts to align rod tip with highlighted target point\n- Click survey button to complete; WiFi can be disconnected after AR is done",
    tags: ["orion", "ar", "stakeout"]
  },
  {
    id: 462, category: "rtk",
    keywords: ["RTK", "comparison", "lineup", "GNSS", "receiver", "Orion ONE", "Z1", "X1", "P2", "Sfaira ONE", "选型", "对比", "comparación", "comparação"],
    question: "Which SingularXYZ GNSS RTK receiver should I choose for my surveying needs?",
    answer: "**SingularXYZ 2025 RTK lineup comparison by application:**\n\n- Orion ONE: Visual AR stakeout + laser surveying, most advanced feature set\n- Z1: Palm-sized RTK, portable with IMU tilt and 15-hour battery\n- X1-Series: Full-functional RTK with radio base+rover capability and comprehensive features\n- P2-Series: Wearable RTK with triple-alert safety, ideal for GIS and personnel tracking\n- Sfaira ONE Series: Portable RTK with PPP and SBAS, 16-hour battery, IMU tilt\n- For CORS stations use N1 or SV100; for vehicle navigation use SV100 Dual or FOG",
    tags: ["rtk", "comparison", "lineup"]
  },
  {
    id: 463, category: "rtk",
    keywords: ["SingularPad", "license", "transfer", "activate", "QR", "code", "许可证", "转移", "licencia", "transferir", "licença", "transferir"],
    question: "How to transfer a SingularPad permanent license to a new device?",
    answer: "**Two methods to transfer SingularPad license depending on old device condition:**\n\n- If old device works: Open SingularPad > Project > About Software > Transfer Out Code, save the QR/license code\n- On new device: Install SingularPad > Project > About Software > Software Activation, enter code or scan QR\n- If old device is damaged: Contact support@singularxyz.com with device SN and order details for backend license reset\n- Once transferred, the old device can no longer use SingularPad",
    tags: ["singularpad", "license", "activation"]
  },
  {
    id: 464, category: "rtk",
    keywords: ["Z1", "web", "page", "WiFi", "Bluetooth", "firmware", "static", "数据", "网页", "página", "web", "configuração"],
    question: "How to access the Z1 GNSS receiver web interface for data download and settings?",
    answer: "**Z1 Bluetooth and WiFi cannot operate simultaneously; switch to WiFi first:**\n\n- Connect Z1 to SingularPad via Bluetooth, go to Device > Device Settings, enable WiFi (keep default IP 192.168.10.12)\n- On PC/mobile, connect to Z1 WiFi (SSID = device SN, password = 12345678)\n- Open browser, enter 192.168.10.12, login with username: admin, password: admin\n- Use web interface to download static data, configure settings, or perform firmware updates",
    tags: ["z1", "wifi", "configuration"]
  },
  {
    id: 465, category: "agnav",
    keywords: ["autosteer", "farm", "plot", "AB line", "guidance", "PrecisionAG", "任务管理", "地块", "gestión", "tareas", "gerenciamento", "talhões"],
    question: "How to efficiently manage guidance lines across different farms and plots in PrecisionAG?",
    answer: "**Organize guidance lines by creating separate farms and plots in PrecisionAG:**\n\n- New AB lines go to Default Farm > Default Plot by default; create custom farms via Farm > Add Farm\n- Add plots within each farm: select farm > Add Plot, use Path method to drive tractor along perimeter boundary\n- After setting boundaries, create guidance lines under their respective plots for organized navigation\n- This structure allows quick location, switching, and reuse of AB lines across different fields",
    tags: ["autosteer", "precisionag", "guidance"]
  },
  {
    id: 466, category: "rtk",
    keywords: ["coordinate", "mismatch", "localization", "WGS84", "CAD", "SketchUp", "transformation", "坐标系", "转换", "coordenadas", "transformación", "coordenadas", "transformação"],
    question: "How to resolve coordinate mismatches between design drawings and RTK measurements?",
    answer: "**Use the Localization feature in SingularXYZ software to align GNSS and design coordinates:**\n\n- GNSS uses global WGS84 coordinates; CAD/SketchUp models use local project coordinate systems\n- Collect control points in the field with RTK GNSS, then input corresponding design coordinates\n- The software computes transformation parameters to align both coordinate systems\n- All subsequent survey points are automatically converted to the correct design coordinate system\n- Applications: construction stakeout, road/bridge engineering, cadastral surveys, infrastructure projects",
    tags: ["localization", "coordinates", "transformation"]
  },
  {
    id: 467, category: "rtk",
    keywords: ["receiver", "front", "panel", "indicators", "LED", "satellite", "battery", "状态灯", "指示灯", "indicadores", "panel", "indicadores", "painel"],
    question: "How to read GNSS receiver status from front panel indicators and buttons?",
    answer: "**Front panel indicators on X1-Series (similar across most SingularXYZ receivers):**\n\n- Satellite Tracking Indicator: Flashes count = number of tracked satellites; low flashes = reposition receiver\n- Correction Data Indicator: Confirms RTK correction data transmission/reception; check if struggling to fix\n- Static & Network Indicator: Visual feedback when static recording is active; start/stop logging with button press\n- Power Indicator: Shows power-on, low battery, or charging status; prevents unexpected power loss",
    tags: ["receiver", "indicators", "status"]
  },
  {
    id: 468, category: "rtk",
    keywords: ["GIS", "CORS", "PPP", "SBAS", "work", "mode", "accuracy", "工作模式", "精度", "modo", "trabajo", "modo", "trabalho"],
    question: "How to choose the right GIS work mode: CORS, PPP, or SBAS?",
    answer: "**Three GIS work modes compared by accuracy and requirements:**\n\n- CORS Mode: Centimeter-level, requires network access and CORS/NTRIP account\n- PPP Mode: 10-20cm accuracy, no network or CORS needed, requires ~10 min convergence time\n- SBAS Mode: Submeter accuracy, no network/CORS needed but requires SBAS satellite coverage\n- Device compatibility: Sfaira ONE supports all three; P2 supports CORS+SBAS; T8 Pro supports all three; Z1 supports all three plus radio",
    tags: ["gis", "cors", "ppp", "sbas"]
  },
  {
    id: 469, category: "scanner",
    keywords: ["total station", "PTL", "Point", "To", "Line", "offset", "baseline", "全线站", "参考线", "línea", "referencia", "linha", "referência"],
    question: "What is the PTL (Point To Line) function in total stations and how is it used?",
    answer: "**PTL calculates relative position between a measured point and a reference baseline:**\n\n- Uses built-in algorithms to compute vertical distance and horizontal offset from target point to reference line\n- Reference line defined by two or more known coordinate points\n- Applications: Measuring offsets from baseline, construction layout (road centerlines/sidelines), topographic surveying\n- TS1000 total station includes PTL for road, railway, tunnel construction alignment verification\n- Enables quick calculation of whether points meet design specifications",
    tags: ["total-station", "ptl", "offset"]
  },
  {
    id: 470, category: "rtk",
    keywords: ["AR", "stakeout", "augmented", "reality", "visual", "GNSS", "IMU", "camera", "增强现实", "放样", "realidad", "aumentada", "realidade", "aumentada"],
    question: "How does AR (Augmented Reality) stakeout work in surveying?",
    answer: "**AR stakeout overlays design points onto real-world camera view using three technologies:**\n\n- GNSS: Provides real-time high-precision positioning and location data\n- IMU: Measures acceleration and angular velocity for motion trajectory and attitude (direction/orientation)\n- Camera: Calibrated to map image pixels to real-world coordinates for visual overlay\n- Controller Camera Mode: Uses controller camera+compass, provides rough directional guidance, no special receiver needed\n- Receiver Camera Mode (Orion ONE): True-position AR from receiver perspective, centimeter-level visual guidance",
    tags: ["ar", "stakeout", "visual"]
  },
  {
    id: 471, category: "rtk",
    keywords: ["laser", "stakeout", "Orion ONE", "non-contact", "verification", "IMU", "激光放样", "免接触", "verificación", "láser", "verificação", "laser"],
    question: "How to use laser stakeout with Orion ONE for non-contact point verification?",
    answer: "**Laser stakeout enables quick point verification without physically accessing the point:**\n\n- Connect Orion ONE to SingularPad > Survey > Point Stakeout, select target point\n- Go to Settings > Tool Bar, add \"Enable Laser\" button to display items\n- Initialize IMU tilt via tilt survey button and follow software prompts\n- Click to enable laser; applications include re-verifying marked points from distance, elevated/hard-to-reach locations\n- Ideal for muddy, unsafe areas, building exteriors, obstructed environments, and multi-person team operations",
    tags: ["laser", "stakeout", "orion"]
  },
  {
    id: 472, category: "rtk",
    keywords: ["RTK", "fix", "rate", "signal", "interference", "multipath", "base", "station", "固定率", "信号干扰", "tasa", "fijación", "taxa", "fixação"],
    question: "What factors affect RTK fix rate and how can I improve it?",
    answer: "**Four main factors affecting RTK fix rate and proven improvement strategies:**\n\n- Signal blockage (trees/buildings): Use high-performance receiver with full-constellation tracking and anti-interference\n- Multipath effect (glass/metal/water): Raise antenna height, change radio frequency, avoid reflective surfaces\n- Electromagnetic interference (power lines/towers): Change radio frequency or relocate\n- Differential data issues: Keep baseline <50km, optimize base station placement with clear sky view\n- Use tilt measurement or laser (Orion ONE) to measure in obstructed areas without leveling pole",
    tags: ["rtk", "fixed", "troubleshooting"]
  },
  {
    id: 473, category: "rtk",
    keywords: ["GNSS", "frequency", "band", "multi-frequency", "L1", "L2", "L5", "BDS", "GPS", "Galileo", "GLONASS", "频率", "多频", "frecuencia", "frequência"],
    question: "What are GNSS frequency bands and why does multi-frequency technology matter?",
    answer: "**Multi-frequency GNSS tracks L1, L2, L5 and other bands simultaneously for better accuracy:**\n\n- Ionospheric Error Correction: Dual-frequency (e.g. L1+L5) corrects ionospheric delays for more accurate positioning\n- Multipath Resistance: Higher frequencies like L5 are less prone to reflections in urban canyons\n- Key bands: GPS L1 (1575.42), L2 (1227.60), L5 (1176.45); BDS B1I (1561.098), B2I (1207.14), B2a (1176.45)\n- Galileo E1, E5a, E5b, E6; GLONASS G1, G2, G3; QZSS L1/L2/L5; NavIC L5/S-band\n- More tracked frequencies = better accuracy in challenging environments",
    tags: ["gnss", "frequency", "multifrequency"]
  },
  {
    id: 474, category: "rtk",
    keywords: ["S20", "RTCM", "base", "station", "serial", "command", "agriculture", "基站", "农业", "estación", "base", "estação", "agricultura"],
    question: "How to configure the S20 smart antenna as a base station with RTCM output?",
    answer: "**Configure S20 as RTCM base station via serial commands:**\n\n- Connect S20 to PC via configuration cable, identify COM port in Device Manager, open serial tool (e.g. QCom)\n- Send commands in order: UNLOGALL (stop output), MODE BASE [lon] [lat] [elev] (set base coordinates in degrees/meters)\n- Set RTCM message output: RTCM1033 COM1 10, RTCM1094/1074/1124/1084 COM1 1 (number = interval in seconds)\n- Each command returns \"OK\" on success; S20 now outputs RTCM correction data for precision agriculture integration",
    tags: ["s20", "rtcm", "base"]
  },
  {
    id: 475, category: "rtk",
    keywords: ["GNSS", "antenna", "helical", "geodetic", "patch", "ceramic", "aviation", "天线", "类型", "antena", "tipos", "tipos", "antena"],
    question: "What are the main types of GNSS antennas and their applications?",
    answer: "**GNSS antenna types divided into built-in and external categories:**\n\n- Built-in Helical: Lightweight, good in complex environments; used in P2 and Sfaira ONE wearables/handhelds\n- Built-in Geodetic: Higher gain, good multipath suppression; used in X1, Orion ONE, Z1, S20, Y1 receivers\n- Built-in Ceramic Patch: Low cost/power, meter-level accuracy; used in smartphones and IoT devices\n- External Helical (SA180/SA200): Strong signal during movement; T8 Pro tablet, mobile mapping\n- External Geodetic (SA102/SA100): Best accuracy and multipath suppression; CORS base stations, deformation monitoring\n- External Aviation (SA300): Rugged, aerodynamic; UAVs and aerial navigation",
    tags: ["antenna", "gnss", "hardware"]
  },
  {
    id: 476, category: "rtk",
    keywords: ["RTCM", "correction", "data", "format", "RTK", "NTRIP", "差分数据", "格式", "formato", "corrección", "formato", "correção"],
    question: "What is the RTCM format and how is it used in RTK correction data transmission?",
    answer: "**RTCM is a standardized binary format for real-time GNSS correction data streaming:**\n\n- Developed by Radio Technical Commission for Maritime Services; analogous to RINEX but for real-time use\n- RTCM2.X: 30+ message types, limited system support; RTCM3.2: standard format, most commonly used today\n- RTCM3.3: adds BDS ephemeris, Galileo and SBAS support on top of RTCM3.2\n- Message types include: observation messages (per satellite system), ephemeris, base station coordinates, SSR (orbit/clock)\n- SingularXYZ products support RTCM2.X/3.X formats for centimeter-level positioning",
    tags: ["rtcm", "correction", "format"]
  },
  {
    id: 477, category: "rtk",
    keywords: ["tilt", "survey", "IMU", "magnetometer", "calibration", "pole", "倾斜测量", "惯性测量", "inclinación", "IMU", "inclinação"],
    question: "How does a GNSS receiver implement tilt surveying using IMU technology?",
    answer: "**IMU-based tilt surveying eliminates the need to center the bubble on the range pole:**\n\n- Tilt survey calculates ground point coordinates from receiver position + pole height + tilt angle + tilt azimuth\n- Uses Pythagorean Theorem to compute tilt offset in N/E/H directions\n- Two solutions: magnetometer (susceptible to magnetic interference, unstable near metal) and IMU (preferred)\n- IMU contains accelerometer + gyroscope sensors; requires calibration before use\n- SingularXYZ Y1 IMU receiver provides centimeter-level accuracy with one-step calibration",
    tags: ["imu", "tilt", "surveying"]
  },
  {
    id: 478, category: "rtk",
    keywords: ["P1", "MyCumulus", "GIS", "NTRIP", "Bluetooth", "centimeter", "厘米级", "GIS软件", "software", "GIS", "precisão", "centimétrica"],
    question: "How to achieve centimeter-level positioning with P1 GNSS receiver and MyCumulus GIS software?",
    answer: "**Connect P1 to MyCumulus for cm-level GIS data collection:**\n\n- Pair P1 receiver with PDA via Bluetooth in device settings\n- In MyCumulus: Settings > Admin Settings > select the device\n- Configure NTRIP: enter CORS account credentials (PDA needs internet connection)\n- Wait for RTK FIXED status in GNSS info panel, then start data collection\n- P1 supports full constellation (GPS, GLONASS, BDS, Galileo, QZSS, SBAS) and provides SDK for third-party customization",
    tags: ["p1", "mycumulus", "gis"]
  },
  {
    id: 479, category: "rtk",
    keywords: ["GNSS", "receiver", "choose", "buy", "specifications", "selection", "选购", "接收机", "seleccionar", "receptor", "escolher", "receptor"],
    question: "How to choose the right GNSS receiver for surveying work?",
    answer: "**Key parameters to evaluate when selecting a GNSS receiver:**\n\n- Satellite Tracking: Ensure full multi-constellation support (GPS, GLONASS, Galileo, BDS); check regional systems (QZSS for Japan, NavIC for India)\n- Accuracy: Verify 1cm-level specifications under statistical conditions\n- Battery: Focus on continuous working hours (not mAh); hot-swap battery allows uninterrupted work\n- Weight & Size: Lighter/smaller devices reduce daily burden; check portability\n- Environment: IP67 waterproof/dustproof and 2-meter drop protection are minimum requirements\n- Communication: 4G for urban areas, radio for poor network; check radio range if needed",
    tags: ["gnss", "buying", "guide"]
  },
  {
    id: 480, category: "agnav",
    keywords: ["automatic", "steering", "system", "autosteer", "agriculture", "tractor", "GNSS", "自动驾驶", "农业", "dirección", "automática", "direção", "automática"],
    question: "How is an automatic steering system for agricultural tractors composed and how does it work?",
    answer: "**Autosteer system components and their functions:**\n\n- Two GNSS Antennas: Main antenna for positioning, secondary antenna for heading/direction\n- Sensor (Gyroscope/Angle): Monitors tractor attitude in real time\n- Tablet Console: Embedded GNSS module, runs software, calculates position/speed/heading, outputs steering commands\n- Electric Motor: Receives tablet signals to control steering (straight, curve, pivot, U-turn)\n- Cables: Connect all components for power and data transmission\n- SingularXYZ SAgro100 supports AB line, curve, pivot, and U-turn patterns",
    tags: ["autosteer", "agriculture", "sagro"]
  },
  {
    id: 481, category: "rtk",
    keywords: ["GNSS", "how", "works", "satellite", "constellation", "ground", "control", "定位原理", "卫星", "cómo", "funciona", "como", "funciona"],
    question: "How does GNSS (Global Navigation Satellite System) work?",
    answer: "**GNSS consists of three segments working together for positioning:**\n\n- Space Segment: 24-30 satellites in 3-6 orbital planes at ~20,000 km altitude, with backup satellites\n- Ground Control: Main control station + monitoring stations + ground antennas; tracks satellites, calculates orbit/clock parameters\n- User Equipment: GNSS receivers capture satellite signals, measure pseudorange, and compute position via trilateration\n- Receiver needs signals from at least 4 satellites to calculate latitude, longitude, altitude, and time\n- Multiple constellations (GPS, BDS, Galileo, GLONASS) improve availability and accuracy",
    tags: ["gnss", "basics", "positioning"]
  },
  {
    id: 482, category: "rtk",
    keywords: ["NMEA", "NMEA-0183", "GPGGA", "GPGSA", "echo", "sounder", "protocol", "数据协议", "测深仪", "protocolo", "dados", "ecobatímetro"],
    question: "What is NMEA-0183 and what information does the GPGGA message contain?",
    answer: "**NMEA-0183 is a standard data format supported by all GNSS manufacturers:**\n\n- Created by National Marine Electronics Association, originally for marine navigation systems\n- GPGGA contains positioning information (latitude, longitude, altitude, fix quality, satellite count)\n- Other common messages: GPGSA/GPGSV (satellite tracking status), GPVTG (velocity), GPRMC (recommended minimum data)\n- Essential for GNSS-to-device communication: echo sounders, sonar, autopilots, marine navigation systems\n- All SingularXYZ devices (Y1, P1, T8 Pro) support NMEA-0183 output via Bluetooth/USB/serial/4G",
    tags: ["nmea", "gpgga", "protocol"]
  },
  {
    id: 483, category: "rtk",
    keywords: ["NFC", "Bluetooth", "touch", "connect", "pairing", "Y1", "近场通信", "触碰连接", "conexión", "táctil", "conexão", "toque"],
    question: "How does NFC benefit surveyors by simplifying RTK device connections?",
    answer: "**NFC enables touch-and-connect Bluetooth pairing for RTK receivers:**\n\n- NFC (Near-Field Communication) works over <4cm distance for contactless data exchange\n- Used by Apple Pay and Android Pay; same technology simplifies RTK Bluetooth pairing\n- With NFC-enabled RTK (e.g. SingularXYZ Y1), just touch phone to receiver to auto-connect\n- No need to manually search Bluetooth devices or match in software settings\n- NFC bootstraps the Bluetooth connection automatically, making field startup faster and more convenient",
    tags: ["nfc", "bluetooth", "connection"]
  },
  {
    id: 484, category: "rtk",
    keywords: ["QField", "QGIS", "T8", "Pro", "CORS", "GIS", "centimeter", "厘米级", "QGIS插件", "precisión", "centimétrica", "precisão"],
    question: "How to achieve centimeter-level accuracy with QField on the T8 Pro tablet?",
    answer: "**Run High-Precision software in background to feed RTK corrections to QField:**\n\n- Open High-Precision software (pre-installed on T8 Pro), tap SETUP IP to enter CORS address and port\n- Select MountPoint, enter username/password, click CONNECT to receive GNSS correction data\n- Wait for RTK FIXED status (centimeter-level accuracy achieved)\n- Run High-Precision software in background, then open QField to work with centimeter accuracy\n- T8 Pro features 8\" HD touchscreen, 15-hour battery with 7000mAh, all-in-one design for both GIS and land surveying",
    tags: ["qfield", "t8pro", "gis"]
  },
  {
    id: 485, category: "rtk",
    keywords: ["T8", "Pro", "MyCumulus", "GIS", "CORS", "NTRIP", "cloud", "数据采集", "云平台", "recolección", "datos", "coleta", "nuvem"],
    question: "How to use the T8 Pro tablet with MyCumulus GIS software for high-precision data collection?",
    answer: "**Configure T8 Pro NTRIP connection in MyCumulus for cm-level GIS data collection:**\n\n- Login to MyCumulus on T8 Pro (project created on MyCumulus Cloud beforehand)\n- Go to NTRIP Configuration menu, enter CORS account credentials, click Verify; successful connection shows \"Connected to XXX\"\n- Check GNSS Info: ensure RTK Fix status and receiving data before starting\n- Collect point data within task, then upload to cloud\n- T8 Pro also supports ArcGIS Collector, QField for QGIS, Mapit GIS and other third-party apps",
    tags: ["t8pro", "mycumulus", "gis"]
  },
  {
    id: 486, category: "rtk",
    keywords: ["NTRIP", "Ntrip", "CORS", "RTCM", "caster", "client", "server", "网络传输", "差分", "protocolo", "transporte", "protocolo", "transporte"],
    question: "What is NTRIP and how does it work for RTK correction data transmission?",
    answer: "**NTRIP (Networked Transport of RTCM via Internet Protocol) streams GNSS corrections over the internet:**\n\n- Developed by German Federal Agency for Cartography and Geodesy for real-time differential data\n- Three components: NTRIP Server (sends data from base/CORS), NTRIP Caster (broadcasts streams), NTRIP Client (rover receives)\n- NTRIP vs UHF Radio: NTRIP has no distance limit but needs internet coverage; UHF radio works ~3km without network\n- For flexible use: choose a receiver with both 4G+NTRIP and radio, like SingularXYZ Y1\n- Requires a 4G-capable GNSS receiver and CORS account for centimeter-level RTK fixed solution",
    tags: ["ntrip", "cors", "rtk"]
  }
