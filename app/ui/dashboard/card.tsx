'use client'

import { lusitana } from '@/app/ui/fonts';
import { updateTimer } from '@/app/lib/actions';
import { useState, useEffect } from 'react';

export function Card({
    id,
    title,
    value,
  }: {
    id :string,
    title: string;
    value: number;
  }) {
    const [time, setTime] = useState<number | null>(value);
    const [isTimerActive, setIsTimerActive] = useState(false);


    const formatDuration = (seconds : number) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
    
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    
        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
      };

        const startTimer = () => {
        setIsTimerActive(true);
      };

      const stopTimer = () => {
        setIsTimerActive(false);
        console.log(id)
        updateTimer(id, time)
      };

      useEffect(() => {
        let interval: NodeJS.Timeout;
    
        if (isTimerActive) {
          interval = setInterval(() => {
            setTime((prevTimer) => (prevTimer !== null ? prevTimer + 1 : null));
          }, 1000); // Mettre à jour toutes les secondes
        } else {
          clearInterval(interval);
        }
    
        return () => clearInterval(interval); // Nettoyer l'intervalle lors du démontage du composant
    
      }, [isTimerActive]);

      return (
        <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
          <div className="flex p-4">
            <h3 className="ml-2 text-sm font-medium">{title}</h3>
            {isTimerActive ? (
              <button className="ml-2" onClick={stopTimer}>
                Pause Timer
              </button>
            ) : (
              <button className="ml-2" onClick={startTimer}>
                Start Timer
              </button>
            )}
          </div>
          <p
            className={`${lusitana.className}
              truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
          >
            {time ? formatDuration(time) : time}
          </p>
        </div>
      );
  }