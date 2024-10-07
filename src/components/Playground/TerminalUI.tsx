import { useState } from 'react';
import Cli from '../CLI/CLI';
import { useTimer } from '@/shared/hooks/useTimer';
import { formatTime } from '@/shared/utils/commonUtils';
import { Dice1, Dice3, Dice5 } from 'lucide-react';

export function TerminalUI() {
  const [commandsLeft, setCommandsLeft] = useState<number>(1000);
  const decreaseCommandsLeft = () => {
    setCommandsLeft((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="w-full lg:w-1/2 flex flex-col">
      <div className="bg-gray-900 rounded-lg">
        <div className="bg-gray-900 px-4 py-4 flex items-center rounded-lg">
          <div className="flex space-x-2">
            <Dice5 className="w-4 h-4 bg-red-500" />
            <Dice1 className="w-4 h-4 bg-yellow-500" />
            <Dice3 className="w-4 h-4 bg-green-500" />
          </div>
        </div>
        <div className="h-64 md:h-96 bg-gray-100 rounded-lg overflow-hidden shadow-md">
          <Cli decreaseCommandsLeft={decreaseCommandsLeft} />
        </div>
      </div>
      <TerminalCounter commandsLeft={commandsLeft} />
    </div>
  );
}

function TerminalCounter({ commandsLeft }: { commandsLeft: number }) {
  const { timeLeft } = useTimer(15 * 60);

  return (
    <div className="flex flex-row justify-between text-gray-900 mt-4">
      <div className="flex justify-between border border-gray-400 text-sm bg-transparent p-3 rounded-lg">
        <span>Cleanup in : {formatTime(timeLeft)} mins</span>
      </div>
      <div className="flex justify-between border border-gray-400 text-sm bg-transparent p-3 rounded-lg">
        <span>Command left: {commandsLeft}</span>
      </div>
    </div>
  );
}
