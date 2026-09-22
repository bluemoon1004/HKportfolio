const page=document.body.dataset.page;
const nav=[['introduce','PROM RECORD'],['article','기사'],['image','이미지'],['video','영상'],['final','파이널 프로젝트']];
const titles={introduce:['PROM','RECORD','안녕하세요. Blue Moon입니다.','저를 소개하고, 배움과 작업의 방향을 기록하는 공간입니다.'],article:['Local','Journal','익숙한 길에서, 새로운 이야기를 발견합니다.','골목의 작은 장면을 관찰하고 글로 옮기는 기록.'],image:['Visual','Letters','말로 다 담지 못한 분위기를, 한 장에.','파란색과 빛, 사물의 질감을 탐구하는 이미지 작업.'],video:['Moving','Stories','한 장면의 발견이, 하나의 이야기가 되도록.','우리 동네를 담을 짧은 영상의 구성과 장면을 설계합니다.'],final:['Final','Project','동네의 작은 이야기, 세 가지 표현으로.','기사·이미지·영상을 연결하는 로컬 콘텐츠 프로젝트.']};
const articles=[
['빠르게 지나친 골목을, 천천히 읽는 법','동네를 소개하는 글의 출발점은 거창한 명소보다 시선이 머무는 작은 장면에 있습니다.','동네를 소개하려고 하면 가장 먼저 유명한 장소를 떠올리기 쉽다. 하지만 그곳의 분위기를 설명하는 단서는 다른 곳에 있을 수 있다. 문 앞에 놓인 의자, 오래 사용한 간판, 오후가 되면 길게 드리우는 그림자처럼 작은 요소에 시선을 두어 본다.\n\n관찰한 사실과 그 장면에서 떠오른 해석은 구분해서 적는다. 오래되어 보이는 가게라고 해서 운영 기간을 단정할 수는 없다. 확인이 필요한 내용은 질문으로 남기고, 글에는 직접 확인한 범위만 담는 편이 좋다.\n\nAI에는 관찰 메모를 정리하거나 독자가 궁금해할 질문을 제안해 달라고 요청할 수 있다. 장소의 역사나 인터뷰 답변을 대신 만들어 달라고 하기보다는, 아직 취재하지 못한 부분을 찾는 보조 도구로 활용한다.\n\n짧은 동네 기록의 목표는 모든 정보를 한 번에 전달하는 데 있지 않다. 독자가 평소의 길을 한 번 더 살펴보고 싶어지도록, 하나의 구체적인 장면을 선명하게 남기는 것이다.'],
['가게 소개를 넘어, 사람의 이야기를 묻기','정보를 나열하는 글에서 한 걸음 더 나아가기 위한 인터뷰 질문 노트.','영업시간과 위치는 방문을 돕지만, 가게가 지닌 고유한 이야기를 모두 설명하지는 못한다. 왜 이 동네를 선택했는지, 가장 오래 유지한 습관은 무엇인지처럼 선택의 이유를 묻는 질문을 준비한다.\n\n답을 미리 정해 놓은 질문보다 구체적인 경험을 묻는 질문이 도움이 된다. 실제 인터뷰를 진행할 때에는 인용과 사진 사용 범위를 확인하고, 말한 의도가 편집 과정에서 달라지지 않도록 점검한다. 이 글은 실제 인터뷰가 아닌 취재 준비를 위한 예시 원고다.'],
['한 장의 사진에 장소의 온도를 담다','무엇을 담을지, 무엇을 덜어낼지. 이미지와 글의 역할을 나눠 봅니다.','한 화면에 많은 것을 넣으면 장소의 특징이 오히려 흐려질 수 있다. 빛이 닿는 탁자나 반복되는 창문의 형태처럼 중심이 되는 요소를 하나 고르고, 주변의 여백을 살핀다.\n\n사진이 보여주는 모습을 글에서 반복하기보다, 이미지 바깥의 맥락을 짧게 덧붙인다. AI로 만든 이미지는 실제 장소의 기록 사진과 구분해 표시한다. 분위기를 탐구하는 이미지와 사실을 전달하는 사진은 서로 다른 역할을 맡는다.'],
['좋은 로컬 콘텐츠를 위한 세 가지 점검','장소·사람·맥락을 놓치지 않기 위한 편집 기준.','첫째, 장소에 관한 사실을 확인한다. 방문에 필요한 정보는 게시하기 직전에 다시 점검하고 확인 날짜를 남긴다.\n\n둘째, 사람의 이야기를 존중한다. 발언의 맥락을 살리고 촬영 및 공개에 대한 의사를 확인한다.\n\n셋째, 과장된 표현을 덜어낸다. 최고의 장소라는 평가보다 독자가 판단할 수 있는 구체적인 특징을 적는다. 글과 이미지, 영상에 같은 기준을 적용하면 하나의 일관된 콘텐츠가 된다.']];
const cover=()=>`<div class="cover with-image"><img src="assets/neighborhood-still-life.jpg" alt="펼친 남색 노트와 은색 카메라, 유리병의 파란 꽃을 담은 AI 생성 정물 이미지"><span class="cover-meta">BLUE MOON / VISUAL STUDY</span></div>`;
const journal=`<div class="section-label"><b>01 / FEATURED STORY</b><span>작은 발견을 글로 남기는 일</span></div><section class="feature">${cover()}<div class="feature-copy"><span class="tag">로컬 스토리 · 예시 원고</span><h2>${articles[0][0]}</h2><p>${articles[0][1]}</p><p class="meta">EDITORIAL NOTE 01 · 관찰과 기록</p><button class="pill" data-article="0">기사 읽기 <span>↗</span></button></div></section><div class="section-label"><b>MORE STORIES</b><span>03 NOTES</span></div><section class="articles">${articles.slice(1).map((a,i)=>`<article class="story-card"><span class="number">0${i+2}</span><p class="meta">LOCAL JOURNAL · 예시 원고</p><h3>${a[0]}</h3><p>${a[1]}</p><button class="text-link" data-article="${i+1}">기사 읽기 ↗</button></article>`).join('')}</section>`;
const gallery=`<div class="section-label"><b>02 / SELECTED VISUALS</b><span>하나의 정물, 세 가지 색감</span></div><section class="gallery">${[['Blue afternoon','AI 생성 원본',''],['Quiet objects','흑백 색감 연구','mono'],['A warmer memory','따뜻한 색감 연구','warm']].map(([title,sub,cls],i)=>`<figure><button class="image-frame" data-image="${i}" aria-label="${title} 이미지 확대"><img class="${cls}" src="assets/neighborhood-still-life.jpg" alt="${title} — 노트, 카메라, 꽃의 정물 ${sub}"></button><figcaption><span>${title}</span><small>0${i+1} / ${sub}</small></figcaption></figure>`).join('')}</section><section class="band"><div><span class="eyebrow">PROMPT & DIRECTION</span><h3>이야기를 모으는 책상</h3><p>동네를 기록하는 노트와 카메라를 모티브로 만든 이미지입니다.</p></div><button class="pill" id="prompt">제작 의도 보기 ↗</button></section>`;
const videoNames=['우리 동네, 30초의 발견','가게 문이 열리기 전','골목의 색을 모으다'];
const videos=`<div class="section-label"><b>03 / MOTION NOTEBOOK</b><span>기획 · 스토리보드</span></div><section class="cinema"><div class="screen"><small>LOCAL STORIES / FILM CONCEPT</small><h2>A little closer.<br>A new story.</h2><small>00:00 — 00:30 / 16:9</small><div class="timeline"><span></span><span></span><span></span></div></div><div class="cinema-copy"><span class="tag">영상 기획안</span><h2>우리 동네,<br>30초의 발견</h2><p>익숙한 골목에서 시작해 작은 가게의 디테일로 다가가는 짧은 영상. 넓은 풍경과 가까운 장면의 리듬을 설계했습니다.</p><button class="pill" data-video="0">스토리보드 보기 ↗</button></div></section>${videoNames.slice(1).map((t,i)=>`<article class="video-row"><span class="number">0${i+2}</span><div><h3>${t}</h3><p>${i?'색채 에세이 · 20초 구성안':'관찰 다큐멘터리 · 30초 구성안'}</p></div><button class="text-link" data-video="${i+1}">기획 보기 ↗</button></article>`).join('')}<p class="notice">영상 파일은 아직 등록되지 않았습니다. 현재는 장면 구성과 제작 방향을 볼 수 있습니다.</p>`;
const final=`<div class="section-label"><b>04 / CAPSTONE PROJECT</b><span>LOCAL STORIES, NEW PERSPECTIVES</span></div><section class="project"><div class="project-copy"><span class="tag">파이널 프로젝트 · 기획안</span><h2>우리 동네의<br>다음 페이지</h2><p>스쳐 지나가던 공간을 다시 발견하는 로컬 콘텐츠 아카이브. 하나의 장소가 가진 이야기를 글로 읽고, 이미지로 느끼고, 영상으로 따라갑니다.</p><div class="project-stats"><div><strong>01</strong>기획 기사 목표</div><div><strong>03</strong>키 비주얼 목표</div><div><strong>30s</strong>소개 영상 목표</div></div><a class="pill" href="#process">프로젝트 과정 보기 ↓</a></div>${cover()}</section><div class="section-label" id="process"><b>THE PROCESS</b><span>발견 → 표현 → 연결</span></div><section class="process"><article><span class="number">01.</span><h3>장소와 질문 정하기</h3><p>소개하고 싶은 공간을 선정하고 관찰 메모, 취재 질문, 독자에게 전할 핵심 메시지를 정리합니다.</p></article><article><span class="number">02.</span><h3>세 가지 언어로 만들기</h3><p>기사의 중심 장면을 이미지의 구도와 색감, 영상의 스토리보드로 확장합니다. 실제 기록과 AI 창작물을 구분합니다.</p></article><article><span class="number">03.</span><h3>확인하고 연결하기</h3><p>사실과 공개 범위를 확인하고, 매체마다 다른 장점을 살려 하나의 이야기로 엮습니다.</p></article></section><section class="band"><div><span class="eyebrow">PROJECT ARCHIVE</span><h3>하나의 주제, 이어지는 작업들.</h3><p>예시 원고와 이미지 실험, 영상 기획을 살펴보세요.</p></div><div class="outputs"><a class="pill" href="article.html">기사 ↗</a><a class="pill" href="image.html">이미지 ↗</a><a class="pill" href="video.html">영상 ↗</a></div></section>`;
const introduce=`<div class="section-label"><b>ABOUT ME</b><span>나를 소개합니다</span></div><section class="about-profile"><div class="about-name"><span class="eyebrow">PERSONAL RECORD</span><div class="about-monogram" aria-hidden="true">BM</div><h2>Blue Moon</h2><p>한국경제 AI 교육<br>개인 학습 포트폴리오</p></div><div class="about-copy"><span class="tag">INTRODUCTION</span><h2>나의 이야기를<br>차근차근 담아갑니다.</h2><p>기사, 이미지, 영상, 파이널 프로젝트를 통해 배움과 작업을 기록합니다. 이 페이지에는 저의 배경과 관심사, 앞으로의 목표를 소개할 예정입니다.</p><div class="about-draft"><span class="eyebrow">자기소개 · 작성 예정</span><p>이름 또는 활동명, 지금 하는 일, 이 포트폴리오를 시작한 이유를 소개해 주세요.</p></div><a class="pill" href="article.html">작업 기록 둘러보기 ↗</a></div></section><div class="section-label"><b>MY STORY</b><span>관심사와 경험, 앞으로의 방향</span></div><section class="process"><article><span class="number">01.</span><h3>관심 있는 분야</h3><p>탐구하고 싶은 주제와 좋아하는 작업을 소개할 공간입니다.</p><span class="meta">작성 예정</span></article><article><span class="number">02.</span><h3>지금까지의 경험</h3><p>이전 활동, 배운 점, 기억에 남는 경험을 정리할 공간입니다.</p><span class="meta">작성 예정</span></article><article><span class="number">03.</span><h3>앞으로의 목표</h3><p>배우고 싶은 것과 앞으로 만들어 보고 싶은 작업을 적을 공간입니다.</p><span class="meta">작성 예정</span></article></section><section class="about-creations" aria-labelledby="creations-title"><h2 id="creations-title">제가 만드는 것들</h2><p>기사, 이미지, 영상, 파이널 프로젝트에 배움과 아이디어를 담습니다.</p><a class="youtube-button" href="https://www.youtube.com/results?search_query=%ED%95%98%EC%99%80%EC%9D%B4%EB%8C%80%EC%A0%80%ED%83%9D">내가 제일 좋아하는 유튜브 채널</a></section>`;
const t=titles[page]||titles.article;
document.querySelector('#app').innerHTML=`<a class="skip" href="#main">본문으로 이동</a><div class="shell"><header><a class="brand" href="index.html">Blue Moon<small>AI LEARNING ARCHIVE</small></a><nav aria-label="주 메뉴">${nav.map(([id,label])=>`<a href="${id}.html" ${id===page?'aria-current="page"':''}>${label}</a>`).join('')}</nav><span class="edition">PORTFOLIO / 2026</span></header><main id="main"><section class="intro"><span class="eyebrow">한국경제 AI 교육 · PERSONAL PORTFOLIO</span><div class="title-row"><h1>${t[0]} <em>${t[1]}</em></h1><div class="seal">Little things,<br>new stories.<small>BLUE MOON</small></div></div><div class="intro-bottom"><p><strong>${t[2]}</strong><br>${t[3]}</p><small>COLLECTION / ${page==='introduce'?'ABOUT ME':'0'+nav.findIndex(n=>n[0]===page)}</small></div></section>${({introduce,article:journal,image:gallery,video:videos,final})[page]||journal}${page==='introduce'?'':`<p class="notice">학습 포트폴리오 시안 · 글은 예시 원고, 이미지는 AI 생성 및 색감 변형, 영상과 파이널 프로젝트는 기획안입니다.</p>`}</main><footer class="footer"><div class="footer-top"><div class="footer-title">Look closer.<br>Make something.</div><div><p>작은 발견에서 시작하는 나만의 기록.<br>한국경제 AI 교육 · 개인 학습 포트폴리오</p><a href="#main">맨 위로 ↑</a></div></div><div class="footer-bottom"><span>© 2026 Blue Moon. Learning in progress.</span><span>PROM RECORD · 기사 · 이미지 · 영상 · 파이널 프로젝트</span></div></footer></div><dialog id="detail" aria-labelledby="detail-title"><button class="close" aria-label="닫기">×</button><div id="detail-content"></div></dialog>`;
const dialog=document.querySelector('#detail'),content=document.querySelector('#detail-content');
function show(title,html){content.innerHTML=`<h2 id="detail-title">${title}</h2>${html}`;dialog.showModal()}
document.querySelector('.close').onclick=()=>dialog.close();
document.querySelectorAll('[data-article]').forEach(b=>b.onclick=()=>{const a=articles[Number(b.dataset.article)];show(a[0],'<span class="tag">예시 원고 · LOCAL JOURNAL</span>'+a[2].split('\n\n').map(p=>`<p>${p}</p>`).join(''))});
document.querySelectorAll('[data-image]').forEach(b=>b.onclick=()=>{show(b.closest('figure').querySelector('figcaption span').textContent,'');const img=b.querySelector('img').cloneNode();content.append(img);const p=document.createElement('p');p.textContent='AI 생성 정물 이미지입니다. 흑백과 따뜻한 톤은 같은 원본에 색감을 변형한 작업입니다.';content.append(p)});
document.querySelector('#prompt')?.addEventListener('click',()=>show('이야기를 모으는 책상','<span class="tag">AI IMAGE · 제작 의도</span><p>펼쳐진 남색 노트, 은색 카메라, 유리병에 꽂힌 파란 꽃. 크림색 책상 위로 늦은 오후의 빛이 스며드는 정물 사진. 코발트 블루와 옅은 노랑, 종이의 질감, 잡지 화보 같은 구도. 글자 없이.</p><p>동네를 산책하며 이야기를 수집하는 도구를 모았습니다. 원본의 파란색, 흑백의 명암, 따뜻한 색감이 주는 분위기를 비교합니다.</p>'));
const scenes=[[['00–08초 · 발견','골목의 넓은 풍경을 고정된 화면으로 담고 주변 소리로 시작합니다.'],['08–22초 · 가까이','창문, 손잡이, 가게 앞 사물처럼 장소의 특징을 보여주는 세부 장면을 연결합니다.'],['22–30초 · 여운','다시 골목의 전경으로 돌아오며 “익숙한 길에도, 새로운 이야기는 있다”라는 문장으로 끝냅니다.']],[['00–10초 · 준비','닫힌 문과 정돈된 가게 앞을 담습니다.'],['10–22초 · 움직임','촬영 동의를 받은 뒤 문을 열고 물건을 정리하는 손의 움직임을 관찰합니다.'],['22–30초 · 시작','불이 켜진 공간과 열린 문으로 하루의 시작을 표현합니다.']],[['00–06초 · 파랑','골목에서 찾은 파란 사물을 중심으로 장면을 시작합니다.'],['06–14초 · 색의 연결','서로 다른 장소의 비슷한 색을 이어 붙여 시각적 리듬을 만듭니다.'],['14–20초 · 전체 풍경','가까운 색에서 넓은 거리로 시선을 돌려 장소의 맥락을 보여줍니다.']]];
document.querySelectorAll('[data-video]').forEach(b=>b.onclick=()=>{const i=Number(b.dataset.video);show(videoNames[i],'<span class="tag">스토리보드 · 기획 단계</span>'+scenes[i].map(([title,p])=>`<section class="storyboard"><b>${title}</b><p>${p}</p></section>`).join('')+'<p class="meta">촬영·편집 전의 기획안으로, 재생 가능한 영상은 아직 없습니다.</p>')});



// Original, quiet ambient accompaniment shared by all portfolio pages.
(() => {
  const AudioEngine = window.AudioContext || window.webkitAudioContext;
  if (!AudioEngine) return;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'music-toggle';
  button.setAttribute('aria-pressed', 'false');
  button.textContent = '♪ 음악 켜기';
  button.title = '잔잔한 배경음악 켜기·끄기';
  document.querySelector('header').append(button);
  let context, master, timer, nextTime = 0, bar = 0, busy = false;
  let enabled = true;
  try { enabled = localStorage.getItem('blue-moon-music') !== 'off'; } catch {}
  const chords = [[48,55,60,64],[45,52,57,60],[41,48,53,57],[43,50,55,59]];
  function render() {
    const playing = context?.state === 'running' && enabled;
    button.textContent = playing ? '♪ 음악 끄기' : '♪ 음악 켜기';
    button.setAttribute('aria-pressed', String(playing));
  }
  function tone(midi, at, length, level) {
    const oscillator = context.createOscillator();
    const envelope = context.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.value = 440 * 2 ** ((midi - 69) / 12);
    envelope.gain.setValueAtTime(0, at);
    envelope.gain.linearRampToValueAtTime(level, at + 0.6);
    envelope.gain.exponentialRampToValueAtTime(0.0001, at + length);
    oscillator.connect(envelope).connect(master);
    oscillator.start(at);
    oscillator.stop(at + length + 0.1);
    oscillator.onended = () => { oscillator.disconnect(); envelope.disconnect(); };
  }
  function schedule() {
    if (context.state !== 'running' || !enabled) return;
    while (nextTime < context.currentTime + 0.4) {
      const chord = chords[bar % chords.length];
      chord.forEach((note, i) => tone(note, nextTime + i * 0.12, 7, 0.12));
      [0,2,1,3].forEach((index, i) => tone(chord[index] + 12, nextTime + i * 1.5, 3.6, 0.065));
      nextTime += 6;
      bar++;
    }
  }
  async function start() {
    if (!enabled || busy) return;
    busy = true;
    try {
      if (!context) {
        context = new AudioEngine();
        master = context.createGain();
        master.gain.value = 0.14;
        master.connect(context.destination);
        context.onstatechange = render;
      }
      await context.resume();
      if (context.state === 'running') {
        if (!timer) {
          nextTime = context.currentTime + 0.1;
          schedule();
          timer = setInterval(schedule, 200);
        }
      }
    } catch { /* The visible control remains available if autoplay is blocked. */ }
    finally { busy = false; render(); }
  }
  button.addEventListener('click', async () => {
    if (enabled && context?.state === 'running') {
      enabled = false;
      try { localStorage.setItem('blue-moon-music', 'off'); } catch {}
      await context.suspend();
      render();
    } else {
      enabled = true;
      try { localStorage.setItem('blue-moon-music', 'on'); } catch {}
      await start();
    }
  });
  const unlock = event => {
    if (event.target.closest?.('.music-toggle')) return;
    if (enabled) start();
  };
  document.addEventListener('click', unlock);
  document.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') unlock(event);
  });
  window.addEventListener('pagehide', () => {
    if (timer) clearInterval(timer);
    timer = null;
    context?.suspend().catch(() => {});
  });
  window.addEventListener('pageshow', () => { if (enabled && context?.state === 'running') start(); });
  render();
  // Do not wait on a blocked autoplay promise: the first user gesture unlocks audio.
  if (enabled) {
    context = new AudioEngine();
    master = context.createGain();
    master.gain.value = 0.14;
    master.connect(context.destination);
    context.onstatechange = render;
    if (context.state === 'running') start();
  }
})();
