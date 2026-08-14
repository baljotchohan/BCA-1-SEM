const SUBJECT_HARDWARE = {
  id: "hardware",
  code: "BCA-DSC-4(Min)-104A",
  title: "Computer Hardware & PC Maintenance",
  type: "Minor Core",
  credits: 4,
  theoryHours: 45,
  practicalHours: 15,
  assessment: { internal: 5, external: 45, practical: 50, total: 100 },
  icon: "fa-memory",
  bgClass: "bg-red",
  description: "In-depth study of computer micro-architecture, Motherboard chipsets, BIOS/UEFI firmware, secondary storage interfaces (SATA, NVMe), power supply units, and systemic PC troubleshooting methodologies.",
  tags: ["Motherboard", "UEFI", "Microprocessors", "SMPS", "SATA/NVMe", "Troubleshooting"],
  units: [
    {
      unitNumber: "Unit I",
      title: "Micro-Architecture & Motherboard Subsystems",
      topics: [
        "1. Block Diagram of a PC, Evolution of Microprocessors & Multi-core Architectures",
        "2. Motherboard Form Factors (ATX, Micro-ATX, ITX) & Printed Circuit Board (PCB) Architecture",
        "3. CPU Sockets (LGA vs PGA), Northbridge/Southbridge vs PCH (Platform Controller Hub)",
        "4. Expansion Bus Architectures (PCI, PCIe Lanes x4/x8/x16) & Front Panel Header Configurations"
      ]
    },
    {
      unitNumber: "Unit II",
      title: "Firmware, Memory & Display Technologies",
      topics: [
        "1. BIOS vs UEFI: Architecture, POST Sequence, MBR vs GPT Partition Tables & Secure Boot",
        "2. Primary Memory (RAM): SRAM vs DRAM, DDR Generations (DDR3/4/5), CAS Latency & Dual-Channel Architecture",
        "3. Display Interfaces (VGA, DVI, HDMI, DisplayPort) & Refresh Rate vs Framerate",
        "4. Graphics Processing Units (Integrated APU vs Dedicated GPU/VRAM)"
      ]
    },
    {
      unitNumber: "Unit III",
      title: "Storage Interfaces & Power Delivery",
      topics: [
        "1. Magnetic HDDs vs Solid State Drives (NAND Flash Memory, SLC/MLC/TLC/QLC)",
        "2. Storage Protocols: SATA III (AHCI) vs PCIe NVMe (Non-Volatile Memory Express)",
        "3. Switched-Mode Power Supply (SMPS): Architecture, Form Factors, Wattage Calculation & 80 PLUS Efficiency Ratings",
        "4. UPS Systems (Offline, Line-Interactive, Online Double Conversion) & Surge Protection"
      ]
    },
    {
      unitNumber: "Unit IV",
      title: "Maintenance, Cooling & Troubleshooting Methodology",
      topics: [
        "1. Preventive vs Corrective Maintenance, ESD (Electrostatic Discharge) Prevention & Grounding",
        "2. Thermal Management: TDP (Thermal Design Power), Air vs AIO Liquid Cooling, Thermal Paste Application",
        "3. Diagnostic Tools: Multimeters, POST Debug LEDs/Beep Codes & Windows Event Viewer",
        "4. Systematic Troubleshooting of No-POST, BSOD (Blue Screen of Death) & Random Reboots"
      ]
    }
  ],
  notes: [
    {
      unit: "Unit I",
      title: "1. Motherboard Form Factors & Chipset Architecture",
      readTime: "11 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. Motherboard Form Factors
The motherboard is the primary Printed Circuit Board (PCB) that acts as the central nervous system of the computer. The "Form Factor" defines its exact physical dimensions, mounting hole locations, and back-panel I/O layout.

- **ATX (Advanced Technology eXtended):** The standard full-size desktop motherboard ($12 \\times 9.6$ inches). It offers maximum expandability (usually 4 RAM slots, multiple PCIe x16 slots for GPUs, and extensive SATA ports).
- **Micro-ATX (mATX):** A slightly truncated version ($9.6 \\times 9.6$ inches). Usually sacrifices the lower PCIe slots but maintains 4 RAM slots. The most common budget form factor.
- **Mini-ITX:** Extremely compact ($6.7 \\times 6.7$ inches). Designed for Small Form Factor (SFF) builds. Strictly limited to 1 PCIe x16 slot and 2 RAM slots.

## 2. CPU Socket Paradigms (LGA vs PGA)
The socket connects the Microprocessor to the motherboard.
- **PGA (Pin Grid Array):** Used heavily by older AMD Ryzen CPUs (AM4). The fragile, microscopic pins are physically located on the bottom of the CPU itself. The motherboard socket is just an array of holes. High risk of bending a pin if the CPU is dropped.
- **LGA (Land Grid Array):** Used by Intel and modern AMD (AM5). The CPU merely has flat gold contact pads. The fragile pins are located inside the motherboard socket. Protects the expensive CPU, but makes the motherboard socket extremely delicate.

## 3. The Evolution of Chipset Architecture
The chipset orchestrates data flow between the CPU, RAM, and peripherals.

### The Legacy Northbridge/Southbridge Paradigm
Older systems used a two-chip layout:
- **Northbridge (Memory Controller Hub):** Handled ultra-high-speed communication between the CPU, RAM, and the primary GPU slot via the Front Side Bus (FSB).
- **Southbridge (I/O Controller Hub):** Handled slower peripherals: SATA hard drives, USB ports, Audio, and Ethernet. Connected to the Northbridge via the DMI link.

### The Modern PCH (Platform Controller Hub) Paradigm
To reduce latency, modern architectures moved the entire Northbridge (Memory Controller and primary PCIe lanes) directly *inside* the CPU die itself. 
- The motherboard now only houses a single chip: the PCH.
- The CPU communicates directly with RAM and the GPU at blistering speeds. The PCH handles only the remaining slow I/O (USB, SATA, secondary PCIe slots).`
    },
    {
      unit: "Unit II",
      title: "1. Firmware Architectures: Legacy BIOS vs UEFI",
      readTime: "10 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. The Role of Firmware and POST
When a computer powers on, the CPU is blind. It relies on a firmware chip on the motherboard to initialize the hardware and load the Operating System.
The very first software that runs is the **POST (Power-On Self-Test)**, which verifies that the CPU, RAM, and GPU are functioning before attempting to boot.

## 2. Legacy BIOS (Basic Input/Output System)
- **Architecture:** 16-bit real mode. Extremely archaic text-only interface.
- **Addressing Limit:** Could only address 1 MB of memory for execution, making modern hardware initialization slow.
- **Partition Scheme (MBR):** BIOS strictly relies on the **Master Boot Record (MBR)** partition scheme. MBR uses 32-bit logical block addresses, which imposes a hard mathematical limit: MBR cannot recognize hard drives larger than 2 Terabytes. It also only allows 4 primary partitions.

## 3. UEFI (Unified Extensible Firmware Interface)
The modern replacement for BIOS, developed by Intel.
- **Architecture:** 32-bit or 64-bit mode. Allows for high-resolution Graphical User Interfaces (GUI) with mouse support and network connectivity right from the firmware.
- **Partition Scheme (GPT):** UEFI utilizes the **GUID Partition Table (GPT)**. GPT uses 64-bit logical block addresses, supporting hard drives up to a staggering 9.4 Zettabytes (9.4 billion Terabytes) and up to 128 primary partitions.
- **Secure Boot Integration:** UEFI introduced Secure Boot, a cryptographic security standard. The UEFI firmware contains the public keys of trusted OS vendors (like Microsoft or Canonical). During boot, it cryptographically verifies the digital signature of the OS bootloader. If a rootkit malware has infected the bootloader, the signature fails, and UEFI violently halts the boot process, protecting the system.`
    },
    {
      unit: "Unit III",
      title: "1. Storage Protocols: SATA III vs PCIe NVMe",
      readTime: "11 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. The Evolution of Solid State Drives (SSDs)
Unlike mechanical Hard Disk Drives (HDDs) that use spinning magnetic platters and mechanical read/write heads (which induce massive latency), SSDs store data using non-volatile NAND Flash memory cells. There are absolutely no moving parts.

### NAND Cell Technologies
1. **SLC (Single-Level Cell):** Stores 1 bit per cell. Most expensive, longest lifespan, highest speed. (Enterprise grade).
2. **MLC & TLC (Multi/Triple-Level Cell):** Stores 2 or 3 bits per cell. Standard consumer grade.
3. **QLC (Quad-Level Cell):** Stores 4 bits per cell. Cheapest, but lowest lifespan and write speeds.

## 2. The Interface Bottleneck: SATA III (AHCI)
Originally, SSDs connected using the SATA (Serial ATA) cables designed for mechanical hard drives, utilizing the AHCI software protocol.
- **The Bottleneck:** SATA III has a hard bandwidth limit of exactly **600 MB/s**. 
- Modern NAND flash is capable of much higher speeds, but the archaic SATA cable acts as a physical chokepoint. 
- AHCI was designed for slow spinning disks and only supports 1 single queue with 32 commands.

## 3. The Modern Standard: M.2 NVMe (PCIe)
To bypass the SATA bottleneck, engineers designed SSDs to plug directly into the motherboard's PCIe (Peripheral Component Interconnect Express) lanes—the same hyper-fast lanes used by Graphics Cards.

- **The M.2 Form Factor:** A tiny stick resembling a stick of chewing gum that screws directly flat onto the motherboard, requiring zero cables.
- **The NVMe Protocol (Non-Volatile Memory Express):** A software protocol built specifically from the ground up for solid-state flash memory.
- **Performance:** While SATA is capped at 600 MB/s, PCIe 4.0 NVMe drives can reach staggering speeds of **7,500 MB/s** (12x faster). NVMe supports 64,000 parallel command queues, each capable of 64,000 commands, allowing for massive parallel data processing.

## 4. Switched-Mode Power Supply (SMPS)
The SMPS is the heart of the PC. It converts high-voltage Alternating Current (AC) from the wall (230V in India) into stable, low-voltage Direct Current (DC) required by components (specifically +12V for CPU/GPU, +5V for USB/SATA, and +3.3V for motherboard logic).
- **80 PLUS Efficiency:** A power supply is not 100% efficient; it loses energy as heat during the AC-to-DC conversion. An "80 PLUS Gold" rating guarantees that at 50% load, the SMPS operates at 90% efficiency. (Meaning, to output 500W of DC power to the PC, it pulls exactly 555W from the wall, wasting only 55W as heat).`
    }
  ],
  questions: [
    {
      unit: "Unit I",
      marks: 2,
      question: "Differentiate between PGA and LGA CPU socket architectures. Which one places the fragile pins on the motherboard?",
      probability: "High Probability",
      examFrequency: "PU 2022, 2024"
    },
    {
      unit: "Unit II",
      marks: 10,
      question: "Exhaustively compare Legacy BIOS with Modern UEFI firmware. Ensure your answer details the differences between MBR and GPT partition tables and explains the cryptographic function of Secure Boot.",
      probability: "Very High Probability",
      examFrequency: "10-Mark Compulsory Question"
    },
    {
      unit: "Unit III",
      marks: 2,
      question: "What is the theoretical maximum bandwidth limit of a SATA III interface compared to PCIe 4.0 NVMe?",
      probability: "High Probability",
      examFrequency: "PU 2023, 2025"
    },
    {
      unit: "Unit IV",
      marks: 10,
      question: "Detail a systematic troubleshooting methodology for diagnosing a 'No-POST' scenario in a desktop PC. Include the use of POST debug LEDs and beep codes.",
      probability: "High Probability",
      examFrequency: "10-Mark Practical Hardware Question"
    }
  ],
  solutions: [
    {
      unit: "Unit II",
      question: "Exhaustively compare Legacy BIOS with Modern UEFI firmware. Ensure your answer details the differences between MBR and GPT partition tables and explains the cryptographic function of Secure Boot.",
      solution: `### 1. BIOS vs UEFI Architecture
- **Legacy BIOS:** A 16-bit interface that relies on a text-only, keyboard-driven UI. Due to 16-bit limitations, it can only address 1MB of memory space during boot, making hardware initialization of massive modern servers exceptionally slow.
- **UEFI (Unified Extensible Firmware Interface):** A modern 32-bit or 64-bit miniature operating system that runs before the actual OS loads. It supports high-resolution graphics, mouse input, and full network stack access directly from the firmware.

### 2. MBR vs GPT Partitioning Schemes
Firmware relies on a partition scheme to locate the OS Bootloader on the storage drive.
- **BIOS mandates MBR (Master Boot Record):** MBR uses 32-bit addressing. Mathematically, $2^{32} \\times 512\\text{ bytes/sector} \\approx 2\\text{ TB}$. Therefore, BIOS/MBR absolutely cannot boot from or even recognize a hard drive larger than 2 Terabytes. It is also limited to 4 primary partitions.
- **UEFI utilizes GPT (GUID Partition Table):** GPT uses 64-bit addressing, pushing the mathematical limit to 9.4 Zettabytes (9.4 billion TB). It supports up to 128 primary partitions. It also stores redundant backup copies of the partition table at the end of the disk for disaster recovery.

### 3. Cryptographic Secure Boot
UEFI introduced Secure Boot to combat bootkits and rootkits (malware that infects the bootloader before antivirus software can even start).
- The UEFI firmware motherboard chip is factory-loaded with public cryptographic keys belonging to trusted OS vendors (Microsoft, Linux foundations).
- When the PC turns on, UEFI hashes the OS bootloader on the SSD and verifies its digital signature using the public keys.
- If the signature is valid, the boot proceeds. If malware has altered even one byte of the bootloader, the cryptographic signature verification fails, and UEFI violently halts the boot process, displaying a security violation error.`
    },
    {
      unit: "Unit IV",
      question: "Detail a systematic troubleshooting methodology for diagnosing a 'No-POST' scenario in a desktop PC. Include the use of POST debug LEDs and beep codes.",
      solution: `### 1. Understanding a 'No-POST' Scenario
POST (Power-On Self-Test) is the initial hardware check performed by the firmware. "No-POST" means the system receives power (fans spin, RGB lights up) but fails to initialize the core hardware. The screen remains completely black, and the BIOS/UEFI logo never appears.

### 2. Systematic Diagnostic Methodology
1. **Clear the CMOS:** The first step is to reset the BIOS to factory defaults. Unplug the PSU, remove the CR2032 coin cell battery from the motherboard for 5 minutes, or short the 'Clear CMOS' jumper pins. This resolves issues caused by unstable RAM overclocking or corrupted BIOS settings.
2. **Interpret POST Debug Codes:**
   - **Motherboard Debug LEDs:** Modern boards have 4 LEDs labeled: CPU, DRAM, VGA, BOOT. If the boot halts, the LED that remains solidly lit identifies the exact failing component. (e.g., Solid DRAM LED = RAM failure).
   - **Motherboard Beep Codes:** If a tiny piezoelectric speaker is attached to the motherboard, the BIOS emits Morse-code style beeps. (e.g., 1 continuous long beep followed by 2 short beeps usually indicates a GPU/VGA failure).
3. **The 'Breadboarding' Minimalist Test:**
   Strip the motherboard of all non-essential components to eliminate variables.
   - Remove the motherboard from the metal chassis to rule out electrical shorts.
   - Boot with only: CPU + 1 single stick of RAM (in the primary slot) + Power Supply. 
   - Disconnect all SSDs/HDDs, USB headers, and dedicated GPUs (if the CPU has integrated graphics).
4. **Component Isolation (RAM Reseating):**
   RAM is the #1 culprit of No-POST. Remove all sticks. Inspect the gold contacts for oxidation. Re-insert a single stick firmly until the latches click. If it fails, try the stick in a different slot, then try a completely different stick of RAM.
5. **CPU Socket Inspection:**
   If the CPU LED is illuminated, remove the CPU cooler and the CPU itself. Inspect the motherboard LGA socket under a magnifying glass for bent or broken pins. A single bent pin disrupting a memory channel connection will instantly cause a No-POST.`
    }
  ]
};
