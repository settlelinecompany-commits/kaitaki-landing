// @ts-nocheck
let ctx: CanvasRenderingContext2D | null;
let f;
let e = 0;
let pos = { x: 0, y: 0 };
let lines: Line[] = [];

const E = {
  debug: true,
  friction: 0.5,
  trails: 80,
  size: 50,
  dampening: 0.025,
  tension: 0.99,
};

function Oscillator(options: any = {}) {
  this.phase = options.phase || 0;
  this.offset = options.offset || 0;
  this.frequency = options.frequency || 0.001;
  this.amplitude = options.amplitude || 1;
}

Oscillator.prototype = {
  init: function (options: any) {
    this.phase = options.phase || 0;
    this.offset = options.offset || 0;
    this.frequency = options.frequency || 0.001;
    this.amplitude = options.amplitude || 1;
  },
  update: function () {
    this.phase += this.frequency;
    e = this.offset + Math.sin(this.phase) * this.amplitude;
    return e;
  },
  value: function () {
    return e;
  },
};

function Node() {
  this.x = 0;
  this.y = 0;
  this.vy = 0;
  this.vx = 0;
}

function Line(options: any = {}) {
  this.init(options);
}

Line.prototype = {
  init: function (options: any) {
    this.spring = options.spring + 0.1 * Math.random() - 0.05;
    this.friction = E.friction + 0.01 * Math.random() - 0.005;
    this.nodes = [];
    for (let i = 0; i < E.size; i++) {
      const node = new Node();
      node.x = pos.x;
      node.y = pos.y;
      this.nodes.push(node);
    }
  },
  update: function () {
    let spring = this.spring;
    let node = this.nodes[0];
    node.vx += (pos.x - node.x) * spring;
    node.vy += (pos.y - node.y) * spring;
    for (let i = 0; i < this.nodes.length; i++) {
      node = this.nodes[i];
      if (i > 0) {
        const prev = this.nodes[i - 1];
        node.vx += (prev.x - node.x) * spring;
        node.vy += (prev.y - node.y) * spring;
        node.vx += prev.vx * E.dampening;
        node.vy += prev.vy * E.dampening;
      }
      node.vx *= this.friction;
      node.vy *= this.friction;
      node.x += node.vx;
      node.y += node.vy;
      spring *= E.tension;
    }
  },
  draw: function () {
    let x = this.nodes[0].x;
    let y = this.nodes[0].y;
    ctx?.beginPath();
    ctx?.moveTo(x, y);
    for (let i = 1; i < this.nodes.length - 2; i++) {
      const curr = this.nodes[i];
      const next = this.nodes[i + 1];
      x = 0.5 * (curr.x + next.x);
      y = 0.5 * (curr.y + next.y);
      ctx?.quadraticCurveTo(curr.x, curr.y, x, y);
    }
    const i = this.nodes.length - 2;
    const curr = this.nodes[i];
    const next = this.nodes[i + 1];
    ctx?.quadraticCurveTo(curr.x, curr.y, next.x, next.y);
    ctx?.stroke();
    ctx?.closePath();
  },
};

function initLines() {
  lines = [];
  for (let i = 0; i < E.trails; i++) {
    lines.push(new Line({ spring: 0.45 + (i / E.trails) * 0.025 }));
  }
}

function handleMove(event: MouseEvent | TouchEvent) {
  if ('touches' in event) {
    pos.x = event.touches[0].pageX;
    pos.y = event.touches[0].pageY;
  } else {
    pos.x = event.clientX;
    pos.y = event.clientY;
  }
}

function handleTouchStart(event: TouchEvent) {
  if (event.touches.length === 1) {
    pos.x = event.touches[0].pageX;
    pos.y = event.touches[0].pageY;
  }
}

function onMousemove(event: MouseEvent | TouchEvent) {
  document.removeEventListener('mousemove', onMousemove as any);
  document.removeEventListener('touchstart', onMousemove as any);
  document.addEventListener('mousemove', handleMove);
  document.addEventListener('touchmove', handleMove);
  document.addEventListener('touchstart', handleTouchStart);
  handleMove(event);
  initLines();
  render();
}

function render() {
  if (!ctx || !ctx.running) return;
  
  ctx.globalCompositeOperation = 'source-over';
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.globalCompositeOperation = 'lighter';
  ctx.strokeStyle = `hsla(${Math.round(f.update())}, 90%, 50%, 0.025)`;
  ctx.lineWidth = 10;
  
  for (let i = 0; i < E.trails; i++) {
    const line = lines[i];
    line.update();
    line.draw();
  }
  
  ctx.frame++;
  window.requestAnimationFrame(render);
}

function resizeCanvas() {
  if (!ctx) return;
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

export const renderCanvas = function () {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  if (!canvas) return;
  
  ctx = canvas.getContext('2d');
  if (!ctx) return;
  
  (ctx as any).running = true;
  (ctx as any).frame = 1;
  
  f = new Oscillator({
    phase: Math.random() * 2 * Math.PI,
    amplitude: 85,
    frequency: 0.0015,
    offset: 220, // Blue-ish hue to match Kaitaki branding
  });
  
  document.addEventListener('mousemove', onMousemove as any);
  document.addEventListener('touchstart', onMousemove as any);
  document.body.addEventListener('orientationchange', resizeCanvas);
  window.addEventListener('resize', resizeCanvas);
  
  window.addEventListener('focus', () => {
    if (ctx && !(ctx as any).running) {
      (ctx as any).running = true;
      render();
    }
  });
  
  window.addEventListener('blur', () => {
    if (ctx) {
      (ctx as any).running = false;
    }
  });
  
  resizeCanvas();
};

export const stopCanvas = function () {
  if (ctx) {
    (ctx as any).running = false;
  }
};

