const d=window.PORTFOLIO;const root=document.getElementById('cv-content');function node(tag,text){const e=document.createElement(tag);e.textContent=text;return e;}function section(title,items,render){root.append(node('h2',title));items.forEach(item=>{const a=document.createElement('article');render(a,item);root.append(a);});}
section('Education',d.education,(a,x)=>{a.append(node('h3',x.school),node('small',x.period),node('p',x.detail));});
section('Research & Project Experience',d.projects,(a,x)=>{a.append(node('h3',x.title),node('small',x.date),node('p',x.description),node('p','Tools / Equipment: '+x.tags.join(', ')));});
section('Honors & Awards',d.awards,(a,x)=>a.append(node('h3',x.title),node('p',x.detail)));
section('Selected Coursework',d.resources,(a,x)=>a.append(node('h3',x.title),node('p',x.description)));
section('Skills & Languages',d.skills,(a,x)=>a.append(node('p',x.name+': '+x.items)));
root.append(node('h2','Additional Information'),node('p','병역: 육군 병장 만기 전역 (2022.07 — 2024.01)'));
document.getElementById('print').addEventListener('click',()=>window.print());
