import test from 'node:test';
import assert from 'node:assert/strict';
import {checkUrl,requestTarget} from '../scripts/check-links.mjs';

const response=(status)=>({status,url:'https://example.com/final',body:{cancel:async()=>{}}});
test('HEAD rejection falls back to GET',async()=>{
  const methods=[];
  const result=await checkUrl('https://example.com',{fetchFn:async(_,o)=>{methods.push(o.method);return response(o.method==='HEAD'?405:200);},delay:0});
  assert.equal(result.state,'ok');assert.deepEqual(methods,['HEAD','GET']);
});
test('transient failures recover without declaring a dead link',async()=>{
  let calls=0;
  const result=await checkUrl('https://example.com',{fetchFn:async()=>{if(!calls++)throw Error('timeout');return response(200);},delay:0});
  assert.equal(result.state,'ok');assert.equal(calls,2);
});
test('only repeated unavailable statuses qualify as unavailable',async()=>{
  let calls=0;
  assert.equal((await checkUrl('https://example.com',{fetchFn:async()=>{calls++;return response(404);},delay:0})).state,'unavailable');
  assert.equal(calls,3);
  assert.equal((await checkUrl('https://example.com',{fetchFn:async()=>response(403),delay:0})).state,'review');
  let n=0;
  assert.equal((await checkUrl('https://example.com',{fetchFn:async()=>response(n++===0?500:404),delay:0})).state,'review');
});
test('repository API routing excludes file URLs and lookalike hosts',()=>{
  assert.equal(requestTarget('https://github.com/owner/repo').api,true);
  assert.equal(requestTarget('https://github.com/owner/repo/blob/main/a.md').api,false);
  assert.equal(requestTarget('https://github.com.example.com/owner/repo').api,false);
});
