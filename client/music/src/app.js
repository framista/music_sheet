let pdfDoc = null,
  pageNum = 1,
  pageRendering = false,
  pageNumPending = null,
  scale = 0.9,
  canvas = document.querySelector('#cnv'),
  ctx = canvas.getContext('2d');

function renderPage(num) {
  pageRendering = true;
  pdfDoc.getPage(num).then(function (page) {
    let viewport = page.getViewport({ scale: scale });
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderContext = {
      canvasContext: ctx,
      viewport: viewport,
    };
    const renderTask = page.render(renderContext);

    renderTask.promise.then(function () {
      pageRendering = false;
      if (pageNumPending !== null) {
        renderPage(pageNumPending);
        pageNumPending = null;
      }
    });
  });

  document.getElementById(
    'pagesInfo'
  ).innerHTML = `Strona <strong>${num}</strong> z <strong>${pdfDoc.numPages}</strong>`;
}

function queueRenderPage(num) {
  if (pageRendering) {
    pageNumPending = num;
  } else {
    renderPage(num);
  }
}

function onPrevPage() {
  if (pageNum <= 1) {
    return;
  }
  pageNum--;
  queueRenderPage(pageNum);
}

function onNextPage() {
  if (pageNum >= pdfDoc.numPages) {
    return;
  }
  pageNum++;
  queueRenderPage(pageNum);
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const file = urlParams.get('file');

// .getDocument(`http://localhost:5000/musicsheet?file=${file}`)
pdfjsLib
  .getDocument(
    `https://framista-musicsheet.herokuapp.com/musicsheet?file=${file}`
  )
  .promise.then(function (pdfDoc_) {
    pdfDoc = pdfDoc_;
    renderPage(pageNum);
  })
  .catch(() => {
    const notFoundComponent = document.querySelector('.notFound');
    notFoundComponent.classList.add('visible');
  });

window.saveDataAcrossSessions = true;

const LEFT_CUTOFF = window.innerWidth / 5;
const RIGHT_CUTOFF = window.innerWidth - window.innerWidth / 5;
const LOOK_DELAY = 700;

let lookDirection = null;
let startLookTime = Number.POSITIVE_INFINITY;

webgazer
  .setGazeListener((data, timestamp) => {
    if (data == null || lookDirection === 'STOP') return;
    if (
      data.x < LEFT_CUTOFF &&
      lookDirection !== 'LEFT' &&
      lookDirection !== 'RESET'
    ) {
      startLookTime = timestamp;
      lookDirection = 'LEFT';
    } else if (
      data.x > RIGHT_CUTOFF &&
      lookDirection !== 'RIGHT' &&
      lookDirection !== 'RESET'
    ) {
      startLookTime = timestamp;
      lookDirection = 'RIGHT';
    } else if (data.x >= LEFT_CUTOFF && data.x <= RIGHT_CUTOFF) {
      startLookTime = Number.POSITIVE_INFINITY;
      lookDirection = null;
    }
    if (startLookTime + LOOK_DELAY < timestamp) {
      if (lookDirection === 'LEFT') {
        onPrevPage();
      } else {
        onNextPage();
      }
      startLookTime = Number.POSITIVE_INFINITY;
      lookDirection = 'STOP';
      lookDirection = 'RESET';
    }
  })
  .begin();

webgazer.showVideoPreview(false);
// .showPredictionPoints(false);
