,
  {
    id: 400, category: "rtk",
    keywords: ["attitude sensor", "IMU", "gyroscope", "accelerometer", "magnetometer", "姿态传感器", "惯性测量单元", "sensor de actitud", "sensor de atitude"],
    question: "What is an attitude sensor and how does it work?",
    answer: "**Working Principle:**\n\n- Measures object orientation (angle, direction, position) in space via data fusion algorithms.\n- Two types: IMU-based (gyroscope + accelerometer using Newton's laws) and magnetometer-based (uses Earth's magnetic field).\n- IMU gyroscopes measure angular velocity around X/Y/Z axes; accelerometers measure acceleration along three axes.\n- Accuracy improved via Kalman filtering, adaptive filtering, and digital filtering techniques.\n- Used in SAgro100 auto-steering system to obtain tractor attitude and heading data.",
    tags: ["sensors", "autosteer", "gnss"]
  },
  {
    id: 401, category: "rtk",
    keywords: ["SV100", "base station", "router", "Ethernet", "NTRIP", "CORS", "基站", "路由器", "estación base", "estação base"],
    question: "How to set SV100 as a base station with a router?",
    answer: "**Setup Steps:**\n\n- Query router IP (e.g., 192.168.0.1) and configure SV100 IP within the same gateway via WiFi (192.168.10.12, admin/admin).\n- In Web UI, go to Device Configuration > Ethernet Config, set default gateway to router IP and SV100 IP to 192.168.1.X (unused).\n- Set antenna height/type under Antenna Setting, then choose Working Mode > Base, input base ID and coordinates, click Start Base.\n- Verify Position Information shows FIXEDPOS, then configure Data Transmission > NTRIP Server with caster address/port/credentials/mount point.\n- Select Diff Data format and MSM frequency, click OK. Rovers can now connect via the mount point.",
    tags: ["base-station", "cors", "setup"]
  },
  {
    id: 402, category: "rtk",
    keywords: ["static measurement", "web UI", "data recording", "RINEX", "X1", "SV100", "静态测量", "medición estática", "medição estática"],
    question: "How to conduct static measurement via web page?",
    answer: "**Static Recording via Web UI:**\n\n- Access Web UI via WiFi (X1/SV100), go to Work Management > Data Recording.\n- Click Config to set sample interval, file format, and other settings per project requirements.\n- Two recording channels available simultaneously.\n- Download static files via Work Management > File Download.\n- Filter by Record Name, File Type, File Date, click Refresh to sort, then click Download to save locally.",
    tags: ["static-survey", "data-recording", "web-ui"]
  },
  {
    id: 403, category: "rtk",
    keywords: ["geodetic height", "normal height", "orthometric height", "geoid", "ellipsoid", "大地高", "正常高", "正高", "altura geodésica", "altura ortométrica"],
    question: "What is the difference between geodetic height, normal height and orthometric height?",
    answer: "**Three Height Types:**\n\n- Geodetic height: distance from a point to the reference ellipsoid (what GNSS RTK directly measures).\n- Orthometric height: distance from a point to the geoid (also called altitude or absolute elevation).\n- Normal height: distance from a point to the quasi-geoid.\n- Relationship: Geodetic height = Orthometric height + N (geoid difference).\n- Geodetic height = Normal height + ξ (elevation anomaly). GNSS RTK gives geodetic height; use geoid model to convert to normal height.",
    tags: ["elevation", "geoid", "fundamentals"]
  },
  {
    id: 404, category: "rtk",
    keywords: ["road stakeout", "SingularPad", "XML", "road design", "broken stations", "centerlines", "道路放样", "道路设计", "replanteo de carretera", "estacas de estrada"],
    question: "How to import and design road files in SingularPad for road stakeout?",
    answer: "**Road File Preparation:**\n\n- Import road files via Survey > Stake Road, supporting XML and DXF formats.\n- XML files contain alignment, profiles, cross-sections for standardized data exchange between software.\n- For new road designs: define broken stations first (long chains = repeated pile numbers; short chains = broken pile numbers).\n- Input broken station mileages as real numbers (e.g., K1+234.000 = K1+238.000).\n- Define centerlines using line element method, intersection method, or other methods, then set vertical profiles, cross-sections, and slopes.",
    tags: ["road-stakeout", "singularpad", "design"]
  },
  {
    id: 405, category: "agnav",
    keywords: ["CAN protocol", "Controller Area Network", "autosteer", "SAgro", "data transmission", "CAN总线", "自动转向", "protocolo CAN", "protocolo CAN agrícola"],
    question: "What is CAN protocol and how does it work in agricultural autosteer systems?",
    answer: "**CAN Protocol for Autosteer:**\n\n- Serial communication protocol for real-time applications, supporting up to 1Mb/s transmission with 11-bit addressing.\n- Broadcast principle: one node sends data received by all nodes; priority based on identifier (most zeros = highest priority).\n- Uses differential signals (CAN_HIGH/CAN_LOW) with 120-ohm terminal resistors at both ends for impedance matching.\n- Bit-by-bit arbitration ensures orderly data transmission when multiple nodes compete for bus access.\n- Used in SAgro-series for real-time tractor communication, enabling ±2.5cm auto-steering accuracy.",
    tags: ["can-protocol", "autosteer", "communication"]
  },
  {
    id: 406, category: "rtk",
    keywords: ["base station", "coordinate shift", "grid shift", "calibrate point", "offsets", "基站偏移", "坐标校正", "cambio de base", "ajuste de coordenadas"],
    question: "How to adjust project coordinates when the base station changes?",
    answer: "**Two Grid Shift Methods:**\n\n- \"Add Offsets to Points at Specified Period\": applies base offset to already-surveyed points within a specific time period.\n- \"Calibrate Point\": applies offset to points about to be surveyed, NOT to previously saved points.\n- Use \"Add Offsets\" when static post-processing reveals known point coordinates after RTK surveying has started.\n- The applied offset is visible in point details and can be cleared/reapplied repeatedly.\n- Points surveyed before and after using \"Calibrate Point\" appear as distinct periods in the offset function.",
    tags: ["coordinate-shift", "base-station", "singularpad"]
  },
  {
    id: 407, category: "rtk",
    keywords: ["geoid model", "EGM2008", "EGM96", "elevation conversion", "normal height", "大地水准面模型", "高程转换", "modelo geoidal", "modelo geoide"],
    question: "What is a geoid model and how to use it in RTK surveying?",
    answer: "**Geoid Model Usage:**\n\n- A leveling model that converts geodetic height (from GNSS) to normal height by accounting for elevation anomalies.\n- Common models: EGM84, EGM96, EGM2008, EGM2020, built from global surface gravity data.\n- In SingularPad: import geoid model file when creating a new project or via Project > Coordinate System.\n- For large global models: use professional software to extract country/area-specific portions.\n- Alternative method: joint measurement of known GPS points for post-processing adjustment, but more time-consuming and expensive.",
    tags: ["geoid-model", "elevation", "singularpad"]
  },
  {
    id: 408, category: "rtk",
    keywords: ["road stakeout", "SingularPad", "stakeout modes", "point stakeout", "peg", "道路放样", "放样模式", "replanteo", "estacas"],
    question: "How to conduct road stakeout using SingularPad software?",
    answer: "**Stakeout Modes in SingularPad:**\n\n- Stake by line (default): guides vertically towards the road, follow the route to stake out.\n- Stake by point: input station and offset parameters before beginning to calculate the next stake points.\n- Add peg: calculate a single point by station and offset (positive = left side, negative = right side).\n- Recalculate: generate points at specified intervals and offset distances automatically.\n- Also supports cross-section measurement, auxiliary profile stakeout, and stake road by cross-section modes.",
    tags: ["road-stakeout", "singularpad", "modes"]
  },
  {
    id: 409, category: "rtk",
    keywords: ["heading", "pitch", "roll", "NMEA", "dual antenna", "orientation", "航向角", "姿态数据", "rumbo", "orientação"],
    question: "What is heading data and how is it used in GNSS applications?",
    answer: "**Heading Data Explained:**\n\n- Three orientation parameters: pitch (Y-axis rotation), heading (Z-axis rotation), and roll (X-axis rotation).\n- NMEA #HEADINGA log provides solution status, position type, baseline length, heading (0-360°), pitch (-90 to 90°), and standard deviations.\n- Heading calculated using dual-antenna receiver: compares two antenna positions to compute angle from True North.\n- Longer baseline distance between antennas yields higher heading accuracy.\n- SV100 DUAL provides reliable heading information via WebUI; stabilizes after initial convergence period.",
    tags: ["heading", "orientation", "dual-antenna"]
  },
  {
    id: 410, category: "rtk",
    keywords: ["NMEA", "GPGLL", "GPZDA", "GPGSV", "GPRMC", "RTK", "导航电文", "mensajes NMEA", "mensagens NMEA"],
    question: "What are the common NMEA messages used in RTK devices?",
    answer: "**Key NMEA-0183 Messages:**\n\n- $GPGLL: Geographic position (time, latitude, longitude, data status).\n- $GPZDA: UTC time and date information for timing applications.\n- $GPGSV: Satellite information (PRN numbers, elevation, azimuth, SNR values).\n- $GPRMC: Time, date, speed over ground, and true heading for navigation.\n- Header prefix varies by constellation: GP=GPS, GL=GLONASS, GA=Galileo, GB=BeiDou, GN=multi-system.\n- Each message ends with a checksum field for data integrity verification.",
    tags: ["nmea", "messages", "rtk"]
  },
  {
    id: 411, category: "rtk",
    keywords: ["coordinate calculation", "forward calculation", "inverse calculation", "azimuth", "SingularPad", "坐标正算", "坐标反算", "cálculo de coordenadas", "cálculo de coordenadas"],
    question: "How do coordinate forward and inverse calculations work in surveying?",
    answer: "**Calculation Methods:**\n\n- Forward: given point A (XA, YA), distance L, and azimuth α, calculate point B via XB = XA + L*cos(α), YB = YA + L*sin(α).\n- Inverse: given points A and B, calculate azimuth by first finding quadrant angle R = arctan(|yB-yA|/|xB-xA|).\n- Determine α based on quadrant: 1st quadrant α=R, 2nd α=180°-R, 3rd α=180°+R, 4th α=360°-R.\n- Distance L = sqrt(Δx² + Δy²).\n- SingularPad automates both calculations - input coordinates directly for instant, error-free results.",
    tags: ["coordinate-calculation", "azimuth", "singularpad"]
  },
  {
    id: 412, category: "rtk",
    keywords: ["RTK radio", "serial baud rate", "air baud rate", "radio channel", "frequency", "电台模式", "波特率", "modo radio", "taxa de transmissão"],
    question: "How to set up RTK radio mode correctly?",
    answer: "**Radio Mode Configuration:**\n\n- Serial port baud rate: transmission rate between RTK device and external radio via 7-pin cable; recommend 19200+ for BDS data.\n- Air baud rate: wireless transmission rate (higher = faster but shorter range); Lora options: 500-18000 bps, normal: 9600/19200 bps.\n- Base and rover must use identical radio protocol and air baud rate for effective communication.\n- Lora radios are NOT compatible with normal radios; SDL1 external radio defaults to 38400 baud rate.\n- Channels 1-9 have fixed frequencies (454.05-463.05 MHz); custom channels require matching frequencies on base and rover.",
    tags: ["radio-mode", "rtk", "configuration"]
  },
  {
    id: 413, category: "rtk",
    keywords: ["SingularConverter", "RINEX", "static data", "XYZ format", "data conversion", "数据转换", "conversión de datos", "conversão de dados"],
    question: "How to convert XYZ binary static data to RINEX format using SingularConverter?",
    answer: "**SingularConverter Steps:**\n\n- Launch software and click \"Select File\" to choose the .xyz binary format file.\n- Click folder icon to choose destination for the converted RINEX file.\n- Click \"Set\" to verify and modify station information (antenna type, measure type), then click Confirm.\n- Click \"Convert\" to run the conversion process.\n- Important: avoid non-English characters in both input and output file paths (may result in empty output). Locate converted RINEX file in the chosen save path.",
    tags: ["singularconverter", "rinex", "data-conversion"]
  },
  {
    id: 414, category: "rtk",
    keywords: ["datum", "geodetic datum", "WGS84", "ITRF", "reference ellipsoid", "大地基准面", "参考椭球", "datum geodésico", "datum geodésico"],
    question: "What is a geodetic datum and why is it important?",
    answer: "**Datum Fundamentals:**\n\n- A geodetic datum is the reference point (\"zero\" point) against which all coordinates (latitude, longitude, height) are measured.\n- Global datums (WGS84, ITRF) cover the entire Earth surface, fixed to Earth's center; undergo periodic updates.\n- Challenge with global datums: tectonic plate movement causes subtle coordinate shifts over time.\n- SingularPad supports both WGS and ITRF datums.\n- Solution to the mobility problem: local datums (see Part 2), which are fixed to specific physical locations on the Earth's surface.",
    tags: ["datum", "fundamentals", "wgs84"]
  },
  {
    id: 415, category: "agnav",
    keywords: ["autosteer", "SAgro100", "SAgro150", "SAgro200", "precision farming", "自动转向", "精准农业", "piloto automático", "direção automática"],
    question: "How to choose the right SingularXYZ autosteer system?",
    answer: "**SAgro-Series Comparison:**\n\n- SAgro100: dual-antenna, ultra-low speed 0.15km/h, >45min installation, highest precision but complex dual-antenna & crossbar setup.\n- SAgro150: single-antenna, min speed 0.5km/h, ~35min installation, field-validated performance, fewer components.\n- SAgro200: smart antenna all-in-one design (Radio/4G/GNSS/BT), >30min installation, easiest setup, caters to mainstream market.\n- All offer ±2.5cm accuracy with full-constellation GNSS, support straight line/curve/path/U-turn/pivot modes for ploughing, planting, spraying, harvesting.\n- Universal compatibility via diverse spline sleeves; 20+ languages supported.",
    tags: ["autosteer", "comparison", "sagro"]
  },
  {
    id: 416, category: "rtk",
    keywords: ["local datum", "coordinate system", "SingularPad", "reference frame", "地方基准面", "坐标系统", "datum local", "datum local"],
    question: "What are local datums and how do they differ from global datums?",
    answer: "**Local Datums Explained:**\n\n- Local datums are reference planes fixed to specific physical objects or locations, ensuring uniform object movement within a region.\n- They solve the coordinate shift problem caused by tectonic plate movement affecting global datums (WGS84, ITRF).\n- Many countries establish their own local datums for national surveying and mapping needs.\n- SingularPad provides country-specific local datums and allows custom local datum creation by entering relevant parameters.\n- Essential for precision and accuracy in surveying projects within a defined geographic region.",
    tags: ["local-datum", "coordinate-system", "singularpad"]
  },
  {
    id: 417, category: "rtk",
    keywords: ["coordinate system", "share code", "QR code", "SingularPad", "parameters", "坐标系统", "参数共享", "sistema de coordenadas", "compartilhamento de parâmetros"],
    question: "How to share coordinate system parameters between surveyors in SingularPad?",
    answer: "**Sharing Methods in SingularPad:**\n\n- Configure 7 parameter categories: Ellipsoid, ITRF, Projections, Datum, Horizon Adjustment, Vertical Adjustment, Local Offsets.\n- After configuration, click \"Share\" to generate a share code and QR code.\n- Colleagues import via: \"+\" button > \"Share Code\" (enter code) or \"Scan QR Code\" (scan the QR).\n- Click \"Save & Apply\" to automatically save and apply parameters to the current project.\n- Alternative: save and export parameters as a .sys file, share via Bluetooth or cable.",
    tags: ["coordinate-system", "sharing", "singularpad"]
  },
  {
    id: 418, category: "rtk",
    keywords: ["Galileo HAS", "PPP", "high accuracy", "satellite correction", "E6-B", "伽利略高精度服务", "servicio de alta precisión", "serviço de alta precisão"],
    question: "What is Galileo High Accuracy Service (HAS)?",
    answer: "**Galileo HAS Overview:**\n\n- Free PPP (Precise Point Positioning) correction service transmitted via Galileo E6-B signal and terrestrial internet.\n- Two service levels: Level 1 (global, <300s convergence) and Level 2 (European Coverage Area with atmospheric corrections, <100s convergence).\n- Horizontal accuracy <20cm, vertical accuracy <40cm, both at 95% confidence.\n- Supports Galileo and GPS constellations on E1/E5a/E5b/E6 and L1/L5/L2C frequencies.\n- No base station or CORS needed - cost-effective for autonomous driving, drones, precision agriculture, and GIS applications.",
    tags: ["galileo-has", "ppp", "corrections"]
  },
  {
    id: 419, category: "rtk",
    keywords: ["Galileo HAS", "activation", "PPP", "SingularPad", "autosteer", "伽利略高精度服务", "activación HAS", "ativação HAS"],
    question: "How to activate and use Galileo HAS with SingularXYZ products?",
    answer: "**HAS Activation Steps:**\n\n- First verify your device firmware supports HAS (contact support@singularxyz.com to check).\n- Connect device to SingularPad, go to Device > Communication > Debug, input the activation command (obtain from support).\n- Wait several minutes for GNSS device to converge and achieve HAS-level accuracy.\n- For SAgro autosteer kits: recommend contacting support team for remote activation for convenience.\n- HAS provides ~20cm horizontal accuracy - suitable for GIS, vehicle guidance, agricultural spraying; use RTK mode for centimeter-level projects.",
    tags: ["galileo-has", "activation", "singularpad"]
  },
  {
    id: 420, category: "rtk",
    keywords: ["IMU compass", "stakeout", "SingularPad", "X1 receiver", "tilt", "惯性导航", "放样", "brújula IMU", "bússola IMU"],
    question: "How to use the receiver IMU as a compass for stakeout?",
    answer: "**IMU Compass Stakeout Steps:**\n\n- Ensure X1 receiver and SingularPad software are updated to latest versions.\n- Turn on and initialize the IMU function when RTK is in fixed status.\n- Go to stakeout interface > Settings > Stakeout Setting, select \"Device panel azimuth\" as stakeout reference.\n- Make the receiver front panel face the forward direction, then follow direction prompts on the map.\n- This bypasses a failing controller compass, enabling reliable stakeout navigation even in challenging environments.",
    tags: ["imu", "stakeout", "singularpad"]
  },
  {
    id: 421, category: "rtk",
    keywords: ["GNSS receiver", "comparison", "product lineup", "X1", "Sfaira ONE", "Y1", "接收机选型", "selección de receptor", "seleção de receptor"],
    question: "How to choose the right SingularXYZ GNSS receiver for surveying?",
    answer: "**Receiver Selection Guide:**\n\n- Compare key features and application areas across different SingularXYZ models (X1, Sfaira ONE, Y1, etc.).\n- Newer product models introduce enhanced capabilities over previous generations.\n- Consider accuracy requirements, IMU tilt functionality, form factor, connectivity options, and budget.\n- Reference the earlier blog \"Which RTK Rover is Right for you?\" for detailed feature-by-feature comparisons.\n- Contact support for personalized recommendations based on your specific project requirements.",
    tags: ["receiver", "comparison", "selection"]
  },
  {
    id: 422, category: "rtk",
    keywords: ["GIS", "attributes", "code library", "feature coding", "SingularPad", "属性编码", "要素编码", "atributos GIS", "atributos de código"],
    question: "How to add attributes to measured features during surveys in SingularPad?",
    answer: "**Feature Attribute Setup:**\n\n- Go to Code Library Manager, create new code list, then Add individual codes with remarks, code name, and group name.\n- Add Point Attributes: specify name, remark, and field type (integer, double, text, drop-down menu, checkbox, or date-time).\n- Drop-down menus require predefining options; checkboxes appear for binary selection.\n- Apply the code list to your project, then in point survey select the code and input corresponding attribute values.\n- Attributes enable subsequent GIS data analysis, thematic map creation, and detailed feature documentation.",
    tags: ["gis", "attributes", "singularpad"]
  },
  {
    id: 423, category: "rtk",
    keywords: ["cloud server", "CORS", "SingularCaster", "AWS", "Alibaba Cloud", "云服务器", "servidor en la nube", "servidor em nuvem"],
    question: "How to choose a cloud server for SingularCaster CORS software?",
    answer: "**Cloud Server Selection:**\n\n- Providers: AWS, Alibaba Cloud, Azure, Huawei Cloud, Google Cloud, Oracle Cloud - compare prices for desired configuration.\n- Region: choose closest to your user base for lowest network latency and fastest access speed.\n- Recommended config: dual-core 1.7GHz+ CPU, Windows Server 2019+ 64-bit, 6GB+ RAM, 40GB+ SSD (separate non-system disk for software).\n- 1M bandwidth supports simultaneous data transmission from about 35 sites.\n- Request a free trial of SingularCaster before purchasing the cloud server to test performance first.",
    tags: ["cloud-server", "singularcaster", "cors"]
  },
  {
    id: 424, category: "rtk",
    keywords: ["antenna height", "base station", "pole height", "slant height", "SingularPad", "天线高", "基站设置", "altura de antena", "altura da antena"],
    question: "How to measure and set the height of an RTK base station?",
    answer: "**Antenna Height Measurement & Configuration:**\n\n- Two measurement methods: pole height (vertical distance from receiver bottom to ground point) and slant height (from side reference point to ground, easier to operate).\n- In SingularPad Base mode: select \"Input Base Coordinates\" as Start Up Mode, enter ground control point coordinates.\n- Choose measurement method (Pole/Slant) and input measured height - software auto-calculates based on device antenna parameters.\n- For non-SingularXYZ receivers: manually input antenna parameters in Device Information first.\n- For static measurement: view calculated antenna height via SingularPad and input into post-processing software.",
    tags: ["antenna-height", "base-station", "singularpad"]
  },
  {
    id: 425, category: "rtk",
    keywords: ["CORS", "VRS", "NTRIP", "reference station", "RTK network", "连续运行参考站", "estación de referencia", "estação de referência"],
    question: "What is CORS and how does a CORS network work?",
    answer: "**CORS (Continuously Operating Reference Station) Guide:**\n\n- A network of GNSS reference stations transmitting raw data and RTK corrections to a data processing center for users.\n- VRS (Virtual Reference Station): generates a virtual base beside the rover using 3+ stations, shortening baseline and improving RTK accuracy.\n- NEAREST: automatically selects correction data from the closest base station to the rover.\n- Advantages for users: convenience (no base setup), cost-effective, standardized coordinates, higher accuracy via VRS.\n- For CORS providers: expanded user base, increased profitability from CORS accounts and equipment sales.",
    tags: ["cors", "vrs", "network"]
  },
  {
    id: 426, category: "rtk",
    keywords: ["static recording", "RTK base", "SingularPad", "web page", "data download", "静态记录", "基站记录", "grabación estática", "gravação estática"],
    question: "How to record static data simultaneously while using receiver as RTK base?",
    answer: "**Dual Recording Methods:**\n\n- SingularPad: connect via Bluetooth, go to Device > Base, enable static recording (default: 1 hour, Rinex3.02) then continue RTK base setup.\n- Web page (X1): connect to receiver WiFi (password: 12345678), access 192.168.10.12 (admin/admin), go to Data Recording, configure interval/format.\n- Download via USB: connect receiver to PC with Type-C cable and copy data directly.\n- Download via Web page: connect to WiFi, go to File Download, filter by name/type/date, click Refresh then Download.\n- Meets project requirements for accuracy verification while RTK base is operating.",
    tags: ["static-recording", "rtk-base", "singularpad"]
  },
  {
    id: 427, category: "rtk",
    keywords: ["AR", "augmented reality", "stakeout", "SingularPad", "camera overlay", "增强现实", "放样", "realidad aumentada", "realidade aumentada"],
    question: "How does AR (Augmented Reality) integration improve stakeout in SingularPad?",
    answer: "**AR Stakeout Features:**\n\n- AR merges virtual information with real-world camera view for intuitive stakeout navigation.\n- Core technologies: 3D registration, virtual-reality fusion display, and human-computer interaction via camera and sensors.\n- Access via Survey > Point Stakeout > select target points > click AR icon to enter AR interface.\n- Displays rear camera image as background with virtual stakeout point position overlaid.\n- Retains standard prompts (front/rear/left/right/E/W/S) alongside the AR visualization for comprehensive guidance.",
    tags: ["ar", "stakeout", "singularpad"]
  },
  {
    id: 428, category: "rtk",
    keywords: ["CORS gaps", "SingularXYZ Caster", "base station", "X1", "Sfaira ONE", "NTRIP", "网络RTK", "cobertura CORS", "cobertura CORS"],
    question: "How to overcome CORS coverage gaps using SingularXYZ Caster?",
    answer: "**Caster-Based RTK Without CORS Account:**\n\n- Set up X1 as base: insert SIM, configure GSM APN via WebUI (192.168.10.12, admin/admin), set antenna height, start base mode.\n- Upload correction data via NTRIP Server to SingularXYZ Caster: IP 47.103.96.216, Port 8992, customize user/password/mount point.\n- On Sfaira ONE rover: set Data Link to Phone Internet, enter same caster credentials, Get mount point list, select and Start.\n- When real-time differential data is received, click Apply to begin centimeter-level RTK surveying.\n- Cost-effective solution for regions without CORS coverage or with expensive CORS accounts.",
    tags: ["caster", "cors-gaps", "rtk"]
  },
  {
    id: 429, category: "rtk",
    keywords: ["line survey", "SingularPad", "linework", "editing", "drawing tools", "线测量", "线编辑", "levantamento de linha", "levantamento de linha"],
    question: "How to create and edit lines in SingularPad?",
    answer: "**Line Creation & Editing:**\n\n- Select \"line\" in drawing tools to create lines using surveyed points or points ready to survey.\n- Real-time feedback on length from starting point during line creation.\n- Seamlessly switch between multiple lines at any time during surveying.\n- Edit controls: Cross Mark (delete line), Check Mark (finish line creation), Return Mark (change end point).\n- Can continue from where you left off on an existing line: from start or pick up from any point in database.",
    tags: ["line-survey", "singularpad", "linework"]
  },
  {
    id: 430, category: "rtk",
    keywords: ["TS1000", "total station", "language settings", "NEZ", "ENZ", "instrument constant", "全站仪", "基本设置", "estación total", "estação total"],
    question: "How to modify basic settings on the TS1000 total station?",
    answer: "**TS1000 Basic Settings:**\n\n- Language: power off, press F2+POWER simultaneously, navigate F4(P\) > F1(LANGUAGE), select language with F1/F2, press F4(ENTER), restart.\n- NEZ/ENZ display: power off, press F2+POWER, select F2(MODE SET), scroll F4(P\) twice, F1(NEZ/ENZ), choose display, F4(ENTER), restart.\n- Instrument constant: power off, press F1+POWER, select F2(INST. CONSTANT), use F1/F2 to navigate and modify constants, press F4(ENT).\n- All setting changes require restarting the total station to take effect.",
    tags: ["ts1000", "total-station", "settings"]
  },
  {
    id: 431, category: "rtk",
    keywords: ["base map", "Google map", "OpenStreetMap", "WMS", "CAD", "map calibration", "底图", "地图校准", "mapa base", "calibração de mapa"],
    question: "How to set up and calibrate base maps in SingularPad?",
    answer: "**Base Map Setup & Calibration:**\n\n- Built-in maps: Google standard (urban/road), Google satellite (forest/field), OpenStreetMap (community/rural) - select via map icon in survey interface.\n- WMS Map: click map icon > WMS Map Setting > Add, enter WMS URL, select layers, save as new map.\n- CAD base map: go to Project > Layers Settings, import .dxf/.dwg files, then access via Survey > CAD Stakeout.\n- Map calibration: map icon > Map Calibration, select correct map point and measure same point with receiver, apply the displayed offset.\n- Calibration corrects for reference differences between the map display and actual receiver position.",
    tags: ["base-map", "calibration", "singularpad"]
  },
  {
    id: 432, category: "agnav",
    keywords: ["autosteer compatibility", "tractor types", "SAgro", "precision farming", "自动转向兼容性", "compatibilidad", "compatibilidade"],
    question: "What tractor types and farming tasks are compatible with SAgro-Series autosteer kits?",
    answer: "**SAgro-Series Compatibility:**\n\n- Tractor types: front/rear wheel drive, articulated, crawler, compact utility tractors.\n- Farming tasks: plowing, cultivating, planting, spraying, fertilizing, harvesting.\n- Compatible brands: John Deere, CLAAS, Fendt, CASE IH, Deutz-Fahr, New Holland, KUBOTA, Yanmar, AGCO, Foton.\n- Real user cases: SAgro200 for cultivating/planting in Europe, SAgro150 for sugarcane fertilizing/ridging, SAgro100 for garlic/rice/corn/potato planting.\n- Contact support for unlisted tractor models or specific compatibility questions.",
    tags: ["autosteer", "compatibility", "sagro"]
  },
  {
    id: 433, category: "rtk",
    keywords: ["line stakeout", "SingularPad", "mileage", "station distance", "offset", "线放样", "里程放样", "replanteo de línea", "estacas de linha"],
    question: "How to perform line stakeout with different methods in SingularPad?",
    answer: "**Line Stakeout Methods:**\n\n- Stakeout by Mileage: enter distance from start point to stake any node on the line directly.\n- Stakeout by Station Distance: enter interval distance (e.g., 5m) to stake at regular spacing along the line.\n- Stakeout by Segment: enter number of segments to divide the line into equal parts for staking.\n- Stakeout with Offset: input offset value to generate a parallel auxiliary line at the specified perpendicular distance.\n- Offset mode also supports distance and segment-based staking relative to the auxiliary line.",
    tags: ["line-stakeout", "singularpad", "modes"]
  },
  {
    id: 434, category: "rtk",
    keywords: ["azimuth", "bearing", "direction", "angle measurement", "true north", "方位角", "方向角", "acimut", "rumo"],
    question: "What is the difference between azimuth and bearing in land surveying?",
    answer: "**Azimuth vs Bearing:**\n\n- Azimuth: measured 0-360 degrees clockwise from true north; uses numerical values only.\n- Bearing: measured 0-90 degrees, clockwise or anticlockwise; uses alphanumeric values (e.g., N45°E).\n- Azimuth references true north as baseline (surveying/mapping start from north; astronomy/military from south).\n- Bearing is based on relative direction between two points; can start from south or north.\n- Azimuth used in high-precision applications (surveying, mapping); bearing is more common in daily navigation.",
    tags: ["azimuth", "bearing", "fundamentals"]
  },
  {
    id: 435, category: "agnav",
    keywords: ["U-turn", "autosteer", "SAgro", "tractor turning", "path alignment", "自动调头", "vuelta en U", "retorno automático"],
    question: "How to use the U-Turn function in SAgro-Series autosteer kits?",
    answer: "**U-Turn Setup & Parameters:**\n\n- Enable: System Settings > Auto-Steering > Settings, ensure U-TURN function status shows \"Already opened\".\n- Turning Radius: set according to tractor size (too small = cannot complete; too large = path deviation). Experiment to find optimum.\n- Distance from Border: set to 0 if plot has no defined boundary for proper turn positioning.\n- U-TURN Interval: sets number of empty lines between paths (1 = one empty line, 2 = two empty lines); adjust for crop spacing.\n- Properly calibrated, U-Turn allows tractors to automatically turn and align with the next path line without manual intervention.",
    tags: ["u-turn", "autosteer", "sagro"]
  },
  {
    id: 436, category: "agnav",
    keywords: ["demo mode", "simulation", "SAgro", "autosteer", "training", "演示模式", "modo demo", "modo de demonstração"],
    question: "How to activate demo mode on SAgro-Series autosteer and guidance systems?",
    answer: "**Demo Mode Activation:**\n\n- For Autosteer systems: go to System > Satellite > Receiver, select \"Simulate demo\"; System > Vehicle > Sensor Type, select \"Encoder\".\n- System automatically restarts into demo mode; set AB line and click start autosteer in software.\n- For Guidance systems: contact support for simulation .txt file, copy to tablet root directory, reopen guidance software.\n- Useful for trade shows, training sessions, system testing, remote demonstrations, and user familiarization.\n- No tractor installation needed in demo mode.",
    tags: ["demo-mode", "simulation", "sagro"]
  },
  {
    id: 437, category: "rtk",
    keywords: ["DDNS", "SV100", "remote management", "NO-IP", "port forwarding", "动态域名", "gestión remota", "gerenciamento remoto"],
    question: "How to set up DDNS for remote management of SV100 CORS stations?",
    answer: "**DDNS Setup with NO-IP:**\n\n- Create hostname on noip.com (select ddns.net domain, DNS Host (A) record type, enter router IPv4 address).\n- Configure SV100 Ethernet settings: check router DNS server, set SV100 IP within same gateway via WiFi (192.168.10.12).\n- Map SV100 internal port to router external port in router's web interface (do NOT use port 80 for web interface).\n- Create DDNS key in NO-IP (save the one-time password), enter User/Password/Domain in SV100 web page, click Startup.\n- Access remotely via: hostname.ddns.net:externalport.",
    tags: ["ddns", "sv100", "remote-management"]
  },
  {
    id: 438, category: "rtk",
    keywords: ["drone", "DJI", "base station", "X1", "NTRIP caster", "WiFi", "无人机基站", "estación base drone", "estação base drone"],
    question: "How to set up a base station for drone RTK operations using X1 receiver's internal caster?",
    answer: "**Drone RTK Base Setup with X1:**\n\n- Connect PDA to X1 WiFi (SN name, password 12345678), access WebUI at 192.168.10.12 (admin/admin).\n- Start base: Device Configuration > Working Mode > GET > Start Base.\n- Configure NTRIP Caster: set Port/User/Password (any values), check Startup, click OK.\n- Configure NTRIP Server: address 192.168.10.12, same Port/User/Password, any Mount Point, check Startup, click OK.\n- On DJI controller: connect to X1 WiFi, set RTK Service Type to Custom Network RTK, input same host/port/credentials, Save.",
    tags: ["drone", "dji", "rtk-base", "x1"]
  },
  {
    id: 439, category: "rtk",
    keywords: ["TS1000", "total station", "USB", "data export", "data import", "GTS", "SSS", "全站仪数据", "exportación de datos", "exportação de dados"],
    question: "How to import and export data on TS1000 total station via USB?",
    answer: "**TS1000 USB Data Transfer:**\n\n- Supported formats: GTS (standard Topcon format) and SSS (point name, N, E, Z, code).\n- Export: MENU > F3(MEMORY MGR.) > F4(P\) > F3(THUMB DRIVE) > F1(EXPORT) > select Meas/Coord data > select project > select format > F3(YES).\n- Import: same path to THUMB DRIVE > F2(IMPORT) > select file from USB > F4(IMPT) > select target project via F2(LIST) > F4(ENTER) > F3(YES).\n- Use up/down arrow keys to navigate file selections.\n- Check exported data on USB stick after completion.",
    tags: ["ts1000", "data-transfer", "usb"]
  },
  {
    id: 440, category: "rtk",
    keywords: ["Sfaira ONE", "test report", "accuracy", "tilt compensation", "environments", "精度测试", "prueba de rendimiento", "teste de desempenho"],
    question: "How does the Sfaira ONE GNSS receiver perform in different environments?",
    answer: "**Sfaira ONE Performance Results (Tested in Finland):**\n\n- Open areas: ±1cm without tilt, ±4cm with 15° tilt; very low standard deviation, highly reliable.\n- Partially obstructed (trees, buildings): <1cm without tilt, <±4cm with tilt; consistent precision maintained.\n- Heavily obstructed: ±2cm without tilt, ±4cm horizontal and within 10cm vertical with tilt.\n- Tilt compensation works effectively across all test environments.\n- Test used ETRS-TM35FIN/ETRSGK26 coordinate systems with FIN2005N00 geoid file.",
    tags: ["sfaira-one", "performance", "test-report"]
  },
  {
    id: 441, category: "rtk",
    keywords: ["RTK accuracy", "RMS", "DOP", "covariance matrix", "ENU", "精度评估", "precisión RTK", "precisão RTK"],
    question: "How to evaluate RTK accuracy in different dimensions?",
    answer: "**RTK Accuracy Metrics:**\n\n- One-dimensional: standard deviations from covariance matrix diagonal (Pxx, Pyy, Pzz) transformed to ENU coordinates.\n- Bidimensional (horizontal): combined East and North error analysis.\n- Three-dimensional: closely related to DOP indicators (PDOP, HDOP, VDOP).\n- Vertical RMS: sqrt(sum(ΔUi²)/n) - root mean square of vertical errors.\n- Horizontal RMS: sqrt(sum(ΔEi² + ΔNi²)/n); 3D RMS: sqrt(sum(ΔEi² + ΔNi² + ΔUi²)/n).",
    tags: ["accuracy", "rms", "dop"]
  },
  {
    id: 442, category: "rtk",
    keywords: ["base station", "RTK setup", "environment", "known point", "antenna height", "基站设置", "estación base", "configuração de base"],
    question: "What are the key tips for setting up a reliable RTK base station?",
    answer: "**Reliable Base Station Setup Tips:**\n\n- Environment: choose clear outdoor sky view, elevated position; avoid buildings, trees, vehicles, high-power radar, TV/cellular towers, power lines.\n- Known point: use \"Assigned Base Coordinates\" mode in SingularPad with known point coordinates for consistent reference.\n- No known point: perform point calibration each time you start the base to adjust coordinates.\n- Set accurate antenna height using pole height or slant height method.\n- Proper environment and known point calibration ensure consistent coordinate references across all survey points.",
    tags: ["base-station", "setup", "tips"]
  },
  {
    id: 443, category: "rtk",
    keywords: ["APN", "SIM card", "GSM", "4G", "internet", "SingularPad", "接入点", "punto de acceso", "ponto de acesso"],
    question: "What is APN and how to configure it in SingularXYZ devices?",
    answer: "**APN Setup Guide:**\n\n- APN (Access Point Name): gateway between mobile network and internet, determines IP assignment, security, and data routing.\n- For SV100: access WebUI via WiFi > Device Configuration > GSM Config, enter APN per SIM card type (provided by network operator).\n- Username and Password from SIM provider; Authentication Type: select \"None\" in most cases (or PAP/CHAP per provider requirements).\n- For X1 smart antennas: configure APN via SingularPad Bluetooth connection > Internal GSM/Device Internet mode.\n- Correct APN configuration ensures reliable 4G connectivity for RTK differential data transmission.",
    tags: ["apn", "gsm", "configuration"]
  },
  {
    id: 444, category: "rtk",
    keywords: ["TS1000", "total station", "data conversion", "CSV", "DXF", "TS-Link", "数据格式转换", "conversión de formato", "conversão de formato"],
    question: "How to convert TS1000 total station data to CSV and DXF formats?",
    answer: "**Data Format Conversion via TS-Link:**\n\n- Export coordinate data from TS1000: .XYZ (GTS format) or .PTS (SSS format) via USB.\n- Open TS-Link conversion software and import the exported coordinate data files.\n- Click File > Export, select desired format (CSV, DXF, and more), choose storage path, click Save.\n- Note: TS-Link supports coordinate data conversion only, not raw measurement data.\n- Contact technical team for TS-Link software access.",
    tags: ["ts1000", "data-conversion", "ts-link"]
  },
  {
    id: 445, category: "agnav",
    keywords: ["NMEA", "autosteer", "SAgro200", "GPGGA", "data output", "导航电文输出", "salida NMEA", "saída NMEA"],
    question: "How to output NMEA messages from SAgro-Series autosteer kits?",
    answer: "**NMEA Output Setup for SAgro200:**\n\n- Configure receiver type as \"SAgro200\" and sensor as \"Dual Gyro Sensor\".\n- Navigate: Satellite > Data Output > NMEA-0183 Output interface.\n- Select desired NMEA messages (GPGGA for position, plus speed and attitude data) and set output frequency.\n- Messages output via COM port of receiver cable.\n- Use RS232-to-USB converter to collect NMEA messages on a laptop for trajectory recording and field data analysis.",
    tags: ["nmea", "autosteer", "sagro200"]
  },
  {
    id: 446, category: "rtk",
    keywords: ["antenna phase center", "APC", "ARP", "PCO", "PCV", "GNSS", "天线相位中心", "centro de fase", "centro de fase"],
    question: "What is the antenna phase center and how is it calculated?",
    answer: "**Antenna Phase Center (APC) Explained:**\n\n- APC: the electrical center of the antenna's radiation field - the theoretical point from which signals are received.\n- ARP (Antenna Reference Point): intersection of receiver bottom and central antenna axis.\n- For X1-series: distance from ARP to APC = H + HL1 = 0.068m.\n- For Y1: distance from ARP to APC = H + (HL1 + HL2)/2 = 0.0634m.\n- To get measured point coordinates: add range pole height to the ARP position after converting from APC.",
    tags: ["antenna-phase-center", "apc", "gnss"]
  },
  {
    id: 447, category: "rtk",
    keywords: ["TS1000", "total station", "station occupation", "back-sight", "resection", "设站", "后方交会", "ocupación de estación", "ocupação de estação"],
    question: "What are the different station occupation methods for TS1000 total station?",
    answer: "**Station Occupation Methods:**\n\n- Set Back-Sight by Coordinate: input occupation and back-sight point coordinates, aim at target to calculate position using coordinate forward calculation.\n- Set Back-Sight by Angle: input occupation point coordinates and horizontal angle between OB and Y-axis.\n- Resection: calculate occupation point from two known back-sight points (A, B) using measured distances (L1, L2).\n- Side Shot: establish a transfer station as new occupation point when stakeout and occupation points are not inter-visible.\n- All methods use the Gauss plane rectangular coordinate system.",
    tags: ["ts1000", "station-occupation", "total-station"]
  },
  {
    id: 448, category: "rtk",
    keywords: ["personal server", "SingularCaster", "CORS", "port forwarding", "router", "个人服务器", "servidor personal", "servidor pessoal"],
    question: "How to build a personal server for SingularCaster CORS software?",
    answer: "**Personal Server Setup Steps:**\n\n- Requirements: capable PC for extended runtime, router with port forwarding support and public IP address.\n- Connect PC to router, access router config interface, navigate to port forwarding section.\n- Map router public IP to PC internal IP for specified ports to allow external device communication.\n- Add inbound rules to PC firewall for the forwarded ports.\n- Install SingularCaster per user manual (contact support for manual and remote assistance); cost-effective alternative to cloud servers for small-scale CORS.",
    tags: ["personal-server", "singularcaster", "cors"]
  },
  {
    id: 449, category: "rtk",
    keywords: ["photovoltaic", "solar panel", "stake-out", "SingularPad", "pile layout", "光伏放样", "replanteo fotovoltaico", "estacas fotovoltaicas"],
    question: "How to conduct photovoltaic stake-out with SingularPad?",
    answer: "**PV Stake-out Steps in SingularPad:**\n\n- Import photovoltaic design file into SingularPad's Photovoltaic Stake function.\n- Survey \"Start\" and \"End\" points to establish the PV panel boundary.\n- Input parameters: Length (3D), Number of Segments (equal or unequal intervals), Row layout (Single/South/North Row), Row Distance.\n- Software auto-generates midpoint positions for foundation pile staking.\n- Follow indicator panel to locate midpoints; use arrow buttons to jump between points. Repeat for all PV panels in project.",
    tags: ["photovoltaic", "stakeout", "singularpad"]
  },
  {
    id: 450, category: "rtk",
    keywords: ["LAN IP", "public IP", "static IP", "CORS", "network", "SV100", "IP地址", "dirección IP", "endereço IP"],
    question: "What are the differences between LAN, public, and static IPs in CORS setup?",
    answer: "**IP Types for CORS:**\n\n- LAN IP: local network communication (e.g., 192.168.x.x), used for on-site SV100 configuration via web interface.\n- Public IP: enables remote communication across large distances; needed for rovers outside local network to receive differential data.\n- Static IP: permanent, unchanging address recommended for stable long-term CORS connections; more costly than dynamic IPs.\n- Alternative to static IP: DDNS (Dynamic DNS) for cost-efficient remote access without a static IP.\n- SV100 uses LAN IP for local config, Public/Static IP or DDNS for remote CORS station access.",
    tags: ["ip-address", "cors", "network"]
  },
  {
    id: 451, category: "rtk",
    keywords: ["TS1000", "data conversion", "TS-Link", "decimal formatting", "troubleshooting", "数据转换问题", "solución de conversión", "solução de conversão"],
    question: "How to fix data conversion failures in TS-Link for TS1000 total station data?",
    answer: "**TS-Link Conversion Error Fix:**\n\n- Error \"not a valid floating point value\" caused by decimal formatting issues or spaces in feature codes.\n- Open data file in Excel, use ROUND function on coordinate columns (B, C, D) with Num_digits=3.\n- Double-click cell corner to apply ROUND to entire columns automatically.\n- Save as new .CSV file, then import into TS-Link for successful conversion.\n- Also ensure feature codes have no spaces (e.g., \"abc\" is valid, \"a bc\" is not).",
    tags: ["ts1000", "troubleshooting", "ts-link"]
  },
  {
    id: 452, category: "rtk",
    keywords: ["NMEA", "GPRMC", "GPTRA", "GPVTG", "positioning", "navigation", "导航电文", "mensajes NMEA", "mensagens NMEA"],
    question: "What are the key NMEA messages for high-precision positioning?",
    answer: "**Advanced NMEA Messages:**\n\n- GPRMC: time, date, speed over ground, true course angle - essential for navigation and autonomous tracking.\n- GPTRA: heading angle (0-360°), pitch (-90 to 90°), roll angles from dual-antenna baseline - vital for marine/aerial/robotic navigation.\n- GPVTG: track made good and ground speed in knots and km/h - used for marine and vehicle navigation.\n- All messages include UTC time, checksum, and sentence terminator for data integrity.\n- Applications span construction, agriculture, marine navigation, and autonomous vehicles.",
    tags: ["nmea", "messages", "positioning"]
  },
  {
    id: 453, category: "rtk",
    keywords: ["SingularCaster", "troubleshooting", "login failure", "CORS server", "软件故障", "solución de problemas", "solução de problemas"],
    question: "How to troubleshoot common SingularCaster login issues?",
    answer: "**SingularCaster Troubleshooting:**\n\n- First verify IP and port: server IP should be 127.0.0.1, port 8080 via Configure button on login screen.\n- Check service status: open Task Manager > Services, find SingularPointCasterService; restart if not running.\n- If service keeps stopping after reboot: uninstall SingularCaster, remove associated database files.\n- Download and install the latest version of SingularCaster from the official website.\n- Regularly check configuration settings and server operational status for smooth CORS management.",
    tags: ["singularcaster", "troubleshooting", "login"]
  },
  {
    id: 454, category: "rtk",
    keywords: ["SingularPad", "activation", "license", "registration", "troubleshooting", "软件激活", "activación de software", "ativação de software"],
    question: "How to activate SingularPad software and resolve common registration issues?",
    answer: "**SingularPad Activation & FAQs:**\n\n- Register via: Project > About Software > Software Activation, enter license code or scan QR code (one-month free trial available).\n- \"Registration Code Transferred Out\": code moved to another device; save the new activation code shown, or contact support to reset.\n- \"ERROR_ID_LOCK\": incorrect software ID (starts with 'A'); ensure internet connection, restart phone and software.\n- \"ERROR_AUTH_CODE_USED\": code already registered on another device; transfer registration since one license works on one device only.\n- Contact support for any persistent issues during the activation process.",
    tags: ["singularpad", "activation", "license"]
  }
