export default function Ornament({ className = '' }) {
  return (
    <div className={`ornament ${className}`}>
      <div className="ornament-line" />
      <div className="ornament-diamond" />
      <div className="ornament-diamond" style={{ width: 4, height: 4 }} />
      <div className="ornament-diamond" />
      <div className="ornament-line" />
    </div>
  );
}
