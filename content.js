// Edit portfolio content here.
window.PORTFOLIO = {
  "name": "SiHeon Woo",
  "role": "DEVICES · CIRCUITS · INTELLIGENT SYSTEMS",
  "headline": "Engineering intelligence.\nFrom devices to systems.",
  "intro": "I am an undergraduate at Sungkyunkwan University, studying Electrical and Electronic Engineering and Advanced Semiconductor Engineering. I build across scales: 2D semiconductor interfaces, memory circuits, embedded electronics, and on-device AI. My approach is hands-on — frame the problem, build the system, and test it against reality.",
  "interests": [
    "On-device AI",
    "Electronics",
    "Semiconductor Devices"
  ],
  "email": "woosh315@g.skku.edu",
  "github": "https://github.com/wooray8",
  "cv": "cv.html",
  "photo": "",
  "updates": [
    {
      "date": "Sep 2026",
      "text": "Admitted to the M.S. program in Electrical Engineering at KAIST for Spring 2027."
    },
    {
      "date": "Aug 2026",
      "text": "Built an initial personal AI agent workflow connecting Telegram, local LLMs, and Google Calendar."
    },
    {
      "date": "2026.08",
      "text": "Completed undergraduate research at ANSDL on 2D TMD device fabrication."
    },
    {
      "date": "2026.06",
      "text": "Completed an on-device AI application for laundry care symbol classification."
    },
    {
      "date": "2026-1",
      "text": "Received the Best Project Award at the EEE Graduation Project Exhibition (team award)."
    }
  ],
  "projects": [
    {
      "title": "On-Device Laundry Symbol AI",
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
          "label": "real-photo F1"
        }
      ],
      "details": [
        {
          "title": "My contribution",
          "text": "Led data collection and annotation, designed the UI/UX, and participated in model training. The team used domain-aware synthetic augmentation to address class imbalance while excluding flips that would change symbol meanings."
        },
        {
          "title": "Deployment",
          "text": "The team trained YOLOv8n on approximately 10,000 balanced images and used INT8 quantization and TFLite conversion to reduce the model from 39.1 MB to 3.2 MB."
        },
        {
          "title": "Reality check",
          "text": "A separate evaluation on 61 real photographs gave precision 0.74, recall 0.68, and F1 0.71. Lighting, folds, viewing angle, and small symbols remained key failure modes; synthetic validation performance was not treated as evidence of equivalent real-world accuracy."
        }
      ]
    },
    {
      "title": "Rocket Avionics",
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
      ]
    },
    {
      "title": "2D Semiconductor Devices",
      "category": "Research",
      "date": "2026.05 — 08",
      "description": "Undergraduate research at ANSDL on MoS₂- and WSe₂-based devices, connecting metal–semiconductor interface physics with fabrication and nanoscale characterization.",
      "tags": [
        "Photo / e-beam lithography",
        "Dry transfer",
        "OM · AFM"
      ],
      "links": [],
      "image": "",
      "visual": "chip",
      "label": "03 / DEVICE RESEARCH",
      "details": [
        {
          "title": "Interface research",
          "text": "Reviewed van der Waals contacts and the trade-off between reduced Fermi-level pinning and additional tunneling resistance across the interface gap. Investigated reported interlayer/lateral-etch approaches and metallic Mo₂C contacts through literature review."
        },
        {
          "title": "Fabrication & characterization",
          "text": "Selected flakes, participated in dry-transfer stacking and photolithography, and used AFM to inspect channel thickness, surface roughness, and interface formation."
        }
      ]
    },
    {
      "title": "16 × 16 SRAM Array",
      "category": "Hardware",
      "date": "Mar — Jun 2026",
      "description": "Designed memory circuitry from basic gates and flip-flops through a 16 × 16 SRAM array, with schematic/layout verification in Cadence Virtuoso.",
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
      "metrics": [
        {
          "value": "16 × 16",
          "label": "SRAM array"
        },
        {
          "value": "3.288 μm²",
          "label": "1-bit cell area"
        }
      ]
    },
    {
      "title": "Si RingFET & IGZO TFT",
      "category": "Research",
      "date": "Mar — Jun 2026",
      "description": "Fabricated Si RingFET and IGZO TFT devices in a cleanroom and measured transfer/output characteristics with a probe station.",
      "tags": [
        "RF sputtering",
        "Probe station",
        "Device characterization"
      ],
      "visual": "chip",
      "label": "05 / DEVICE RESEARCH",
      "links": [],
      "image": "",
      "details": [
        {
          "title": "From process to behavior",
          "text": "Worked with Pt-silicide contacts for Si RingFETs and RF-sputtered IGZO channels. Analyzed nonlinear current injection associated with Schottky barriers and channel-length-dependent on-current in IGZO TFTs."
        },
        {
          "title": "What the measurements taught me",
          "text": "Observed abnormal currents and damaged devices even under nominally identical recipes, highlighting the impact of cleaning, etching, lift-off, and process cleanliness on device reliability."
        }
      ],
      "metrics": []
    },
    {
      "title": "Personal AI Agent Workflow",
      "category": "Application",
      "date": "Started Aug 2026",
      "description": "An initial assistant workflow combining a messaging interface, local language models, and cloud tools for everyday questions and calendar tasks.",
      "tags": [
        "OpenClaw",
        "Ollama · Qwen",
        "Gemini",
        "Telegram",
        "Google Calendar"
      ],
      "visual": "ai",
      "label": "06 / INTELLIGENT APPLICATIONS",
      "links": [],
      "image": "",
      "details": [
        {
          "title": "Implemented scope",
          "text": "Connected Telegram for questions and scheduling commands, separated sensitive local memory for a locally served Qwen model, used Gemini for general responses, and verified Google Calendar lookup and event creation."
        },
        {
          "title": "Next iteration",
          "text": "Planned task-specific models and a broader study, scheduling, and research workflow. These extensions are planned work, not completed features."
        }
      ],
      "metrics": []
    }
  ],
  "resources": [
    {
      "type": "COURSE",
      "title": "Semiconductor Device Fabrication Lab",
      "description": "Mar–Jun 2026 · Synopsys Sentaurus TCAD; RingFET and IGZO processing and device fabrication.",
      "url": ""
    },
    {
      "type": "COURSE",
      "title": "Digital Integrated Circuit Design",
      "description": "Mar–Jun 2026 · Sklansky adder and 6T SRAM layout design in Cadence Virtuoso, with DRC and LVS verification.",
      "url": ""
    }
  ],
  "experience": [
    {
      "title": "ANSDL",
      "period": "2026.05 — 2026.08",
      "role": "Undergraduate Researcher",
      "details": [
        "Investigated contact physics and fabrication trade-offs in MoS₂ / WSe₂ devices.",
        "Participated in flake selection, dry transfer, lithography, and AFM characterization."
      ]
    },
    {
      "title": "Capstone Design Project",
      "period": "2026.03 — 2026.06",
      "role": "Electrical and Electronic Engineering · SKKU",
      "details": [
        "Developed an on-device AI application for laundry care symbol classification"
      ]
    },
    {
      "title": "ARES",
      "period": "Mar — Aug 2025",
      "role": "Electronics Team Lead · Educational Rocket",
      "details": [
        "Led avionics integration, sensing and deployment tests, and flight-log analysis."
      ]
    }
  ],
  "education": [
    {
      "school": "KAIST · School of Electrical Engineering",
      "period": "Spring 2027 · Admitted",
      "detail": "Admitted to the M.S. program. Admission confirmed September 17, 2026; enrollment has not yet begun."
    },
    {
      "school": "Sungkyunkwan University",
      "period": "Feb 2021 — Feb 2027 (expected)",
      "detail": "B.S. studies in Electrical and Electronic Engineering & Advanced Semiconductor Engineering (double major). Overall GPA: 4.20/4.50; primary-major GPA: 4.29/4.50 (July 2026 transcript)."
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
      "detail": "Spring 2026 · EEE Graduation Project Exhibition · Team award"
    },
    {
      "title": "Dean’s List · Three Semesters",
      "detail": "College of Information and Communication Engineering, SKKU · Year 1 / Spring, Year 2 / Fall, Year 3 / Fall"
    },
    {
      "title": "Academic Excellence Scholarship · Twice",
      "detail": "College of Information and Communication Engineering, SKKU · Year 1 / Spring, Year 3 / Fall"
    },
    {
      "title": "Study Club Excellence Award",
      "detail": "2025 · ARES Aerospace Club · Team award"
    },
    {
      "title": "Study Club Rookie Excellence Award",
      "detail": "2025 · eMerge, EEE Academic Society · Team award"
    }
  ],
  "skills": [
    {
      "name": "AI & Design",
      "items": "PyTorch · CUDA · Roboflow · Figma"
    },
    {
      "name": "Agent tools",
      "items": "OpenClaw · Ollama · Qwen · Gemini · Telegram · Google Calendar"
    },
    {
      "name": "Electronics",
      "items": "Autodesk · KiCad · Cadence Virtuoso · DRC / LVS"
    },
    {
      "name": "Devices",
      "items": "Synopsys Sentaurus TCAD · Lithography · Dry transfer · OM · AFM"
    },
    {
      "name": "Languages",
      "items": "TOEIC 770 · OPIc IH"
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
  "earlyResearch": [
    {
      "year": "2020",
      "title": "Crowd Density Through Frequency Analysis",
      "question": "How can a crowded school cafeteria be represented to support better queue spacing?",
      "method": "Built a Processing-based visualization of crowd density and represented the spatial population distribution as a waveform for FFT analysis.",
      "outcome": "Implemented a school research prototype to make crowd concentration easier to inspect.",
      "tags": [
        "Processing",
        "FFT",
        "Spatial modeling"
      ]
    },
    {
      "year": "2019",
      "title": "Outlet Geometry & Turbulence",
      "question": "How does outlet shape influence the generation of turbulent airflow?",
      "method": "Investigated outlet geometry in a three-person school research project, connecting aperiodic tiling with air-conditioner outlet design.",
      "outcome": "Explored how nonrepeating geometric patterns could inform outlet design and turbulent airflow.",
      "tags": [
        "Fluid mechanics",
        "Geometry",
        "Team research"
      ]
    },
    {
      "year": "2018",
      "title": "Predator–Prey Population Modeling",
      "question": "How can mathematical models describe changing populations in an ecosystem?",
      "method": "Studied predator–prey dynamics and the Lotka–Volterra equations, supported by literature review, seminars, and scientific communication.",
      "outcome": "Presented temperature and population relationships in an English research infographic.",
      "tags": [
        "Differential equations",
        "Lotka–Volterra",
        "Scientific communication"
      ]
    }
  ],
  "courses": [
    {
      "name": "Physical Electronics",
      "credits": 3,
      "grade": "A+",
      "term": "Fall 2024",
      "focus": "Electronic materials and device physics"
    },
    {
      "name": "Semiconductor Engineering",
      "credits": 3,
      "grade": "A+",
      "term": "Fall 2025",
      "focus": "Semiconductor fundamentals"
    },
    {
      "name": "Semiconductor Processes & Equipment",
      "credits": 3,
      "grade": "A+",
      "term": "Fall 2025",
      "focus": "Fabrication processes and equipment"
    },
    {
      "name": "Introduction to Semiconductor Products",
      "credits": 3,
      "grade": "A",
      "term": "Fall 2025",
      "focus": "Semiconductor products and memory operation"
    },
    {
      "name": "Semiconductor Device Fabrication Lab",
      "credits": 2,
      "grade": "A+",
      "term": "Spring 2026",
      "focus": "RingFET / IGZO TFT fabrication and measurement"
    },
    {
      "name": "Digital Integrated Circuit Design",
      "credits": 3,
      "grade": "A",
      "term": "Spring 2026",
      "focus": "CMOS circuits, SRAM layout, DRC / LVS"
    }
  ],
  "activities": [
    {
      "title": "CESUN Photography Club",
      "role": "Operations & Community",
      "text": "Served on the operations team, handling recruitment and promotion. Gathered member feedback and led clubroom improvements from layout planning through execution, while coordinating decisions across members."
    },
    {
      "title": "Physics Club & Science Outreach",
      "role": "Changwon Science High School · 2019–2020",
      "text": "Served as physics-club vice president and electronics-section lead. Organized online physics sessions, shared semiconductor process studies, and helped run hands-on science activities for younger students."
    },
    {
      "title": "Custom IC Layout Training",
      "role": "IDEC · KAIST",
      "text": "Completed Connectivity Driven Custom Layout training using the Cadence Virtuoso Layout Editor."
    },
    {
      "title": "Semiconductor & AI Exploration",
      "role": "SSA · August 2026",
      "text": "Attended a lecture on the relationship between agentic AI and memory demand. Applied the learning to an initial personal-agent workflow and organized technical study materials with NotebookLM."
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
  ]
};
