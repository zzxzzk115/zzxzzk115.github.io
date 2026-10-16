import {readFileSync} from 'node:fs';
const lock=JSON.parse(readFileSync(new URL('../template.lock.json',import.meta.url),'utf8'));
if(lock.schemaVersion!==1||!/^[-\w.]+\/[-\w.]+$/.test(lock.repository)||!/^([a-f0-9]{40})$/.test(lock.revision))throw new Error('Invalid template lock');
console.log(`repository=${lock.repository}\nrevision=${lock.revision}`);
