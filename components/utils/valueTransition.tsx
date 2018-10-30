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
      start, end, duration = 300,
      frames = 60,
    } = config;
    const step = end - start / frames;
    for (let i = 1; i <= frames; i++) {
      setTimeout(() => {
        intervalFunc(end + step * i);
      }, duration / frames * i);
    }
};
