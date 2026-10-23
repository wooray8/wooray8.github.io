const data = window.PORTFOLIO;
const el = (tag, className, text) => { const node = document.createElement(tag); if (className) node.className = className; if (text !== undefined) node.textContent = text; return node; };
const append = (id, node) => document.getElementById(id).append(node);
function link(label, url, className) {
  const a = el('a', className, label); a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer'; return a;
}
function tags(items) { const box = el('div', 'tags'); items.forEach(item => box.append(el('span', 'tag', item))); return box; }
document.title = `${data.name} — Engineering Portfolio`;
document.querySelectorAll('[data-name]').forEach(node => node.textContent = data.name);
['role','headline','intro'].forEach(key => document.getElementById(key).textContent = data[key]);
data.interests.forEach(item => append('interests', el('span','tag',item)));
if (data.cv) append('contact', link('CV ↗',data.cv));
if (data.email) append('contact',link('Email ↗',`mailto:${data.email}`));
if (data.github) append('contact',link('GitHub ↗',data.github));
if (data.photo) { const image = el('img'); image.src = data.photo; image.alt = `${data.name} portrait`; document.getElementById('portrait').replaceChildren(image); }
data.updates.forEach(item => { const row=el('div','update'); row.append(el('span','date',item.date),el('span','',item.text)); append('updates-list',row); });
function renderProjects(filter='All') {
  document.getElementById('project-list').replaceChildren();
  const selected = data.projects.filter(p => filter==='All' || p.category===filter);
  document.getElementById('empty-projects').hidden = selected.length > 0;
  selected.forEach(p => {
    const card=el('article','project');
    if(p.visual){const visual=el('div','project-visual '+p.visual);visual.setAttribute('aria-hidden','true');visual.append(el('span','visual-symbol',p.visual==='ai'?'✳':p.visual==='rocket'?'↑':'◇'),el('span','visual-caption',p.label));card.append(visual);}
    if(p.image){const img=el('img');img.src=p.image;img.alt=p.title;img.loading='lazy';card.append(img);}
    const top=el('div','project-top');top.append(el('h3','',p.title),el('span','date',p.date));
    card.append(top,el('p','',p.description));
    if(p.metrics?.length){const metrics=el('div','project-metrics');p.metrics.forEach(m=>{const item=el('div');item.append(el('strong','',m.value),el('span','',m.label));metrics.append(item);});card.append(metrics);}
    card.append(tags(p.tags));
    if(p.details?.length){const details=el('details','project-details');details.append(el('summary','','Contribution & findings'));p.details.forEach(item=>{details.append(el('h4','',item.title),el('p','',item.text));});card.append(details);}
    const links=el('div','project-links');p.links.filter(l=>l.url).forEach(l=>links.append(link(`${l.label} ↗`,l.url)));card.append(links);append('project-list',card);
  });
}
renderProjects();
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click',()=>{
  document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});renderProjects(button.dataset.filter);
}));
data.experience.forEach(x=>{const row=el('article','entry');const top=el('div','entry-top');top.append(el('h3','',x.title),el('span','date',x.period));const list=el('ul');x.details.forEach(d=>list.append(el('li','',d)));row.append(top,el('p','',x.role),list);append('experience-list',row);});
data.education.forEach(x=>{const row=el('article','entry');const top=el('div','entry-top');top.append(el('h3','',x.school),el('span','date',x.period));row.append(top,el('p','',x.detail));append('education-list',row);});
data.skills.forEach(s=>{const row=el('div','skill');row.append(el('strong','',s.name),el('span','',s.items));append('skills-list',row);});
if(data.cv){const a=document.getElementById('cv-link');a.href=data.cv;a.hidden=false;document.getElementById('cv-placeholder').hidden=true;}
document.getElementById('year').textContent=new Date().getFullYear();
const menu=document.querySelector('.menu-toggle');menu.addEventListener('click',()=>{const open=document.getElementById('navigation').classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('#navigation a').forEach(a=>a.addEventListener('click',()=>{document.getElementById('navigation').classList.remove('open');menu.setAttribute('aria-expanded','false');}));

data.awards.forEach(a=>{const row=el('article','award');row.append(el('span','award-icon','✧'),el('h3','',a.title),el('p','',a.detail));append('awards-list',row);});

data.courses.forEach(c=>{const row=el('tr');const name=el('th');name.scope='row';name.append(el('span','course-name',c.name),el('span','course-focus',c.focus));row.append(name,el('td','course-term',c.term),el('td','',String(c.credits)));const grade=el('td');grade.append(el('span','grade',c.grade));row.append(grade);append('course-list',row);});
data.earlyResearch.forEach(r=>{const card=el('article','early-card');card.append(el('span','early-year',r.year),el('h3','',r.title));[['Question',r.question],['Approach',r.method],['Outcome',r.outcome]].forEach(([label,text])=>{const p=el('p');p.append(el('strong','',label+'  '),document.createTextNode(text));card.append(p);});card.append(tags(r.tags));append('early-list',card);});
data.activities.forEach(a=>{const card=el('article','activity-card');card.append(el('span','activity-role',a.role),el('h3','',a.title),el('p','',a.text));append('activity-list',card);});
data.researchInterests.forEach(r=>{const card=el('article','interest-card');card.append(el('h3','',r.title),el('p','',r.text));append('research-interests',card);});
