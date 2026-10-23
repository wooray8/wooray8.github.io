// Edit portfolio content here.
window.PORTFOLIO = {
  "name": "SiHeon Woo",
  "role": "DEVICES · CIRCUITS · INTELLIGENT SYSTEMS",
  "headline": "Engineering intelligence.\nFrom devices to systems.",
  "intro": "I am an undergraduate at Sungkyunkwan University, studying Electronic and Electrical Engineering and Advanced Semiconductor Engineering. I build across scales: 2D semiconductor interfaces, memory circuits, embedded electronics, and on-device AI. My approach is hands-on — frame the problem, build the system, and test it against reality.",
  "interests": [
    "On-device AI",
    "Electronics",
    "Semiconductor Devices"
  ],
  "email": "woosh315@g.skku.edu",
  "github": "https://github.com/wooray8",
  "cv": "cv.html",
  "photo": "",
  "projects": [
    {
      "title": "Capstone Design Project",
      "category": "Application",
      "date": "2026.03 — 06",
      "description": "An offline-first application that recognizes 38 laundry care symbols and translates combinations into practical washing guidance. Received the Best Project Award at the EEE Graduation Project Exhibition.",
      "tags": [
        "YOLOv8n",
        "TFLite · INT8",
        "PyTorch",
        "Roboflow",
        "Figma"
      ],
      "links": [],
      "image": "",
      "visual": "ai",
      "label": "01 / INTELLIGENT APPLICATIONS",
      "metrics": [
        {
          "value": "38",
          "label": "symbol classes"
        },
        {
          "value": "3.2 MB",
          "label": "quantized model"
        },
        {
          "value": "0.71",
          "label": "F1 · 30 selected photos"
        }
      ],
      "details": [
        {
          "title": "My contribution",
          "text": "Contributed Figma-based app UI design, application debugging, and UI revisions. Model training, quantization, and mobile implementation are described as team outcomes; the final report documents each member’s responsibilities."
        },
        {
          "title": "Deployment",
          "text": "The team trained YOLOv8n on approximately 10,000 balanced images and used INT8 quantization and TFLite conversion to reduce the model from 39.1 MB to 3.2 MB."
        },
        {
          "title": "Reality check",
          "text": "The attached preliminary evaluation reports precision 0.737, recall 0.682, and micro-F1 0.709 on 30 selected normal-condition photographs (17 of 38 classes; confidence 0.25, IoU 0.5). These results do not represent an unfiltered real-world sample. Across all 61 photographs, recall fell to 0.39, with failures concentrated in difficult lighting and backgrounds."
        }
      ],
      "subtitle": "On-Device AI for Laundry Care Symbols"
    },
    {
      "title": "ARES Electronics Team — Rocket Avionics Development",
      "category": "Hardware",
      "date": "Mar — Aug 2025",
      "description": "Led the electronics team for an educational rocket at ARES. Built and tested avionics for sensing, flight-data collection, and parachute deployment.",
      "tags": [
        "Embedded systems",
        "KiCad",
        "Flight-log analysis",
        "3D printing"
      ],
      "links": [],
      "image": "",
      "visual": "rocket",
      "label": "02 / CIRCUITS & SYSTEMS",
      "details": [
        {
          "title": "Hardware integration",
          "text": "Coordinated avionics size and placement with the airframe team, 3D-printed mounting parts, assembled and soldered sensor, relay, and power circuits, and checked sensing and deployment conditions."
        },
        {
          "title": "Failure analysis",
          "text": "Parachute deployment succeeded, but not at the intended altitude. Compared flight-log segments and hardware connections to narrow the cause to possible transient resets or contact instability; these remained hypotheses rather than a confirmed root cause."
        },
        {
          "title": "Reusable engineering assets",
          "text": "Standardized component selection by function, voltage, interface, and price; validated AI-generated comparisons against datasheets and organized verified parts in a searchable Notion database. Planned an integrated sensor/power PCB as a follow-up."
        }
      ],
      "subtitle": "Aerospace Club · Educational Rocket"
    },
    {
      "title": "Digital Integrated Circuit Design — CAD Projects",
      "category": "Hardware",
      "date": "Mar — Jun 2026",
      "description": "A five-part CAD design sequence in Cadence Virtuoso, progressing from CMOS inverter characterization and logic gates to sequential circuits, arithmetic blocks, and a 16 × 16 SRAM array.",
      "tags": [
        "Cadence Virtuoso",
        "6T SRAM",
        "DRC / LVS"
      ],
      "visual": "chip",
      "label": "04 / CIRCUITS & SYSTEMS",
      "links": [],
      "image": "",
      "details": [
        {
          "title": "Layout under constraints",
          "text": "Iterated routing and active-region sharing to satisfy design rules and a sub-4 μm² cell-area target. The final 1-bit cell occupied 3.288 μm² and passed DRC/LVS."
        }
      ],
      "subtitle": "CAD 1–5 · From CMOS Inverters to SRAM Arrays"
    }
  ],
  "education": [
    {
      "school": "Korea Advanced Institute of Science and Technology (KAIST)",
      "period": "Spring 2027 · Admitted",
      "detail": "Admitted to the M.S. program.",
      "department": "School of Electrical and Electronic Engineering"
    },
    {
      "school": "Sungkyunkwan University",
      "period": "Feb 2021 — Feb 2027 (expected)",
      "detail": "B.S. studies in Electronic and Electrical Engineering & Advanced Semiconductor Engineering (double major).",
      "gpa": "Overall GPA: 4.20/4.50 · Primary-major GPA: 4.29/4.50"
    },
    {
      "school": "Changwon Science High School",
      "period": "2018.03 — 2021.01",
      "detail": "Changwon Science High School"
    }
  ],
  "awards": [
    {
      "title": "Best Project Award",
      "detail": "Spring 2026 · EEE Graduation Project Exhibition · Team award",
      "korean": "성균관대학교 전자전기공학부 · 졸업작품발표회 최우수작품상",
      "koreanDetail": "2026학년도 1학기 · 단체 수상"
    },
    {
      "title": "Dean’s List · Two Semesters",
      "detail": "College of Information and Communication Engineering, SKKU",
      "korean": "성균관대학교 정보통신대학 · Dean’s List",
      "koreanDetail": "1학년 1학기 · 3학년 2학기"
    },
    {
      "title": "Study Club Excellence Award",
      "detail": "2025 · ARES Aerospace Club · Team award",
      "korean": "성균관대학교 · 성균 명품스터디클럽 우수학회 최우수상",
      "koreanDetail": "2025년도 활동 · 항공우주 학술동아리 ARES · 단체 수상"
    },
    {
      "title": "Study Club Rookie Excellence Award",
      "detail": "2025 · eMerge, EEE Academic Society · Team award",
      "korean": "성균관대학교 · 성균 명품스터디클럽 우수학회 루키우수상",
      "koreanDetail": "2025년도 활동 · 전자전기공학부 학회 eMerge · 단체 수상"
    }
  ],
  "admission": {
    "institution": "KAIST",
    "title": "Admitted to KAIST",
    "program": "M.S. · School of Electrical Engineering",
    "term": "Spring 2027",
    "date": "September 17, 2026",
    "description": "Admission confirmed for the Spring 2027 graduate intake. Currently completing my undergraduate studies at Sungkyunkwan University."
  },
  "courses": [
    {
      "name": "Physical Electronics",
      "grade": "A+",
      "term": "Fall 2024",
      "focus": "Electronic materials and device physics",
      "korean": "물리전자",
      "instructor": "Prof. Gil-Ho Kim (김길호)"
    },
    {
      "name": "Semiconductor Engineering",
      "grade": "A+",
      "term": "Fall 2025",
      "focus": "Semiconductor fundamentals",
      "korean": "반도체공학",
      "instructor": "Prof. Jin-Hong Park (박진홍)"
    },
    {
      "name": "Semiconductor Processes & Equipment",
      "grade": "A+",
      "term": "Fall 2025",
      "focus": "Fabrication processes and equipment",
      "korean": "반도체공정및장비기술",
      "instructor": "Samsung Electronics industry–academia course"
    },
    {
      "name": "Introduction to Semiconductor Products",
      "grade": "A",
      "term": "Fall 2025",
      "focus": "Semiconductor products and memory operation",
      "korean": "반도체제품개론",
      "instructor": "Instructor: Prof. 고관협"
    },
    {
      "name": "Semiconductor Device Fabrication Lab",
      "grade": "A+",
      "term": "Spring 2026",
      "focus": "RingFET / IGZO TFT fabrication and measurement",
      "korean": "반도체소자공정실험",
      "instructor": "Prof. Jin-Hong Park (박진홍)"
    },
    {
      "name": "Digital Integrated Circuit Design",
      "grade": "A",
      "term": "Spring 2026",
      "focus": "CMOS circuits, SRAM layout, DRC / LVS",
      "korean": "디지털집적회로설계",
      "instructor": "Prof. Yoonmyung Lee (이윤명)"
    }
  ],
  "researchInterests": [
    {
      "title": "2D interfaces & contacts",
      "text": "Reducing contact resistance while understanding Fermi-level pinning and the fabrication trade-offs of emerging contact structures."
    },
    {
      "title": "Devices for future memory",
      "text": "Exploring how semiconductor device engineering can extend toward next-generation and neuromorphic memory. This is a future research direction."
    }
  ],
  "undergraduateResearch": {
    "title": "2D Semiconductor Devices & Interfaces",
    "lab": "Advanced Nano-Semiconductor Device Laboratory (ANSDL)",
    "institution": "Sungkyunkwan University",
    "supervisor": "Prof. Jin-Hong Park",
    "period": "May — August 2026",
    "url": "https://sites.google.com/site/ansdl2013/home",
    "description": "Undergraduate research at ANSDL on MoS₂- and WSe₂-based devices, connecting metal–semiconductor interface physics with fabrication and nanoscale characterization.",
    "details": [
      {
        "title": "Interface research",
        "text": "Reviewed van der Waals contacts and the trade-off between reduced Fermi-level pinning and additional tunneling resistance across the interface gap. Investigated reported interlayer/lateral-etch approaches and metallic Mo₂C contacts through literature review."
      },
      {
        "title": "Fabrication & characterization",
        "text": "Selected flakes, participated in dry-transfer stacking and photolithography, and used AFM to inspect channel thickness, surface roughness, and interface formation."
      }
    ],
    "tags": [
      "Photo / e-beam lithography",
      "Dry transfer",
      "OM · AFM"
    ]
  }
};
