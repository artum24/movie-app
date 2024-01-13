import { useMemo } from "react";

type ProgressBarProps = {
  value: number;
};
export const ProgressBar = ({ value }: ProgressBarProps) => {
  const detectColor = useMemo(() => {
    if (value < 3.3) {
      return "text-red-600";
    } else if (value > 3.3 && value < 6.6) {
      return "text-yellow-400";
    }
    return "text-emerald-500";
  }, [value]);
  const square = 135.6;
  const calculateCircleValue = useMemo(
    () => square - (square * value) / 10,
    [square, value],
  );
  return (
    <svg className="w-12 h-12 absolute top-2.5 right-2.5 text-center">
      <circle
        cx="50%"
        cy="50%"
        r="45%"
        fill="none"
        className="stroke-current stroke-[4px] text-gray-300"
      />

      <circle
        cx="50%"
        cy="50%"
        r="45%"
        fill="none"
        className={`stroke-current ${detectColor} stroke-[4px]`}
        strokeDasharray={square}
        strokeDashoffset={calculateCircleValue}
      />
      <circle cx="50%" cy="50%" r="41%" fill="#fff" className="text-gray-300" />
      <text
        x="30%"
        y="60%"
        className="text-center text-gray-600 text-sm font-bold"
      >
        {value.toFixed(1)}
      </text>
    </svg>
  );
};
