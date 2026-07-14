"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DataPacket {
    id: string;
    type: 'send' | 'receive';
    data: string;
    timestamp: number;
}

export default function SignalWindow() {
    const [packets, setPackets] = useState<DataPacket[]>([]);
    const [isSending, setIsSending] = useState(false);
    const [isReceiving, setIsReceiving] = useState(false);
    const [signalStrength, setSignalStrength] = useState(75);

    useEffect(() => {
        // Simulate periodic data transmission
        const interval = setInterval(() => {
            const shouldSend = Math.random() > 0.5;
            
            if (shouldSend) {
                setIsSending(true);
                setTimeout(() => {
                    const newPacket: DataPacket = {
                        id: Date.now().toString(),
                        type: 'send',
                        data: `TX:${Math.random().toString(36).substring(7).toUpperCase()}`,
                        timestamp: Date.now()
                    };
                    setPackets(prev => [newPacket, ...prev.slice(0, 7)]);
                    setIsSending(false);
                }, 800);
            } else {
                setIsReceiving(true);
                setTimeout(() => {
                    const newPacket: DataPacket = {
                        id: Date.now().toString(),
                        type: 'receive',
                        data: `RX:${Math.random().toString(36).substring(7).toUpperCase()}`,
                        timestamp: Date.now()
                    };
                    setPackets(prev => [newPacket, ...prev.slice(0, 7)]);
                    setIsReceiving(false);
                }, 600);
            }

            // Vary signal strength
            setSignalStrength(Math.max(40, Math.min(95, signalStrength + (Math.random() - 0.5) * 10)));
        }, 2000);

        return () => clearInterval(interval);
    }, [signalStrength]);

    return (
        <div className="fixed top-20 right-8 z-50 w-80">
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="backdrop-blur-xl bg-black/70 border border-emerald-500/20 rounded-lg p-4 shadow-2xl shadow-emerald-500/10"
            >
                {/* Header */}
                <div className="flex justify-between items-center mb-4 border-b border-emerald-500/20 pb-3">
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                            MARS SIGNAL
                        </span>
                    </div>
                    <div className="flex items-center space-x-2">
                        {isSending && (
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                className="w-2 h-2 rounded-full bg-blue-500"
                            />
                        )}
                        {isReceiving && (
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ repeat: Infinity, duration: 0.6 }}
                                className="w-2 h-2 rounded-full bg-emerald-500"
                            />
                        )}
                        <span className="text-xs font-mono text-emerald-400">
                            {isSending ? 'TX' : isReceiving ? 'RX' : 'IDLE'}
                        </span>
                    </div>
                </div>

                {/* Signal Strength Indicator */}
                <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-mono text-emerald-400/70">Signal</span>
                        <span className="text-xs font-mono text-emerald-400">{signalStrength}%</span>
                    </div>
                    <div className="w-full h-2 bg-emerald-900/30 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-emerald-500 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${signalStrength}%` }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                </div>

                {/* Data Packets Log */}
                <div className="space-y-1 max-h-48 overflow-y-auto">
                    <div className="text-xs font-mono text-emerald-400/50 mb-2 uppercase tracking-wider">
                        Data Stream
                    </div>
                    <AnimatePresence>
                        {packets.map((packet) => (
                            <motion.div
                                key={packet.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className={`
                                    text-xs font-mono p-2 rounded border
                                    ${packet.type === 'send' 
                                        ? 'border-blue-500/30 bg-blue-500/10 text-blue-300' 
                                        : 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300'}
                                `}
                            >
                                <div className="flex justify-between items-center">
                                    <span>{packet.data}</span>
                                    <span className="text-emerald-400/50 text-[10px]">
                                        {new Date(packet.timestamp).toLocaleTimeString('en-US', { 
                                            hour12: false, 
                                            hour: '2-digit', 
                                            minute: '2-digit',
                                            second: '2-digit'
                                        })}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                    {packets.length === 0 && (
                        <div className="text-xs font-mono text-emerald-400/30 text-center py-4">
                            Awaiting signal...
                        </div>
                    )}
                </div>

                {/* Footer Status */}
                <div className="mt-4 pt-3 border-t border-emerald-500/20 flex justify-between items-center">
                    <span className="text-[10px] font-mono text-emerald-400/50">
                        Source: MARS-ROVER-7
                    </span>
                    <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
