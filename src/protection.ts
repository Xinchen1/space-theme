// 前端保护脚本 - 防止复制、保存、查看源代码

// 禁用右键菜单
document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  return false;
});

// 禁用文本选择
document.addEventListener('selectstart', (e) => {
  e.preventDefault();
  return false;
});

// 禁用拖拽
document.addEventListener('dragstart', (e) => {
  e.preventDefault();
  return false;
});

// 禁用复制
document.addEventListener('copy', (e) => {
  e.preventDefault();
  e.clipboardData?.setData('text/plain', '');
  return false;
});

// 禁用剪切
document.addEventListener('cut', (e) => {
  e.preventDefault();
  return false;
});

// 禁用粘贴
document.addEventListener('paste', (e) => {
  e.preventDefault();
  return false;
});

// 禁用键盘快捷键
document.addEventListener('keydown', (e) => {
  // 禁用 F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S, Ctrl+P
  if (
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
    (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.key === 's' || e.key === 'S' || e.key === 'p' || e.key === 'P')) ||
    (e.metaKey && (e.key === 'u' || e.key === 'U' || e.key === 's' || e.key === 'S'))
  ) {
    e.preventDefault();
    return false;
  }
});

// 禁用开发者工具检测
(function() {
  const devtools = {
    open: false,
    orientation: null
  };
  
  const threshold = 160;
  
  setInterval(() => {
    if (window.outerHeight - window.innerHeight > threshold || 
        window.outerWidth - window.innerWidth > threshold) {
      if (!devtools.open) {
        devtools.open = true;
        document.body.innerHTML = '';
        document.body.style.background = '#000';
        document.body.innerHTML = '<div style="color: #ff0000; font-size: 24px; text-align: center; margin-top: 50vh; transform: translateY(-50%);">Access Denied</div>';
      }
    } else {
      devtools.open = false;
    }
  }, 500);
  
  // 检测控制台
  let element = new Image();
  Object.defineProperty(element, 'id', {
    get: function() {
      document.body.innerHTML = '';
      document.body.style.background = '#000';
      document.body.innerHTML = '<div style="color: #ff0000; font-size: 24px; text-align: center; margin-top: 50vh; transform: translateY(-50%);">Access Denied</div>';
    }
  });
  
  console.log(element);
})();

// 禁用保存网页
window.addEventListener('beforeunload', (e) => {
  e.preventDefault();
  e.returnValue = '';
});

// 添加水印
(function addWatermark() {
  const watermark = document.createElement('div');
  watermark.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 999999;
    background-image: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 100px,
      rgba(255, 0, 0, 0.03) 100px,
      rgba(255, 0, 0, 0.03) 200px
    );
    user-select: none;
  `;
  document.body.appendChild(watermark);
})();

// 禁用打印
window.addEventListener('beforeprint', (e) => {
  e.preventDefault();
  window.close();
});

// CSS 禁用选择
const style = document.createElement('style');
style.textContent = `
  * {
    -webkit-user-select: none !important;
    -moz-user-select: none !important;
    -ms-user-select: none !important;
    user-select: none !important;
    -webkit-touch-callout: none !important;
    -webkit-tap-highlight-color: transparent !important;
  }
  
  img {
    -webkit-user-drag: none !important;
    -khtml-user-drag: none !important;
    -moz-user-drag: none !important;
    -o-user-drag: none !important;
    user-drag: none !important;
    pointer-events: none !important;
  }
`;
document.head.appendChild(style);
