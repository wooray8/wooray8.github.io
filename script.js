const data = window.PORTFOLIO;
const el = (tag, className, text) => {const n=document.createElement(tag);if(className)n.className=className;if(text!==undefined)n.textContent=text;return n;};
const append=(id,node)=>document.getElementById(id).append(node);
function link(label,url,className){const a=el('a',className,label);a.href=url;a.target='_blank';a.rel='noopener noreferrer';return a;}
function tags(items){const box=el('div','tags');items.forEach(t=>box.append(el('span','tag',t)));return box;}
function detailBlocks(parent,items){items.forEach(x=>parent.append(el('h4','',x.title),el('p','',x.text)));}
document.title=`${data.name} — Engineering Portfolio`;
document.querySelectorAll('[data-name]').forEach(n=>n.textContent=data.name);
['role','headline','intro'].forEach(k=>document.getElementById(k).textContent=data[k]);
data.interests.forEach(t=>append('interests',el('span','tag',t)));
const projectShortcut=el('a','project-shortcut','View projects ↓');projectShortcut.href='#projects';append('contact',projectShortcut);
if(data.cv)append('contact',link('CV ↗',data.cv));
if(data.email)append('contact',link('Email ↗',`mailto:${data.email}`));
if(data.github)append('contact',link('GitHub ↗',data.github));
if(data.photo){const img=el('img');img.src=data.photo;img.alt=`${data.name} portrait`;document.getElementById('portrait').replaceChildren(img);}
data.education.forEach(x=>{const row=el('article','entry');const top=el('div','entry-top');top.append(el('h3','',x.school),el('span','date',x.period));row.append(top);if(x.department)row.append(el('p','education-department',x.department));row.append(el('p','',x.detail));if(x.gpa)row.append(el('p','education-gpa',x.gpa));append('education-list',row);});
data.projects.forEach((p,index)=>{
 const card=el('article','project');card.append(el('span','project-number',`0${index+1} / PROJECT`));
 const top=el('div','project-top');top.append(el('h3','',p.title),el('span','date',p.date));
 card.append(top,el('p','project-subtitle',p.subtitle),el('p','',p.description));
 if(p.metrics?.length){const metrics=el('div','project-metrics');p.metrics.forEach(m=>{const item=el('div');item.append(el('strong','',m.value),el('span','',m.label));metrics.append(item);});card.append(metrics);}
 card.append(tags(p.tags));
 if(p.details?.length){const details=el('details','project-details');details.append(el('summary','','Contribution & findings'));detailBlocks(details,p.details);card.append(details);}
 if(p.cad||p.documents){const group=el('div','cad-reports');group.append(el('h4','',p.cad?'CAD design reports':'Project documents'));(p.cad||p.documents).forEach(c=>{const row=link(' ',c.url,'cad-report');row.replaceChildren();const text=el('div');text.append(el('span','cad-number',c.number),el('strong','',c.title),el('span','cad-description',c.text));row.append(text,el('span','cad-file','PDF ↗'));group.append(row);});card.append(group);}
 const links=el('div','project-links');p.links.filter(l=>l.url).forEach(l=>links.append(link(`${l.label} ↗`,l.url)));card.append(links);append('project-list',card);
});
const research=data.undergraduateResearch;const rbox=el('article','research-panel');rbox.append(el('span','activity-role',`Undergraduate Researcher · ${research.period}`),el('h3','',research.lab),el('p','research-supervisor',`${research.institution} · ${research.supervisor}`),el('p','',research.description));detailBlocks(rbox,research.details);rbox.append(tags(research.tags),link('Visit Prof. Jin-Hong Park’s Lab ↗',research.url,'lab-link'));append('undergraduate-research-content',rbox);
data.courses.forEach(c=>{const row=el('tr');const name=el('th');name.scope='row';const heading=el('span','course-name',c.name+' ');const kr=el('span','course-korean',`(${c.korean})`);kr.lang='ko';heading.append(kr);name.append(heading,el('span','course-instructor',c.instructor),el('span','course-focus',c.focus));row.append(name,el('td','course-term',c.term));const grade=el('td');grade.append(el('span','grade',c.grade));row.append(grade);append('course-list',row);});
data.researchInterests.forEach(r=>{const card=el('article','interest-card');card.append(el('h3','',r.title),el('p','',r.text));append('research-interests',card);});
data.awards.forEach(a=>{const card=el('article','award');const kr=el('p','award-korean',a.korean);kr.lang='ko';const detail=el('p','award-korean-detail',a.koreanDetail);detail.lang='ko';card.append(el('span','award-icon','✧'),el('h3','',a.title),el('p','',a.detail),kr,detail);append('awards-list',card);});
if(data.cv){const a=document.getElementById('cv-link');a.href=data.cv;a.hidden=false;document.getElementById('cv-placeholder').hidden=true;}
document.getElementById('year').textContent=new Date().getFullYear();
const menu=document.querySelector('.menu-toggle');menu.addEventListener('click',()=>{const open=document.getElementById('navigation').classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('#navigation a').forEach(a=>a.addEventListener('click',()=>{document.getElementById('navigation').classList.remove('open');menu.setAttribute('aria-expanded','false');}));
const certificateDialog=document.getElementById('certificate-dialog');const certificateOpen=document.getElementById('certificate-open');const certificateClose=document.getElementById('certificate-close');
certificateOpen.addEventListener('click',()=>{certificateDialog.showModal();document.body.classList.add('modal-open');});
certificateClose.addEventListener('click',()=>certificateDialog.close());
certificateDialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');certificateOpen.focus();});
certificateDialog.addEventListener('click',event=>{if(event.target===certificateDialog){const r=certificateDialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)certificateDialog.close();}});
