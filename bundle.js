(()=>{"use strict";var t={d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};function e(t,e,n,o,d=!1){this.id=Date.now().toString(),this.title=t,this.description=e,this.date=n,this.priority=o,this.complete=d}function n(t){this.id=Date.now().toString(),this.title=t,this.todos=[]}function o(){d(s),l();const t=E.find((t=>t.id===v));var e;null==v?(p.style.display="none",u.style.display="none"):(d(p),e=t,u.querySelector("input")||(m.classList.add("addTodo"),f.textContent="Clear completed",u.append(m,f)),d(p),e.todos.forEach((t=>{const e=document.importNode(c.content,!0),n=e.getElementById("complete-todo"),o=e.getElementById("todo-label");n.id=t.id,n.checked=t.complete,o.htmlFor=t.id;const d=document.createElement("span");d.id="bullet-span",d.textContent="• ",d.style.color=function(t){let e="";switch(t){case"low":e="blue";break;case"medium":e="orange";break;case"high":e="red";break;default:e=""}return e}(t.priority),o.prepend(d),o.append(t.title);const i=document.createElement("div");i.id=`todo-info-${t.id}`,function(t,e){const n=document.createElement("p");n.id="todo-para";let o="";t.description&&(o+=`Description: ${t.description}`),t.date&&(o+=`, Date: ${new Date(t.date).toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"})}`),n.textContent=o,""!==o&&e.appendChild(n)}(t,i),p.append(e,i)})))}function d(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function i(){a(),o()}function a(){localStorage.setItem(g,JSON.stringify(E)),localStorage.setItem(h,v)}function l(){E.forEach((t=>{const e=document.createElement("button");e.type="button",e.dataset.projectId=t.id,e.classList.add("list"),e.textContent=t.title,t.id===v&&e.classList.add("active-project");const n=document.createElement("button");n.classList.add("delete-project"),n.textContent="delete",n.addEventListener("click",(()=>{return e=E.indexOf(t),v=null,E.splice(e,1),void l();var e})),e.appendChild(n),s.appendChild(e)}))}t.d({},{md:()=>g,ah:()=>h,ui:()=>f,m0:()=>u,rA:()=>m,d2:()=>s,dt:()=>E,Ej:()=>v,_A:()=>p});const c=document.getElementById("todo-template"),r=document.getElementById("addProject"),s=document.getElementById("projects"),p=document.getElementById("todos"),u=document.getElementById("todo-input"),m=document.createElement("input"),f=document.createElement("button");f.setAttribute("id","clearCompleted");const g="todo.projects",h="todo.selectedProjectId",y="Default Project";let E=JSON.parse(localStorage.getItem(g))||[];if(0===E.length){const t=new n(y);E.push(t)}let v=localStorage.getItem(h);s.addEventListener("click",(t=>{"button"===t.target.tagName.toLowerCase()?(u.style.display="",v=t.target.dataset.projectId,v&&(p.style.display=""),i()):u.style.display="none"})),p.addEventListener("click",(t=>{if("input"===t.target.tagName.toLowerCase()){const e=E.find((t=>t.id===v)).todos.find((e=>e.id===t.target.id));if(!e)return;e.complete=t.target.checked,a()}})),p.addEventListener("click",(t=>{if(t.target.classList.contains("edit-todo")){const e=t.target.parentElement.querySelector("input").id;!function(t){const e=document.getElementById(`todo-info-${t.id}`);d(e);const n=document.createElement("input");n.type="text",n.placeholder="Enter new description",n.value=t.description||"",e.appendChild(n);const o=document.createElement("input");o.type="date",o.placeholder="Enter new date",o.value=t.date,e.appendChild(o);const a=document.createElement("select");a.innerHTML='\n    <option value="" selected> - </option>\n    <option value="low">Low</option>\n    <option value="medium">Medium</option>\n    <option value="high">High</option>\n  ',a.value=t.priority,e.appendChild(a);const l=document.createElement("button");l.textContent="Submit",e.appendChild(l),l.addEventListener("click",(()=>{t.description=n.value,t.date=o.value,t.priority=a.value,i()}))}(E.find((t=>t.id===v)).todos.find((t=>t.id===e)))}})),p.addEventListener("click",(t=>{t.target.classList.contains("delete-todo")&&function(t){const e=E.find((({id:t})=>t===v));e.todos=e.todos.filter((({id:e})=>e!==t)),i()}(t.target.parentElement.querySelector("input").id)})),f.addEventListener("click",(t=>{const e=E.find((t=>t.id===v));e.todos=e.todos.filter((t=>!t.complete)),i()})),r.addEventListener("change",(t=>{t.preventDefault();let e=t.target.value;if(null===e||""===e)return;const o=new n(e);E.push(o),t.target.value=null,i()})),m.addEventListener("change",(t=>{t.preventDefault();let n=t.target.value;if(null===n||""===n)return;const o=new e(n);E.find((t=>t.id===v)).todos.push(o),i(),m.value=""}));const C=E.find((t=>t.title===y));v=C.id,o()})();