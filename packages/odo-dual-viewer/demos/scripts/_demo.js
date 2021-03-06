const OdoDualViewer = window.OdoDualViewer;

const dualViewer = new OdoDualViewer(document.getElementById('regular'));

const vertical = new OdoDualViewer(document.getElementById('vert'), {
  isVertical: true,
});

const vid = new OdoDualViewer(document.getElementById('dual-viewer-videos'), {
  animationDuration: 400,
  zones: [0.3, 0.4, 0.6, 0.7],
});

vid.on(OdoDualViewer.EventType.CAME_TO_REST, (event) => {
  switch (event.position) {
    case OdoDualViewer.Position.START:
      console.log('Handle came to rest at the start');
      break;
    case OdoDualViewer.Position.END:
      console.log('Handle came to rest at the end');
      break;
    case OdoDualViewer.Position.CENTER:
      console.log('Handle came to rest in the center');
      break;
    // no default
  }
});

const noZones = new OdoDualViewer(document.getElementById('no-zones'), {
  hasZones: false,
  startPosition: 0.1,
});

document.getElementById('animate-to').addEventListener('click', () => {
  const value = parseInt(document.getElementById('animate-to-value').value, 10);
  dualViewer.animateTo(value / 100);
});

// Picturefill will update sources and image sizes. To my knowledge, picturefill
// does not emit an event when the source changes.
setTimeout(() => {
  dualViewer.reset();
  vertical.reset();
  vid.reset();
  noZones.reset();
}, 1000);
