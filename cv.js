const d=window.PORTFOLIO;const root=document.getElementById('cv-content');function node(tag,text){const e=document.createElement(tag);e.textContent=text;return e;}function section(title,items,render){root.append(node('h2',title));items.forEach(item=>{const a=document.createElement('article');render(a,item);root.append(a);});}
section('Education',d.education,(a,x)=>{a.append(node('h3',x.school),node('small',x.period),node('p',x.detail));});
section('Research & Project Experience',d.projects,(a,x)=>{a.append(node('h3',x.title),node('small',x.date),node('p',x.description),node('p','Tools / Equipment: '+x.tags.join(', ')));if(x.details){x.details.forEach(i=>a.append(node('p',i.title+': '+i.text)));}});
section('Honors & Awards',d.awards,(a,x)=>a.append(node('h3',x.title),node('p',x.detail)));
section('Selected Coursework',d.courses,(a,x)=>a.append(node('h3',x.name),node('p',x.term+' · '+x.credits+' credits · Grade '+x.grade),node('p',x.focus)));
section('Early Research · Changwon Science High School',d.earlyResearch,(a,x)=>a.append(node('h3',x.title+' ('+x.year+')'),node('p',x.method),node('p',x.outcome)));
section('Leadership & Training',d.activities,(a,x)=>a.append(node('h3',x.title),node('small',x.role),node('p',x.text)));
section('Skills & Languages',d.skills,(a,x)=>a.append(node('p',x.name+': '+x.items)));
root.append(node('h2','Additional Information'),node('p','Military service: Republic of Korea Army; completed service as a Sergeant (Jul 2022 — Jan 2024).'));
document.getElementById('print').addEventListener('click',()=>window.print());
