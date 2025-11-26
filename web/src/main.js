
import { gradeZip } from './grader.js';

const $ = (s) => document.querySelector(s);
const fileInput = $('#file-upload');
const gradeBtn = $('#do-grade');
const status = $('#status');
const resultsTable = $('#results-table');
const resultsBody = $('#results-table tbody');

function escapeHtml(s = '') {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[c]));
}

function pushResultRow(r) {
  const tr = document.createElement('tr');
  const cls = r.pass ? 'pass' : (r.out && typeof r.out === 'string' && r.out.includes('not found') ? 'not-found' : 'fail');
  const msg = r.out || (r.diff ? r.diff : '');
  const expected = r.cmp || '';
  const actual = r.out || '';

  tr.innerHTML = `<td>${r.name}</td>
                  <td class="${cls}">${r.pass ? 'PASS' : 'FAIL'}</td>
                  <td><div class="code">${escapeHtml(expected)}</div></td>
                  <td><div class="code">${escapeHtml(actual)}</div></td>
                  <td><div class="code">${escapeHtml(msg)}</div></td>`;
  resultsBody.appendChild(tr);
}

gradeBtn.addEventListener('click', async () => {
  const f = fileInput.files && fileInput.files[0];
  if (!f) return alert('Choose a zip file first');

  status.textContent = 'Starting grader...';
  resultsBody.innerHTML = '';
  resultsTable.classList.remove('hidden');

  try {
    const data = await gradeZip(f, (msg) => status.textContent = msg);

    status.textContent = `Done.`;

    let graderJson = data.resultJson;

    // Prefer machine-readable JSON from grader when present
    if (graderJson && graderJson.resultsByFile) {
      const byFile = graderJson.resultsByFile;
      const entries = Object.entries(byFile);
      // compute summary counts
      let pass = 0, fail = 0, missing = 0;
      entries.forEach(([_, info]) => {
        if (info && info.status === 'not_found') missing++;
        else if (info && info.isPass) pass++;
        else fail++;
      });
      status.textContent = `Done. Summary: ${pass} passed, ${fail} failed, ${missing} missing.`;
      // add a summary row at top
      if (entries.length === 0) {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td colspan="5">No results in grader JSON</td>`;
        resultsBody.appendChild(tr);
      } else {
        const sumTr = document.createElement('tr');
        sumTr.innerHTML = `<td><b>Summary</b></td><td colspan="4"><b>${pass} passed</b>, <b>${fail} failed</b>, <b>${missing} missing</b></td>`;
        resultsBody.appendChild(sumTr);
        entries.forEach(([fname, info]) => {
          const tr = document.createElement('tr');
          const cls = info.isPass ? 'pass' : (info.status === 'not_found' ? 'not-found' : 'fail');
          const msg = info.message || '';
          const expected = info.expected || '';
          const actual = info.actual || '';

          tr.innerHTML = `<td>${escapeHtml(fname)}</td>
                          <td class="${cls}">${info.isPass ? 'PASS' : 'FAIL'}</td>
                          <td>${expected ? `<div class="code">${escapeHtml(expected)}</div>` : ''}</td>
                          <td>${actual ? `<div class="code">${escapeHtml(actual)}</div>` : ''}</td>
                          <td>${msg ? `<div class="code">${escapeHtml(msg)}</div>` : ''}</td>`;
          resultsBody.appendChild(tr);
        });
      }
    } else {
      const arr = data.dedupedResults || data.results || [];
      if (!arr || arr.length === 0) {
        // show stdout fallback
        const tr = document.createElement('tr');
        tr.innerHTML = `<td colspan="5"><pre class="code">${escapeHtml(data.stdout || data.stderr || JSON.stringify(data))}</pre></td>`;
        resultsBody.appendChild(tr);
      } else {
        arr.forEach((r) => pushResultRow(r));
      }
    }
  } catch (e) {
    status.textContent = 'Error: ' + (e.message || e);
    console.error(e);
  }
});
