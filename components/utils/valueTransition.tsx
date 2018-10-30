export default (
  config: {
    start: number;
    end: number;
    duration?: number;
    frames?: number;
  },
  intervalFunc: (v: number) => void
) => {
    const {
      start, end, duration = 200,
      frames = 60,
    } = config;
    if (start === end) {
      return;
    }
    const step = (end - start) / frames;
    for (let i = 1; i <= frames; i++) {
      setTimeout(() => {
        intervalFunc(start + step * i);
      }, duration / frames * i);
    }
};
