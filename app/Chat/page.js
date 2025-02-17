"use client"

import React from 'react'
import Chat from '@/components/Chat'
import AudioRecorder from '@/app/AIBackground/components/AudioRecorder';
import ScreenShare from '@/app/AIBackground/components/ScreenShare';
import LiveVideo from '@/app/AIBackground/components/LiveVideo';
import ChatComponent from '@/app/AIBackground/components/ChatComponent'; // Keep this if you are still using it

export default function Page() {
    return (
        <div>
            <div className='pt-16'>
                <Chat />
            </div>
        </div>
    )
}
