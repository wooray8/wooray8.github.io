// 이 파일의 내용만 수정해도 홈페이지에 반영됩니다.
// url: ""인 링크는 화면에 표시하지 않습니다. CV는 files/cv.pdf에 넣으세요.
window.PORTFOLIO = {
  name: "YOUR NAME",
  role: "AI · Projects · Portfolio",
  headline: "AI로 아이디어를 만들고,\n배운 것을 쌓아갑니다.",
  intro: "여기에 나를 소개하는 글을 작성하세요. 관심 있는 AI 분야, 만들고 싶은 것, 지금 배우고 있는 내용을 2~3문장으로 소개하면 좋습니다.",
  interests: ["Generative AI", "AI Applications", "Learning by Building"],
  email: "", github: "", cv: "",
  photo: "", // 예: assets/profile.jpg
  updates: [
    { date: "YYYY.MM", text: "첫 번째 AI 프로젝트의 제작 과정과 결과를 정리하세요." },
    { date: "YYYY.MM", text: "새롭게 배운 내용이나 공개한 자료를 소개하세요." }
  ],
  projects: [
    { title: "첫 번째 AI 프로젝트", category: "Application", date: "YYYY", description: "무엇을 만들었는지 한 문장으로 소개하세요. 해결하려던 문제, AI를 활용한 방법, 직접 기여한 내용을 이어서 적어보세요.", tags: ["Python", "LLM", "Streamlit"], links: [{ label: "GitHub", url: "" }, { label: "Demo", url: "" }], image: "" },
    { title: "두 번째 AI 프로젝트", category: "Experiment", date: "YYYY", description: "실험한 아이디어와 확인한 결과를 적어주세요. 진행 중인 프로젝트도 과정과 배운 점을 중심으로 소개할 수 있습니다.", tags: ["PyTorch", "Experiment"], links: [{ label: "GitHub", url: "" }], image: "" },
    { title: "세 번째 AI 프로젝트", category: "Application", date: "YYYY", description: "직접 만든 도구나 자동화 작업을 소개하세요. 사용한 기술보다 어떤 일을 더 편하게 만들었는지가 드러나면 좋습니다.", tags: ["Automation", "API"], links: [{ label: "GitHub", url: "" }], image: "" }
  ],
  resources: [
    { type: "NOTES", title: "AI 공부 기록", description: "개념 정리와 직접 실험하며 배운 내용", url: "" },
    { type: "READING", title: "논문 · 아티클 읽기", description: "읽은 자료의 핵심과 나의 생각", url: "" },
    { type: "ARCHIVE", title: "발표 · 공유 자료", description: "발표 슬라이드, 튜토리얼, 참고 자료", url: "" }
  ],
  experience: [{ title: "활동 / 소속 이름", period: "YYYY.MM — YYYY.MM", role: "역할 또는 직책", details: ["어떤 활동을 했고 무엇을 담당했는지 작성하세요.", "만든 결과물과 배운 점을 구체적으로 정리하세요."] }],
  education: [{ school: "학교 또는 교육 과정 이름", period: "YYYY — YYYY", detail: "전공 / 이수 과정" }],
  skills: [{ name: "Languages", items: "사용하는 프로그래밍 언어" }, { name: "AI & Data", items: "사용하는 모델, 프레임워크, 데이터 도구" }, { name: "Tools", items: "개발 및 협업 도구" }]
};
