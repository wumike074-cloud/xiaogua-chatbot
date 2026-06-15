const kb = [
  // --- RTK ---
  {
    id: 1, category: "rtk",
    keywords: ["信号", "丢失", "断连", "不稳定", "signal", "lost", "drop", "unstable", "disconnect", "connection", "weak"],
    question: "RTK signal keeps dropping / unstable — what should I check?",
    answer: "**Troubleshooting RTK signal loss:**\n\n1. **Check line of sight** — Make sure there are no buildings, trees, or other obstructions between the base and rover.\n2. **Radio range** — UHF radios typically work within 3-5 km in open areas. If you're near the limit, consider moving the base closer or using a repeater.\n3. **Power supply** — Verify both base and rover batteries are adequately charged (above 20%).\n4. **Antenna connection** — Check that all antenna cables are securely connected and undamaged.\n5. **Interference sources** — Power lines, cell towers, and large metal structures can cause interference. Try relocating.\n6. **Base station stability** — Ensure the base tripod is firmly set and not vibrating.\n7. **Frequency settings** — Confirm base and rover are on the same frequency/channel.\n\nIf the issue persists after checking all of the above, the radio module may need servicing.",
    tags: ["troubleshooting", "signal", "connection"]
  },
  // --- Auto Shutdown ---
  {
    id: 101, category: "rtk",
    keywords: ["自动关机", "关机", "auto shutdown", "shutdown", "power off", "低电量", "low battery", "电量", "充电", "charge", "电池", "battery"],
    question: "Device shuts down automatically — low battery?",
    answer: "**Auto-Shutdown: Low Battery Protection**\n\nThe device has a built-in low-battery protection mechanism. When the battery drops below **10%**, the device will automatically power off to protect the battery from deep discharge.\n\n**Diagnosis:**\n1. Check the battery level before shutdown — if it was below 10%, this is normal behavior\n2. Charge the device fully and try powering on — it should work normally\n\n**Prevention:**\n- Charge the device when battery reaches 15-20%\n- Carry a spare battery or power bank for extended field work\n- Monitor battery level regularly during operation via the controller software",
    tags: ["troubleshooting", "shutdown", "battery", "power"]
  },
  {
    id: 102, category: "rtk",
    keywords: ["自动关机", "关机", "auto shutdown", "过热", "温度", "overheat", "temperature", "高温", "cooling", "冷却"],
    question: "Device shuts down in hot weather / high temperature?",
    answer: "**Auto-Shutdown: Over-Temperature Protection**\n\nIf the ambient temperature is too high, the device may exceed its maximum operating temperature and trigger an automatic shutdown to protect internal components.\n\n**Diagnosis:**\n1. Check if the device feels hot to the touch\n2. Check if the operating environment was particularly hot (direct sunlight, enclosed space, etc.)\n3. Allow the device to cool down in a shaded area for 10-15 minutes\n4. After cooling, power on — it should work normally\n\n**Prevention:**\n- Avoid leaving the device in direct sunlight for extended periods\n- Use a sunshade or cover when operating in hot conditions\n- Ensure ventilation around the receiver (do not wrap or enclose it)\n- Typical operating temperature range: -20°C to +60°C (check your model's spec)",
    tags: ["troubleshooting", "shutdown", "temperature", "overheat"]
  },
  {
    id: 103, category: "rtk",
    keywords: ["自动关机", "关机", "auto shutdown", "移动电源", "power bank", "充电宝", "功率", "power", "external", "外部供电"],
    question: "Device shuts down when using a power bank / external power?",
    answer: "**Auto-Shutdown: Insufficient Power Supply**\n\nIf the device is powered by a power bank or external battery and shuts down during operation, the power source likely cannot deliver enough current.\n\n**Diagnosis:**\n1. Check the power bank's output specifications — output power (watts) may be too low\n2. Many consumer-grade power banks output only 5V/1A (5W), which may be insufficient\n3. Try using the original battery or a higher-power external supply\n\n**Requirements:**\n- Use a power bank that supports the device's required voltage and current (check device manual)\n- Recommended: power banks with QC/PD fast-charging support, or dedicated survey-grade external batteries\n- Avoid using the power bank's low-current port",
    tags: ["troubleshooting", "shutdown", "power", "power-bank"]
  },
  {
    id: 104, category: "rtk",
    keywords: ["X1", "X1 lite", "基站", "base station", "自动关机", "MCU", "固件", "firmware", "bug", "升级", "update"],
    question: "X1 Lite shuts down automatically when used as base station?",
    answer: "**Auto-Shutdown: X1 Lite Base Station MCU Firmware Bug**\n\nThere is a known bug in older MCU firmware versions on the X1 Lite that causes automatic shutdown when the device is operating in base station mode.\n\n**Diagnosis:**\n1. Check if the device is an **X1 Lite** model\n2. Check if the issue only occurs in **base station mode** (rover mode works fine)\n3. Check the MCU firmware version in the device info page\n\n**Solution:**\n1. Connect to the device via WiFi or Bluetooth\n2. Navigate to Settings > Device Info and check the MCU firmware version\n3. Download the latest firmware from the manufacturer's website\n4. Update the MCU firmware following the standard firmware update procedure\n5. After the update, test base station operation — the shutdown issue should be resolved\n\n**Note:** This is a firmware-level bug, not a hardware defect. Updating to the latest firmware permanently resolves the issue.",
    tags: ["troubleshooting", "shutdown", "x1-lite", "base-station", "firmware", "mcu"]
  },
  {
    id: 2, category: "rtk",
    keywords: ["精度", "误差", "漂移", "accuracy", "precision", "error", "drift", "cm", "centimeter", "不准确", "inaccurate"],
    question: "RTK accuracy is worse than expected / position drift?",
    answer: "**Improving RTK accuracy:**\n\n1. **Base coordinate check** — If using a known point, verify the base coordinates are entered correctly. An incorrect base position will shift all measurements.\n2. **Satellite geometry (PDOP)** — Check PDOP value. If PDOP > 3, wait for better satellite geometry.\n3. **Number of satellites** — At least 5 common satellites between base and rover are needed. More is better.\n4. **Baseline length** — Accuracy degrades with distance. Keep baseline under 10 km for best results.\n5. **Multipath** — Nearby reflective surfaces (buildings, water, vehicles) cause multipath errors. Move away from such surfaces.\n6. **Correction age** — If using NTRIP, check that correction latency is under 2 seconds.\n7. **Firmware version** — Ensure both base and rover have the latest firmware.\n\nExpected accuracy: Horizontal ±8mm + 1ppm, Vertical ±15mm + 1ppm under good conditions.",
    tags: ["troubleshooting", "accuracy", "precision"]
  },
  {
    id: 3, category: "rtk",
    keywords: ["固定解", "浮动解", "单点", "差分", "fix", "float", "single", "differential", "solution", "RTK fix", "initialization", "初始化", "收敛", "converge", "不固定", "搜星", "卫星", "satellite", "SBAS"],
    question: "Rover cannot get RTK Fixed solution — how to diagnose?",
    answer: "**RTK Fix Troubleshooting — Systematic Diagnostic Flow:**\n\nFollow these steps in order based on your device's current status:\n\n**Step 1: Zero satellites (no signal at all)**\n- Go to Device Info and check the registration/authorization status\n- If the device registration has expired, it cannot track satellites → No fix possible\n- **Solution:** Renew the device registration / authorization with your provider\n\n**Step 2: Satellites OK but stuck in Single (Autonomous) — no differential**\n- The rover sees satellites but is not receiving corrections from the base\n- **Check:** Base and rover configuration must match (same frequency, protocol, settings)\n- If configurations don't match, they cannot communicate → Rover stays in Single\n- **Solution:** Verify and align base/rover configuration settings\n\n**Step 3: Entered Differential but won't reach Float or Fix**\n- Go to the SBAS settings in the software and **disable SBAS**\n- If disabling SBAS causes the RTK status to drop from Differential back to Single, it means the rover is NOT actually receiving corrections from the base\n- **Check:** Radio frequency, protocol, and channel settings on both base and rover\n- The SBAS signal was masking the real issue (no base communication)\n\n**Step 4: Float solution achieved but won't go to Fix**\n- Base and rover are communicating successfully (corrections are being received)\n- The issue is likely **environmental** — obstructions, multipath, or poor satellite geometry\n- **Solution:** Move to a more open area with clear sky view\n- Wait 10-60 seconds after relocating for the ambiguity to resolve\n\n**Quick reference:**\n| Status | Meaning | Most Likely Cause |\n|--------|---------|-------------------|\n| 0 satellites | No signal | Registration expired |\n| Single (no diff) | No corrections | Config mismatch |\n| Differential only | Weak corrections | SBAS masking / radio issue |\n| Float (not Fix) | Corrections OK | Environmental / obstructions |",
    tags: ["troubleshooting", "fix", "initialization", "diagnostic-flow"]
  },
  {
    id: 4, category: "rtk",
    keywords: ["NTRIP", "CORS", "网络", "cors", "ntrip", "network", "mount", "mountpoint", "IP", "port", "连接", "connect"],
    question: "How to configure NTRIP / CORS connection?",
    answer: "**NTRIP Client Setup:**\n\n1. **Get CORS account** — Register with your local CORS network provider to get username, password, IP address, and port.\n2. **Enter settings in controller:**\n   - Address/IP: e.g., `cors.example.com` or `203.0.113.10`\n   - Port: usually `2101` (standard NTRIP port)\n   - Username & Password: from your CORS provider\n   - Mount Point: select from the list after connecting (e.g., `RTCM33_GR_4.3`)\n3. **Select correction format** — RTCM 3.2 or 3.3 is recommended. CMR+ also supported.\n4. **Internet connection** — Make sure the controller has internet access (SIM card with data plan or WiFi).\n5. **Test connection** — After entering, tap \"Connect\" or \"Get Mount Points\". If mount points appear, the connection is working.\n\n**Common NTRIP mount point naming:**\n- `RTCM33` = RTCM 3.3 format\n- `VRS` = Virtual Reference Station\n- `iMAX`, `MAX` = Master-Auxiliary correction\n- `NEAR` = Nearest physical station",
    tags: ["setup", "ntrip", "cors", "network"]
  },
  {
    id: 5, category: "rtk",
    keywords: ["基站", "base station", "setup", "架设", "base", "tripod", "三脚架", "level", "水平"],
    question: "How to properly set up a base station?",
    answer: "**Base Station Setup Procedure:**\n\n1. **Choose location** — Open sky view, away from obstructions and interference sources. High ground is best.\n2. **Set up tripod** — Firmly plant the tripod, adjust legs so the top plate is roughly level.\n3. **Mount base receiver** — Attach the receiver to the tribrach on the tripod. Use the optical plummet or laser to center precisely over the point.\n4. **Level the tribrach** — Adjust the three leveling screws until the bubble is centered.\n5. **Attach antenna** — Connect the UHF radio antenna. Make sure it's vertical.\n6. **Power on** — Connect battery and power on the base receiver.\n7. **Configure base mode** — On the controller, set the receiver to \"Base\" mode.\n8. **Enter coordinates** — Either:\n   - Enter known coordinates if set up over a known point\n   - Use \"Here\" position (autonomous averaging, ~2-5m accuracy) if relative accuracy is sufficient\n9. **Start transmitting** — Confirm the base radio TX light is flashing (transmitting corrections).\n10. **Verify with rover** — Walk to a known point with the rover and check the measured position.",
    tags: ["setup", "base station", "hardware"]
  },
  {
    id: 6, category: "rtk",
    keywords: ["电台", "radio", "UHF", "frequency", "频率", "range", "距离", "功率", "power", "channel"],
    question: "Radio connection issues between base and rover?",
    answer: "**Radio Troubleshooting:**\n\n1. **Frequency match** — Base and rover radios must be on the exact same frequency. Even 0.025 MHz offset will cause no connection.\n2. **Radio protocol** — Both radios must use the same protocol (e.g., TRIMTALK, SATEL, TRANSEOT). Mismatched protocol = no data.\n3. **Power setting** — Higher power = longer range but consumes more battery. 1W is typical for 2-3 km, 2W+ for 5+ km.\n4. **Antenna height** — Raising the base antenna by 1 meter can add significant range. Use an extension pole if needed.\n5. **Antenna type** — Use the correct antenna for your frequency band (410-470 MHz typical). A damaged or wrong-band antenna kills range.\n6. **Line of sight** — UHF is essentially line-of-sight. Hills, buildings, dense forest block the signal.\n7. **Cable check** — Inspect the antenna cable for kinks, cuts, or loose connectors.\n8. **Interference** — Other radios on the same channel, power lines, and electrical equipment can interfere. Try a different channel.",
    tags: ["troubleshooting", "radio", "hardware"]
  },

  // --- 3D Scanner ---
  {
    id: 7, category: "scanner",
    keywords: ["扫描", "scan", "点云", "point cloud", "精度", "accuracy", "noise", "噪声", "质量", "quality"],
    question: "3D scan quality is poor / too much noise in point cloud?",
    answer: "**Improving 3D Scan Quality:**\n\n1. **Scan distance** — Stay within the scanner's optimal range. Quality drops significantly beyond the rated range.\n2. **Surface reflectivity** — Dark, shiny, or transparent surfaces produce poor returns. Use scanning spray on glossy/dark surfaces (white powder spray for laser scanning).\n3. **Ambient light** — Bright sunlight can interfere with some scanners. Scan in overcast conditions or shade the target area when possible.\n4. **Scanner stability** — Ensure the scanner is on a stable tripod. Vibrations during scanning cause noise.\n5. **Resolution settings** — Higher resolution = better detail but longer scan time. Match resolution to your application.\n6. **Overlap** — For multi-scan projects, ensure 30-50% overlap between adjacent scans.\n7. **Clean lens** — A dirty scanner lens or mirror will degrade all scans. Clean with a microfiber cloth.\n8. **Temperature** — Let the scanner warm up for 5-10 minutes before scanning. Thermal drift affects accuracy.",
    tags: ["troubleshooting", "quality", "scanning"]
  },
  {
    id: 8, category: "scanner",
    keywords: ["拼接", "配准", "registration", "align", "alignment", "merge", "对齐", "坐标系", "coordinate"],
    question: "How to align/register multiple scans together?",
    answer: "**Scan Registration Methods:**\n\n1. **Target-based registration** — Place spherical or checkerboard targets in the overlapping areas between scans. Software auto-detects targets and aligns scans. This is the most accurate method.\n2. **Cloud-to-cloud (ICP)** — Iterative Closest Point algorithm. Useful when targets weren't used. Software finds common surfaces between scans and aligns them.\n3. **Feature-based** — Manually pick common points (corners, edges) in two scans. Works well for structured environments like buildings.\n4. **Survey control** — If you have RTK/total station coordinates for targets, you can georeference scans directly.\n\n**Best practices:**\n- Use at least 3 non-collinear targets per scan pair\n- Ensure targets are clearly visible from both scan positions\n- Place targets at varying heights, not all on the same plane\n- Check registration error (RMS) — should typically be under 5 mm for good registration",
    tags: ["workflow", "registration", "alignment"]
  },
  {
    id: 9, category: "scanner",
    keywords: ["校准", "calibration", "误差", "error", "补偿", "compensate", "检查"],
    question: "How often should I calibrate the scanner, and how to check calibration?",
    answer: "**Scanner Calibration:**\n\n**Frequency:**\n- Factory calibration is typically valid for 1 year\n- Check calibration monthly if the scanner is used daily or transported frequently\n- Re-calibrate immediately if the scanner has been dropped or subjected to strong impact\n\n**Quick calibration check:**\n1. Set up the scanner in a room with flat walls at various distances\n2. Scan a flat wall at ~5m distance\n3. Fit a plane to the point cloud in software\n4. Check the standard deviation of points from the plane — should be close to the scanner's spec (e.g., <2mm @10m)\n5. Scan a known calibrated sphere or scale bar and measure it in the software\n\n**Signs calibration is off:**\n- Systematic curvature in \"flat\" surfaces\n- Scale errors (measured distances consistently short or long)\n- Angular errors between orthogonal surfaces\n\nContact your dealer or manufacturer for calibration service.",
    tags: ["maintenance", "calibration", "troubleshooting"]
  },
  {
    id: 10, category: "scanner",
    keywords: ["导出", "export", "format", "格式", "LAS", "E57", "PTS", "XYZ", "ASCII", "软件", "software"],
    question: "What export formats are supported and which software to use?",
    answer: "**Common Point Cloud Formats:**\n\n| Format | Type | Best For |\n|--------|------|----------|\n| **E57** | Binary, vendor-neutral | Archive, data exchange |\n| **LAS/LAZ** | Binary, industry standard | Survey, GIS, Civil3D |\n| **PTS/PTX** | ASCII/Binary | Leica, FARO ecosystem |\n| **XYZ** | ASCII text | Simple, universal import |\n| **PLY** | Binary/ASCII | Mesh processing |\n| **RCP/RCS** | Autodesk format | AutoCAD, Revit, Navisworks |\n\n**Recommended Software by Task:**\n- **Registration & editing**: CloudCompare (free), Trimble RealWorks, FARO Scene, Leica Cyclone\n- **CAD/BIM**: AutoCAD + Recap, Revit, MicroStation\n- **Survey/mapping**: Civil3D, Virtual Surveyor, Carlson\n- **Mesh generation**: Geomagic, MeshLab",
    tags: ["workflow", "software", "export"]
  },

  // --- AgNav (Agricultural Navigation) ---
  {
    id: 11, category: "agnav",
    keywords: ["guidance", "导航", "steering", "转向", "auto steer", "自动转向", "line", "AB线", "AB line"],
    question: "How to set up AB guidance line for auto-steering?",
    answer: "**Setting Up AB Line Guidance:**\n\n1. **Position tractor** — Drive to the starting point of your first pass (Point A).\n2. **Mark Point A** — On the console, press \"Set A\" or tap the A point button.\n3. **Drive the line** — Drive straight to the end of the pass (Point B). Go at least 50 meters for good line quality.\n4. **Mark Point B** — Press \"Set B\" or tap the B point button.\n5. **Line created** — The system now shows the AB line and parallel guidance lines (swaths).\n6. **Engage auto-steer** — Align with the first swath and press the auto-steer engage button.\n\n**Tips:**\n- Use RTK Fixed solution for accurate guidance (±2.5cm pass-to-pass)\n- AB line direction should match your field layout\n- For curved fields, use A+ heading or contour mode instead\n- Verify implement width is set correctly in settings",
    tags: ["setup", "guidance", "auto-steer"]
  },
  {
    id: 12, category: "agnav",
    keywords: ["校准", "calibration", "IMU", "gyro", "陀螺", "terrain", "地形", "坡度", "slope", "补偿"],
    question: "How to calibrate the terrain compensation / IMU?",
    answer: "**Terrain Compensation Calibration:**\n\nRequired for accurate guidance on slopes and uneven terrain.\n\n1. **Find a level surface** — Park the tractor on level ground.\n2. **Enter calibration menu** — Navigate to Settings > Vehicle > Terrain Compensation.\n3. **Zero calibration** — With the vehicle stationary and level, press \"Calibrate Zero\" or \"Set Level\".\n4. **IMU calibration** (if equipped):\n   - Drive forward in a straight line at normal working speed for 30+ seconds\n   - Make a smooth 90° turn\n   - Drive straight again for 15+ seconds\n   - System will automatically calibrate gyro bias\n5. **Verify** — Check the roll/pitch display. On level ground, both should read near 0°.\n\n**When to recalibrate:**\n- After mounting the antenna/receiver in a new position\n- After firmware update\n- If auto-steer performance degrades on slopes\n- After vehicle maintenance that could shift the receiver mount",
    tags: ["calibration", "setup", "terrain"]
  },
  {
    id: 13, category: "agnav",
    keywords: ["section", "control", "section control", "overlap", "重叠", "seed", "spray", "播种", "喷洒", "覆盖率"],
    question: "How does section control work to avoid overlap?",
    answer: "**Section Control (Automatic Section Shutoff):**\n\nSection control automatically turns individual planter/sprayer sections ON/OFF based on GPS position to prevent double-application in headlands and point rows.\n\n**Setup:**\n1. **Measure implement** — Measure the distance from GPS antenna to each section's left/right edge\n2. **Define sections** — Enter the number of sections and width of each section in the console\n3. **Configure controller** — Connect the section control output to your implement's control system (ISOBUS or relay box)\n4. **Set overlap** — Configure overlap percentage (0-100%). 0% = sections shut off exactly at boundary; 50% = half overlap allowed\n\n**Benefits:**\n- Seed savings: 5-15% on oddly shaped fields\n- Chemical savings: significant reduction in spray overlap\n- No double-planting in headlands and around obstacles\n\n**Troubleshooting:**\n- If sections don't turn off, check wiring and controller settings\n- Section timing may need look-ahead adjustment for valve response delay",
    tags: ["setup", "section-control", "precision-ag"]
  },
  {
    id: 14, category: "agnav",
    keywords: ["NMEA", "output", "GPS", "GNSS", "串口", "serial", "baud", "波特率", "GGA", "RMC", "VTG"],
    question: "How to output NMEA data to an external device/monitor?",
    answer: "**NMEA Output Configuration:**\n\n1. **Identify output port** — The receiver typically has a serial port (DB9) or Bluetooth for NMEA output.\n2. **Connect cable** — Use the appropriate serial cable to connect to the external device.\n3. **Configure NMEA messages:**\n   - Enter Settings > GNSS > NMEA Output\n   - Enable the messages you need:\n     - **GGA** — Position + fix quality (most commonly used)\n     - **RMC** — Position + speed + course\n     - **VTG** — Course and speed over ground\n     - **GSA/GST** — Satellite and accuracy info\n4. **Set baud rate** — Typically 115200 or 57600. Must match the receiving device.\n5. **Set update rate** — 1 Hz, 5 Hz, or 10 Hz. Higher rates needed for machine control.\n6. **Test output** — Use a serial monitor tool to verify NMEA sentences are being output.\n\n**Common issues:**\n- Baud rate mismatch = garbled data\n- Only TX connected (need TX, RX, GND for two-way communication)\n- Incorrect NMEA talker ID (GP vs GN vs GA)",
    tags: ["setup", "nmea", "integration"]
  },
  {
    id: 15, category: "rtk",
    keywords: ["firmware", "update", "固件", "升级", "update", "软件", "software", "version", "wifi", "X1", "Z1", "192.168", "admin", "蓝牙", "bluetooth"],
    question: "How to update firmware on the receiver? (X1 / Z1 series)",
    answer: "**Firmware Update Procedure:**\n\n**Before you start:**\n- Back up all settings and configurations\n- Ensure the device battery is > 50% or connect to external power\n- Download the correct firmware file for your device model\n- **Do NOT power off the device or close the browser during update**\n\n---\n\n**Standard Update (X1 Series and similar):**\n\n1. Power on the device and connect to its **WiFi hotspot**\n   - WiFi name format: `[Model]-[SN]`, e.g., `X1-2125M0253`\n   - WiFi password: `12345678` (default)\n2. Open a browser and go to: **http://192.168.10.12**\n3. Login — Username: `admin`, Password: `admin`\n4. In the left navigation bar, select **Firmware Update**\n5. Choose the firmware file and click **Update**\n6. **CRITICAL:** Do NOT power off the device or navigate away from the page during the update\n7. The device will restart automatically after the update completes\n8. Connect to the PAD software and go to Device Info to verify the firmware version\n\n---\n\n**Z1 Series — Special Procedure:**\n\nZ1 series devices **cannot have Bluetooth and WiFi turned on at the same time**. By default, Bluetooth is enabled on startup and WiFi is off.\n\n1. **First, connect via Bluetooth** to the PAD/controller software\n2. Go to Device Control Settings in the software\n3. Select **Turn On WiFi** — the device's WiFi will now activate\n4. Once WiFi is on, follow the standard update steps above (connect to WiFi, browser 192.168.10.12, etc.)\n5. **After update completes and device restarts:** WiFi will be OFF again by default\n6. If you need WiFi again, manually re-enable it from the PAD software\n\n**Warning:** Power loss during firmware update can brick the device. Always use a stable power source.",
    tags: ["maintenance", "firmware", "update", "x1", "z1"]
  },

  // --- General ---
  {
    id: 16, category: "rtk",
    keywords: ["bluetooth", "蓝牙", "pair", "配", "connect", "连接", "控制器", "controller"],
    question: "Cannot connect controller to receiver via Bluetooth?",
    answer: "**Bluetooth Troubleshooting:**\n\n1. **Check pairing mode** — The receiver's Bluetooth light should be flashing (pairing mode). If solid, it's already connected to another device.\n2. **Distance** — Keep controller within 5 meters of receiver during pairing.\n3. **Clear old pairings** — Delete any previous pairings for this receiver from the controller's Bluetooth list, then re-pair.\n4. **PIN code** — Common default PINs are `0000` or `1234`. Check receiver manual.\n5. **Restart both** — Power cycle the receiver and controller, then try pairing again.\n6. **Bluetooth version** — Some older receivers use Bluetooth 2.0 which may not be compatible with newer tablets. Use an external Bluetooth adapter if needed.\n7. **WiFi conflict** — On some controllers, WiFi and Bluetooth can interfere. Turn off WiFi temporarily.\n\nAs a workaround, use a serial cable connection if available.",
    tags: ["troubleshooting", "bluetooth", "connection"]
  },
  {
    id: 17, category: "scanner",
    keywords: ["电池", "battery", "充电", "charge", "power", "电源", "shutdown", "关机", "off"],
    question: "Scanner battery drains quickly or won't charge?",
    answer: "**Battery Issues:**\n\n1. **Battery age** — Li-ion batteries degrade over time. After 2-3 years of heavy use, expect reduced capacity. Consider replacement.\n2. **Temperature** — Charging below 0°C or above 45°C damages batteries. Charge at room temperature.\n3. **Storage** — Store batteries at 40-60% charge if not using for several months. Storing at 100% accelerates degradation.\n4. **Clean contacts** — Dirty battery contacts cause poor charging. Clean with isopropyl alcohol.\n5. **Charger check** — Try a different charger if available. The charger's indicator light should behave per manual.\n6. **Deep discharge** — If battery was stored at 0% for a long period, it may be permanently damaged.\n\n**Scanner runtime expectations:**\n- Internal battery: typically 3-6 hours of continuous scanning\n- External battery pack: 8-12 hours\n- Hot-swap capable: most scanners support hot-swapping external batteries during operation",
    tags: ["troubleshooting", "battery", "power", "maintenance"]
  },
  {
    id: 18, category: "agnav",
    keywords: ["精度", "accuracy", "pass-to-pass", "行间距", "偏差", "deviation", "skipping", "gap", "重叠"],
    question: "Auto-steer pass-to-pass accuracy is inconsistent?",
    answer: "**Improving Auto-Steer Pass-to-Pass Accuracy:**\n\nExpected performance: ±2.5 cm pass-to-pass with RTK Fix.\n\n1. **GNSS fix quality** — Must be RTK Fixed. Float or DGPS will give 20-50 cm variation.\n2. **IMU calibration** — An improperly calibrated IMU will cause errors, especially on slopes and during turns.\n3. **Vehicle setup** — Verify these measurements in the system:\n   - Antenna position (X, Y, Z offset from rear axle center)\n   - Wheelbase\n   - Implement width and hitch offset\n4. **Steering kit** — Check for mechanical play/slop in the steering motor, belt, or friction wheel.\n5. **Look-ahead** — Adjust the look-ahead time/distance. Too short = overshoot, too long = sluggish response.\n6. **Speed** — Auto-steer works best at consistent working speed (6-15 km/h typical). Very slow (<2 km/h) or fast (>25 km/h) degrades performance.\n7. **Hydraulic system** — For hydraulic steering: check oil level, no air in lines, adequate flow.\n\n**Test procedure:**\n- Set up an AB line, make 5 passes\n- Measure the gap/overlap between passes at 3 points\n- Calculate average deviation",
    tags: ["troubleshooting", "accuracy", "auto-steer"]
  },

  // --- SingularPad Software ---
  {
    id: 201, category: "rtk",
    keywords: ["SingularPad", "安装", "install", "Android", "系统要求", "requirement", "下载", "download", "版本", "version", "spec"],
    question: "What are the installation requirements for SingularPad?",
    answer: "**SingularPad Installation Requirements:**\n\nSingularPad runs exclusively on **Android** operating system. Download from the official website's download center or contact SingularXYZ.\n\n**Minimum Device Specifications:**\n- **CPU:** 2.1 GHz (ARM Cortex only)\n- **RAM:** At least 4 GB\n- **Android Version:** 4.2 or higher\n- **Screen Size:** 4.5 inches or larger\n- **Resolution:** 960 × 640 pixels or higher\n- **Hardware:** Bluetooth / Wi-Fi / GPRS required\n\n**Note:** The app only supports ARM Cortex processors. Devices with other CPU architectures may not run the software properly.",
    tags: ["software", "installation", "requirements", "singularpad"]
  },
  {
    id: 202, category: "rtk",
    keywords: ["SingularPad", "连接", "connect", "bluetooth", "蓝牙", "device", "communication", "配对", "pair", "USB", "demo"],
    question: "How to connect receiver to SingularPad? (Bluetooth / USB)",
    answer: "**Connecting Receiver to SingularPad:**\n\n1. Go to **Device** > **Communication**\n2. Select the correct **Model Type** for your receiver\n3. Choose connection method: **Bluetooth**, **USB**, **Demo**, or **Debug**\n\n**Bluetooth Connection:**\n- Ensure Bluetooth pairing is successful at the Android system level first\n- If connection fails: go to Android Bluetooth settings, **forget/remove** the paired device, restart both receiver and software, then pair again\n- **Important:** Selecting the wrong model type will cause slow connection or measurement failure\n\n**USB Connection:**\n- Connect via USB cable and configure the Baud Rate\n\n**Demo Mode:**\n- Simulation mode for training when no physical receiver is available (not all functions available)\n\n**Debug Mode:**\n- For sending commands directly to the device for testing and troubleshooting",
    tags: ["software", "connection", "bluetooth", "singularpad"]
  },
  {
    id: 203, category: "rtk",
    keywords: ["SingularPad", "基站", "base", "base station", "setup", "radio", "internal radio", "device internet", "external radio", "protocol", "channel", "frequency"],
    question: "How to set up base station in SingularPad?",
    answer: "**Base Station Setup in SingularPad:**\n\nGo to **Device** > **Base**. Four data link modes are available:\n\n**1. Internal Radio:**\n- Uses built-in UHF radio to transmit corrections\n- Base and rover must share the same: **Protocol**, **Channel**, **Frequency**\n- Radio types and protocols:\n  - **U Radio:** TRIMTALK, TRANSEOT, CSS (3-5 km)\n  - **LU Radio:** CSS only for base; rover supports multiple protocols (CSS: 10-15 km)\n  - **M5 Radio:** All protocols supported (CSS: 10-15 km)\n- **Baud Rate:** Higher = faster but shorter range; Lower = slower but more stable over distance\n\n**2. External Radio:**\n- Configure protocol and frequency on the external radio itself, not in SingularPad\n\n**3. Device Internet:**\n- Insert SIM card in base, configure server IP/port, rover receives via NTRIP\n\n**4. Internal Radio + Device Internet:**\n- Transmits corrections via both mobile network and internal radio simultaneously\n\n**Base Initialization Methods:**\n- **Single Point:** Approximate coordinates, suitable for testing\n- **Assigned Base Coordinates:** Known point, highest accuracy\n- **Use Current Coordinates:** Convenient but less accurate than known point",
    tags: ["software", "base-station", "setup", "radio", "singularpad"]
  },
  {
    id: 204, category: "rtk",
    keywords: ["SingularPad", "移动站", "rover", "setup", "NTRIP", "phone internet", "PPP", "internal radio", "device internet"],
    question: "How to set up rover in SingularPad?",
    answer: "**Rover Setup in SingularPad:**\n\nGo to **Device** > **Rover**. Four data link modes:\n\n**1. Internal Radio:**\n- Set the same Protocol, Channel, and Frequency as the base station\n- Receiver status should change to FIXED once corrections are received\n\n**2. Device Internet (SIM in receiver):**\n- Insert SIM card in receiver\n- Input server IP, Port, Username, Password\n- Supports **NTRIP** (standard protocol, requires username/password) and **TCP Client** (direct correction transmission)\n\n**3. Phone Internet (SIM in controller):**\n- Ensure the controller has internet access\n- Configure same as Device Internet (IP, Port, User, Password)\n\n**4. PPP (Precise Point Positioning):**\n- Select PPP in Data Link and apply\n- Takes approximately **10 minutes** to converge to standard accuracy\n- Status bar shows \"Converging\" then changes to \"PPP\" when ready\n\n**SBAS (Satellite-Based Augmentation):**\n- Tap satellite icon > Settings > Enable SBAS\n- Improves positioning accuracy using satellite augmentation signals",
    tags: ["software", "rover", "setup", "ntrip", "singularpad"]
  },
  {
    id: 205, category: "rtk",
    keywords: ["SingularPad", "IMU", "初始化", "initialization", "惯导", "tilt", "倾斜", "survey", "pole", "calibration"],
    question: "How to initialize IMU / tilt survey in SingularPad?",
    answer: "**IMU Initialization Procedure:**\n\n1. In the Survey interface, tap the **IMU icon** to open tilt survey\n2. On first use, follow the on-screen prompts to initialize the IMU module (takes a few seconds)\n3. The system will prompt you to **confirm the pole height** (default: 1.8 meters)\n\n**During calibration:**\n- Keep the **pole tip fixed** on the ground — do NOT move the tip\n- Shake the pole back and forth (within 60° tilt, ideally under 30° for best accuracy)\n- Ensure the receiver has satellite tracking and FIXED solution\n\n**After successful calibration:**\n- The measurement icon changes to indicate IMU is ready\n- Built-in sensors accurately calculate the actual offset within 60° pole tilt\n- Positioning accuracy: up to **2.5 cm**\n\n**Important:**\n- If the receiver is **powered off or reset**, you must re-initialize the IMU\n- If calibration expires, tap **Calibrate** and follow the guidance again\n- When IMU accuracy decreases, perform **Pole Calibration** in Inspection Accuracy",
    tags: ["software", "imu", "tilt-survey", "calibration", "singularpad"]
  },
  {
    id: 206, category: "rtk",
    keywords: ["SingularPad", "localization", " localization", "本地化", "坐标系", "coordinate", "转换", "WGS84", "grid", "control point"],
    question: "How to perform Localization (WGS84 to local grid) in SingularPad?",
    answer: "**Localization — Coordinate System Transformation:**\n\nLocalization converts WGS84 coordinates to local grid coordinates. Typically performed **once per project**.\n\n**Steps:**\n1. Go to **Project** > **Localization**\n2. Enter at least **3 control point pairs**:\n   - **Known points** (K1, K2, K3): Local grid coordinates\n   - **Measured points** (A1, A2, A3): GNSS measured WGS84 coordinates\n3. Tap **Calculate** — the software computes conversion parameters automatically\n4. Check **conversion residuals**:\n   - Horizontal residual ≤ 0.02 m\n   - Vertical residual ≤ 0.05 m\n5. Tap **Apply** to update the coordinate system\n\n**Tips:**\n- More control points = better accuracy and redundancy\n- Ensure control points are well-distributed across the project area\n- Supports *.loc format import/export\n- Use Horizontal/Vertical control toggles to compute parameters separately",
    tags: ["software", "localization", "coordinate-system", "singularpad"]
  },
  {
    id: 207, category: "rtk",
    keywords: ["SingularPad", "calibrate point", "校准", "base coordinate", "base station", "坐标校准", "post-measure"],
    question: "What's the difference between Localization, Calibrate Point, and Post-Measure Correction?",
    answer: "**Three Coordinate Calibration Methods — Comparison:**\n\n| Method | How It Works | Affects |\n|--------|-------------|--------|\n| **Localization** | Changes the coordinate system via transformation parameters | Entire project (all points) |\n| **Calibrate Point** | Changes the base station coordinates | All subsequent measurements |\n| **Post-Measure Correction** | Modifies base coordinates for selected points only | Only the selected point(s) |\n\n**When to use each:**\n\n**Localization:** Once per project to set up the local grid system. Requires 3+ control point pairs.\n\n**Calibrate Point:** When you need to change the base station position mid-project. Add known point coordinates, measure the GNSS point, and apply — all rover points update accordingly.\n\n**Post-Measure Correction:** Correct specific measurements by selecting start/end times. Only affects the selected points, not the entire project.",
    tags: ["software", "calibration", "localization", "coordinate", "singularpad"]
  },
  {
    id: 208, category: "rtk",
    keywords: ["SingularPad", "activate", "激活", "device activation", "software activation", "registration", "注册", "license"],
    question: "How to activate device and software in SingularPad?",
    answer: "**Device Activation:**\n1. Go to **Device** > **Device Activation**\n2. Enter the **registration code** or **scan QR code**\n3. Confirm activation\n\n**Software Activation (SingularPad):**\n1. Go to **Project** > **About Software**\n2. Tap **Software Activation**\n3. Register and activate your software\n\n**Note:** If you don't have an activation code, contact your sales or support team. Provide your **order details** and **software ID** to obtain the activation code.\n\n**Device Information Check:**\n- After Bluetooth connection: **Device** > **Device Info**\n- View: hardware version, firmware version, current data link, battery power, and other device information",
    tags: ["software", "activation", "license", "registration", "singularpad"]
  },
  {
    id: 209, category: "rtk",
    keywords: ["SingularPad", "import", "export", "data", "导入", "导出", "CSV", "DXF", "KML", "SHP", "format", "points"],
    question: "How to import/export data in SingularPad? Supported formats?",
    answer: "**Data Import:**\n\nGo to **Project** > **Import Data**\n\n**Supported import formats:**\n- CSV, DAT, TXT, KML, XLS, XLSX\n- CASS, Local coordinates, Geodetic coordinates\n- SurvCE RW5, FG RAW, Google Earth KML\n- NETCAD, PXY, Carlson coordinate files\n- **User-defined formats** also supported\n\n**Data Export:**\n\nGo to **Project** > **Export Data**\n\n**Supported export formats:**\n- CSV, DAT, TXT, KML\n- CASS, Local Coordinates, Geodetic Coordinates\n- CAD (DXF/DWG), SHP, Google Earth KML\n- RAW, RW5, HTML, CASS feature result\n- **Measurement reports** and **stakeout reports**\n\n**Creating Custom Format:**\n1. Tap \"New\" in import/export interface\n2. Set: Format name, extension, field delimiter (comma, semicolon, space, tab)\n3. Select which elements to include (name, northing, easting, elevation, code, etc.)\n4. Preview before importing to verify format is correct\n\n**Default path:** Internal Storage / SingularPad / Import (or Export)",
    tags: ["software", "import", "export", "data", "singularpad"]
  },
  {
    id: 210, category: "rtk",
    keywords: ["SingularPad", "static", "record", "静态", "raw data", "Rinex", "observation", "recording"],
    question: "How to set up static recording in SingularPad?",
    answer: "**Static Data Recording Setup:**\n\nGo to **Device** > **Static Record**\n\n**Configuration options:**\n- **Name:** Project name\n- **Point Name:** Observation point identifier\n- **Interval:** Data collection interval (seconds)\n- **Observation Time:** Duration of static session. When exceeded, a new file is automatically created\n- **Data Format:** XYZ, **Rinex 2.10**, or **Rinex 3.02**\n- **Circular Record:** When enabled, oldest files are automatically overwritten when storage is full\n- **Auto Record Static:** Automatically starts recording static data when powered on\n- **Storage Space:** Allocated memory for static data (minimum **500 MB** recommended)\n\n**Note:** When the measurement time exceeds the set observation time, the receiver automatically creates a new file to avoid overly large single files.",
    tags: ["software", "static", "recording", "rinex", "singularpad"]
  },
  {
    id: 211, category: "rtk",
    keywords: ["SingularPad", "project", "create", "项目", "coordinate system", "投影", "ellipsoid", "geoid", "datum"],
    question: "How to create a project and set up coordinate system in SingularPad?",
    answer: "**Creating a New Project:**\n\n1. Go to **Project** > **Project Manager**\n2. Tap **NEW** in the lower-left corner\n3. Enter **Project Name** and select **Project Path**\n\n**Coordinate System Configuration:**\n- **Coordinate System Type:** Select the predefined system for your country/region\n- **Ellipsoid Parameter:** Define the reference ellipsoid\n- **Projection Parameter:** Set the map projection (e.g., UTM, Gauss-Kruger)\n- **Horizontal Adjustment:** Horizontal transformation parameters\n- **Vertical Adjustment:** Add a **geoid file** for height correction\n- **Local Offsets:** Fine-tune local grid offsets\n\n**Tip:** SingularPad has **predefined coordinate systems for most countries**. You can search by country name or coordinate system name to quickly find your system.\n\n**Geoid files** can be downloaded from the Trimble geoid library.",
    tags: ["software", "project", "coordinate-system", "singularpad"]
  },
  {
    id: 212, category: "rtk",
    keywords: ["SingularPad", "stakeout", "放样", "AR", "CAD", "point", "line", "DSM", "road", "navigation"],
    question: "How to use stakeout functions in SingularPad?",
    answer: "**Stakeout Functions in SingularPad:**\n\n**Point Stakeout:**\n- Add points manually, from database, or import from file\n- Navigation map with directional arrow guides you to the target\n- **AR Stakeout:** Real-time visual guidance using device camera (supported on Horus, Orion One, Orion One-AR; other models use controller camera)\n- Green indicator appears when within tolerance\n\n**Line Stakeout:**\n- Add or import lines; set calculation mode, interval, and target height\n- Navigate between lines with next/previous controls\n\n**CAD Stakeout:**\n- Import .dxf or .dwg files\n- Select features to stake out — highlighted in blue\n- View feature details: length, start/end/center point\n\n**DSM Stakeout:**\n- Create a design surface from points (add manually, import, or from database)\n- System shows fill/cut values when rover is within the surface area\n- Displays \"Out of Surface!\" when rover is outside the design surface\n\n**Road Stakeout:**\n- Design road alignment with broken mileage, center line, vertical profile, cross sections, slope data\n- Supports: Stake Line by Point, Stake Road by Cross Section, Cross Section Measurement, Bridge Section, Conical Slope",
    tags: ["software", "stakeout", "cad", "navigation", "singularpad"]
  },

  // --- Blog-based entries ---
  {
    id: 300, category: "rtk",
    keywords: ["RAW", "RW5", "file", "export", "data", "record", "format", "SingularPad", "原始数据", "导出", "文件", "archivo", "formato", "datos", "exportar", "arquivo", "dados"],
    question: "What are RAW and RW5 files in SingularPad and how to export them?",
    answer: "**RAW vs RW5 Files:**\n\n**RAW File:** A comprehensive log combining raw GNSS measurements with final results:\n- Configuration settings and epoch data\n- Physical correction data\n- Satellite quality metrics (PDOP, satellite status)\n- Baseline vectors and relative positions\n- Final measurement results (coordinates, derived data)\n→ Best for high-precision review, troubleshooting, and project verification\n\n**RW5 File:** Industry-standard format (originally Trimble), readable ASCII text:\n- Measurement timestamps\n- Base station details\n- Initialization modes\n- Collected point results\n→ Best for quick office verification and cross-platform compatibility\n\n**How to Export:**\n1. Open File Manager on your controller\n2. Navigate to: SingularPad folder > Project > [your project] > Data\n3. Both RAW and RW5 files are in the Data folder\n4. Copy to USB or transfer for office processing",
    tags: ["software", "data", "raw", "rw5", "singularpad"]
  },
  {
    id: 301, category: "agnav",
    keywords: ["implement", "参数", "农机", "width", "spacing", "offset", "row", "Precision AG", "SAgro200", "implemento", "ancho", "espaciado", "largura", "espacamento"],
    question: "How to configure implement parameters in Precision AG / SAgro200?",
    answer: "**Implement Configuration in Precision AG:**\n\nGo to: **System > Implements > Setting**\n\n**Four Main Parameters:**\n\n1. **Implement Width (a):** Effective working width at maximum extension\n   - Sprayers: distance between outermost nozzles\n   - Plows/ridgers: actual working width during operation\n2. **Row Spacing (b):** Distance between adjacent rows or working sections\n3. **Vehicle-to-Implement Spacing (c):** Longitudinal distance from vehicle to implement (usually 0 unless special mounting)\n4. **Implement Offset (d):** Left/right offset from vehicle centerline\n   - 0 if symmetrically mounted\n   - Adjust direction and value if implement is shifted\n\n**Tip:** Create separate implement profiles for different operations to switch quickly. Also configurable: Job Type (20 types including Spraying, Sowing, Harvesting, etc.) and Crop Type.",
    tags: ["agriculture", "implement", "setup", "precision-ag"]
  },
  {
    id: 302, category: "rtk",
    keywords: ["laser", "stabilizer", "激光", "稳定器", "pole", "survey", "tripod", "bipod", "estabilizador", "laser", "estabilidade"],
    question: "How to use the Laser RTK Stabilizer for more stable laser surveying?",
    answer: "**Laser RTK Stabilizer — Installation & Use:**\n\n**Installation:** Unscrew the original pole tip and screw the Stabilizer into place — no tools needed.\n\n**Mode 1 — Laser Surveying:**\n- Unfold the three support legs and place on the ground\n- Provides damped contact to reduce hand movement while allowing tilt adjustments\n- Easier to keep laser aligned with target, especially at long distances\n- **Damping adjustment:** Use the included hex key on the 3 screws on the central ring — loosen for smoother movement, tighten for more control\n\n**Mode 2 — Pole Surveying:**\n- Fold the three legs — the central tip contacts the ground\n- Use like a standard survey pole (tip length matches original, so pole height stays accurate)\n- Switch between modes without changing accessories\n\nCompatible with: SingularXYZ 1.8m telescopic pole + laser-enabled RTK receivers (Horus, Orion One).",
    tags: ["hardware", "laser", "stabilizer", "accessory"]
  },
  {
    id: 303, category: "rtk",
    keywords: ["battery", "life", "电池", "续航", "work mode", "radio base", "rover", "X1", "Z1", "Xbase", "autonomia", "bateria", "duracion", "duração", "modo"],
    question: "How long does the RTK receiver battery last in different work modes?",
    answer: "**RTK Battery Life by Mode:**\n\n| Model | Rover / Network Base | Radio Base Mode |\n|-------|---------------------|-----------------|\n| X1 Series | Up to 20 hours | ~8-10 hrs (2W radio) |\n| Z1 Series | Up to 15 hours | ~7-8 hrs (2W radio) |\n| Xbase | ~25-30 hours | Up to 15 hrs (5W radio) |\n\n**Key Notes:**\n- Radio base mode (especially 2W+) consumes significantly more power — shorter life is **normal**\n- Lower transmission power (e.g., 0.5W) extends working time\n- Battery discharge is NOT linear — may drop slowly at first, then faster under load\n- Temperature affects performance: high heat increases internal chemical activity\n- Partial charging, intermittent usage, and mode switching all affect perceived battery life\n\n**Tip:** Carry a spare battery or power bank for full-day radio base operations.",
    tags: ["battery", "power", "runtime", "radio", "specs"]
  },
  {
    id: 304, category: "rtk",
    keywords: ["aluminum", "plate", "tribrach", "base", "setup", "tripod", "铝板", "基座", "precision", "quick", "placa", "aluminio", "alumínio", "precisao"],
    question: "Aluminum Plate vs Tribrach — which to use for RTK base setup?",
    answer: "**Aluminum Plate vs Tribrach:**\n\n**Aluminum Plate — Quick Setup:**\n- Fast, simple mounting — receiver with extension pole directly on tripod\n- No precise centering required\n- Best for: temporary base stations, routine RTK surveys, general fieldwork\n- Use site calibration afterward for coordinate consistency if needed\n\n**Tribrach — Precision Setup:**\n- For high-precision positioning over a known control point\n- Allows accurate centering and leveling with optical/laser plummet\n- Best for: control surveys, projects requiring strict coordinate consistency, long-term/repeatable base setups\n\n**How to Choose:**\n- Need fast & convenient for general work → Aluminum Plate\n- Need precise alignment with a known point → Tribrach\n\nBoth are effective; the choice balances efficiency vs. absolute accuracy.",
    tags: ["hardware", "base-station", "setup", "accessory"]
  },
  {
    id: 305, category: "rtk",
    keywords: ["TCP", "UDP", "protocol", "传输", "协议", "NTRIP", "network", "latency", "reliability", "protocolo", "latencia", "confiabilidade"],
    question: "TCP vs UDP in RTK — what is the difference and which to choose?",
    answer: "**TCP vs UDP for RTK Data Transmission:**\n\n| Feature | TCP | UDP |\n|---------|-----|-----|\n| Connection | Connection-oriented | Connectionless |\n| Reliability | ACK + retransmission | No guarantee |\n| Latency | Higher (retransmission) | Lower |\n| Data Order | Guaranteed | Not guaranteed |\n| Flow Control | Yes | No |\n\n**Practical Performance:**\n- **TCP:** High data integrity, stable in poor/fluctuating networks. May cause slight stuttering under unstable conditions.\n- **UDP:** Low latency, smoother continuous data flow. Possible packet loss; requires relatively stable network.\n\n**Recommendation:**\n- **Use TCP** when: network is unstable, data reliability is critical, working over public/long-distance internet\n- **Use UDP** when: low latency is needed, network quality is good, real-time performance matters (dynamic survey, machine control)\n\nSingularXYZ Orion One, X1, and SV100 support both protocols.",
    tags: ["network", "ntrip", "tcp", "udp", "configuration"]
  },
  {
    id: 306, category: "rtk",
    keywords: ["CAD", "extract", "points", "drawing", "CAD", "提取", "点", "图纸", "SingularPad", "stakeout", "extraer", "puntos", "plano", "extrair", "desenho"],
    question: "How to extract points from CAD drawings in SingularPad?",
    answer: "**Extracting Points from CAD in SingularPad:**\n\n**Single Point:** Tap the point on the CAD drawing > select \"Extract\" to save to point database.\n\n**Points from Line/Curve:**\n1. Tap the line or curve — multiple nodes (vertices) appear\n2. Tap \"Details\" to view coordinates\n3. Select the required nodes and tap \"Save\"\n\n**Complex/Grouped Graphics:**\n1. Select the graphic > tap \"Details\"\n2. Tap \"Explode\" to break into individual lines and points\n3. Extract desired points as above\n\n**Note:** Exploded graphics revert to original grouped state when the file is reopened — the original CAD file is not permanently modified.\n\n**Verify:** Go to Point Database to check saved points and coordinates.",
    tags: ["software", "cad", "points", "singularpad"]
  },
  {
    id: 307, category: "rtk",
    keywords: ["photo", "sketch", "照片", "草图", "documentation", "point", "SingularPad", "image", "note", "foto", "bosquejo", "anotacion", "anotação", "documentação"],
    question: "How to add photos and sketches to points in SingularPad?",
    answer: "**Photo & Sketch for Point Documentation:**\n\n**Adding to a Point:**\n1. After measuring a point, tap the \"Photo & Sketch\" button\n2. Take photos, add sketches/annotations, adjust settings\n3. Tap OK to save to the point\n\n**Viewing:** Go to Point Database > Point Detail to view attached photos and sketches.\n\n**Exporting with Photos:**\n1. Go to Export Data\n2. Select **ZIP** as the export format\n3. Enable the \"Photo & Sketch\" option\n4. Export — the ZIP will include both point data and associated images\n\n**Use Cases:** Record site conditions, mark features, document measurement environment for later review.",
    tags: ["software", "photo", "documentation", "singularpad"]
  },
  {
    id: 308, category: "agnav",
    keywords: ["ISOBUS", "SAgro200", "implement", "tractor", "连接", "license", "agriculture", "ISOBUS", "licencia", "implemento", "licença"],
    question: "How to set up ISOBUS in SAgro200 autosteer software?",
    answer: "**ISOBUS Setup in PrecisionAg (SAgro200):**\n\n**Step 1 — Cable Connection:** Follow the wiring diagram to connect the ISOBUS cable. Proper termination resistors MUST be installed — incorrect or missing resistors cause communication failure.\n\n**Step 2 — Import License:**\n1. Contact SingularXYZ support to obtain the ISOBUS license file\n2. Copy the license file to USB or directly to the tablet\n3. Place it in the folder named \"IntNavigation\"\n\n**Step 3 — Enable ISOBUS:** Open PrecisionAg > tap ISOBUS. The system auto-detects and loads the license.\n\n**Step 4 — View Implement Info:** After connection, the ISOBUS control panel shows real-time data:\n- Implement identification\n- Working status and operation parameters\n- Task-related data (varies by implement type)\n\n**Note:** ISOBUS is currently for **information display/monitoring only** — direct implement control is not yet supported.",
    tags: ["agriculture", "isobus", "implement", "sagro200"]
  },
  {
    id: 309, category: "rtk",
    keywords: ["coordinate", "system", "import", "manual", "坐标", "导入", "手动", "EPSG", "ellipsoid", "projection", "SingularPad", "coordenada", "sistema", "proyeccion", "projeção"],
    question: "How to manually import coordinate system parameters in SingularPad?",
    answer: "**Manual Coordinate System Import:**\n\nWhen your required coordinate system is not in the built-in list:\n\n1. Go to **Project > Coordinate System** (or create a new project)\n2. **Ellipsoid Parameters:** Check if ellipsoid exists → if not, click Add and enter:\n   - Ellipsoid Name\n   - Semimajor Axis\n   - Reciprocal of Flattening (1/F)\n3. **Projection Parameters:** Select the projection model (e.g., Lambert Conic Conformal 2SP) and enter:\n   - False Northing, False Easting\n   - Longitude/Latitude of Origin\n   - Standard Parallel 1 & 2\n4. Click OK to apply\n\n**Important:** The format for entering lat/long must match what you set in Project > Software Settings. E.g., if format is dd°mm'ss.ssss\", enter 43°14'2.95\" as 43.140295.\n\nUse **epsg.io** to look up parameters for coordinate systems.",
    tags: ["software", "coordinate-system", "projection", "singularpad"]
  },
  {
    id: 310, category: "rtk",
    keywords: ["CAD", "calibrate", "校准", "align", "对齐", "basemap", "底图", "SingularPad", "coordinate", "stakeout", "calibrar", "alinear", "mapa"],
    question: "How to calibrate/align CAD basemap in SingularPad?",
    answer: "**CAD Calibration — Aligning Drawings to Project Coordinates:**\n\nWhen an imported CAD basemap doesn't align with project coordinates:\n\n1. **Enable Tool:** Settings > Tool Bar > enable \"CAD Calibration\" > OK\n2. **Enter Calibration:** Tap the CAD Calibration icon in the CAD Stakeout interface\n3. **Add Calibration Points:**\n   - Tap \"Map Point Coordinates Selection\"\n   - Use the Pointer tool to pick a point on the CAD drawing\n   - Enter its actual known coordinates\n   - Repeat for multiple points (3+ recommended)\n4. **Best Practice:** Select points near edges, evenly distributed (N/S/E/W boundaries) for stable alignment\n5. **Apply:** Click Next > Confirm Calibration\n\n**Note:** The CAD remains calibrated unless manually canceled in the CAD Calibration tool. Original file is not modified.",
    tags: ["software", "cad", "calibration", "singularpad"]
  },
  {
    id: 311, category: "agnav",
    keywords: ["plot", "measure", "import", "地块", "测量", "导入", "boundary", "SHP", "autosteer", "polygon", "parcela", "medir", "poligono", "polígono", "fazenda"],
    question: "How to measure field plots with RTK and import into autosteer systems?",
    answer: "**Measuring and Importing Field Boundaries:**\n\nA workflow using RTK + SingularPad to measure fields and import into PrecisionAg, avoiding time-consuming tractor boundary recording.\n\n**Step 1 — Measure in SingularPad:**\n1. Connect RTK device and get FIXED solution\n2. Go to Survey > Polygon Survey\n3. Walk the field boundary — boundary line displays in real time\n4. Complete the loop and tap ✔ to generate a closed polygon (area auto-calculated)\n5. Name and save the plot\n\n**Step 2 — Export:** Export > select format \"Shape File (NEH Format)\" > save to USB\n\n**Step 3 — Import into PrecisionAg:**\n1. Insert USB into console tablet\n2. Open PrecisionAG > Farm > import *.shp file\n3. Create and assign AB lines within the imported plot\n\n**Note:** Imported farm data must be a polygon SHP file. Two-point line files will not be recognized.",
    tags: ["agriculture", "plot", "boundary", "shp", "autosteer"]
  },
  {
    id: 312, category: "rtk",
    keywords: ["Z1", "network", "base", "网络基站", "NTRIP", "firmware", "SingularPad", "WiFi", "CORS", "red", "estacion base", "atualizacao"],
    question: "How to configure Z1 as a network base station? (New firmware method)",
    answer: "**Z1 Network Base — Simplified Setup (Firmware V4.2.0.7+):**\n\n**Requirements:**\n- Z1 firmware: Z1_V4.2.0.7 or later\n- SingularPad: version 20261231 or later\n\n**Step 1 — Configure Base:**\n1. Connect Z1 to SingularPad > go to Base mode\n2. Set Datalink to \"Device Internet\"\n3. Enter CORS settings: NTRIP server IP, Port, Username, Password\n4. WiFi Settings: select Wi-Fi network and enter password to enable network access\n5. Enter the Base Access Point (Mountpoint name) — rovers will connect to this\n\n**Step 2 — Configure Rover:**\n1. Connect rover to SingularPad > Rover mode\n2. Set Datalink to \"Phone Internet\"\n3. Enter matching NTRIP IP, Port, Username, Password\n4. Tap \"Get\" to retrieve mountpoint list > select the mountpoint from Step 1\n5. Rover begins receiving corrections\n\nWith the new firmware, the entire setup is done in SingularPad — NAV software is no longer needed.",
    tags: ["z1", "network-base", "ntrip", "firmware", "singularpad"]
  },
  {
    id: 313, category: "scanner",
    keywords: ["H1", "scanner", "firmware", "upgrade", "固件", "升级", "USB", "H1", "actualizacion", "atualizacao", "escaner"],
    question: "How to upgrade H1 Handheld 3D Laser Scanner firmware?",
    answer: "**H1 Scanner Firmware Upgrade:**\n\n**Before You Begin:**\n- If current firmware is earlier than 5.0.4, contact SingularXYZ support for the upgrade package\n- Check current version: Settings > System Info on the H1\n\n**Preparation:**\n1. Use a USB flash drive with Type-C interface\n2. Create a folder named exactly \"upgrade\" in the root directory\n3. Place the firmware upgrade package inside this folder\n\n**Upgrade Steps:**\n1. Power off the H1 scanner\n2. Insert the USB drive with the upgrade package\n3. Power on — the H1 auto-detects the package and shows a system upgrade prompt\n4. Tap \"Upgrade Now\" to start\n5. **Wait for completion — do NOT power off or remove USB during upgrade**\n6. H1 restarts automatically after completion\n7. Verify the new firmware version in System Info\n\n**Troubleshooting:** If the upgrade prompt doesn't appear, check firmware version, file placement (folder must be named \"upgrade\"), and USB compatibility.",
    tags: ["scanner", "h1", "firmware", "upgrade", "maintenance"]
  },
  {
    id: 314, category: "scanner",
    keywords: ["volume", "calculation", "体积", "计算", "earthwork", "stockpile", "SingularPad", "surface", "volumen", "calculo", "volume", "calculo"],
    question: "How to perform volume calculation in SingularPad?",
    answer: "**Volume Calculation Workflow in SingularPad:**\n\n**1. Measure the Area:**\n- Go to Point Survey > enable \"Auto Point Survey\" in Tool Bar settings (IMU must be enabled)\n- Configure point density (higher density = more accurate volume)\n- Walk the site boundary with RTK — points are collected automatically\n- Tap Stop when complete\n\n**2. Open Volume Calculation:**\n- Main menu > Tools > Volume Calculation\n- Select measured points to create a calculation region\n\n**3. Define Reference Plane (3 methods):**\n- **Reference Elevation:** Enter a fixed elevation manually → horizontal reference plane\n- **Reference Point:** Use a selected point's elevation as reference\n- **Reference Polygon:** Use an existing polygon surface for comparison\n\nTap Calculate — the software computes cut/fill volume between the measured surface and reference plane.\n\n**Application:** Earthwork estimation, stockpile measurement, site preparation.",
    tags: ["software", "volume", "calculation", "singularpad"]
  },
  {
    id: 315, category: "scanner",
    keywords: ["H1", "RTK", "NTRIP", "positioning", "point cloud", "扫描", "定位", "点云", "absolute", "coordinate", "GPS", "nube", "nuvem", "posicionamento"],
    question: "How to enable RTK positioning for H1 point cloud scanning?",
    answer: "**RTK Positioning for H1 Point Cloud Scanning:**\n\n**Requirement:** H1 firmware version **5.0.4r or later**. Earlier versions — contact support.\n\n**Setup Steps:**\n1. Power on H1 > tap Settings (bottom-left) > System Settings\n2. **Connect Wi-Fi:** Hotspot Links > enter Wi-Fi name (exact match) and password > Connect\n3. **Configure RTK:**\n   - Tap Start to enter scanning interface > tap GPS\n   - Ensure GPS antenna is properly installed\n   - Enable both GPS and RTK\n   - Enter NTRIP account info: server address, port, username, password, mount point\n   - Tap Save\n4. **Start Scanning** — after scan finishes, a GPS.bag file is generated in the project folder containing RTK coordinates for georeferencing\n\n**Post-Processing:** Refer to Section 4.5.1 of the H1 User Manual for detailed RTK processing steps.\n\n**Benefit:** Point cloud data is generated with absolute coordinates from the start — less post-processing needed.",
    tags: ["scanner", "h1", "rtk", "ntrip", "point-cloud"]
  },
  {
    id: 316, category: "rtk",
    keywords: ["EPSG", "coordinate", "system", "query", "坐标", "查询", "reference", "WKT", "PROJ", "projection", "datum", "epsg.io", "consulta", "referencia"],
    question: "How to look up coordinate reference system parameters using EPSG.io?",
    answer: "**Using EPSG.io to Find Coordinate System Parameters:**\n\nWhen your required coordinate system is not pre-defined in SingularPad:\n\n1. Go to **https://epsg.io/**\n2. Search by: country name, EPSG code, or coordinate system name (e.g., \"NAD83 Lambert\")\n3. Select the matching entry from results\n4. Review:\n   - Geographic coverage and applicable region\n   - Datum and projection method\n   - Coordinate axis definition and units\n5. Scroll to \"Spatial Reference\" section — copy parameters in your preferred format:\n   - OGC WKT / WKT2 (most common for GIS)\n   - ESRI WKT\n   - PROJ.4\n   - JSON\n\n**Next Step:** Use the copied parameters to manually define the coordinate system in SingularPad (Project > Coordinate System).",
    tags: ["coordinate-system", "epsg", "reference", "projection"]
  },
  {
    id: 317, category: "agnav",
    keywords: ["AB line", "export", "import", "导出", "导入", "guidance", "SHP", "KML", "DAT", "USB", "SAgro", "linea", "linha", "transferir"],
    question: "How to export and import AB lines in SAgro autosteer software?",
    answer: "**Exporting/Importing AB Lines and Farm Data:**\n\n**Access:** Tap the Export/Import menu > select USB (insert USB drive first)\n\n**Export AB Lines:**\n1. Select the AB line from Internal Database\n2. Tap Export → saved to USB\n\n**Import AB Lines:**\n1. Choose AB line file from USB\n2. Tap Import → appears in guidance lines after success\n\n**Supported AB Line Export Formats:** SHP, DAT, KML, INI\n- **Important:** If AB line mode is set to \"Path\", the export format MUST be DAT\n\n**Farm (Field) Data:**\n- Same export/import method\n- **Important:** Imported farm data must be a **polygon SHP file**. Line files with only 2 points will NOT be recognized.\n\n**Use Cases:** Equipment upgrades, multi-tractor collaboration on same field, routine data backup.",
    tags: ["agriculture", "ab-line", "export", "import", "sagro"]
  },
  {
    id: 318, category: "rtk",
    keywords: ["RTK", "PPK", "comparison", "对比", "difference", "real-time", "post-processed", "accuracy", "comparacion", "comparação", "processamento"],
    question: "RTK vs PPK — what are the key differences and when to use each?",
    answer: "**RTK vs PPK — Key Differences:**\n\n| Aspect | RTK | PPK |\n|--------|-----|-----|\n| Positioning | Real-time in the field | Post-processed after collection |\n| Communication | Requires radio/4G/NTRIP link | No real-time link needed |\n| Immediate Verification | Yes — verify on site | No — results after processing |\n| Robustness in Poor Comms | Can fail if link drops | Works anywhere |\n| Rework Risk | Low — catch issues on site | May require revisiting site |\n\n**RTK — When to Use:**\n- Real-time positioning needed (machine control, UAV, precision agriculture)\n- Good communication conditions\n- On-site verification is important\n- Want to minimize post-processing time\n\n**PPK — When to Use:**\n- Communication links are unstable or unavailable\n- Ultimate accuracy is prioritized\n- Working in challenging environments (urban canyons, under tree canopy)\n- Post-processing time is acceptable\n\n**Note:** X1 series and Orion series support both RTK and PPK modes.",
    tags: ["rtk", "ppk", "comparison", "accuracy"]
  },
  {
    id: 319, category: "rtk",
    keywords: ["auto", "point", "survey", "自动", "测量", "automático", "SingularPad", "time", "distance", "continuous", "continuo", "contínuo", "automatico"],
    question: "How to use Auto Point Survey in SingularPad?",
    answer: "**Auto Point Survey — Hands-Free Point Collection:**\n\n**Prerequisites:** GNSS receiver connected via Bluetooth, FIXED solution (CORS/NTRIP or radio).\n\n**Enable:** Survey > Point Survey > Settings > Tool Bar > enable \"Auto Point Survey\" > OK > tap the Auto Point Survey button.\n\n**Three Measurement Modes:**\n\n1. **By Time:** Points recorded at custom time intervals\n   - Best for: continuous surveys along a route\n2. **By Distance:** Triggers when custom distance threshold is reached\n   - Supports 2D (planar) or 3D (spatial) distance\n   - Best for: roads, boundaries, pipelines\n3. **By Staying for a While:** Combines minimum distance + residence time\n   - Pole must stay still for the defined time after exceeding distance threshold\n   - Best for: when points should only be captured after pole is stable\n\n**Tip:** Combine with IMU-enabled receiver for faster point acquisition with smoother movement.",
    tags: ["software", "survey", "auto", "singularpad"]
  },

  // --- Blog batch 2 (189-160) ---
  {
    id: 320, category: "rtk",
    keywords: ["total station", "STSA9", "ColumnOffs", "column", "offset", "全站仪", "偏心", "圆柱", "center", "estacion total", "columna", "centro"],
    question: "How to use ColumnOffs on the STSA9 Total Station for column center measurement?",
    answer: "**STSA9 ColumnOffs — Measuring Column Centers Without Direct Access:**\n\nWhen the prism cannot be placed at a column's design center (P0), ColumnOffs calculates the true center from accessible circumferential points.\n\n**Steps:**\n1. Center/level the total station, launch Android TS software, complete station setup\n2. Open Collect menu > select ColumnOffs\n3. Enter point name, code, and prism height\n4. Aim at prism on column surface (P2) > tap OK\n5. Move prism to opposite side (P3) > aim > tap OK\n6. System calculates column center automatically\n\n**How it works:** By measuring two opposite points on the column, the instrument computes the center coordinates and direction angle (half the total angle between P2 and P3).\n\nUse case: When columns, pillars, or structures block direct prism placement at the design center.",
    tags: ["total-station", "column", "offset", "stsa9"]
  },
  {
    id: 321, category: "rtk",
    keywords: ["T8 Pro", "model", "type", "version", "SN", "SingularPad", "tablet", "controller", "型号", "版本", "modelo", "versao"],
    question: "How to choose the correct T8 Pro model type in SingularPad?",
    answer: "**T8 Pro Model Selection:**\n\nTwo T8 Pro versions exist (functionally identical, minor appearance differences):\n- **2025 version:** SN starts with \"UA\"\n- **New version:** SN starts with \"JM\"\n\n**Important:** Starting from SingularPad **V1.0.20251025** (including version 1025), both versions are merged into a single \"T8 Pro\" device type — just select \"T8 Pro\".\n\n**For earlier SingularPad versions:**\n1. Check your device SN prefix to identify which version\n2. Select the matching device type in Device > Communication\n\n**Wrong model type symptoms:**\n- Device stays \"Autonomous\" even after CORS login\n- Bluetooth connection fails\n\nAlways check your SingularPad version first in Project interface.",
    tags: ["hardware", "t8-pro", "tablet", "model", "singularpad"]
  },
  {
    id: 322, category: "rtk",
    keywords: ["S20", "serial", "command", "configuration", "SBAS", "factory reset", "命令", "串口", "config", "comando", "puerto", "reset"],
    question: "What are the common serial configuration commands for the S20 Smart Antenna?",
    answer: "**S20 Serial Port Commands:**\n\n**Connection:** DB9 serial cable (or DB9-to-USB adapter) > COM port > 115200 bps.\n\n**Key Commands:**\n\n1. **Enable SBAS (Auto):** `CONFIG SBAS ENABLE Auto`\n   - Specific systems: replace \"Auto\" with WAAS, GAGAN, MSAS, EGNOS, SDCM, ASECNA, KASS, SPAN, BDS\n   - Disable: `CONFIG SBAS DISABLE`\n\n2. **Factory Reset:** `freset`\n   - Clears settings, ephemeris, position. Baud resets to 115200.\n\n3. **Disable/Enable Satellites:**\n   - `mask BDS` (disable), `unmask BDS` (enable)\n   - Works for GPS, GLO, GAL, BDS\n\n4. **Save Configuration:** `saveconfig` (firmware V2.1.0.5+)\n\n5. **Reset Device:** `RESET`\n\n6. **Stop All Data Output:** `unlogall`",
    tags: ["s20", "serial", "command", "configuration"]
  },
  {
    id: 323, category: "rtk",
    keywords: ["X1 Lite", "network", "base", "WiFi", "NTRIP", "网络基站", "X1 Lite", "red", "estacion", "base"],
    question: "How to configure X1 Lite as a network base station without SIM card?",
    answer: "**X1 Lite Network Base Setup (No SIM Required):**\n\nRequirements: Wi-Fi must be 2.4 GHz, password ≤ 32 characters, firmware 1.0.A19S83T+.\n\n**Step 1 — Configure NTRIP Server:**\n1. Connect computer to X1 Lite's Wi-Fi\n2. Upgrade firmware at 192.168.10.12 > Firmware Upgrade\n3. Set Working Mode to Base in Device Configuration\n4. In Data Transmission > NTRIP Server: enter CORS account, username, password\n5. Set mount point (recommend using device SN)\n6. Check \"Startup\" > OK\n\n**Step 2 — Connect Wi-Fi (STA mode):**\n1. Device Configuration > Wi-Fi Config > switch to STA mode\n2. Enter SSID (2.4GHz network) and password (≤32 chars)\n3. Click \"Startup\" — the web page shows \"Request Failure\" when the device switches to network base mode (Wi-Fi disconnects from computer)\n\n**Step 3 — Rover:** Connect rover > Rover mode > Phone Internet > NTRIP > enter matching server credentials > GET mountpoint (select base SN) > Apply.",
    tags: ["x1-lite", "network-base", "ntrip", "wifi"]
  },
  {
    id: 324, category: "rtk",
    keywords: ["Horus", "laser", "camera", "aiming", "激光", "相机", "瞄准", "visual", "Horus", "camara", "apuntar"],
    question: "How to use camera-aided laser surveying on Horus RTK?",
    answer: "**Horus Camera-Aided Laser Surveying:**\n\n**Pre-requisites:**\n- RTK Fixed solution achieved\n- IMU initialization completed (for orientation calculation)\n- Controller Wi-Fi ON (to receive live video from Horus)\n\n**Workflow:**\n1. Go to Survey > Point Survey in SingularPad\n2. Tap \"Aim\" on the right side — laser + camera live view activate simultaneously\n3. Use the live video to zoom in and align the laser on the target\n4. Once laser is on target, tap Survey to measure and store the point\n\n**Reviewing:** All laser points stored in Point Library with associated photos showing laser position at measurement moment — useful for QA and documentation.\n\n**Tutorial video:** https://youtu.be/mmgcGXtCu40\n\nCompared to Orion ONE (naked-eye aiming), Horus adds camera-assisted targeting for better long-range precision.",
    tags: ["horus", "laser", "camera", "survey"]
  },
  {
    id: 325, category: "rtk",
    keywords: ["UTM", "zone", "projection", "coordinate", "投影", "坐标", "zone", "Universal", "Transverse", "Mercator", "UTM", "proyeccion", "projecao", "zona"],
    question: "What are UTM zones and how to set them up in SingularPad?",
    answer: "**Understanding UTM Zones:**\n\nUTM divides Earth into 60 zones (6° longitude each), each split into Northern/Southern hemispheres. Positions in Easting/Northing (meters) + zone number.\n\n**Find Your UTM Zone:**\n- Formula: Zone = floor((Longitude + 180) / 6) + 1\n- Example: Longitude 10.5°E = Zone 32; Longitude -74° = Zone 18\n\n**Setting UTM in SingularPad:**\n1. New Project > Coordinate System Parameters > Projection Parameter\n2. Choose Projection Mode: UTM\n3. Input Central Meridian or click Survey to auto-determine from GPS longitude\n4. Default: Northern Hemisphere; tick \"Southern Hemisphere\" if needed\n5. All measurements then output in meter-based coordinates\n\n**Common Pitfalls:**\n- Wrong zone → positional shifts of 100s of meters\n- Hemisphere mistakes → large Northing errors\n- Multi-zone projects → use local grid or unified zone\n\n**Best Practice:** Always verify UTM zone and hemisphere for every project.",
    tags: ["coordinate-system", "utm", "projection", "singularpad"]
  },
  {
    id: 326, category: "rtk",
    keywords: ["radio", "built-in", "troubleshooting", "电台", "内置", "故障", "Autonomous", "DGNSS", "LoRa", "protocol", "CSS", "radio", "solução", "problema"],
    question: "Rover shows Autonomous or DGNSS in built-in radio mode — how to troubleshoot?",
    answer: "**Built-in Radio Troubleshooting:**\n\n**If Rover shows AUTONOMOUS (no corrections received):**\n\n1. **Check antennas** — both base and rover radio antennas firmly connected\n2. **Verify radio settings** — Protocol, Channel, and Baud rate must be EXACTLY the same on base and rover\n3. **Check radio model compatibility:**\n   - If base protocol only shows CSS → base uses LoRa radio mode → rover must also support LoRa\n   - Radio versions: A038.xx.xx = LoRa TX/RX + common protocols RX; C035.xx.xx = common protocols; A036.xx.xx = both\n4. **Check base indicators** — if correction data LED is not flashing, base failed to transmit. Restart and reconfigure.\n\n**If Rover shows DGNSS (receiving but unstable):**\n- Correction data is being received but signal is weak/unstable\n- Distance may be too far\n- Environment may be obstructed\n- Wait for stabilization or move to a more open area",
    tags: ["radio", "troubleshooting", "autonomous", "dgnss", "lora"]
  },
  {
    id: 327, category: "agnav",
    keywords: ["autosteer", "parameters", "tractor", "sprayer", "harvester", "transplanter", "自动转向", "参数", "SAgro", "parametros", "maquina"],
    question: "How to adjust autosteer parameters for different vehicle types? (SAgro Series)",
    answer: "**SAgro Autosteer Parameters by Vehicle Type:**\n\n**Four-Wheel Tractor:**\n- Control Mode: Mode 3\n- Transmission Coefficient: 148 (higher HP = higher value, up to 300)\n- Motor Rotation Speed: 8-15, default 12 (higher = faster correction, may oscillate)\n\n**Sprayer / Harvester:**\n- Foresight Distance: 60 (lower = faster convergence but may oscillate; higher = more stable)\n- Fixed Mode: Enabled\n- Lateral Slope Compensation: Enable on uneven ground\n- Auto-calibration: Enabled\n- Low-speed Mode: Enable below 2 km/h\n- Control Mode: Mode 2\n- Range: 12 (decrease if swaying, increase if convergence too slow)\n- Oline Value: 9 (defines vehicle center position on guidance line)\n- Manual Steering Override: 9 (force to override autopilot)\n\n**Rice Transplanter:** Foresight Distance: 25; other parameters similar to above.\n\nUse these as baseline defaults — fine-tune based on vehicle condition, load, and terrain.",
    tags: ["agriculture", "autosteer", "parameters", "sagro"]
  },
  {
    id: 328, category: "agnav",
    keywords: ["vehicle", "model", "setup", "SAgro", "autosteer", "车辆", "型号", "设置", "tractor", "sprayer", "harvester", "modelo", "veiculo", "configuracao"],
    question: "How to select and configure vehicle model in SAgro autosteer system?",
    answer: "**Vehicle Model Setup in SAgro Autosteer:**\n\n1. Open autosteer software > System > Vehicle\n2. Default is a four-wheel tractor. Tap \"Current Vehicle\" to change.\n3. **Switch model:** Select from imported list > Yes (software auto-restarts)\n4. **Import new model:** Tap Import > select Vehicle Type > Brand > Model > Import\n\n**Supported Vehicle Types:** Wheeled tractors, sprayers, rice transplanters, harvesters, crawler tractors.\n\n**Important Notes:**\n- Brand selection corresponds to pre-collected vehicle parameters\n- If your brand is not listed, it will NOT affect steering — just ensure vehicle type is correct\n- After changing model, re-enter basic data: vehicle width, antenna height, etc.\n- Different models use different control algorithms and parameters — choosing correctly ensures accurate steering",
    tags: ["agriculture", "vehicle", "setup", "sagro", "autosteer"]
  },
  {
    id: 329, category: "rtk",
    keywords: ["Y1", "drone", "base", "无人机", "基站", "NTRIP", "WiFi", "dron", "estacion", "base"],
    question: "How to set up Y1 GNSS receiver as a drone base station?",
    answer: "**Y1 Drone Base Station Setup:**\n\n**Step 1 — Connect to Y1 Wi-Fi:**\n- Wi-Fi name: Y1's SN number\n- Password: 12345678\n- Browser: 192.168.1.8\n\n**Step 2 — Login:** Username: admin, Password: admin\n\n**Step 3 — Set Up WEB NTRIP:**\n1. Receiver Management > Data Transfer > select TCP/WEBNTRIP > Setup\n2. Work Mode: WEBNTRIP\n3. Configure Port and Data Stream as needed\n4. Tick \"Use\" > Enter to save\n\n**Step 4 — Configure Base:**\n1. Configuration > Base Station Configuration\n2. Set Station ID\n3. Click \"Get Position\" for current coordinates\n4. Click \"Start\" to activate\n\n**Drone Connection:** Connect drone to Y1 Wi-Fi > enter IP, port, username, password. Mountpoint = Y1's SN number.\n\nFor detailed drone-side setup, see: X1 Drone Base Station blog (step 4).",
    tags: ["y1", "drone", "base-station", "ntrip"]
  },
  {
    id: 330, category: "rtk",
    keywords: ["FTP", "static", "data", "download", "静态数据", "下载", "X1", "Orion", "SV100", "archivos", "estaticos", "baixar", "dados"],
    question: "How to download static data from receiver via FTP?",
    answer: "**Downloading Static Data via FTP:**\n\n**Supported Devices:** X1 Series, Orion ONE Series, SV100 Series.\n\n**Steps:**\n1. Connect computer to the device's Wi-Fi hotspot (name: Model-SN, password: 12345678)\n2. Open File Explorer > type in address bar: `ftp://192.168.10.12` > Enter\n3. Login: Account = `ftpsingula`, Password = `SingularXYZ`\n4. Ignore the system folder — remaining folders are static data directories\n5. Open the desired folder by date/session > copy files to computer\n\n**When to use FTP instead of web download:**\n- Batch file management\n- Direct access from file explorer\n- Handling larger datasets more flexibly\n\nOther methods: web interface download, USB cable transfer.",
    tags: ["static", "ftp", "download", "data"]
  },
  {
    id: 331, category: "rtk",
    keywords: ["X1", "drone", "base", "DJI", "caster", "NTRIP", "无人机", "基站", "DJI", "dron"],
    question: "How to set up X1 GNSS as a drone base station with built-in caster?",
    answer: "**X1 as Drone Base with Built-in NTRIP Caster:**\n\nUseful when no CORS account or external NTRIP caster is available.\n\n**Base Setup in SingularPad:**\n1. Connect to X1 via Bluetooth > go to Base Station\n2. Base Startup Mode: Assigned Base Coordinates (enter known point)\n3. Datalink: Device Internet\n4. IP & Port: Device default IP, port 6060\n5. Password: any string (e.g., \"admin\")\n6. Base Access Point: any string (e.g., \"X1\")\n7. **Ntrip Caster > Enable** — enter Username and Password (must match datalink settings)\n8. Apply > Start Base Station\n\n**DJI Drone Configuration:**\n1. Connect drone controller to X1's Wi-Fi (name = X1 SN)\n2. RTK Settings > RTK Service Type: Custom Network RTK\n3. Enter: NTRIP Host (X1 IP), Port, Username, Password, Mountpoint\n4. Save — status should show \"RTK connected, RTK data in use\"\n\nThis provides centimeter-level positioning for drone mapping without external CORS.",
    tags: ["x1", "drone", "base-station", "dji", "caster"]
  },
  {
    id: 332, category: "rtk",
    keywords: ["S20", "CORS", "reference", "station", "DTU", "参考站", "基准站", "S20", "DTU", "referencia", "estacao"],
    question: "How to configure the S20 as a CORS reference station?",
    answer: "**S20 CORS Reference Station Setup:**\n\nThe S20 has no built-in network module — the DTU (Data Transfer Unit) provides network connectivity.\n\n**Hardware:**\n- S20 GNSS receiver + DTU device\n- S20 cable (5-pin connector with 5 colored wires) connected to DTU per wiring scheme\n- 2 Ethernet cables\n\n**DTU Configuration (via DTUconfigTool):**\n1. Connect DTU to computer via USB serial or Ethernet\n2. Network connection recommended (gateway: 192.168.77.1)\n3. Enter your NTRIP caster: server IP, port, password, mount point\n4. For testing: use SingularXYZ public server\n\n**Base Startup (via SingularPad):**\n1. Connect S20 via Bluetooth > select correct Model Type\n2. Device > Base > Assigned Base Coordinates (known point)\n3. Start Base — status appears in top bar\n\nNote: Datalink settings in SingularPad are not used for S20 CORS — the DTU handles data transmission.",
    tags: ["s20", "cors", "reference-station", "dtu"]
  },
  {
    id: 333, category: "rtk",
    keywords: ["calibrate", "point", "grid shift", "校准点", "网格偏移", "base", "shift", "error", "calibracion", "punto", "grade"],
    question: "When and why should I use Calibrate Point (Grid Shift)?",
    answer: "**Calibrate Point (Grid Shift) — When & Why:**\n\n**When to calibrate:**\n- **Radio Mode:** When a prompt appears during point survey, or stakeout shows consistent error (several cm to meters)\n- **CORS Mode:** If measurements show cm-to-meter errors (with VRS, prompts may appear but can be ignored if results are correct)\n\n**Root Cause:** Base station coordinates have changed — even a slight physical shift creates mismatch between actual and recorded base position.\n\n**Best Practice:**\n- Perform Calibrate Point every time you power the device on/off\n- Before starting each project\n→ This habit prevents minor accumulated errors and ensures consistent accuracy.\n\n**How:** Enter known point coordinates + GNSS measured point > apply offset. All subsequent measurements use corrected base coordinates.\n\n**Difference from Localization:** Calibrate Point changes base coordinates (affects subsequent points); Localization changes the entire coordinate system (affects all points).",
    tags: ["calibration", "grid-shift", "base-station", "accuracy"]
  },
  {
    id: 334, category: "rtk",
    keywords: ["skyplot", "satellite", "distribution", "卫星图", "天空图", "azimuth", "elevation", "PDOP", "cielo", "satelite", "visualizacao"],
    question: "What is a Skyplot and how to use it in GNSS surveying?",
    answer: "**Understanding Skyplots:**\n\nA Skyplot is a polar diagram showing all visible GNSS satellites — azimuth (horizontal direction) and elevation (vertical angle above horizon).\n\n**How to read:**\n- Center = Zenith (90° elevation, directly overhead)\n- Outer edge = Horizon (0° elevation)\n- Each dot = one satellite positioned by azimuth/elevation\n\n**Elevation Mask (cutoff angle):** Satellites below this angle are excluded (e.g., 15° mask filters everything 0-15°). Reduces multipath and signal degradation.\n\n**Viewing Skyplots:**\n- **SingularPad:** Tap satellite icon in top status bar > SAT Map\n- **Web Interface:** Connect to receiver Wi-Fi > Device Information > Satellite Sky Plot\n\n**Practical Use:**\n- Select open survey locations (avoid obstructions)\n- Plan surveys around good satellite geometry\n- Post-process: diagnose if poor accuracy was caused by satellite distribution\n- Green bars = good signal; check for gaps indicating blocked satellites",
    tags: ["skyplot", "satellite", "gnss", "survey"]
  },
  {
    id: 335, category: "rtk",
    keywords: ["stakeout", "reference", "method", "放样", "参考", "compass", "IMU", "pole", "E-Compass", "brujula", "referencia", "bussola"],
    question: "What are the three stakeout reference methods in SingularPad?",
    answer: "**Three Stakeout Reference Methods in SingularPad:**\n\n**1. E-Compass (Default):**\n- Uses data collector's electronic compass for direction\n- Rotate collector → arrow rotates accordingly\n- Simple and intuitive, but affected by magnetic interference\n\n**2. Device Panel Towards (IMU-based):**\n- Uses receiver's IMU for direction (independent of collector compass)\n- Enable in Settings > Stakeout Setting > Device Panel Towards\n- Turn on receiver IMU and initialize\n- Align receiver's front panel with movement direction\n- Best for areas where collector compass is unreliable\n\n**3. Pole Tip Towards:**\n- Independent of both compass and IMU\n- Direction determined by survey pole tip orientation\n- Robust fallback for extreme magnetic interference or non-IMU receivers\n\n**When to use each:** E-Compass for standard conditions; Device Panel Towards when compass unreliable; Pole Tip Towards as backup in high-interference areas.",
    tags: ["stakeout", "reference", "compass", "imu", "singularpad"]
  },
  {
    id: 336, category: "rtk",
    keywords: ["ANTEX", "ANTINFO", "NGS", "antenna", "calibration", "phase center", "PCO", "PCV", "天线", "校准", "antena", "calibracion"],
    question: "What are ANTEX and ANTINFO files and how to read NGS antenna calibration?",
    answer: "**NGS Antenna Calibration Files:**\n\n**ANTINFO (.txt):** Human-readable summary\n- Line 1: Antenna model code, serial (\"NONE\" = type-level calibration, not individual unit), calibration org, calibration date\n- Line 2: PCO values in mm (North, East, Up) — vector from Antenna Reference Point to Average Phase Center\n- Subsequent lines: PCV values for zenith angles 0° to 90° in 5° steps (z = 90° - elevation)\n\n**ANTEX (.atx):** Machine-readable, comprehensive\n- Header: file version, reference antenna, calibration method\n- Frequency blocks: detailed PCO/PCV for each GNSS signal (L1, L2, E1, etc.)\n- NOAZI block: 1D PCV vs. zenith angle\n- AZI blocks: 2D PCV grids (azimuth + zenith residuals)\n- Fields: DAZI (azimuth step), ZEN1/ZEN2/DZEN (zenith range/step), # OF FREQUENCIES\n\n**Usage:** Import into GNSS processing software to correct for antenna-induced phase center variations. NGS calibration = traceable to U.S. national standards.",
    tags: ["antenna", "calibration", "ngs", "antex", "antinfo"]
  },
  {
    id: 337, category: "rtk",
    keywords: ["data collector", "troubleshooting", "compass", "crash", "数据采集器", "故障", "指南针", "崩溃", "colector", "brujula", "erro"],
    question: "Common data collector problems and how to fix them?",
    answer: "**Data Collector Troubleshooting:**\n\n**1. Compass Inaccurate (during stakeout):**\n- Tap the red exclamation mark indicator\n- Follow on-screen instructions to complete compass calibration (takes a few minutes)\n- Indicator turns green when calibration is successful\n- Alternative: Use Device Panel Towards or Pole Tip Towards reference methods instead of E-Compass\n\n**2. Software Crashes:**\n- Restart the device first\n- If persistent: reset to factory settings (back up data first!)\n- If still failing: dial `#*6368378*#` > \"Collect Info\" > \"Export Crash Info\"\n- Send the crash report to support@singularxyz.com with explanation\n\nKnowing these basics keeps your data collector running smoothly and avoids field downtime.",
    tags: ["data-collector", "troubleshooting", "compass", "crash"]
  },
  {
    id: 338, category: "rtk",
    keywords: ["GNSS", "antenna", "calibration", "NGS", "phase center", "PCO", "PCV", "天线", "校准", "antena", "certificacion"],
    question: "What is GNSS antenna calibration and why does NGS certification matter?",
    answer: "**GNSS Antenna Calibration Explained:**\n\n**What is it?** GNSS antennas receive signals at an electromagnetic \"phase center\" — not physically marked and varies slightly with signal direction. Calibration corrects for these biases.\n\n**Two Components:**\n- **PCO (Phase Center Offset):** Fixed 3D offset (North, East, Up) from antenna mounting point to average electrical phase center\n- **PCV (Phase Center Variation):** Corrections modeling how phase center shifts with satellite azimuth/elevation\n\n**NGS (National Geodetic Survey):**\n- U.S. agency (part of NOAA) maintaining the National Spatial Reference System\n- Operates robotic calibration system in anechoic chamber\n- Publishes ANTEX and ANTINFO files publicly\n\n**Why NGS certification matters:**\n- Traceable to national standards\n- Required for: geodetic networks, CORS deployment, large infrastructure surveys\n- Enables consistent antenna models across different software and workflows\n\nSingularXYZ X1 antenna is NGS-calibrated — calibration files available at ngs.noaa.gov/ANTCAL.",
    tags: ["antenna", "calibration", "ngs", "gnss", "accuracy"]
  },
  {
    id: 339, category: "rtk",
    keywords: ["fast", "code", "SingularPad", "survey", "快速编码", "测量", "productivity", "cross-section", "codigo", "rapido", "produtividade"],
    question: "How to use Fast Codes in SingularPad for efficient surveying?",
    answer: "**Fast Codes — Speed Up Repetitive Survey Workflows:**\n\n**Enable:** Point Survey > Settings > add \"Fast Code Survey\" to toolbar > OK. A new icon appears.\n\n**Creating Fast Codes:**\n1. Tap the Fast Code icon > tap \"+\" > Code List opens\n2. Select a code > configure string number\n3. Create multiple entries for different features\n\n**Editing the Fast Code List:**\n- **Change string number:** Tap and hold a Fast Code > Pen icon > adjust\n- **Delete:** Tap minus icon on the code\n- **Reorder:** Tap and hold until red box appears > drag to new position\n\n**Benefits:**\n- One-tap code selection during repetitive measurements\n- Automatic string number tracking for connected features\n- No scrolling through long code lists\n- Best for: road cross-sections, drainage/utility surveys, topographic transects, projects with standardized coding\n\nCombine with Code Library and String Number functions for full workflow efficiency.",
    tags: ["software", "fast-code", "survey", "singularpad"]
  },
  {
    id: 340, category: "rtk",
    keywords: ["code", "library", "SingularPad", "string", "编码库", "线", "linework", "auto connect", "codigo", "biblioteca"],
    question: "How to use Code Library and string numbers in SingularPad field surveys?",
    answer: "**Code Library — Field Usage:**\n\n**Selecting Codes:** In any measure function, tap code selection icon to pick from assigned code list. Search is **case-sensitive** — upper/lower case affects results.\n\n**String Numbers (Auto Connect):** When a code has Auto Connect enabled:\n- String number controls (+/- icons) appear during measurement\n- Increment/decrement between observations\n- Software auto-draws linework between related points\n\n**Continuing Existing Lines:**\n1. Select desired string number (highlighted blue)\n2. Tap Edit > Select Next Point > measure new location\n3. Line extends to new point\n\n**Closing a String (Polyline):** After 2nd observation, dialog appears — choose to stop or close the line.\n\n**Exporting with String Numbers:** Create custom export format (CSV) > manually select \"string number\" attribute to include in output.\n\nBest for: road features, edges, topographic lines, utility networks.",
    tags: ["software", "code-library", "string", "singularpad"]
  },
  {
    id: 341, category: "rtk",
    keywords: ["code", "library", "create", "manage", "SingularPad", "编码库", "创建", "管理", "criar", "gerenciar"],
    question: "How to create and manage Code Lists in SingularPad?",
    answer: "**Creating and Managing Code Lists:**\n\n**Create New Code List:**\n1. Project > Code Library Manager > top-right icon > New > enter name > OK\n\n**Edit Existing:** Select file > press & hold > Edit\n\n**Creating a Code:**\n- Add > enter: Long name, abbreviated code name, layer, display color, point symbol\n- **Single Point Code:** Basic code with symbol (e.g., \"Spot Height\")\n- **Auto Connected Code:** Enable \"Auto Connect by Code\" > choose: Two Point Line, Polyline, or Polygon; set line color, style, thickness\n\n**Assigning to Project:**\n- New project: toggle \"Use the last Code Library file\"\n- Existing project: Code Library Manager > select file > press & hold > assign\n\n**Note:** Code list search is case-sensitive. Codes display in entry order (not alphabetical).\n\nProper code libraries improve field linework creation and downstream processing quality.",
    tags: ["software", "code-library", "singularpad"]
  },
  {
    id: 342, category: "agnav",
    keywords: ["U-turn", "autosteer", "turning", "调头", "转弯", "Omega", "SAgro", "tractor", "row", "giro", "curva", "manobra"],
    question: "What are the common U-turn methods in auto-steering systems?",
    answer: "**U-Turn Methods in PrecisionAg (SAgro200):**\n\n**Three Methods:**\n1. **Ω/U-turn** — Most widely used and stable\n2. **Secondary U-turn** — Still being optimized\n3. **Fish-tail U-turn** — Still being optimized\n\n**Ω/U-Turn Logic:**\n- Depends on relationship between row spacing (W) and minimum turning radius (r):\n  - **W = 2r:** Clean 180° semicircle U-turn\n  - **W < 2r:** Ω-shaped path — vehicle arcs to first turning center M1, follows ¾ circle to M2, then arcs to align with next AB line\n\n**Setting Turning Radius:**\n- User-defined value must be ≥ the machine's minimum turning radius\n- Can be adjusted for different machines to avoid crop damage at headlands\n\n**Activation:** Enable U-turn function in PrecisionAg > set turning radius and spacing lines > system auto-executes turns at field edges.",
    tags: ["agriculture", "autosteer", "u-turn", "sagro"]
  },
  {
    id: 343, category: "rtk",
    keywords: ["MSM4", "RTCM", "message", "format", "GNSS", "differential", "correction", "差分", "格式", "formato", "mensagem"],
    question: "What is MSM4 and why is it the most widely used RTCM format?",
    answer: "**MSM4 — Universal GNSS Differential Message Format:**\n\nMSM = Multiple Signal Messages, introduced in RTCM 3.x to support multi-constellation, multi-frequency GNSS.\n\n**MSM Message Types (1-7):**\n| Type | Content | Usage |\n|------|---------|-------|\n| MSM1 | Pseudorange only | Minimal |\n| MSM2 | Carrier phase only | No pseudorange |\n| MSM3 | Pseudorange + Carrier | Lacks SNR |\n| **MSM4** | **Pseudorange + Carrier + SNR** | **Most used** |\n| MSM5 | MSM4 + Doppler | More complete |\n| MSM6 | High-resolution MSM4 | More precise |\n| MSM7 | High-resolution MSM5 | Full detail |\n\n**MSM4 Message Numbering:** GPS=1074, GLONASS=1084, Galileo=1094, BeiDou=1124 (last digit 4 = MSM4 type).\n\n**Why MSM4 is the standard:**\n- Full constellation support (GPS, GLO, GAL, BDS, QZSS, SBAS)\n- Multi-frequency (L1, L2, L5, E5a, E5b, B2a)\n- Contains all essential RTK data with efficient bandwidth\n- Broad device compatibility\n- Sufficient accuracy for centimeter-level RTK\n\nMSM7 provides more detail (including Doppler) but requires more bandwidth — MSM4 is the practical sweet spot.",
    tags: ["msm", "rtcm", "correction", "format", "gnss"]
  },
  {
    id: 344, category: "rtk",
    keywords: ["azimuth", "distance", "stakeout", "方位角", "距离", "放样", "coordinate", "calculation", "legacy", "map", "azimut", "distancia", "calculo"],
    question: "How to stakeout points using azimuth and distance from legacy maps?",
    answer: "**Stakeout from Azimuth & Distance (No Coordinates Required):**\n\nUsed for legacy survey maps, forestry records, cadastral plans where points are described by azimuth/distance relationships.\n\n**Workflow:**\n\n1. **Set base at known reference point:** Mark the starting point clearly. Measure coordinates in Autonomous mode > start base. Always use same point/coordinates across sessions.\n\n2. **Calculate target coordinates in SingularPad:**\n   - Ensure rover has FIX solution\n   - Tools > Coordinate Positive Calculation\n   - Select known base point as Point A\n   - Set Azimuth Reference Direction (typically \"Bearing-NE\")\n   - Enter azimuth and distance from the map\n   - Click Calculate > Save to point database\n\n3. **Stakeout:** Survey > Point Stakeout > select saved point > ensure Solution Tolerance is FIXED > follow on-screen prompts\n\n4. **Continue chaining:** Use the just-staked point as the new Point A for the next calculation. This reconstructs the entire map from relative data.",
    tags: ["stakeout", "azimuth", "distance", "coordinate", "singularpad"]
  },
  {
    id: 345, category: "rtk",
    keywords: ["SV100", "INS", "inertial", "dead reckoning", "GNSS", "outage", "惯导", "航位推算", "tunnel", "inercial", "tunel"],
    question: "How does SV100 INS perform during GNSS signal outages?",
    answer: "**SV100 INS Series — GNSS-Denied Performance:**\n\nThe SV100 INS combines RTK + inertial navigation (dead reckoning) for continuous positioning through signal outages.\n\n**Test Results (Shanghai urban test, 3+ hours):**\n| Environment | Accuracy |\n|-------------|----------|\n| Open/semi-obstructed urban | Centimeter-level |\n| Under viaducts/elevated roads | Centimeter to decimeter |\n| GNSS outage 60 sec (tunnel) | ~1 meter |\n| GNSS outage 120 sec | ~2 meters |\n\n**Key Findings:**\n- Wheel speed input (SV100 INS-WI) significantly reduces drift during long outages\n- Attitude/heading remains stable through outages\n- 10 Hz output frequency maintained regardless of GNSS status\n\n**Models tested:**\n- SV100 INS-1: RTK + Dead Reckoning\n- SV100 INS-2: Backup unit\n- SV100 INS-WI: RTK + Dead Reckoning + Wheel Speed (best outage performance)\n\nApplications: autonomous driving, mapping vehicles, smart transportation.",
    tags: ["sv100", "ins", "dead-reckoning", "gnss-outage", "accuracy"]
  },
  {
    id: 346, category: "rtk",
    keywords: ["communication", "interface", "RTK", "receiver", "通信", "接口", "GSM", "4G", "WiFi", "UHF", "Bluetooth", "serial", "USB", "comunicacion", "interfaces"],
    question: "What communication interfaces do RTK GNSS receivers support?",
    answer: "**RTK Receiver Communication Interfaces:**\n\n**1. GSM/4G:** Connect to CORS/NTRIP servers over internet for real-time corrections. Used for internal GSM base mode.\n\n**2. Wi-Fi:** Wireless data transfer, web interface access (192.168.10.12), firmware upgrades, static data download. For camera-equipped receivers: AR image/video transmission.\n\n**3. UHF Radio:** Base-to-rover RTK data (2-15 km). Protocols: Transparent, TrimTalk, Satel, LoRa (CSS — extended range). Ideal for areas without 4G.\n\n**4. Bluetooth:** Close-range wireless to controllers/phones. BT 2.0, BLE (low energy), backward compatible with BT 4.0.\n\n**5. Serial Ports:**\n- RS232: External radio, computer configuration\n- RS485: Sensors, gas analyzers, split machines\n- CAN: Automotive/agricultural equipment integration\n\n**6. USB:** Data transfer, firmware upgrade, charging, PC configuration.\n\n**7. Certifications:** CE, FCC, KC, NTBC, NCC — varies by market.",
    tags: ["communication", "interfaces", "rtk", "receiver"]
  },
  {
    id: 347, category: "rtk",
    keywords: ["GNSS", "modules", "functional", "receiver", "功能模块", "接收机", "IMU", "laser", "camera", "storage", "modulos", "funcionais"],
    question: "What are the main functional modules inside an RTK GNSS receiver?",
    answer: "**RTK Receiver Main Functional Modules:**\n\n**1. GNSS Engine (Brain):** Satellite tracking + positioning computation. Modern engines support multi-constellation (GPS, BDS, GLO, GAL), multi-frequency. May include dual-antenna for heading, built-in RTK/PPP/SBAS processing.\n\n**2. IMU (Inertial Measurement Unit):** Accelerometers + gyroscopes for tilt compensation. Enables tilt surveying — accurate measurements without keeping pole vertical. Typically supports up to 60° tilt.\n\n**3. Storage:** Onboard logging of GNSS raw data (RINEX or proprietary). 8GB+ typical. Used for static surveys and PPK post-processing.\n\n**4. Laser Module:** Non-contact distance measurement. Combined with IMU for measuring hard-to-reach targets (dangerous, wet, elevated).\n\n**5. Camera Module:** Photo documentation, live video guidance, AR stakeout. Visual surveying capability — helps users interact intuitively with the field environment.\n\nEach module serves specific field applications — the modular design allows compact, rugged integration.",
    tags: ["receiver", "modules", "gnss", "imu", "laser", "camera"]
  }
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


];
console.log('OK');